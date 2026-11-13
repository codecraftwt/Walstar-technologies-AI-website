import { NextResponse } from 'next/server';
import { getStrapiBaseUrl } from '@/lib/strapi';

interface ConsultationRequestBody {
  email?: unknown;
  name?: unknown;
  company?: unknown;
  message?: unknown;
  phone?: unknown;
  projectBudget?: unknown;
  serviceInterest?: unknown;
  source?: unknown;
}

function optionalString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ConsultationRequestBody;
  try {
    body = (await request.json()) as ConsultationRequestBody;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
  }

  const email = typeof body.email === 'string' ? body.email.trim() : '';
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 }
    );
  }

  const payload = {
    data: {
      email,
      name: optionalString(body.name),
      company: optionalString(body.company),
      message: optionalString(body.message),
      phone: optionalString(body.phone),
      projectBudget: optionalString(body.projectBudget),
      serviceInterest: optionalString(body.serviceInterest),
      source: optionalString(body.source) || 'footer-consultation',
    },
  };

  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    if (process.env.STRAPI_API_TOKEN) {
      headers.Authorization = `Bearer ${process.env.STRAPI_API_TOKEN}`;
    }

    const res = await fetch(`${getStrapiBaseUrl()}/api/consultation-leads`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(4000),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      return NextResponse.json(
        { error: text || 'Strapi rejected consultation request.' },
        { status: res.status }
      );
    }

    const result = await res.json();
    return NextResponse.json({ ok: true, data: result.data }, { status: 201 });
  } catch {
    return NextResponse.json(
      {
        error:
          'Unable to reach Strapi CMS right now. Start PostgreSQL and Strapi backend first.',
      },
      { status: 503 }
    );
  }
}
