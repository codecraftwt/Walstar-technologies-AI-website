'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { ContactSelect } from '@/components/ContactSelect';
import { WalstarButton } from '@/components/WalstarButton';

interface ConsultationFormProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  variant?: 'footer' | 'card' | 'contact';
  source?: string;
  anchorId?: string;
  budgetOptions?: string[];
  serviceOptions?: string[];
}

const INTEREST_STORAGE_KEY = 'walstar-contact-interests';
const INTEREST_EVENT = 'walstar-contact-interests';

function readStoredInterests(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.sessionStorage.getItem(INTEREST_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === 'string')
      : [];
  } catch {
    return [];
  }
}

export function ConsultationForm({
  title,
  subtitle,
  buttonLabel,
  variant = 'footer',
  source = 'footer-consultation',
  anchorId = 'footer-consultation',
  budgetOptions = [],
  serviceOptions = [],
}: ConsultationFormProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (variant !== 'contact') return;

    const syncFromStorage = () => {
      const interests = readStoredInterests();
      if (interests.length > 0) {
        setService((current) => current || interests[0]);
      }
    };

    syncFromStorage();
    window.addEventListener(INTEREST_EVENT, syncFromStorage);
    return () => window.removeEventListener(INTEREST_EVENT, syncFromStorage);
  }, [variant]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setStatus('error');
      setFeedback('Please enter your email address.');
      return;
    }

    if (variant === 'contact') {
      if (!budget.trim()) {
        setStatus('error');
        setFeedback('Please select a project budget.');
        return;
      }
      if (!service.trim()) {
        setStatus('error');
        setFeedback('Please select a service.');
        return;
      }
    }

    setStatus('submitting');
    setFeedback('');

    const interests = readStoredInterests();
    const selectedService = service.trim() || interests[0] || undefined;
    const detailParts = [
      message.trim() || undefined,
      interests.length > 0 ? `Interests: ${interests.join(', ')}` : undefined,
    ].filter(Boolean);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: trimmedEmail,
          name:
            variant === 'card' || variant === 'contact'
              ? name.trim() || undefined
              : undefined,
          company:
            variant === 'card' || variant === 'contact'
              ? company.trim() || undefined
              : undefined,
          phone: variant === 'contact' ? phone.trim() || undefined : undefined,
          projectBudget:
            variant === 'contact' ? budget.trim() || undefined : undefined,
          serviceInterest:
            variant === 'contact' ? selectedService : undefined,
          message:
            variant === 'card' || variant === 'contact'
              ? detailParts.join('\n\n') || undefined
              : undefined,
          source,
        }),
      });

      const body = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok) {
        setStatus('error');
        setFeedback(body?.error || 'Could not submit request. Please try again.');
        return;
      }

      setStatus('success');
      setFeedback('Thanks! Your consultation request has been saved.');
      setName('');
      setCompany('');
      setEmail('');
      setPhone('');
      setBudget('');
      setService('');
      setMessage('');
      try {
        window.sessionStorage.removeItem(INTEREST_STORAGE_KEY);
      } catch {
        // Ignore storage failures
      }
    } catch {
      setStatus('error');
      setFeedback('Network error submitting request. Please try again.');
    }
  }

  if (variant === 'contact') {
    return (
      <div id={anchorId} className="contact-card-form contact-card-form--figma">
        <h3>{title}</h3>
        <p className="contact-card-sub">{subtitle}</p>
        <form onSubmit={handleSubmit} className="contact-form-grid contact-form-grid--figma">
          <div className="contact-form-row">
            <label className="contact-field contact-field--pill">
              <span className="sr-only">Full Name</span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="FULL NAME *"
                aria-label="Full Name"
                required
              />
            </label>
            <label className="contact-field contact-field--pill">
              <span className="sr-only">Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="EMAIL *"
                aria-label="Email"
                required
              />
            </label>
          </div>
          <div className="contact-form-row">
            <label className="contact-field contact-field--pill">
              <span className="sr-only">Company</span>
              <input
                type="text"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                placeholder="COMPANY *"
                aria-label="Company"
                required
              />
            </label>
            <label className="contact-field contact-field--pill">
              <span className="sr-only">Phone</span>
              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="PHONE *"
                aria-label="Phone"
                required
              />
            </label>
          </div>
          <ContactSelect
            label="Project Budget*"
            value={budget}
            options={budgetOptions}
            placeholder="Select Your Range"
            required
            onChange={setBudget}
          />
          <ContactSelect
            label="Select service*"
            value={service}
            options={serviceOptions}
            placeholder="Select a service"
            required
            onChange={setService}
          />
          <label className="contact-field contact-field--area">
            <span>Project details*</span>
            <textarea
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="How Can We Help To Move Forward ?"
              required
            />
          </label>
          <div className="contact-form-actions">
            <WalstarButton
              type="submit"
              variant="blue"
              className="contact-submit-btn"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : buttonLabel}
            </WalstarButton>
          </div>
        </form>
        {feedback ? (
          <p
            aria-live="polite"
            className={`mt-3 text-xs font-medium ${
              status === 'success' ? 'text-emerald-700' : 'text-amber-700'
            }`}
          >
            {feedback}
          </p>
        ) : null}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div id={anchorId} className="contact-card-form">
        <h3>{title}</h3>
        <p className="contact-card-sub">{subtitle}</p>
        <form onSubmit={handleSubmit} className="contact-form-grid">
          <div className="contact-form-row">
            <label>
              <span>Your Name</span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Jane Doe"
              />
            </label>
            <label>
              <span>Company</span>
              <input
                type="text"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                placeholder="Acme Corp"
              />
            </label>
          </div>
          <label>
            <span>Work Email *</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
              required
            />
          </label>
          <label>
            <span>Project Details</span>
            <textarea
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Tell us about your AI workflow, product scope, or timeline..."
            />
          </label>
          <div className="contact-form-actions">
            <WalstarButton
              type="submit"
              variant="orange"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : buttonLabel}
            </WalstarButton>
          </div>
        </form>
        {feedback ? (
          <p
            aria-live="polite"
            className={`mt-3 text-xs font-medium ${
              status === 'success' ? 'text-emerald-700' : 'text-amber-700'
            }`}
          >
            {feedback}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div id={anchorId}>
      <form className="fnews" onSubmit={handleSubmit}>
        <div className="fnews-label">
          {title}
          <small>{subtitle}</small>
        </div>
        <div className="nf">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            aria-label="Email address"
            required
          />
          <WalstarButton
            type="submit"
            variant="orange"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : buttonLabel}
          </WalstarButton>
        </div>
      </form>
      {feedback ? (
        <p
          aria-live="polite"
          className={`mt-2 text-right text-[11px] ${
            status === 'success' ? 'text-emerald-300' : 'text-amber-300'
          }`}
        >
          {feedback}
        </p>
      ) : null}
    </div>
  );
}
