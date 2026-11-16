'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import type { GlobalOfficesSection } from '@/types/strapi';
import { renderMultilineText } from '@/components/SectionPrimitives';
import { WalstarButton } from '@/components/WalstarButton';
import { getStrapiMediaUrl } from '@/lib/strapi';

// Calibrated Robinson projection onto the 1024x465 realistic world map
export function projectToRealisticMap(lat: number, lng: number): { x: number; y: number; leftPct: number; topPct: number } {
  // Piecewise calibrated mapping for the 1024x465 authentic map
  let x = 512;
  if (lng <= -96.8) {
    x = 178.8 + ((lng - (-96.8)) / (-180 - (-96.8))) * (40 - 178.8);
  } else if (lng <= -0.1) {
    x = 472.0 + ((lng - (-0.1)) / (-96.8 - (-0.1))) * (178.8 - 472.0);
  } else if (lng <= 74.2) {
    x = 472.0 + ((lng - (-0.1)) / (74.2 - (-0.1))) * (608.2 - 472.0);
  } else {
    x = 608.2 + ((lng - 74.2) / (153.1 - 74.2)) * (760.0 - 608.2);
  }

  // Latitude mapping
  let y = 265;
  if (lat >= 51.0) {
    y = 175.0 - ((lat - 51.0) / (85.0 - 51.0)) * 110;
  } else if (lat >= 32.8) {
    y = 225.6 - ((lat - 32.8) / (51.0 - 32.8)) * (225.6 - 175.0);
  } else if (lat >= 16.7) {
    y = 261.4 - ((lat - 16.7) / (32.8 - 16.7)) * (261.4 - 225.6);
  } else {
    y = 261.4 + ((16.7 - lat) / (16.7 - (-27.5))) * (377.5 - 261.4);
  }

  // Clamp within canvas bounds
  const clampedX = Math.max(30, Math.min(994, x));
  const clampedY = Math.max(30, Math.min(440, y));

  return {
    x: clampedX,
    y: clampedY,
    leftPct: (clampedX / 1024) * 100,
    topPct: (clampedY / 465) * 100,
  };
}

export type CountryCode =
  | 'us'
  | 'in'
  | 'au'
  | 'uk'
  | 'ae'
  | 'sg'
  | 'ca'
  | 'de'
  | 'fr'
  | 'nl'
  | 'ch'
  | 'ie'
  | 'jp'
  | 'sa'
  | 'qa'
  | 'my'
  | 'nz'
  | 'br'
  | 'za'
  | 'global';

export interface OfficeGeoConfig {
  lat: number;
  lng: number;
  countryCode: CountryCode;
  countryName: string;
  themeColor: string;
  dotX: number;
  dotY: number;
  cardX: number;
  cardY: number;
  pointerType: 'turn-right' | 'straight-up' | 'turn-left';
}

// Exact coordinate calibration matching the design mock
export const REALISTIC_LOCATIONS: Record<string, OfficeGeoConfig> = {
  dallas: {
    lat: 33.1972,
    lng: -96.6398,
    countryCode: 'us',
    countryName: 'USA',
    themeColor: '#d6003b',
    dotX: 178.8,
    dotY: 225.6,
    cardX: 186,
    cardY: 18,
    pointerType: 'turn-right',
  },
  mckinney: {
    lat: 33.1972,
    lng: -96.6398,
    countryCode: 'us',
    countryName: 'USA',
    themeColor: '#d6003b',
    dotX: 178.8,
    dotY: 225.6,
    cardX: 186,
    cardY: 18,
    pointerType: 'turn-right',
  },
  dover: {
    lat: 43.1979,
    lng: -70.8738,
    countryCode: 'us',
    countryName: 'USA',
    themeColor: '#d6003b',
    dotX: 178.8,
    dotY: 225.6,
    cardX: 186,
    cardY: 18,
    pointerType: 'turn-right',
  },
  nh: {
    lat: 43.1979,
    lng: -70.8738,
    countryCode: 'us',
    countryName: 'USA',
    themeColor: '#d6003b',
    dotX: 178.8,
    dotY: 225.6,
    cardX: 186,
    cardY: 18,
    pointerType: 'turn-right',
  },
  'new hampshire': {
    lat: 43.1979,
    lng: -70.8738,
    countryCode: 'us',
    countryName: 'USA',
    themeColor: '#d6003b',
    dotX: 178.8,
    dotY: 225.6,
    cardX: 186,
    cardY: 18,
    pointerType: 'turn-right',
  },
  usa: {
    lat: 33.1972,
    lng: -96.6398,
    countryCode: 'us',
    countryName: 'USA',
    themeColor: '#d6003b',
    dotX: 178.8,
    dotY: 225.6,
    cardX: 186,
    cardY: 18,
    pointerType: 'turn-right',
  },
  'united states': {
    lat: 33.1972,
    lng: -96.6398,
    countryCode: 'us',
    countryName: 'USA',
    themeColor: '#d6003b',
    dotX: 178.8,
    dotY: 225.6,
    cardX: 186,
    cardY: 18,
    pointerType: 'turn-right',
  },
  texas: {
    lat: 31.9686,
    lng: -99.9018,
    countryCode: 'us',
    countryName: 'USA',
    themeColor: '#d6003b',
    dotX: 178.8,
    dotY: 225.6,
    cardX: 186,
    cardY: 18,
    pointerType: 'turn-right',
  },
  'new york': {
    lat: 40.7128,
    lng: -74.0060,
    countryCode: 'us',
    countryName: 'USA',
    themeColor: '#d6003b',
    dotX: 242.0,
    dotY: 202.0,
    cardX: 250,
    cardY: 130,
    pointerType: 'turn-right',
  },
  'san francisco': {
    lat: 37.7749,
    lng: -122.4194,
    countryCode: 'us',
    countryName: 'USA',
    themeColor: '#d6003b',
    dotX: 130.0,
    dotY: 212.0,
    cardX: 50,
    cardY: 140,
    pointerType: 'turn-left',
  },
  kolhapur: {
    lat: 16.7050,
    lng: 74.2433,
    countryCode: 'in',
    countryName: 'India',
    themeColor: '#f0a020',
    dotX: 605.0,
    dotY: 265.8,
    cardX: 490,
    cardY: 38,
    pointerType: 'straight-up',
  },
  pune: {
    lat: 18.5204,
    lng: 73.8567,
    countryCode: 'in',
    countryName: 'India',
    themeColor: '#f0a020',
    dotX: 605.0,
    dotY: 265.8,
    cardX: 490,
    cardY: 38,
    pointerType: 'straight-up',
  },
  warje: {
    lat: 18.4800,
    lng: 73.8000,
    countryCode: 'in',
    countryName: 'India',
    themeColor: '#f0a020',
    dotX: 605.0,
    dotY: 265.8,
    cardX: 490,
    cardY: 38,
    pointerType: 'straight-up',
  },
  mumbai: {
    lat: 19.1663,
    lng: 72.8526,
    countryCode: 'in',
    countryName: 'India',
    themeColor: '#f0a020',
    dotX: 605.0,
    dotY: 265.8,
    cardX: 490,
    cardY: 38,
    pointerType: 'straight-up',
  },
  india: {
    lat: 16.7050,
    lng: 74.2433,
    countryCode: 'in',
    countryName: 'India',
    themeColor: '#f0a020',
    dotX: 605.0,
    dotY: 265.8,
    cardX: 490,
    cardY: 38,
    pointerType: 'straight-up',
  },
  delhi: {
    lat: 28.6139,
    lng: 77.2090,
    countryCode: 'in',
    countryName: 'India',
    themeColor: '#f0a020',
    dotX: 614.0,
    dotY: 232.0,
    cardX: 486,
    cardY: 46,
    pointerType: 'straight-up',
  },
  bengaluru: {
    lat: 12.9716,
    lng: 77.5946,
    countryCode: 'in',
    countryName: 'India',
    themeColor: '#f0a020',
    dotX: 612.0,
    dotY: 272.0,
    cardX: 486,
    cardY: 46,
    pointerType: 'straight-up',
  },
  brisbane: {
    lat: -27.5028,
    lng: 153.1009,
    countryCode: 'au',
    countryName: 'Australia',
    themeColor: '#1a2a8a',
    dotX: 760.0,
    dotY: 377.5,
    cardX: 768,
    cardY: 236,
    pointerType: 'turn-right',
  },
  carindale: {
    lat: -27.5028,
    lng: 153.1009,
    countryCode: 'au',
    countryName: 'Australia',
    themeColor: '#1a2a8a',
    dotX: 760.0,
    dotY: 377.5,
    cardX: 768,
    cardY: 236,
    pointerType: 'turn-right',
  },
  sydney: {
    lat: -33.8688,
    lng: 151.2093,
    countryCode: 'au',
    countryName: 'Australia',
    themeColor: '#1a2a8a',
    dotX: 756.0,
    dotY: 395.0,
    cardX: 768,
    cardY: 236,
    pointerType: 'turn-right',
  },
  melbourne: {
    lat: -37.8136,
    lng: 144.9631,
    countryCode: 'au',
    countryName: 'Australia',
    themeColor: '#1a2a8a',
    dotX: 742.0,
    dotY: 404.0,
    cardX: 768,
    cardY: 236,
    pointerType: 'turn-right',
  },
  'burgess hill': {
    lat: 50.9536,
    lng: -0.1264,
    countryCode: 'uk',
    countryName: 'United Kingdom',
    themeColor: '#012169',
    dotX: 455.0,
    dotY: 156.5,
    cardX: 230,
    cardY: 82,
    pointerType: 'turn-left',
  },
  london: {
    lat: 51.5074,
    lng: -0.1278,
    countryCode: 'uk',
    countryName: 'United Kingdom',
    themeColor: '#012169',
    dotX: 455.0,
    dotY: 156.5,
    cardX: 230,
    cardY: 82,
    pointerType: 'turn-left',
  },
  uk: {
    lat: 50.9536,
    lng: -0.1264,
    countryCode: 'uk',
    countryName: 'United Kingdom',
    themeColor: '#012169',
    dotX: 455.0,
    dotY: 156.5,
    cardX: 230,
    cardY: 82,
    pointerType: 'turn-left',
  },
  england: {
    lat: 50.9536,
    lng: -0.1264,
    countryCode: 'uk',
    countryName: 'United Kingdom',
    themeColor: '#012169',
    dotX: 455.0,
    dotY: 156.5,
    cardX: 230,
    cardY: 82,
    pointerType: 'turn-left',
  },
  dubai: {
    lat: 25.2048,
    lng: 55.2708,
    countryCode: 'ae',
    countryName: 'United Arab Emirates',
    themeColor: '#00732f',
    dotX: 565.0,
    dotY: 242.0,
    cardX: 575,
    cardY: 165,
    pointerType: 'turn-right',
  },
  singapore: {
    lat: 1.3521,
    lng: 103.8198,
    countryCode: 'sg',
    countryName: 'Singapore',
    themeColor: '#ee2536',
    dotX: 668.0,
    dotY: 308.0,
    cardX: 678,
    cardY: 235,
    pointerType: 'turn-right',
  },
  toronto: {
    lat: 43.6532,
    lng: -79.3832,
    countryCode: 'ca',
    countryName: 'Canada',
    themeColor: '#ff0000',
    dotX: 232.0,
    dotY: 195.0,
    cardX: 240,
    cardY: 120,
    pointerType: 'turn-right',
  },
  berlin: {
    lat: 52.5200,
    lng: 13.4050,
    countryCode: 'de',
    countryName: 'Germany',
    themeColor: '#ffcc00',
    dotX: 502.0,
    dotY: 170.0,
    cardX: 512,
    cardY: 95,
    pointerType: 'turn-right',
  },
  paris: {
    lat: 48.8566,
    lng: 2.3522,
    countryCode: 'fr',
    countryName: 'France',
    themeColor: '#002654',
    dotX: 476.0,
    dotY: 178.0,
    cardX: 486,
    cardY: 105,
    pointerType: 'turn-right',
  },
  amsterdam: {
    lat: 52.3676,
    lng: 4.9041,
    countryCode: 'nl',
    countryName: 'Netherlands',
    themeColor: '#ff4f00',
    dotX: 483.0,
    dotY: 170.0,
    cardX: 493,
    cardY: 95,
    pointerType: 'turn-right',
  },
  zurich: {
    lat: 47.3769,
    lng: 8.5417,
    countryCode: 'ch',
    countryName: 'Switzerland',
    themeColor: '#d52b1e',
    dotX: 490.0,
    dotY: 182.0,
    cardX: 500,
    cardY: 108,
    pointerType: 'turn-right',
  },
  dublin: {
    lat: 53.3498,
    lng: -6.2603,
    countryCode: 'ie',
    countryName: 'Ireland',
    themeColor: '#169b62',
    dotX: 456.0,
    dotY: 168.0,
    cardX: 360,
    cardY: 95,
    pointerType: 'turn-left',
  },
  tokyo: {
    lat: 35.6762,
    lng: 139.6503,
    countryCode: 'jp',
    countryName: 'Japan',
    themeColor: '#bc002d',
    dotX: 736.0,
    dotY: 220.0,
    cardX: 746,
    cardY: 145,
    pointerType: 'turn-right',
  },
  riyadh: {
    lat: 24.7136,
    lng: 46.6753,
    countryCode: 'sa',
    countryName: 'Saudi Arabia',
    themeColor: '#006c35',
    dotX: 548.0,
    dotY: 244.0,
    cardX: 558,
    cardY: 170,
    pointerType: 'turn-right',
  },
  doha: {
    lat: 25.2854,
    lng: 51.5310,
    countryCode: 'qa',
    countryName: 'Qatar',
    themeColor: '#8a1538',
    dotX: 558.0,
    dotY: 242.0,
    cardX: 568,
    cardY: 168,
    pointerType: 'turn-right',
  },
  'kuala lumpur': {
    lat: 3.1390,
    lng: 101.6869,
    countryCode: 'my',
    countryName: 'Malaysia',
    themeColor: '#010066',
    dotX: 664.0,
    dotY: 302.0,
    cardX: 674,
    cardY: 228,
    pointerType: 'turn-right',
  },
  auckland: {
    lat: -36.8485,
    lng: 174.7633,
    countryCode: 'nz',
    countryName: 'New Zealand',
    themeColor: '#00247d',
    dotX: 808.0,
    dotY: 402.0,
    cardX: 818,
    cardY: 328,
    pointerType: 'turn-right',
  },
  'sao paulo': {
    lat: -23.5505,
    lng: -46.6333,
    countryCode: 'br',
    countryName: 'Brazil',
    themeColor: '#009739',
    dotX: 300.0,
    dotY: 366.0,
    cardX: 310,
    cardY: 292,
    pointerType: 'turn-right',
  },
  'cape town': {
    lat: -33.9249,
    lng: 18.4241,
    countryCode: 'za',
    countryName: 'South Africa',
    themeColor: '#007a4d',
    dotX: 512.0,
    dotY: 395.0,
    cardX: 522,
    cardY: 320,
    pointerType: 'turn-right',
  },
};

export function resolveOfficeGeo(
  lat?: number | null,
  lng?: number | null,
  ...textHints: (string | null | undefined)[]
): OfficeGeoConfig {
  const text = textHints.filter(Boolean).join(' ').toLowerCase();

  // 1. Prioritize explicit USA keywords (including Dover, NH, Texas, etc.)
  if (
    text.includes('united states') ||
    text.includes('usa') ||
    text.includes('dover') ||
    text.includes('nh') ||
    text.includes('new hampshire') ||
    text.includes('texas') ||
    text.includes('mckinney') ||
    text.includes('dallas') ||
    text.includes('austin') ||
    text.includes('houston') ||
    text.includes('san francisco') ||
    text.includes('chicago') ||
    text.includes('seattle') ||
    text.includes('america')
  ) {
    if (text.includes('dover') || text.includes('nh') || text.includes('new hampshire')) {
      return REALISTIC_LOCATIONS.dover;
    }
    if (text.includes('mckinney') || text.includes('texas') || text.includes('dallas')) {
      return REALISTIC_LOCATIONS.mckinney;
    }
    return REALISTIC_LOCATIONS.usa;
  }

  // 2. Prioritize explicit UK keywords
  if (
    text.includes('united kingdom') ||
    text.includes('england') ||
    text.includes('london') ||
    text.includes('burgess') ||
    text.includes('manchester') ||
    text.includes('edinburgh') ||
    text.includes(' uk') ||
    text.includes('uk ') ||
    text.startsWith('uk')
  ) {
    return REALISTIC_LOCATIONS['burgess hill'];
  }

  // 3. Prioritize explicit Australia keywords
  if (
    text.includes('australia') ||
    text.includes('carindale') ||
    text.includes('brisbane') ||
    text.includes('queensland') ||
    text.includes('sydney') ||
    text.includes('melbourne') ||
    text.includes('perth')
  ) {
    return REALISTIC_LOCATIONS.carindale;
  }

  // 4. Prioritize explicit India keywords
  if (
    text.includes('india') ||
    text.includes('kolhapur') ||
    text.includes('pune') ||
    text.includes('warje') ||
    text.includes('mumbai') ||
    text.includes('goregaon') ||
    text.includes('delhi') ||
    text.includes('bengaluru') ||
    text.includes('hyderabad') ||
    text.includes('maharashtra')
  ) {
    if (text.includes('pune') || text.includes('warje')) {
      return REALISTIC_LOCATIONS.pune;
    }
    if (text.includes('mumbai') || text.includes('goregaon')) {
      return REALISTIC_LOCATIONS.mumbai;
    }
    return REALISTIC_LOCATIONS.kolhapur;
  }

  // 5. Check other international locations in REALISTIC_LOCATIONS
  for (const [key, val] of Object.entries(REALISTIC_LOCATIONS)) {
    if (text.includes(key)) {
      return val;
    }
  }

  // 6. If explicit lat/long provided without matching key
  if (typeof lat === 'number' && typeof lng === 'number' && !isNaN(lat) && !isNaN(lng)) {
    const proj = projectToRealisticMap(lat, lng);
    let countryCode: CountryCode = 'global';
    let countryName = 'Global';
    let themeColor = '#2563eb';

    if (text.includes('usa') || (lng < -50 && lat > 15)) {
      countryCode = 'us';
      countryName = 'USA';
      themeColor = '#d6003b';
    } else if (text.includes('uk') || (lng > -12 && lng < 5 && lat > 48)) {
      countryCode = 'uk';
      countryName = 'United Kingdom';
      themeColor = '#012169';
    } else if (text.includes('australia') || (lat < -10 && lng > 110)) {
      countryCode = 'au';
      countryName = 'Australia';
      themeColor = '#1a2a8a';
    } else if (text.includes('india') || (lng > 65 && lng < 95 && lat > 5 && lat < 38)) {
      countryCode = 'in';
      countryName = 'India';
      themeColor = '#f0a020';
    }

    // Determine smart pointer orientation based on screen quadrant
    const pointerType = proj.x > 750 ? 'turn-left' : (proj.x < 250 ? 'turn-right' : 'straight-up');
    const cardX = pointerType === 'turn-left' ? Math.max(20, proj.x - 170) : (pointerType === 'turn-right' ? Math.min(800, proj.x + 10) : Math.max(20, proj.x - 70));
    const cardY = Math.max(15, proj.y - 65);

    return {
      lat,
      lng,
      countryCode,
      countryName,
      themeColor,
      dotX: proj.x,
      dotY: proj.y,
      cardX,
      cardY,
      pointerType,
    };
  }

  return REALISTIC_LOCATIONS.kolhapur;
}

// High-detail circular SVG flags matching the mock
function CircularFlag({ countryCode }: { countryCode: CountryCode }) {
  if (countryCode === 'us') {
    return (
      <svg width="24" height="24" viewBox="0 0 32 32" className="flag-svg" aria-label="USA flag">
        <defs>
          <clipPath id="circleClipUS">
            <circle cx="16" cy="16" r="15" />
          </clipPath>
        </defs>
        <g clipPath="url(#circleClipUS)">
          <rect width="32" height="32" fill="#b22234" />
          {[2.5, 7.5, 12.5, 17.5, 22.5, 27.5].map((y) => (
            <rect key={y} y={y} width="32" height="2.5" fill="#ffffff" />
          ))}
          <rect width="15" height="15" fill="#3c3b6e" />
          <circle cx="4" cy="4" r="1.1" fill="#ffffff" />
          <circle cx="8" cy="4" r="1.1" fill="#ffffff" />
          <circle cx="12" cy="4" r="1.1" fill="#ffffff" />
          <circle cx="6" cy="8" r="1.1" fill="#ffffff" />
          <circle cx="10" cy="8" r="1.1" fill="#ffffff" />
          <circle cx="4" cy="12" r="1.1" fill="#ffffff" />
          <circle cx="8" cy="12" r="1.1" fill="#ffffff" />
          <circle cx="12" cy="12" r="1.1" fill="#ffffff" />
        </g>
        <circle cx="16" cy="16" r="15" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
      </svg>
    );
  }

  if (countryCode === 'in') {
    return (
      <svg width="24" height="24" viewBox="0 0 32 32" className="flag-svg" aria-label="India flag">
        <defs>
          <clipPath id="circleClipIN">
            <circle cx="16" cy="16" r="15" />
          </clipPath>
        </defs>
        <g clipPath="url(#circleClipIN)">
          <rect y="0" width="32" height="10.67" fill="#ff9933" />
          <rect y="10.67" width="32" height="10.67" fill="#ffffff" />
          <rect y="21.33" width="32" height="10.67" fill="#138808" />
          <circle cx="16" cy="16" r="3.6" fill="none" stroke="#000080" strokeWidth="0.8" />
          <circle cx="16" cy="16" r="1" fill="#000080" />
        </g>
        <circle cx="16" cy="16" r="15" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
      </svg>
    );
  }

  if (countryCode === 'au') {
    return (
      <svg width="24" height="24" viewBox="0 0 32 32" className="flag-svg" aria-label="Australia flag">
        <defs>
          <clipPath id="circleClipAU">
            <circle cx="16" cy="16" r="15" />
          </clipPath>
        </defs>
        <g clipPath="url(#circleClipAU)">
          <rect width="32" height="32" fill="#00008b" />
          <rect width="16" height="16" fill="#012169" />
          <path d="M 0 0 L 16 16 M 16 0 L 0 16" stroke="#ffffff" strokeWidth="2.8" />
          <path d="M 0 0 L 16 16 M 16 0 L 0 16" stroke="#c8102e" strokeWidth="1.2" />
          <path d="M 8 0 L 8 16 M 0 8 L 16 8" stroke="#ffffff" strokeWidth="4.5" />
          <path d="M 8 0 L 8 16 M 0 8 L 16 8" stroke="#c8102e" strokeWidth="2.2" />
          <circle cx="24" cy="7" r="1" fill="#ffffff" />
          <circle cx="26" cy="13" r="1" fill="#ffffff" />
          <circle cx="21" cy="16" r="1" fill="#ffffff" />
          <circle cx="24" cy="22" r="1" fill="#ffffff" />
          <circle cx="9" cy="24" r="1.8" fill="#ffffff" />
        </g>
        <circle cx="16" cy="16" r="15" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
      </svg>
    );
  }

  if (countryCode === 'uk') {
    return (
      <svg width="24" height="24" viewBox="0 0 32 32" className="flag-svg" aria-label="UK flag">
        <defs>
          <clipPath id="circleClipUK">
            <circle cx="16" cy="16" r="15" />
          </clipPath>
        </defs>
        <g clipPath="url(#circleClipUK)">
          <rect width="32" height="32" fill="#012169" />
          <path d="M 0 0 L 32 32 M 32 0 L 0 32" stroke="#ffffff" strokeWidth="5.5" />
          <path d="M 0 0 L 32 32 M 32 0 L 0 32" stroke="#c8102e" strokeWidth="2.4" />
          <path d="M 16 0 L 16 32 M 0 16 L 32 16" stroke="#ffffff" strokeWidth="8.5" />
          <path d="M 16 0 L 16 32 M 0 16 L 32 16" stroke="#c8102e" strokeWidth="4.5" />
        </g>
        <circle cx="16" cy="16" r="15" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
      </svg>
    );
  }

  if (countryCode === 'ae') {
    return (
      <svg width="24" height="24" viewBox="0 0 32 32" className="flag-svg" aria-label="UAE flag">
        <defs>
          <clipPath id="circleClipAE">
            <circle cx="16" cy="16" r="15" />
          </clipPath>
        </defs>
        <g clipPath="url(#circleClipAE)">
          <rect y="0" width="32" height="10.67" fill="#00732f" />
          <rect y="10.67" width="32" height="10.67" fill="#ffffff" />
          <rect y="21.33" width="32" height="10.67" fill="#000000" />
          <rect x="0" y="0" width="8" height="32" fill="#ff0000" />
        </g>
        <circle cx="16" cy="16" r="15" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
      </svg>
    );
  }

  // Universal Globe Icon for other locations
  return (
    <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px' }}>
      🌐
    </div>
  );
}

export interface OfficeSubLocation {
  id: string;
  title: string;
  city: string;
  state?: string;
  address?: string;
  latitude: number;
  longitude: number;
  isHeadquarters: boolean;
  mapUrl?: string;
}

export interface RealisticMapMarker {
  id: string;
  countryCode: CountryCode;
  countryName: string;
  themeColor: string;
  isHeadquarters: boolean;
  dotX: number;
  dotY: number;
  cardX: number;
  cardY: number;
  pointerType: 'turn-right' | 'straight-up' | 'turn-left';
  label: string;
  locations: OfficeSubLocation[];
}

function parseOfficeCityState(
  cityRegion?: string | null,
  title?: string | null,
  countryName?: string
): { city: string; state?: string } {
  let cleanTitle = (title || '').split(',')[0].trim();
  let detectedState: string | undefined;

  const matchUs = cleanTitle.match(/^(.*?)\s+(nh|tx|ca|ny|fl|il|wa|ma|va|nc|ga|oh|pa|nj|co|az)$/i);
  if (matchUs) {
    cleanTitle = matchUs[1].trim();
    detectedState = matchUs[2].toUpperCase();
  }

  if (cityRegion) {
    const parts = cityRegion.split(',').map((p) => p.trim()).filter(Boolean);
    if (parts.length >= 2) {
      const p0 = parts[0];
      const p1 = parts[1];

      // UK handling: e.g. "England, UK" with title "Burgess Hill"
      if (p1.toLowerCase() === 'uk' || p0.toLowerCase() === 'england' || countryName?.toLowerCase() === 'united kingdom') {
        const city =
          cleanTitle && cleanTitle.toLowerCase() !== 'england' && cleanTitle.toLowerCase() !== 'uk'
            ? cleanTitle
            : 'Burgess Hill';
        return { city, state: 'England' };
      }

      if (
        p1.toLowerCase() === countryName?.toLowerCase() ||
        p1.toLowerCase() === 'usa' ||
        p1.toLowerCase() === 'india' ||
        p1.toLowerCase() === 'australia'
      ) {
        const state = p0;
        const city =
          cleanTitle &&
          cleanTitle.toLowerCase() !== countryName?.toLowerCase() &&
          cleanTitle.toLowerCase() !== state.toLowerCase()
            ? cleanTitle
            : p0;
        return { city, state };
      }

      return { city: p0, state: p1 };
    } else if (parts.length === 1) {
      const p0 = parts[0];
      if (p0.toLowerCase() === 'england' || p0.toLowerCase() === 'uk') {
        return { city: cleanTitle || 'Burgess Hill', state: 'England' };
      }
      const lowerCity = p0.toLowerCase();
      if (lowerCity.includes('pune') || lowerCity.includes('kolhapur') || lowerCity.includes('mumbai')) {
        return { city: p0, state: 'Maharashtra' };
      }
      return { city: cleanTitle || p0, state: detectedState };
    }
  }

  const lower = cleanTitle.toLowerCase();
  if (lower.includes('pune') || lower.includes('kolhapur') || lower.includes('mumbai')) {
    return { city: cleanTitle, state: 'Maharashtra' };
  }
  return { city: cleanTitle, state: detectedState };
}

function formatMarkerSummaryLabel(locations: OfficeSubLocation[], countryName: string): string {
  if (locations.length === 0) return countryName;
  if (locations.length === 1) {
    const loc = locations[0];
    if (loc.state && loc.state.toLowerCase() !== countryName.toLowerCase()) {
      return `${loc.city}, ${loc.state}, ${countryName}`;
    }
    return `${loc.city}, ${countryName}`;
  }

  // Multiple locations in this country!
  const cities = Array.from(new Set(locations.map((l) => l.city).filter(Boolean)));
  const states = Array.from(
    new Set(
      locations
        .map((l) => l.state)
        .filter((s): s is string => typeof s === 'string' && s.trim().length > 0 && s.toLowerCase() !== countryName.toLowerCase())
    )
  );

  if (states.length === 1) {
    // Same state: e.g. "Kolhapur, Pune, Maharashtra, India"
    return `${cities.join(', ')}, ${states[0]}, ${countryName}`;
  } else {
    // Different states: e.g. "Dallas, San Jose, USA"
    return `${cities.join(', ')}, ${countryName}`;
  }
}

export function GlobalOfficesWorldMap({ section }: { section: GlobalOfficesSection }) {
  const [activePointId, setActivePointId] = useState<string | null>(null);
  const [activeSubIndices, setActiveSubIndices] = useState<Record<string, number>>({});
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'in' | 'us' | 'uk' | 'au'>('all');
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handlePointEnter = (id: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActivePointId(id);
  };

  const handlePointLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActivePointId(null);
    }, 180);
  };

  const offices = section.offices ?? [];
  const rawPins = section.mapPins ?? [];

  // Group all offices & mapPins seamlessly by country into single markers with sub-locations
  const markers = useMemo<RealisticMapMarker[]>(() => {
    const countryGroups: Record<
      string,
      {
        countryCode: CountryCode;
        countryName: string;
        themeColor: string;
        cardX: number;
        cardY: number;
        pointerType: 'turn-right' | 'straight-up' | 'turn-left';
        dotX: number;
        dotY: number;
        isHeadquarters: boolean;
        locations: OfficeSubLocation[];
      }
    > = {};

    // 1. Process all structured offices
    offices.forEach((office, idx) => {
      const geo = resolveOfficeGeo(
        office.latitude,
        office.longitude,
        office.country,
        office.countryPreset,
        office.title,
        office.cityRegion,
        office.regionLabel,
        office.address
      );

      const parsed = parseOfficeCityState(office.cityRegion, office.title, geo.countryName);
      const isHq =
        Boolean(office.isHeadquarters) ||
        office.title.toLowerCase().includes('hq') ||
        (office.regionLabel?.toLowerCase().includes('hq') ?? false);

      const subLoc: OfficeSubLocation = {
        id: `office-${office.id ?? idx}`,
        title: office.title,
        city: parsed.city || office.title,
        state: parsed.state,
        address: office.address,
        latitude: office.latitude ?? geo.lat,
        longitude: office.longitude ?? geo.lng,
        isHeadquarters: isHq,
        mapUrl: office.mapUrl?.trim(),
      };

      if (!countryGroups[geo.countryCode]) {
        countryGroups[geo.countryCode] = {
          countryCode: geo.countryCode,
          countryName: geo.countryName,
          themeColor: geo.themeColor,
          cardX: geo.cardX,
          cardY: geo.cardY,
          pointerType: geo.pointerType,
          dotX: geo.dotX,
          dotY: geo.dotY,
          isHeadquarters: isHq,
          locations: [subLoc],
        };
      } else {
        countryGroups[geo.countryCode].locations.push(subLoc);
        if (isHq) {
          countryGroups[geo.countryCode].isHeadquarters = true;
          countryGroups[geo.countryCode].dotX = geo.dotX;
          countryGroups[geo.countryCode].dotY = geo.dotY;
        }
      }
    });

    // 2. Also process rawPins for any countries not yet in countryGroups
    rawPins.forEach((pin, idx) => {
      const geo = resolveOfficeGeo(pin.latitude, pin.longitude, pin.countryPreset, pin.label);
      if (!countryGroups[geo.countryCode]) {
        const parsed = parseOfficeCityState(pin.label, pin.label, geo.countryName);
        const isHq =
          pin.label.toLowerCase().includes('kolhapur') || pin.label.toLowerCase().includes('hq');

        const subLoc: OfficeSubLocation = {
          id: `pin-${pin.id ?? idx}`,
          title: pin.label,
          city: parsed.city || pin.label,
          state: parsed.state,
          latitude: pin.latitude ?? geo.lat,
          longitude: pin.longitude ?? geo.lng,
          isHeadquarters: isHq,
        };

        countryGroups[geo.countryCode] = {
          countryCode: (pin.flagVariant as CountryCode) || geo.countryCode,
          countryName: geo.countryName,
          themeColor: geo.themeColor,
          cardX: geo.cardX,
          cardY: geo.cardY,
          pointerType: geo.pointerType,
          dotX: geo.dotX,
          dotY: geo.dotY,
          isHeadquarters: isHq,
          locations: [subLoc],
        };
      }
    });

    // 3. Assemble into final list with smart summary labels
    const list: RealisticMapMarker[] = Object.entries(countryGroups).map(([code, grp]) => {
      // Sort so HQ is always first, followed by other offices
      const sortedLocations = [...grp.locations].sort((a, b) => {
        if (a.isHeadquarters && !b.isHeadquarters) return -1;
        if (!a.isHeadquarters && b.isHeadquarters) return 1;
        return 0;
      });

      return {
        id: `country-${code}`,
        countryCode: grp.countryCode,
        countryName: grp.countryName,
        themeColor: grp.themeColor,
        isHeadquarters: grp.isHeadquarters,
        dotX: grp.dotX,
        dotY: grp.dotY,
        cardX: grp.cardX,
        cardY: grp.cardY,
        pointerType: grp.pointerType,
        label: formatMarkerSummaryLabel(sortedLocations, grp.countryName),
        locations: sortedLocations,
      };
    });

    return list;
  }, [offices, rawPins]);

  // Filtered markers based on tab selection
  const filteredMarkers = useMemo(() => {
    if (selectedFilter === 'all') return markers;
    return markers.filter((m) => m.countryCode === selectedFilter);
  }, [markers, selectedFilter]);

  return (
    <div className="walstar-realistic-map-wrapper">
      {/* Country Filter Navigation Bar */}
      {/* <div className="realistic-filter-bar" role="tablist" aria-label="Filter locations by country">
        <button
          type="button"
          role="tab"
          aria-selected={selectedFilter === 'all'}
          className={`realistic-filter-pill ${selectedFilter === 'all' ? 'is-active' : ''}`}
          onClick={() => {
            setSelectedFilter('all');
            setActivePointId(null);
          }}
        >
          <span>🌍 All Global Locations</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={selectedFilter === 'in'}
          className={`realistic-filter-pill ${selectedFilter === 'in' ? 'is-active' : ''}`}
          onClick={() => {
            setSelectedFilter('in');
            const inPt = markers.find((m) => m.countryCode === 'in');
            if (inPt) setActivePointId(inPt.id);
          }}
        >
          <span>🇮🇳 India (HQ)</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={selectedFilter === 'us'}
          className={`realistic-filter-pill ${selectedFilter === 'us' ? 'is-active' : ''}`}
          onClick={() => {
            setSelectedFilter('us');
            const usPt = markers.find((m) => m.countryCode === 'us');
            if (usPt) setActivePointId(usPt.id);
          }}
        >
          <span>🇺🇸 USA</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={selectedFilter === 'uk'}
          className={`realistic-filter-pill ${selectedFilter === 'uk' ? 'is-active' : ''}`}
          onClick={() => {
            setSelectedFilter('uk');
            const ukPt = markers.find((m) => m.countryCode === 'uk');
            if (ukPt) setActivePointId(ukPt.id);
          }}
        >
          <span>🇬🇧 United Kingdom</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={selectedFilter === 'au'}
          className={`realistic-filter-pill ${selectedFilter === 'au' ? 'is-active' : ''}`}
          onClick={() => {
            setSelectedFilter('au');
            const auPt = markers.find((m) => m.countryCode === 'au');
            if (auPt) setActivePointId(auPt.id);
          }}
        >
          <span>🇦🇺 Australia</span>
        </button>
      </div> */}

      {/* Realistic World Map Canvas */}
      <div className="realistic-map-canvas-box">
        {/* Authentic Realistic World Map Image (1024x465) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getStrapiMediaUrl(section.image?.url) || '/images/world-map-realistic-clean.png'}
          alt="Walstar Technologies Global Presence Map"
          className="realistic-base-img"
          width={1024}
          height={465}
          loading="lazy"
          decoding="async"
        />

        {/* Dynamic SVG Pointer Lines & Pulsing Beacons Layer */}
        <svg
          viewBox="0 0 1024 465"
          className="realistic-svg-pointers-layer"
          aria-hidden="true"
        >
          {filteredMarkers.map((marker) => {
            const isActive = activePointId === marker.id;
            const isHq = marker.isHeadquarters;

            // Generate clean curved pointer lines matching the design
            let linePathD = '';
            if (marker.pointerType === 'turn-right') {
              // Line starts at dot, goes up, curves 90 degrees right along card bottom
              const turnY = marker.cardY + 34;
              const turnX = marker.dotX;
              const endX = marker.cardX + (marker.locations.length > 1 ? 190 : 155);
              linePathD = `M ${marker.dotX} ${marker.dotY} L ${turnX} ${turnY + 12} Q ${turnX} ${turnY} ${turnX + 12} ${turnY} L ${endX} ${turnY}`;
            } else if (marker.pointerType === 'turn-left') {
              // Line starts at dot, goes up, curves 90 degrees left along card bottom
              const turnY = marker.cardY + 34;
              const turnX = marker.dotX;
              const endX = marker.cardX + 4;
              linePathD = `M ${marker.dotX} ${marker.dotY} L ${turnX} ${turnY + 12} Q ${turnX} ${turnY} ${turnX - 12} ${turnY} L ${endX} ${turnY}`;
            } else {
              // Straight up with soft curved bracket under the card
              const bracketY = marker.cardY + 34;
              const cardLeft = marker.cardX + 4;
              const cardRight = marker.cardX + (marker.locations.length > 1 ? 280 : 205);
              linePathD = `M ${marker.dotX} ${marker.dotY} L ${marker.dotX} ${bracketY + 10} Q ${marker.dotX} ${bracketY} ${marker.dotX - 12} ${bracketY} L ${cardLeft} ${bracketY} M ${marker.dotX} ${bracketY + 10} Q ${marker.dotX} ${bracketY} ${marker.dotX + 12} ${bracketY} L ${cardRight} ${bracketY}`;
            }

            return (
              <g
                key={`svg-marker-${marker.id}`}
                className={`realistic-marker-group ${isActive ? 'is-active' : ''}`}
              >
                {/* Slender Pointer Line */}
                <path
                  d={linePathD}
                  fill="none"
                  stroke={marker.themeColor}
                  strokeWidth={isActive ? 2.2 : 1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="pointer-line"
                  opacity={isActive ? 1 : 0.85}
                />

                {/* Animated Pulsing Radar Beacon 1 */}
                <circle
                  cx={marker.dotX}
                  cy={marker.dotY}
                  r="6"
                  fill="none"
                  stroke={marker.themeColor}
                  strokeWidth="1.5"
                  className="realistic-beacon-pulse-1"
                />

                {/* Animated Pulsing Radar Beacon 2 */}
                <circle
                  cx={marker.dotX}
                  cy={marker.dotY}
                  r="12"
                  fill="none"
                  stroke={marker.themeColor}
                  strokeWidth="1.2"
                  className="realistic-beacon-pulse-2"
                />

                {/* Solid Core Dot at Location */}
                <circle
                  cx={marker.dotX}
                  cy={marker.dotY}
                  r={isActive ? (isHq ? 6.5 : 5.5) : (isHq ? 5.5 : 4.5)}
                  fill={marker.themeColor}
                  stroke="#ffffff"
                  strokeWidth={isActive ? 2.5 : 2}
                  className="realistic-beacon-core"
                />

                {/* Generous stable invisible hit target (36px wide) to prevent jitter/glitches */}
                <circle
                  cx={marker.dotX}
                  cy={marker.dotY}
                  r="18"
                  fill="transparent"
                  stroke="transparent"
                  className="realistic-hit-target"
                  onMouseEnter={() => handlePointEnter(marker.id)}
                  onMouseLeave={handlePointLeave}
                  onClick={() => setActivePointId(isActive ? null : marker.id)}
                />
              </g>
            );
          })}
        </svg>

        {/* Floating Callout Cards Layer (Positioned with CSS percentage coordinates) */}
        <div className="realistic-cards-layer">
          {filteredMarkers.map((marker) => {
            const isActive = activePointId === marker.id;
            const leftPct = (marker.cardX / 1024) * 100;
            const topPct = (marker.cardY / 465) * 100;

            return (
              <div
                key={`card-${marker.id}`}
                className={`realistic-callout-card ${isActive ? 'is-focused' : ''}`}
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                  borderBottomColor: marker.themeColor,
                }}
                onMouseEnter={() => handlePointEnter(marker.id)}
                onMouseLeave={handlePointLeave}
                onClick={() => setActivePointId(isActive ? null : marker.id)}
              >
                <div className="callout-card-inner">
                  <div className="flag-circle-box">
                    <CircularFlag countryCode={marker.countryCode} />
                  </div>
                  <span className="callout-location-title">{marker.label}</span>
                  {marker.locations.length > 1 ? (
                    <span className="callout-hub-pill">
                      {marker.locations.length} Hubs
                    </span>
                  ) : null}
                </div>

                {/* =========================================================================
                    [DESIGN 1 - TABBED SUB-LOCATION POPUP] (Commented out for later evaluation)
                    ========================================================================= */}
                {/*
                {isActive ? (() => {
                  const currentSubIndex = activeSubIndices[marker.id] || 0;
                  const activeLocation = marker.locations[currentSubIndex] || marker.locations[0];

                  return (
                    <div className="realistic-detail-tooltip" onClick={(e) => e.stopPropagation()}>
                      <div className="tooltip-top-row">
                        <div className="tooltip-title-col">
                          <span className="tooltip-country">{marker.countryName}</span>
                          {marker.locations.length > 1 ? (
                            <span className="tooltip-hub-count">
                              {marker.locations.length} Strategic Locations
                            </span>
                          ) : null}
                        </div>
                        {marker.isHeadquarters ? (
                          <span className="tooltip-hq-tag">HQ</span>
                        ) : null}
                      </div>

                      {marker.locations.length > 1 ? (
                        <div className="tooltip-subloc-tabs">
                          {marker.locations.map((loc, idx) => {
                            const isSubActive = currentSubIndex === idx;
                            return (
                              <button
                                key={`subtab-${loc.id || idx}`}
                                type="button"
                                className={`tooltip-subloc-tab ${isSubActive ? 'is-active' : ''}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveSubIndices((prev) => ({ ...prev, [marker.id]: idx }));
                                }}
                                onMouseEnter={() => {
                                  setActiveSubIndices((prev) => ({ ...prev, [marker.id]: idx }));
                                }}
                              >
                                <span>{loc.city}</span>
                                {loc.isHeadquarters ? <em className="subloc-hq-badge">HQ</em> : null}
                              </button>
                            );
                          })}
                        </div>
                      ) : null}

                      {activeLocation ? (
                        <div className="tooltip-subloc-content">
                          {activeLocation.title &&
                          activeLocation.title.toLowerCase() !== marker.countryName.toLowerCase() &&
                          activeLocation.title.toLowerCase() !== activeLocation.city.toLowerCase() ? (
                            <h5 className="tooltip-office-title">
                              {activeLocation.title}
                              {activeLocation.city ? (
                                <span className="tooltip-office-city">
                                  {' '}— {activeLocation.city}{activeLocation.state ? `, ${activeLocation.state}` : ''}
                                </span>
                              ) : null}
                            </h5>
                          ) : null}

                          <div className="tooltip-coords-row">
                            <span className="tooltip-gps-pill">
                              📍 {Math.abs(activeLocation.latitude).toFixed(4)}° {activeLocation.latitude >= 0 ? 'N' : 'S'},{' '}
                              {Math.abs(activeLocation.longitude).toFixed(4)}° {activeLocation.longitude >= 0 ? 'E' : 'W'}
                            </span>
                          </div>

                          {activeLocation.address ? (
                            <p className="tooltip-address">{activeLocation.address}</p>
                          ) : null}

                          <a
                            href={
                              activeLocation.mapUrl ||
                              `https://maps.google.com/?q=${encodeURIComponent(
                                activeLocation.address || `${activeLocation.title}, ${activeLocation.city}`
                              )}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tooltip-map-link"
                          >
                            View On Google Maps ↗
                          </a>
                        </div>
                      ) : null}
                    </div>
                  );
                })() : null}
                */}

                {/* =========================================================================
                    [DESIGN 2 - BROADER ALL-AT-ONCE VIEW WITH DIVIDER LINES] (Active)
                    ========================================================================= */}
                {isActive ? (
                  <div
                    className="realistic-detail-tooltip-broader"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Header Row */}
                    <div className="broader-header-row">
                      <div className="broader-country-title">
                        <span className="broader-country-name">{marker.countryName}</span>
                        {marker.locations.length > 1 ? (
                          <span className="broader-count-pill">
                            {marker.locations.length} Locations
                          </span>
                        ) : null}
                      </div>
                      {marker.isHeadquarters ? (
                        <span className="tooltip-hq-tag">HQ</span>
                      ) : null}
                    </div>

                    {/* All Addresses Displayed Horizontally Side-by-Side with Vertical Divider Lines */}
                    <div className="broader-offices-row">
                      {marker.locations.map((loc, idx) => {
                        const mapLink =
                          loc.mapUrl ||
                          `https://maps.google.com/?q=${encodeURIComponent(
                            loc.address || `${loc.title}, ${loc.city}`
                          )}`;

                        return (
                          <React.Fragment key={`broader-loc-${loc.id || idx}`}>
                            <div className="broader-office-col">
                              <div className="broader-office-top">
                                <div className="broader-office-title-wrap">
                                  <h5 className="broader-office-name">{loc.title}</h5>
                                  {loc.city ? (
                                    <span className="broader-office-region">
                                      {loc.city}
                                      {loc.state ? `, ${loc.state}` : ''}
                                    </span>
                                  ) : null}
                                </div>
                                {loc.isHeadquarters ? (
                                  <span className="subloc-hq-badge">HQ</span>
                                ) : null}
                              </div>

                              <div className="broader-coords-row">
                                <span className="broader-gps-tag">
                                  📍 {Math.abs(loc.latitude).toFixed(4)}°{' '}
                                  {loc.latitude >= 0 ? 'N' : 'S'},{' '}
                                  {Math.abs(loc.longitude).toFixed(4)}°{' '}
                                  {loc.longitude >= 0 ? 'E' : 'W'}
                                </span>
                              </div>

                              {loc.address ? (
                                <p className="broader-address-text">{loc.address}</p>
                              ) : null}

                              <div className="broader-actions-row">
                                <a
                                  href={mapLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="broader-map-btn"
                                >
                                  View On Google Maps ↗
                                </a>
                              </div>
                            </div>
                            {/* Vertical divider line between office columns */}
                            {idx < marker.locations.length - 1 ? (
                              <div className="broader-vertical-divider" />
                            ) : null}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

    

      {/* Synchronized Office Location Cards Grid */}
      {offices.length > 0 ? (
        <div className="oc walstar-sync-office-grid" style={{ marginTop: '36px' }}>
          {offices.map((office, idx) => {
            const geo = resolveOfficeGeo(
              office.latitude,
              office.longitude,
              office.title,
              office.cityRegion,
              office.regionLabel
            );

            const isSelected = activePointId?.includes(geo.countryCode);
            const mapHref =
              office.mapUrl?.trim() ||
              `https://maps.google.com/?q=${encodeURIComponent(office.address)}`;

            return (
              <article
                key={`${office.title}-${office.id ?? idx}`}
                className={`of ${office.isHeadquarters ? 'hq' : ''} ${isSelected ? 'is-card-highlighted' : ''}`}
                onMouseEnter={() => {
                  const match = markers.find((m) => m.countryCode === geo.countryCode);
                  if (match) {
                    handlePointEnter(match.id);
                    const subIdx = match.locations.findIndex(
                      (l) =>
                        l.title.toLowerCase() === office.title.toLowerCase() ||
                        (office.cityRegion && office.cityRegion.toLowerCase().includes(l.city.toLowerCase()))
                    );
                    if (subIdx !== -1) {
                      setActiveSubIndices((prev) => ({ ...prev, [match.id]: subIdx }));
                    }
                  }
                }}
                onMouseLeave={handlePointLeave}
                style={{ cursor: 'pointer', transition: 'all 0.25s ease' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <em>{office.regionLabel}</em>
                  <span style={{ fontSize: '12px', opacity: 0.85, fontWeight: 600 }}>
                    📍 {geo.lat.toFixed(2)}°, {geo.lng.toFixed(2)}°
                  </span>
                </div>

                <h4>{office.title}</h4>
                {office.cityRegion ? <small>{office.cityRegion}</small> : null}
                <p>{renderMultilineText(office.address)}</p>

                <div style={{ marginTop: 'auto', paddingTop: '12px', width: '100%' }}>
                  <WalstarButton
                    variant="outline-blue"
                    href={mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View On Google Maps ↗
                  </WalstarButton>
                </div>
              </article>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
