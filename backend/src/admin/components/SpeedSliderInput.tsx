import * as React from 'react';
import { Box, Field, Flex, Typography } from '@strapi/design-system';
import { styled } from 'styled-components';

interface SpeedSliderAttribute {
  min?: number;
  max?: number;
  default?: number;
  options?: {
    min?: number | string;
    max?: number | string;
  };
}

export interface SpeedSliderInputProps {
  name?: string;
  value?: number | string | null;
  onChange?: (name: string, value: number) => void;
  label?: React.ReactNode;
  labelAction?: React.ReactNode;
  hint?: React.ReactNode;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  attribute?: SpeedSliderAttribute;
}

const SliderRow = styled(Flex)`
  width: 100%;
  background: ${({ theme }) => theme.colors.neutral100};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 12px 14px;
`;

const RangeInput = styled.input<{ $percent: number }>`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 999px;
  outline: none;
  cursor: pointer;
  background: ${({ theme, $percent }) =>
    `linear-gradient(to right, ${theme.colors.primary600} 0%, ${theme.colors.primary600} ${$percent}%, ${theme.colors.neutral300} ${$percent}%, ${theme.colors.neutral300} 100%)`};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary600};
    border: 2px solid ${({ theme }) => theme.colors.neutral0};
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
    transition: transform 0.15s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary600};
    border: 2px solid ${({ theme }) => theme.colors.neutral0};
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

const ValueBadge = styled(Box)`
  min-width: 78px;
  text-align: center;
  padding: 4px 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary100};
  border: 1px solid ${({ theme }) => theme.colors.primary200};
`;

const NumberBox = styled.input`
  width: 68px;
  height: 32px;
  padding: 0 8px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.neutral0};
  color: ${({ theme }) => theme.colors.neutral800};
  font-size: 13px;
  text-align: center;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary600};
    outline-offset: 1px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const DEFAULT_MIN = 4;
const DEFAULT_MAX = 120;
const DEFAULT_VALUE = 24;

function parseBound(raw: unknown, fallback: number): number {
  const num = Number(raw);
  return Number.isFinite(num) ? Math.round(num) : fallback;
}

function getSpeedTierLabel(seconds: number): string {
  if (seconds <= 12) return 'Fast';
  if (seconds <= 35) return 'Smooth';
  return 'Slow';
}

const SpeedSliderInput = React.forwardRef<HTMLInputElement, SpeedSliderInputProps>(
  (
    {
      name,
      value,
      onChange,
      label,
      labelAction,
      hint,
      error,
      required,
      disabled,
      attribute,
    },
    ref
  ) => {
    const min = parseBound(attribute?.options?.min ?? attribute?.min, DEFAULT_MIN);
    const max = Math.max(
      min + 1,
      parseBound(attribute?.options?.max ?? attribute?.max, DEFAULT_MAX)
    );
    const fallback = Math.min(
      max,
      Math.max(min, parseBound(attribute?.default, DEFAULT_VALUE))
    );

    const parsedValue = Number(value);
    const currentValue =
      value !== null && value !== undefined && value !== '' && Number.isFinite(parsedValue)
        ? Math.min(max, Math.max(min, Math.round(parsedValue)))
        : fallback;

    const percent = Math.round(((currentValue - min) / (max - min)) * 100);

    const updateValue = (nextRaw: number) => {
      if (!Number.isFinite(nextRaw) || !onChange || !name) return;
      const clamped = Math.min(max, Math.max(min, Math.round(nextRaw)));
      onChange(name, clamped);
    };

    return (
      <Field.Root
        name={name}
        required={required}
        error={error}
        hint={hint}
        width="100%"
      >
        <Flex direction="column" alignItems="stretch" gap={2} width="100%">
          <Flex justifyContent="space-between" alignItems="center" width="100%">
            <Field.Label action={labelAction}>
              {label || 'Animation Duration (Seconds)'}
            </Field.Label>
            <ValueBadge>
              <Typography variant="pi" fontWeight="bold" textColor="primary600">
                {currentValue}s · {getSpeedTierLabel(currentValue)}
              </Typography>
            </ValueBadge>
          </Flex>

          <SliderRow alignItems="center" gap={3}>
            <RangeInput
              ref={ref}
              type="range"
              aria-label={typeof label === 'string' ? label : 'Animation speed slider'}
              min={min}
              max={max}
              step={1}
              value={currentValue}
              disabled={disabled}
              $percent={percent}
              onChange={(event) => updateValue(Number(event.target.value))}
            />
            <NumberBox
              type="number"
              aria-label="Duration in seconds"
              min={min}
              max={max}
              step={1}
              value={currentValue}
              disabled={disabled}
              onChange={(event) => updateValue(Number(event.target.value))}
            />
          </SliderRow>

          <Flex justifyContent="space-between" alignItems="center" width="100%">
            <Typography variant="pi" textColor="neutral600">
              {min}s (Fastest)
            </Typography>
            <Typography variant="pi" textColor="neutral600">
              Lower = faster scroll
            </Typography>
            <Typography variant="pi" textColor="neutral600">
              {max}s (Slowest)
            </Typography>
          </Flex>

          <Field.Hint />
          <Field.Error />
        </Flex>
      </Field.Root>
    );
  }
);

SpeedSliderInput.displayName = 'SpeedSliderInput';

export default SpeedSliderInput;
