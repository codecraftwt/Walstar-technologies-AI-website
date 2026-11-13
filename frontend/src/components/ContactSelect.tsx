'use client';

import { useEffect, useId, useRef, useState } from 'react';

interface ContactSelectProps {
  label: string;
  value: string;
  options: string[];
  placeholder: string;
  required?: boolean;
  onChange: (value: string) => void;
}

export function ContactSelect({
  label,
  value,
  options,
  placeholder,
  required = false,
  onChange,
}: ContactSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const labelId = useId();

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div
      className={open ? 'contact-select is-open' : 'contact-select'}
      ref={rootRef}
    >
      <span className="contact-select-label" id={labelId}>
        {label}
      </span>
      <button
        type="button"
        className="contact-select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={labelId}
        onClick={() => setOpen((current) => !current)}
      >
        <span className={value ? 'contact-select-value' : 'contact-select-placeholder'}>
          {value || placeholder}
        </span>
        <svg
          className="contact-select-chevron"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 6.2 8 10l4-3.8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open ? (
        <ul
          id={listId}
          className="contact-select-menu"
          role="listbox"
          aria-labelledby={labelId}
        >
          {options.map((option) => {
            const selected = option === value;
            return (
              <li key={option} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={
                    selected
                      ? 'contact-select-option is-selected'
                      : 'contact-select-option'
                  }
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}

      {required ? (
        <input
          className="contact-select-native"
          tabIndex={-1}
          value={value}
          required
          onChange={() => undefined}
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
}
