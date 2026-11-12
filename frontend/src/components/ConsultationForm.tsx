'use client';

import { useState, type FormEvent } from 'react';
import { WalstarButton } from '@/components/WalstarButton';

interface ConsultationFormProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  variant?: 'footer' | 'card';
  source?: string;
  anchorId?: string;
}

export function ConsultationForm({
  title,
  subtitle,
  buttonLabel,
  variant = 'footer',
  source = 'footer-consultation',
  anchorId = 'footer-consultation',
}: ConsultationFormProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setStatus('error');
      setFeedback('Please enter your email address.');
      return;
    }

    setStatus('submitting');
    setFeedback('');

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: trimmedEmail,
          name: variant === 'card' ? name.trim() || undefined : undefined,
          company: variant === 'card' ? company.trim() || undefined : undefined,
          message: variant === 'card' ? message.trim() || undefined : undefined,
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
      setMessage('');
    } catch {
      setStatus('error');
      setFeedback('Network error submitting request. Please try again.');
    }
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
