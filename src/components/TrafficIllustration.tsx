import React from 'react';

interface IntersectionProps {
  scenario?: 'priority' | 'unregulated' | 'traffic_light';
  className?: string;
  theme?: 'light' | 'dark';
}

export const IntersectionSvg: React.FC<IntersectionProps> = ({
  scenario = 'priority',
  className = '',
  theme = 'light',
}) => {
  const isLight = theme === 'light';

  return (
    <div className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden border transition-colors ${
      isLight ? 'bg-[#E8EDF2] border-black/[0.08]' : 'bg-[#070D18] border-[#162a45]'
    } ${className}`}>
      <svg
        viewBox="0 0 500 375"
        className="w-full h-full select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Asphalt gradient */}
          <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            {isLight ? (
              <>
                <stop offset="0%" stopColor="#374151" />
                <stop offset="100%" stopColor="#1F2937" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#121D2F" />
                <stop offset="100%" stopColor="#0B1320" />
              </>
            )}
          </linearGradient>

          {/* Car gradients */}
          <linearGradient id="carBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0071E3" />
            <stop offset="100%" stopColor="#0051A3" />
          </linearGradient>
          <linearGradient id="carRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF453A" />
            <stop offset="100%" stopColor="#D70015" />
          </linearGradient>
          <linearGradient id="carGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#30D158" />
            <stop offset="100%" stopColor="#248A3D" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Grass / Ground terrain */}
        <rect width="500" height="375" fill={isLight ? '#E8EDF2' : '#070D18'} />

        {/* Sidewalk borders */}
        <rect x="0" y="110" width="500" height="155" fill={isLight ? '#CBD5E1' : '#101C2D'} />
        <rect x="180" y="0" width="140" height="375" fill={isLight ? '#CBD5E1' : '#101C2D'} />

        {/* Road surface */}
        <rect x="0" y="125" width="500" height="125" fill="url(#roadGrad)" />
        <rect x="195" y="0" width="110" height="375" fill="url(#roadGrad)" />

        {/* Intersection center area */}
        <rect x="195" y="125" width="110" height="125" fill={isLight ? '#283344' : '#152238'} />

        {/* Road Markings - Dashed white lane dividers */}
        {/* Horizontal road center line */}
        <line x1="10" y1="187.5" x2="175" y2="187.5" stroke="#FFFFFF" strokeOpacity={isLight ? "0.75" : "0.4"} strokeWidth="2.5" strokeDasharray="10 8" />
        <line x1="325" y1="187.5" x2="490" y2="187.5" stroke="#FFFFFF" strokeOpacity={isLight ? "0.75" : "0.4"} strokeWidth="2.5" strokeDasharray="10 8" />

        {/* Vertical road center line */}
        <line x1="250" y1="10" x2="250" y2="105" stroke="#FFFFFF" strokeOpacity={isLight ? "0.75" : "0.4"} strokeWidth="2.5" strokeDasharray="10 8" />
        <line x1="250" y1="270" x2="250" y2="365" stroke="#FFFFFF" strokeOpacity={isLight ? "0.75" : "0.4"} strokeWidth="2.5" strokeDasharray="10 8" />

        {/* Pedestrian Crossings (Zebra) */}
        {/* West crossing */}
        {[135, 147, 159, 171, 183, 195, 207, 219, 231].map((y) => (
          <rect key={`w-${y}`} x="165" y={y} width="22" height="6" fill="#FFFFFF" fillOpacity={isLight ? "0.75" : "0.35"} rx="1" />
        ))}
        {/* East crossing */}
        {[135, 147, 159, 171, 183, 195, 207, 219, 231].map((y) => (
          <rect key={`e-${y}`} x="313" y={y} width="22" height="6" fill="#FFFFFF" fillOpacity={isLight ? "0.75" : "0.35"} rx="1" />
        ))}
        {/* North crossing */}
        {[205, 217, 229, 241, 253, 265, 277, 289].map((x) => (
          <rect key={`n-${x}`} x={x} y="95" width="6" height="22" fill="#FFFFFF" fillOpacity={isLight ? "0.75" : "0.35"} rx="1" />
        ))}
        {/* South crossing */}
        {[205, 217, 229, 241, 253, 265, 277, 289].map((x) => (
          <rect key={`s-${x}`} x={x} y="258" width="6" height="22" fill="#FFFFFF" fillOpacity={isLight ? "0.75" : "0.35"} rx="1" />
        ))}

        {/* TRAFFIC SIGNS according to scenario */}
        {scenario === 'priority' && (
          <g>
            {/* Main Road Sign 2.1 (Asosiy yo'l - Yellow Diamond) for East-West road */}
            <g transform="translate(130, 265)">
              {/* Post */}
              <circle cx="15" cy="15" r="4" fill={isLight ? "#475569" : "#64748B"} />
              {/* Diamond */}
              <polygon points="15,0 30,15 15,30 0,15" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
              <polygon points="15,4 26,15 15,26 4,15" fill="#FBBF24" />
              {/* Sign label */}
              <text x="15" y="42" fill={isLight ? "#334155" : "#94A3B8"} fontSize="8" textAnchor="middle" fontWeight="bold">2.1</text>
            </g>

            {/* Give Way Sign 2.4 (Yo'l bering - Inverted Triangle) for North road */}
            <g transform="translate(325, 60)">
              <polygon points="15,26 0,0 30,0" fill="#EF4444" />
              <polygon points="15,20 5,4 25,4" fill="#FFFFFF" />
              <text x="15" y="-5" fill={isLight ? "#334155" : "#94A3B8"} fontSize="8" textAnchor="middle" fontWeight="bold">2.4</text>
            </g>

            {/* Give Way Sign 2.4 for South road */}
            <g transform="translate(150, 310)">
              <polygon points="15,26 0,0 30,0" fill="#EF4444" />
              <polygon points="15,20 5,4 25,4" fill="#FFFFFF" />
              <text x="15" y="38" fill={isLight ? "#334155" : "#94A3B8"} fontSize="8" textAnchor="middle" fontWeight="bold">2.4</text>
            </g>
          </g>
        )}

        {scenario === 'unregulated' && (
          <g>
            {/* Equal intersection cross icon indicator */}
            <g transform="translate(140, 265)">
              <circle cx="15" cy="15" r="14" fill={isLight ? "#FFFFFF" : "#1E293B"} stroke="#0071E3" strokeWidth="1.5" />
              <path d="M15 6 V24 M6 15 H24" stroke="#0071E3" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          </g>
        )}

        {scenario === 'traffic_light' && (
          <g>
            {/* Traffic Light on corner */}
            <g transform="translate(325, 70)">
              <rect x="0" y="0" width="16" height="38" rx="4" fill="#020617" stroke="#334155" strokeWidth="1.5" />
              <circle cx="8" cy="8" r="4.5" fill="#22C55E" filter="url(#glow)" />
              <circle cx="8" cy="19" r="4.5" fill="#713F12" />
              <circle cx="8" cy="30" r="4.5" fill="#7F1D1D" />
            </g>
          </g>
        )}

        {/* VEHICLES */}

        {/* Car B (Blue car - going straight west-to-east on Main Road) */}
        <g transform="translate(80, 200)">
          {/* Motion arrow */}
          <path d="M70 12 L115 12" stroke="#0071E3" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="120,12 112,8 112,16" fill="#0071E3" />

          {/* Car body */}
          <rect x="0" y="0" width="56" height="24" rx="6" fill="url(#carBlue)" />
          {/* Roof/Windows */}
          <rect x="14" y="3" width="26" height="18" rx="3" fill="#0A1E3A" opacity="0.9" />
          {/* Headlights */}
          <rect x="52" y="2" width="3" height="4" fill="#FEF08A" rx="1" />
          <rect x="52" y="18" width="3" height="4" fill="#FEF08A" rx="1" />
          {/* Label Badge */}
          <circle cx="28" cy="12" r="8" fill="#FFFFFF" />
          <text x="28" y="15.5" fill="#0F172A" fontSize="10" fontWeight="bold" textAnchor="middle">B</text>
        </g>

        {/* Car A (Red car - moving east-to-west, turning left south) */}
        <g transform="translate(360, 145)">
          {/* Turn trajectory */}
          <path d="M-10 12 C -60 12, -90 40, -110 90" fill="none" stroke="#FF453A" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="-110,95 -106,86 -114,88" fill="#FF453A" />

          {/* Car body */}
          <rect x="0" y="0" width="56" height="24" rx="6" fill="url(#carRed)" />
          {/* Roof/Windows */}
          <rect x="16" y="3" width="26" height="18" rx="3" fill="#380D0D" opacity="0.9" />
          {/* Headlights facing left */}
          <rect x="1" y="2" width="3" height="4" fill="#FEF08A" rx="1" />
          <rect x="1" y="18" width="3" height="4" fill="#FEF08A" rx="1" />
          {/* Label Badge */}
          <circle cx="28" cy="12" r="8" fill="#FFFFFF" />
          <text x="28" y="15.5" fill="#0F172A" fontSize="10" fontWeight="bold" textAnchor="middle">A</text>
        </g>

        {/* Car C (Green car - waiting at secondary road going north or straight) */}
        <g transform="translate(265, 300)">
          {/* Motion arrow */}
          <path d="M12 -10 L12 -45" stroke="#30D158" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="12,-50 8,-42 16,-42" fill="#30D158" />

          {/* Car body (vertical) */}
          <rect x="0" y="0" width="24" height="52" rx="6" fill="url(#carGreen)" />
          {/* Roof/Windows */}
          <rect x="3" y="14" width="18" height="24" rx="3" fill="#063223" opacity="0.9" />
          {/* Headlights */}
          <rect x="2" y="1" width="4" height="3" fill="#FEF08A" rx="1" />
          <rect x="18" y="1" width="4" height="3" fill="#FEF08A" rx="1" />
          {/* Label Badge */}
          <circle cx="12" cy="26" r="8" fill="#FFFFFF" />
          <text x="12" y="29.5" fill="#0F172A" fontSize="10" fontWeight="bold" textAnchor="middle">C</text>
        </g>

        {/* Compass / Orientation indicator */}
        <g transform="translate(25, 25)">
          <circle cx="16" cy="16" r="14" fill={isLight ? "#FFFFFF" : "#0C1625"} stroke={isLight ? "#CBD5E1" : "#1E293B"} strokeWidth="1" />
          <path d="M16 6 L20 16 L16 14 L12 16 Z" fill="#0071E3" />
          <path d="M16 26 L20 16 L16 14 L12 16 Z" fill={isLight ? "#94A3B8" : "#64748B"} />
          <text x="16" y="5" fill="#0071E3" fontSize="7" fontWeight="bold" textAnchor="middle">N</text>
        </g>
      </svg>
    </div>
  );
};
