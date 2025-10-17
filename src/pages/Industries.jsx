import { memo, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Industries.css';

// Industry card icons
const IndustryIcons = {
  Healthcare: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M12 2L3 7v6c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-9-5z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12 8v8M8 12h8" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  ),

  Finance: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),

  Ecommerce: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),

  Education: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M12 14l9-5-9-5-9 5 9 5z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12 14v7" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),

  Manufacturing: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),

  Technology: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path 
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  ),
};

// Complex graphic illustrations for each industry
const IndustryGraphics = {
  Healthcare: () => (
    <svg className="industry-graphic-svg" viewBox="0 0 300 300" fill="none">
      <circle cx="150" cy="150" r="120" stroke="#3b82f6" strokeWidth="1.5" opacity="0.15" />
      <circle cx="150" cy="150" r="90" stroke="#3b82f6" strokeWidth="1.5" opacity="0.2" />
      <circle cx="150" cy="150" r="60" stroke="#3b82f6" strokeWidth="1.5" opacity="0.25" />
      <path d="M150 80v140M80 150h140" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" />
      <path d="M60 200 L80 200 L90 180 L100 220 L110 200 L240 200" 
        stroke="#2563eb" strokeWidth="2.5" fill="none" className="pulse-line" />
      <circle cx="150" cy="80" r="12" fill="#3b82f6">
        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="220" r="12" fill="#3b82f6">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="80" cy="150" r="12" fill="#3b82f6">
        <animate attributeName="opacity" values="1;0.5;1" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="220" cy="150" r="12" fill="#3b82f6">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <path d="M50 100 Q75 90 100 100 T150 100 T200 100" 
        stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.4" />
      <path d="M50 110 Q75 120 100 110 T150 110 T200 110" 
        stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.4" />
      <circle cx="120" cy="100" r="4" fill="#2563eb" opacity="0.6" />
      <circle cx="180" cy="100" r="4" fill="#2563eb" opacity="0.6" />
      <circle cx="100" cy="180" r="4" fill="#2563eb" opacity="0.6" />
      <circle cx="200" cy="180" r="4" fill="#2563eb" opacity="0.6" />
    </svg>
  ),

  Finance: () => (
    <svg className="industry-graphic-svg" viewBox="0 0 300 300" fill="none">
      <defs>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2"/>
        </pattern>
      </defs>
      <rect width="300" height="300" fill="url(#grid)" />
      <rect x="40" y="120" width="15" height="60" fill="#3b82f6" opacity="0.6" rx="2" />
      <line x1="47" y1="100" x2="47" y2="180" stroke="#3b82f6" strokeWidth="2" />
      <rect x="80" y="140" width="15" height="40" fill="#2563eb" opacity="0.6" rx="2" />
      <line x1="87" y1="120" x2="87" y2="180" stroke="#2563eb" strokeWidth="2" />
      <rect x="120" y="100" width="15" height="70" fill="#3b82f6" opacity="0.6" rx="2" />
      <line x1="127" y1="80" x2="127" y2="170" stroke="#3b82f6" strokeWidth="2" />
      <rect x="160" y="110" width="15" height="50" fill="#2563eb" opacity="0.6" rx="2" />
      <line x1="167" y1="90" x2="167" y2="160" stroke="#2563eb" strokeWidth="2" />
      <rect x="200" y="90" width="15" height="80" fill="#3b82f6" opacity="0.6" rx="2" />
      <line x1="207" y1="70" x2="207" y2="170" stroke="#3b82f6" strokeWidth="2" />
      <rect x="240" y="80" width="15" height="90" fill="#2563eb" opacity="0.6" rx="2" />
      <line x1="247" y1="60" x2="247" y2="170" stroke="#2563eb" strokeWidth="2" />
      <path d="M40 160 L80 150 L120 130 L160 135 L200 110 L240 90 L280 85" 
        stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round" className="trend-line">
        <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="3s" repeatCount="indefinite" />
      </path>
      <circle cx="40" cy="160" r="6" fill="#3b82f6">
        <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="80" cy="150" r="6" fill="#3b82f6">
        <animate attributeName="r" values="6;8;6" dur="2s" begin="0.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="120" cy="130" r="6" fill="#3b82f6">
        <animate attributeName="r" values="6;8;6" dur="2s" begin="0.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="135" r="6" fill="#3b82f6">
        <animate attributeName="r" values="6;8;6" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="110" r="6" fill="#3b82f6">
        <animate attributeName="r" values="6;8;6" dur="2s" begin="0.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="240" cy="90" r="6" fill="#3b82f6">
        <animate attributeName="r" values="6;8;6" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
      <text x="220" y="50" fill="#3b82f6" fontSize="24" fontWeight="bold" opacity="0.3">$</text>
      <text x="60" y="230" fill="#3b82f6" fontSize="20" fontWeight="bold" opacity="0.3">$</text>
      <text x="250" y="220" fill="#3b82f6" fontSize="18" fontWeight="bold" opacity="0.3">$</text>
      <path d="M 50 50 L 50 20 A 30 30 0 0 1 74 34 Z" fill="#3b82f6" opacity="0.3" />
      <circle cx="50" cy="50" r="25" stroke="#2563eb" strokeWidth="3" fill="none" opacity="0.3" 
        strokeDasharray="40 120" transform="rotate(-90 50 50)" />
    </svg>
  ),

  Ecommerce: () => (
    <svg className="industry-graphic-svg" viewBox="0 0 300 300" fill="none">
      <path d="M80 100 L90 100 L110 180 L240 180" 
        stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M90 100 L100 140 L230 140 L250 100" 
        stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="130" cy="200" r="15" fill="none" stroke="#2563eb" strokeWidth="4">
        <animateTransform attributeName="transform" type="rotate" 
          from="0 130 200" to="360 130 200" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="220" cy="200" r="15" fill="none" stroke="#2563eb" strokeWidth="4">
        <animateTransform attributeName="transform" type="rotate" 
          from="0 220 200" to="360 220 200" dur="3s" repeatCount="indefinite" />
      </circle>
      <rect x="120" y="110" width="35" height="35" rx="5" fill="#3b82f6" opacity="0.4" />
      <rect x="165" y="110" width="35" height="35" rx="5" fill="#2563eb" opacity="0.4" />
      <rect x="210" y="110" width="35" height="35" rx="5" fill="#3b82f6" opacity="0.4" />
      <g opacity="0.5">
        <rect x="40" y="60" width="30" height="30" rx="3" stroke="#3b82f6" strokeWidth="2" fill="none" />
        <path d="M40 75 L70 75 M55 60 L55 90" stroke="#3b82f6" strokeWidth="2" />
      </g>
      <g opacity="0.5">
        <rect x="250" y="40" width="25" height="25" rx="3" stroke="#2563eb" strokeWidth="2" fill="none" />
        <path d="M250 52.5 L275 52.5 M262.5 40 L262.5 65" stroke="#2563eb" strokeWidth="2" />
      </g>
      <g>
        <path d="M200 50 L220 50 L225 55 L220 60 L200 60 Z" fill="#3b82f6" opacity="0.3" />
        <circle cx="205" cy="55" r="2" fill="#fff" />
      </g>
      <g>
        <path d="M160 200 L180 200 L185 205 L180 210 L160 210 Z" fill="#2563eb" opacity="0.3" />
        <circle cx="165" cy="205" r="2" fill="#fff" />
      </g>
      <path d="M40 150 L60 150 L55 145 M60 150 L55 155" 
        stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M70 40 L72 46 L78 46 L73 50 L75 56 L70 52 L65 56 L67 50 L62 46 L68 46 Z" 
        fill="#3b82f6" opacity="0.4" />
      <path d="M260 180 L262 186 L268 186 L263 190 L265 196 L260 192 L255 196 L257 190 L252 186 L258 186 Z" 
        fill="#2563eb" opacity="0.4" />
      <path d="M240 230 L250 230 L250 270 L240 270 Z M240 230 Q245 220 250 230" 
        stroke="#3b82f6" strokeWidth="2.5" fill="none" opacity="0.5" />
    </svg>
  ),

  Education: () => (
    <svg className="industry-graphic-svg" viewBox="0 0 300 300" fill="none">
      <path d="M150 60 L40 110 L40 150 C40 180 80 200 150 200 C220 200 260 180 260 150 L260 110 Z" 
        fill="#3b82f6" opacity="0.1" />
      <path d="M150 60 L40 110 L150 160 L260 110 L150 60Z" 
        fill="#3b82f6" opacity="0.3" stroke="#3b82f6" strokeWidth="2" />
      <line x1="150" y1="60" x2="150" y2="30" stroke="#2563eb" strokeWidth="3" />
      <path d="M150 30 L180 40 L150 50 Z" fill="#3b82f6">
        <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
      </path>
      <line x1="150" y1="160" x2="150" y2="210" stroke="#2563eb" strokeWidth="3" />
      <rect x="140" y="210" width="20" height="5" fill="#2563eb" />
      <g transform="translate(50, 140)">
        <rect x="0" y="0" width="40" height="8" rx="2" fill="#3b82f6" opacity="0.6" />
        <rect x="2" y="10" width="40" height="8" rx="2" fill="#2563eb" opacity="0.6" />
        <rect x="4" y="20" width="40" height="8" rx="2" fill="#3b82f6" opacity="0.6" />
        <rect x="1" y="30" width="40" height="8" rx="2" fill="#2563eb" opacity="0.6" />
      </g>
      <g transform="translate(200, 140)">
        <rect x="0" y="10" width="50" height="35" rx="3" stroke="#3b82f6" strokeWidth="2" fill="none" />
        <rect x="5" y="15" width="40" height="25" fill="#3b82f6" opacity="0.2" />
        <path d="M-5 45 L55 45 L50 50 L0 50 Z" fill="#2563eb" opacity="0.4" />
        <line x1="10" y1="20" x2="30" y2="20" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="10" y1="25" x2="35" y2="25" stroke="#2563eb" strokeWidth="1.5" />
        <line x1="10" y1="30" x2="25" y2="30" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="10" y1="35" x2="40" y2="35" stroke="#2563eb" strokeWidth="1.5" />
      </g>
      <g opacity="0.5">
        <circle cx="100" cy="240" r="8" fill="#3b82f6" />
        <path d="M90 255 Q100 245 110 255" fill="#3b82f6" />
        <circle cx="150" cy="240" r="8" fill="#2563eb" />
        <path d="M140 255 Q150 245 160 255" fill="#2563eb" />
        <circle cx="200" cy="240" r="8" fill="#3b82f6" />
        <path d="M190 255 Q200 245 210 255" fill="#3b82f6" />
      </g>
      <text x="60" y="90" fill="#3b82f6" fontSize="20" opacity="0.4">∑</text>
      <text x="230" y="90" fill="#2563eb" fontSize="20" opacity="0.4">π</text>
      <text x="30" y="200" fill="#3b82f6" fontSize="18" opacity="0.4">∫</text>
      <text x="260" y="200" fill="#2563eb" fontSize="18" opacity="0.4">α</text>
      <g transform="translate(150, 110)">
        <circle cx="0" cy="0" r="12" fill="none" stroke="#3b82f6" strokeWidth="2">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <path d="M-4 12 L4 12 L3 18 L-3 18 Z" fill="#2563eb" opacity="0.6" />
        <line x1="-15" y1="0" x2="-20" y2="0" stroke="#3b82f6" strokeWidth="2" opacity="0.4" />
        <line x1="15" y1="0" x2="20" y2="0" stroke="#3b82f6" strokeWidth="2" opacity="0.4" />
        <line x1="-10" y1="-10" x2="-14" y2="-14" stroke="#3b82f6" strokeWidth="2" opacity="0.4" />
        <line x1="10" y1="-10" x2="14" y2="-14" stroke="#3b82f6" strokeWidth="2" opacity="0.4" />
      </g>
    </svg>
  ),

  Manufacturing: () => (
    <svg className="industry-graphic-svg" viewBox="0 0 300 300" fill="none">
      <rect x="50" y="150" width="200" height="100" fill="#3b82f6" opacity="0.1" stroke="#3b82f6" strokeWidth="2" />
      <rect x="80" y="100" width="25" height="50" fill="#2563eb" opacity="0.3" />
      <rect x="140" y="80" width="25" height="70" fill="#3b82f6" opacity="0.3" />
      <rect x="200" y="90" width="25" height="60" fill="#2563eb" opacity="0.3" />
      <g className="smoke">
        <ellipse cx="92" cy="90" rx="8" ry="10" fill="#94a3b8" opacity="0.3">
          <animate attributeName="cy" values="90;70;50" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.1;0" dur="3s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="152" cy="70" rx="8" ry="10" fill="#94a3b8" opacity="0.3">
          <animate attributeName="cy" values="70;50;30" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.1;0" dur="3.5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="212" cy="80" rx="8" ry="10" fill="#94a3b8" opacity="0.3">
          <animate attributeName="cy" values="80;60;40" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.1;0" dur="3.2s" repeatCount="indefinite" />
        </ellipse>
      </g>
      <rect x="50" y="200" width="200" height="15" rx="3" fill="#2563eb" opacity="0.3" />
      <circle cx="65" cy="207.5" r="7" fill="#3b82f6" opacity="0.5">
        <animateTransform attributeName="transform" type="rotate" 
          from="0 65 207.5" to="360 65 207.5" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="235" cy="207.5" r="7" fill="#3b82f6" opacity="0.5">
        <animateTransform attributeName="transform" type="rotate" 
          from="0 235 207.5" to="360 235 207.5" dur="2s" repeatCount="indefinite" />
      </circle>
      <g>
        <rect x="90" y="185" width="20" height="20" rx="2" fill="#3b82f6" opacity="0.5">
          <animate attributeName="x" values="90;180;90" dur="5s" repeatCount="indefinite" />
        </rect>
        <rect x="140" y="185" width="20" height="20" rx="2" fill="#2563eb" opacity="0.5">
          <animate attributeName="x" values="140;230;140" dur="5s" begin="1s" repeatCount="indefinite" />
        </rect>
        <rect x="190" y="185" width="20" height="20" rx="2" fill="#3b82f6" opacity="0.5">
          <animate attributeName="x" values="190;90;190" dur="5s" begin="2s" repeatCount="indefinite" />
        </rect>
      </g>
      <g transform="translate(100, 160)">
        <circle cx="0" cy="0" r="20" fill="none" stroke="#3b82f6" strokeWidth="3" />
        <circle cx="0" cy="0" r="8" fill="#3b82f6" opacity="0.4" />
        <path d="M-5 -20 L5 -20 L5 -25 L-5 -25 Z M-5 20 L5 20 L5 25 L-5 25 Z 
                 M-20 -5 L-20 5 L-25 5 L-25 -5 Z M20 -5 L20 5 L25 5 L25 -5 Z
                 M-14 -14 L-10 -18 L-18 -10 L-14 -14 Z M14 14 L18 18 L10 10 L14 14 Z
                 M14 -14 L18 -18 L10 -10 L14 -14 Z M-14 14 L-18 18 L-10 10 L-14 14 Z" 
              fill="#3b82f6" opacity="0.6">
          <animateTransform attributeName="transform" type="rotate" 
            from="0 0 0" to="360 0 0" dur="4s" repeatCount="indefinite" />
        </path>
      </g>
      <g transform="translate(180, 160)">
        <circle cx="0" cy="0" r="20" fill="none" stroke="#2563eb" strokeWidth="3" />
        <circle cx="0" cy="0" r="8" fill="#2563eb" opacity="0.4" />
        <path d="M-5 -20 L5 -20 L5 -25 L-5 -25 Z M-5 20 L5 20 L5 25 L-5 25 Z 
                 M-20 -5 L-20 5 L-25 5 L-25 -5 Z M20 -5 L20 5 L25 5 L25 -5 Z
                 M-14 -14 L-10 -18 L-18 -10 L-14 -14 Z M14 14 L18 18 L10 10 L14 14 Z
                 M14 -14 L18 -18 L10 -10 L14 -14 Z M-14 14 L-18 18 L-10 10 L-14 14 Z" 
              fill="#2563eb" opacity="0.6">
          <animateTransform attributeName="transform" type="rotate" 
            from="0 0 0" to="-360 0 0" dur="4s" repeatCount="indefinite" />
        </path>
      </g>
      <g transform="translate(220, 230)">
        <rect x="-3" y="-30" width="6" height="30" fill="#3b82f6" opacity="0.6" />
        <rect x="-3" y="-50" width="6" height="20" fill="#2563eb" opacity="0.6" 
          transform="rotate(-45 0 -30)">
          <animateTransform attributeName="transform" type="rotate" 
            values="-45 0 -30;-90 0 -30;-45 0 -30" dur="3s" repeatCount="indefinite" />
        </rect>
        <circle cx="0" cy="-50" r="4" fill="#3b82f6" />
        <rect x="-8" y="-55" width="16" height="3" fill="#2563eb" opacity="0.7" />
      </g>
      <g opacity="0.5">
        <circle cx="70" cy="170" r="3" fill="#3b82f6">
          <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="165" r="3" fill="#2563eb">
          <animate attributeName="r" values="3;6;3" dur="2s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="230" cy="170" r="3" fill="#3b82f6">
          <animate attributeName="r" values="3;6;3" dur="2s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
      </g>
      <circle cx="40" cy="230" r="15" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M33 230 L38 235 L47 225" stroke="#3b82f6" strokeWidth="2.5" 
        fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  ),

  Technology: () => (
    <svg className="industry-graphic-svg" viewBox="0 0 300 300" fill="none">
      <rect x="110" y="100" width="80" height="100" rx="8" stroke="#3b82f6" strokeWidth="3" fill="none" />
      <rect x="120" y="110" width="60" height="60" rx="4" fill="#3b82f6" opacity="0.2" />
      <line x1="130" y1="120" x2="170" y2="120" stroke="#3b82f6" strokeWidth="2" />
      <line x1="130" y1="130" x2="175" y2="130" stroke="#2563eb" strokeWidth="2" />
      <line x1="130" y1="140" x2="165" y2="140" stroke="#3b82f6" strokeWidth="2" />
      <line x1="130" y1="150" x2="178" y2="150" stroke="#2563eb" strokeWidth="2" />
      <line x1="130" y1="160" x2="160" y2="160" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="125" cy="185" r="3" fill="#3b82f6">
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="135" cy="185" r="3" fill="#2563eb">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="145" cy="185" r="3" fill="#3b82f6">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="80" r="15" fill="#3b82f6" opacity="0.3" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="250" cy="80" r="15" fill="#2563eb" opacity="0.3" stroke="#2563eb" strokeWidth="2" />
      <circle cx="50" cy="220" r="15" fill="#2563eb" opacity="0.3" stroke="#2563eb" strokeWidth="2" />
      <circle cx="250" cy="220" r="15" fill="#3b82f6" opacity="0.3" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="30" cy="150" r="10" fill="#3b82f6" opacity="0.4" />
      <circle cx="270" cy="150" r="10" fill="#2563eb" opacity="0.4" />
      <circle cx="150" cy="30" r="10" fill="#3b82f6" opacity="0.4" />
      <circle cx="150" cy="270" r="10" fill="#2563eb" opacity="0.4" />
      <g className="connections" stroke="#3b82f6" strokeWidth="2" opacity="0.4">
        <line x1="65" y1="80" x2="110" y2="120">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="190" y1="120" x2="235" y2="80">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="65" y1="220" x2="110" y2="180">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite" />
        </line>
        <line x1="190" y1="180" x2="235" y2="220">
          <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2.5s" repeatCount="indefinite" />
        </line>
        <line x1="150" y1="100" x2="150" y2="40">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="150" y1="200" x2="150" y2="260">
          <animate attributeName="opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite" />
        </line>
      </g>
      <circle cx="50" cy="80" r="4" fill="#3b82f6">
        <animate attributeName="cx" values="50;110" dur="2s" repeatCount="indefinite" />
        <animate attributeName="cy" values="80;120" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="250" cy="80" r="4" fill="#2563eb">
        <animate attributeName="cx" values="250;190" dur="2s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="cy" values="80;120" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <g transform="translate(200, 40)">
        <ellipse cx="0" cy="0" rx="15" ry="10" fill="#3b82f6" opacity="0.2" />
        <ellipse cx="-10" cy="-3" rx="12" ry="8" fill="#3b82f6" opacity="0.2" />
        <ellipse cx="10" cy="-3" rx="12" ry="8" fill="#3b82f6" opacity="0.2" />
      </g>
      <g transform="translate(100, 260)">
        <ellipse cx="0" cy="0" rx="15" ry="10" fill="#2563eb" opacity="0.2" />
        <ellipse cx="-10" cy="-3" rx="12" ry="8" fill="#2563eb" opacity="0.2" />
        <ellipse cx="10" cy="-3" rx="12" ry="8" fill="#2563eb" opacity="0.2" />
      </g>
      <text x="20" y="120" fill="#3b82f6" fontSize="12" opacity="0.3" fontFamily="monospace">101</text>
      <text x="255" y="180" fill="#2563eb" fontSize="12" opacity="0.3" fontFamily="monospace">010</text>
      <g transform="translate(80, 40)">
        <path d="M0 0 Q-10 -5 -15 -10" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite" />
        </path>
        <path d="M0 0 Q-5 -8 -8 -15" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
        </path>
        <path d="M0 0 Q0 -10 0 -18" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  ),
};

const IndustryCard = memo(({ industry }) => {
  const Icon = IndustryIcons[industry.icon];
  const Graphic = IndustryGraphics[industry.icon];

  return (
    <div className="carousel-card">
      <div className="card-graphic">
        <Graphic />
      </div>
      
      <div className="card-content">
        <div className="card-icon">
          <Icon />
        </div>
        
        <h3 className="card-title">{industry.title}</h3>
        <p className="card-description">{industry.description}</p>
        
        <ul className="card-features">
          {industry.features.map((feature, idx) => (
            <li key={idx} className="card-feature">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="feature-icon">
                <path 
                  d="M5 13l4 4L19 7" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Per-card navigation link */}
        {industry.href && (
          <a
            href={industry.href}
            className="read-more-btn"
            aria-label={`Learn more about ${industry.title}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span>Learn More</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path 
                d="M5 12h14M12 5l7 7-7 7" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
});

IndustryCard.propTypes = {
  industry: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    href: PropTypes.string, // NEW (per-card link)
  }).isRequired,
};

IndustryCard.displayName = 'IndustryCard';

const Industries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const trackRef = useRef(null);

  const industries = [
    {
      title: "Healthcare",
      description: "Transforming patient care with secure, scalable digital solutions.",
      icon: "Healthcare",
      features: [
        "Electronic Health Records",
        "Telemedicine platforms",
        "Patient management systems",
        "HIPAA compliance"
      ],
      href: "/industries/healthcare",
    },
    {
      title: "Financial Services",
      description: "Secure, compliant solutions for modern financial operations.",
      icon: "Finance",
      features: [
        "Banking applications",
        "Payment gateways",
        "Fraud detection",
        "Regulatory compliance"
      ],
      href: "/industries/financial-services",
    },
    {
      title: "E-commerce & Retail",
      description: "Building seamless shopping experiences that drive sales.",
      icon: "Ecommerce",
      features: [
        "Online marketplaces",
        "Inventory management",
        "Customer analytics",
        "Mobile commerce"
      ],
      href: "/industries/ecommerce-retail",
    },
    {
      title: "Education & E-learning",
      description: "Empowering institutions with innovative learning platforms.",
      icon: "Education",
      features: [
        "Learning management systems",
        "Virtual classrooms",
        "Student portals",
        "Assessment tools"
      ],
      href: "/industries/education",
    },
    {
      title: "Manufacturing",
      description: "Optimizing production with smart automation and IoT.",
      icon: "Manufacturing",
      features: [
        "Supply chain management",
        "Quality control systems",
        "Predictive maintenance",
        "IoT integration"
      ],
      href: "/industries/manufacturing",
    },
    {
      title: "Technology & SaaS",
      description: "Building scalable platforms that power modern businesses.",
      icon: "Technology",
      features: [
        "Cloud infrastructure",
        "API development",
        "Microservices architecture",
        "DevOps solutions"
      ],
      href: "/industries/technology-saas",
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === industries.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? industries.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Mouse/touch drag handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartPos(e.type.includes('mouse') ? e.pageX : e.touches[0].clientX);
    if (trackRef.current) trackRef.current.style.cursor = 'grabbing';
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentPosition = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    const diff = currentPosition - startPos;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (trackRef.current) trackRef.current.style.cursor = 'grab';

    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100 && currentIndex < industries.length - 1) {
      nextSlide();
    } else if (movedBy > 100 && currentIndex > 0) {
      prevSlide();
    }

    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <section className="industries" id="industries">
      <div className="industries-container">
        <div className="section-header">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-description">
            We bring deep industry expertise and technical excellence to deliver solutions 
            that address your unique challenges.
          </p>
        </div>

        <div className="carousel-wrapper">
          <div 
            ref={trackRef}
            className="carousel-track"
            style={{ 
              transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? currentTranslate : 0}px))`,
              transition: isDragging ? 'none' : 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            onMouseEnter={() => setIsAutoPlaying(false)}
          >
            {industries.map((industry, index) => (
              <div key={index} className="carousel-slide">
                <IndustryCard industry={industry} />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            className="carousel-btn carousel-btn-prev" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path 
                d="M15 18l-6-6 6-6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
          
          <button 
            className="carousel-btn carousel-btn-next" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path 
                d="M9 18l6-6-6-6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="carousel-dots">
            {industries.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
