/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RasashalaQuadrant, RasashalaQuadrantId } from '../types';
import { RASASHALA_QUADRANTS } from '../data/rasashalaData';
import {
  Compass,
  Flame,
  Activity,
  Server,
  ShieldAlert,
  BatteryCharging,
  Maximize,
  CheckCircle2,
  Cpu,
  BookOpen,
  Sparkles,
  Layers,
  Scroll,
  Radio,
  ExternalLink,
  Award,
} from 'lucide-react';
import { soundEngine } from '../utils/audioSynth';

export type CaptionResonanceMode = 'duality' | 'calligraphy' | 'hologram';
export type BlueprintViewMode = 'schematic' | 'manuscript';

interface RasashalaBlueprintProps {
  selectedQuadrantId?: RasashalaQuadrantId;
  onSelectQuadrant?: (quadrantId: RasashalaQuadrantId) => void;
  onLaunchSynthesizer?: () => void;
  onLaunchEnergyGrid?: () => void;
}

export const RasashalaBlueprint: React.FC<RasashalaBlueprintProps> = ({
  selectedQuadrantId = 'agneya',
  onSelectQuadrant,
  onLaunchSynthesizer,
  onLaunchEnergyGrid,
}) => {
  const [activeQuadrantId, setActiveQuadrantId] = useState<RasashalaQuadrantId>(selectedQuadrantId);
  const [resonanceMode, setResonanceMode] = useState<CaptionResonanceMode>('duality');
  const [viewMode, setViewMode] = useState<BlueprintViewMode>('schematic');

  const activeQuadrant =
    RASASHALA_QUADRANTS.find((q) => q.id === activeQuadrantId) || RASASHALA_QUADRANTS[0];

  const handleQuadrantClick = (id: RasashalaQuadrantId) => {
    setActiveQuadrantId(id);
    if (onSelectQuadrant) onSelectQuadrant(id);
    soundEngine.playChime();
  };

  const getQuadrantIcon = (id: RasashalaQuadrantId) => {
    switch (id) {
      case 'agneya':
        return <Flame className="w-4 h-4 text-rose-400" />;
      case 'varuna':
        return <Activity className="w-4 h-4 text-cyan-400" />;
      case 'uttara':
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 'dakshina':
        return <ShieldAlert className="w-4 h-4 text-amber-400" />;
      case 'subterranean':
        return <BatteryCharging className="w-4 h-4 text-yellow-400" />;
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Header & Dramatic Kicker */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5">
            <span>Rasa Ratna Samuccaya (13th C.) Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Spatial Prana Optimization</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-slate-100 tracking-tight">
            Quantum Rasashala Digital Twin
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-3xl font-sans">
            Architectural schematic designed precisely along Maharshi Nagarjuna’s directional layout.
            Poetic narrative captions are embedded directly on the blueprint, uniting sacred calligraphic lineage with glowing quantum telemetry.
          </p>
        </div>

        {/* Action Controls & Navigation */}
        <div className="flex items-center flex-wrap gap-2.5">
          {onLaunchEnergyGrid && (
            <button
              onClick={onLaunchEnergyGrid}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-yellow-300 bg-yellow-950/40 hover:bg-yellow-900/50 border border-yellow-800/60 rounded-lg transition-colors cursor-pointer"
            >
              <BatteryCharging className="w-3.5 h-3.5 text-yellow-400" />
              <span>Bio-Energy Telemetry</span>
            </button>
          )}
          {onLaunchSynthesizer && (
            <button
              onClick={onLaunchSynthesizer}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow transition-colors cursor-pointer"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Enter Chiral Lab</span>
            </button>
          )}
        </div>
      </div>

      {/* Toolbar: Caption Resonance Selector & View Mode Switcher */}
      <div className="bg-[#101420] border border-slate-800 rounded-xl p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
        {/* Caption Resonance Mode (Duality vs Calligraphy vs Hologram) */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Caption Resonance:</span>
          </span>
          <div className="flex items-center p-1 bg-slate-900/90 border border-slate-800 rounded-lg text-xs font-mono">
            <button
              onClick={() => {
                setResonanceMode('duality');
                soundEngine.playChime();
              }}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                resonanceMode === 'duality'
                  ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/40 shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Side-by-side calligraphic manuscript script and glowing holographic projection"
            >
              Timeless Duality
            </button>
            <button
              onClick={() => {
                setResonanceMode('calligraphy');
                soundEngine.playChime();
              }}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                resonanceMode === 'calligraphy'
                  ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/40 shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Ancient manuscript calligraphy inscribed in Brahmachari's hand"
            >
              Sacred Lineage
            </button>
            <button
              onClick={() => {
                setResonanceMode('hologram');
                soundEngine.playChime();
              }}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                resonanceMode === 'hologram'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40 shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Crystalline holographic data stream projected in the Nobel auditorium"
            >
              Quantum Hologram
            </button>
          </div>
        </div>

        {/* View Mode Toggle: Blueprint Schematic vs Companion Manuscript */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          <div className="flex items-center p-1 bg-slate-900/90 border border-slate-800 rounded-lg text-xs font-mono">
            <button
              onClick={() => setViewMode('schematic')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded transition-colors cursor-pointer ${
                viewMode === 'schematic'
                  ? 'bg-slate-800 text-slate-100 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Schematic Canvas</span>
            </button>
            <button
              onClick={() => setViewMode('manuscript')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded transition-colors cursor-pointer ${
                viewMode === 'manuscript'
                  ? 'bg-slate-800 text-slate-100 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Scroll className="w-3.5 h-3.5 text-amber-400" />
              <span>Companion Manuscript</span>
            </button>
          </div>
        </div>
      </div>

      {/* Facility Quadrant Selector Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {RASASHALA_QUADRANTS.map((quadrant) => {
          const isActive = quadrant.id === activeQuadrantId;
          return (
            <button
              key={quadrant.id}
              onClick={() => handleQuadrantClick(quadrant.id)}
              className={`p-3 rounded-lg border text-left flex flex-col gap-1 transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#182030] border-amber-500 shadow-md ring-1 ring-amber-500/30'
                  : 'bg-[#10141f] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  {quadrant.cardinalDirection}
                </span>
                {getQuadrantIcon(quadrant.id)}
              </div>
              <span className={`text-xs font-bold font-serif truncate ${isActive ? 'text-amber-300' : 'text-slate-200'}`}>
                {quadrant.sanskritName.split(' ')[0]}
              </span>
              <span className="text-[10px] text-slate-400 line-clamp-1">
                {quadrant.id === 'agneya'
                  ? 'Furnace & Foundry'
                  : quadrant.id === 'varuna'
                  ? 'Grinding & Chiral'
                  : quadrant.id === 'uttara'
                  ? 'Data & SatCom'
                  : quadrant.id === 'dakshina'
                  ? 'Ore Isolation'
                  : 'Bio-Battery & Biogas'}
              </span>
            </button>
          );
        })}
      </div>

      {viewMode === 'schematic' ? (
        /* ========================================================================= */
        /* SCHEMATIC CANVAS VIEW WITH EMBEDDED POETIC CAPTIONS DIRECTLY ON THE CANVAS */
        /* ========================================================================= */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Interactive Facility Map (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0b0e14] border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col gap-4 shadow-xl">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Compass className="w-3.5 h-3.5" />
                <span>RASA RATNA SAMUCCAYA ARCHITECTURAL SCHEMATIC</span>
              </span>
              <span className="hidden sm:inline text-slate-500">
                Mode: {resonanceMode === 'duality' ? 'Timeless Duality' : resonanceMode === 'calligraphy' ? 'Sacred Lineage' : 'Quantum Hologram'}
              </span>
            </div>

            {/* Interactive SVG Facility Map */}
            <div className="relative w-full aspect-[16/12] bg-[#07090f] rounded-lg border border-slate-800/80 overflow-hidden shadow-2xl">
              <svg
                className="w-full h-full"
                viewBox="0 0 960 760"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Vedic Grid Pattern */}
                  <pattern id="vedic-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#141c2c" strokeWidth="0.8" />
                  </pattern>

                  {/* Radial Central Glow */}
                  <radialGradient id="central-vacuum-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
                    <stop offset="60%" stopColor="#d97706" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#07090f" stopOpacity="0" />
                  </radialGradient>

                  {/* Gradient for Calligraphic Manuscript Backing */}
                  <linearGradient id="manuscript-card-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#141926" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#0c101a" stopOpacity="0.95" />
                  </linearGradient>

                  {/* Holographic Glowing Border Gradient */}
                  <linearGradient id="hologram-border-glow" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>

                  <filter id="laser-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Background Grid & Outer Vedic Walls */}
                <rect width="960" height="760" fill="#080b12" />
                <rect width="960" height="760" fill="url(#vedic-grid-pattern)" />

                {/* Outer Stone Foundation & Carbon-Fiber Truss Perimeter */}
                <rect x="40" y="35" width="880" height="690" rx="14" fill="none" stroke="#253147" strokeWidth="3" />
                <rect x="46" y="41" width="868" height="678" rx="10" fill="none" stroke="#1a2333" strokeWidth="1" strokeDasharray="6 3" />

                {/* Cardinal Flow Guides (Prana Flow Axes) */}
                <line x1="480" y1="35" x2="480" y2="725" stroke="#1f293d" strokeWidth="1.5" strokeDasharray="5 5" />
                <line x1="40" y1="380" x2="920" y2="380" stroke="#1f293d" strokeWidth="1.5" strokeDasharray="5 5" />

                {/* ================================================================= */}
                {/* 1. NORTH (Uttara): Mini Data Center & GSAT Pod                    */}
                {/* ================================================================= */}
                <g
                  onClick={() => handleQuadrantClick('uttara')}
                  className="cursor-pointer transition-all duration-300"
                >
                  {/* Outer Sector Box */}
                  <rect
                    x="55"
                    y="50"
                    width="400"
                    height="310"
                    rx="10"
                    fill={activeQuadrantId === 'uttara' ? '#042f2e' : '#081c1c'}
                    stroke={activeQuadrantId === 'uttara' ? '#10b981' : '#115e59'}
                    strokeWidth={activeQuadrantId === 'uttara' ? 2.5 : 1}
                    fillOpacity={activeQuadrantId === 'uttara' ? 0.55 : 0.28}
                  />

                  {/* Header Tag */}
                  <rect x="65" y="60" width="380" height="28" rx="5" fill="#022c22" stroke="#10b981" strokeWidth="0.8" opacity="0.8" />
                  <text x="75" y="78" fill="#34d399" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
                    उत्तर (NORTH) · IMMERSION COMPUTE & GSAT TELEMETRY POD
                  </text>
                  <circle cx="430" cy="74" r="4" fill="#10b981" className="animate-pulse" />

                  {/* Apparatus Graphic: Server Racks in Herbal Dielectric Oil */}
                  <g transform="translate(80, 100)">
                    {/* Tank 1 */}
                    <rect x="0" y="0" width="60" height="70" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="1.2" />
                    <line x1="10" y1="15" x2="50" y2="15" stroke="#34d399" strokeWidth="2" />
                    <line x1="10" y1="30" x2="50" y2="30" stroke="#34d399" strokeWidth="2" />
                    <line x1="10" y1="45" x2="50" y2="45" stroke="#34d399" strokeWidth="2" />
                    <line x1="10" y1="60" x2="50" y2="60" stroke="#34d399" strokeWidth="2" />

                    {/* Tank 2 */}
                    <rect x="75" y="0" width="60" height="70" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="1.2" />
                    <line x1="85" y1="15" x2="125" y2="15" stroke="#34d399" strokeWidth="2" />
                    <line x1="85" y1="30" x2="125" y2="30" stroke="#34d399" strokeWidth="2" />
                    <line x1="85" y1="45" x2="125" y2="45" stroke="#34d399" strokeWidth="2" />
                    <line x1="85" y1="60" x2="125" y2="60" stroke="#34d399" strokeWidth="2" />

                    {/* GSAT Satellite Terminal & Orbital Ring */}
                    <g transform="translate(230, 35)">
                      <circle cx="0" cy="0" r="32" fill="none" stroke="#34d399" strokeWidth="1.2" strokeDasharray="4 2" />
                      <circle cx="0" cy="0" r="22" fill="#047857" opacity="0.4" />
                      <circle cx="0" cy="0" r="8" fill="#10b981" />
                      <text x="0" y="4" textAnchor="middle" fill="#ecfdf5" fontSize="8" fontFamily="monospace">
                        10G
                      </text>
                      <path d="M -30 -15 L 30 15" stroke="#a7f3d0" strokeWidth="1" strokeDasharray="2 2" />
                      <text x="0" y="46" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="monospace">
                        GSAT-QUANTUM-26
                      </text>
                    </g>
                  </g>

                  {/* EMBEDDED POETIC NARRATIVE CAPTION CARD (Directly Beneath Component) */}
                  <g transform="translate(68, 186)">
                    <rect
                      x="0"
                      y="0"
                      width="374"
                      height="160"
                      rx="6"
                      fill="url(#manuscript-card-bg)"
                      stroke={activeQuadrantId === 'uttara' ? '#10b981' : '#1e2d42'}
                      strokeWidth="1.2"
                    />

                    {/* Corner Reticles */}
                    <line x1="3" y1="8" x2="8" y2="3" stroke="#34d399" strokeWidth="1.5" />
                    <line x1="371" y1="8" x2="366" y2="3" stroke="#34d399" strokeWidth="1.5" />

                    {/* Sanskrit Inscription Header */}
                    <text x="12" y="18" fill="#fef08a" fontSize="10" fontFamily="serif" fontWeight="bold">
                      {RASASHALA_QUADRANTS[2].poeticCaptions.sanskritVerse}
                    </text>

                    {/* DUALITY VIEW: Side-by-Side or Stacked Voices */}
                    {resonanceMode !== 'hologram' && (
                      <g transform="translate(12, 32)">
                        <text
                          x="0"
                          y="0"
                          fill="#fef08a"
                          fontSize="9.5"
                          fontStyle="italic"
                          fontFamily="serif"
                          width="350"
                        >
                          <tspan x="0" dy="0">"In the calm northern stillness, cool herbal dielectric waters</tspan>
                          <tspan x="0" dy="13">cradle crystalline compute racks, preserving Nagarjuna’s</tspan>
                          <tspan x="0" dy="13">eternal memory across centuries of silence."</tspan>
                        </text>
                        <text x="0" y="48" fill="#a1a1aa" fontSize="7.5" fontFamily="monospace">
                          — {RASASHALA_QUADRANTS[2].poeticCaptions.calligraphicAttribution}
                        </text>
                      </g>
                    )}

                    {resonanceMode !== 'calligraphy' && (
                      <g transform={`translate(12, ${resonanceMode === 'duality' ? '90' : '36'})`}>
                        <rect x="0" y="0" width="350" height="58" rx="4" fill="#022c22" stroke="#10b981" strokeWidth="0.8" opacity="0.85" />
                        <text x="8" y="14" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold">
                          {RASASHALA_QUADRANTS[2].poeticCaptions.holographicChannelTag}
                        </text>
                        <text x="8" y="27" fill="#67e8f9" fontSize="7.5" fontFamily="monospace">
                          UPLINK: 128 IMMERSION NODES ONLINE // POST-QUANTUM CHIRAL
                        </text>
                        <text x="8" y="39" fill="#a5f3fc" fontSize="7.5" fontFamily="monospace">
                          LATTICE CRYPTOGRAPHY // 10 GBPS BANDWIDTH LOCKED
                        </text>
                        <text x="8" y="50" fill="#34d399" fontSize="7" fontFamily="monospace">
                          METADATA: {RASASHALA_QUADRANTS[2].poeticCaptions.holographicMetadata}
                        </text>
                      </g>
                    )}
                  </g>
                </g>

                {/* ================================================================= */}
                {/* 2. SOUTH (Dakshina): Raw Mineral Storage & Heavy Ore Isolation    */}
                {/* ================================================================= */}
                <g
                  onClick={() => handleQuadrantClick('dakshina')}
                  className="cursor-pointer transition-all duration-300"
                >
                  {/* Outer Sector Box */}
                  <rect
                    x="505"
                    y="50"
                    width="400"
                    height="310"
                    rx="10"
                    fill={activeQuadrantId === 'dakshina' ? '#451a03' : '#1c1308'}
                    stroke={activeQuadrantId === 'dakshina' ? '#f59e0b' : '#78350f'}
                    strokeWidth={activeQuadrantId === 'dakshina' ? 2.5 : 1}
                    fillOpacity={activeQuadrantId === 'dakshina' ? 0.55 : 0.28}
                  />

                  {/* Header Tag */}
                  <rect x="515" y="60" width="380" height="28" rx="5" fill="#291804" stroke="#f59e0b" strokeWidth="0.8" opacity="0.8" />
                  <text x="525" y="78" fill="#facc15" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
                    दक्षिण (SOUTH) · RAW MINERAL STORAGE & ISOLATION VAULT
                  </text>
                  <circle cx="880" cy="74" r="4" fill="#eab308" />

                  {/* Apparatus Graphic: Negative Pressure Bunkers */}
                  <g transform="translate(540, 100)">
                    {/* Vault 1: Stibnite Sb2S3 */}
                    <rect x="0" y="0" width="90" height="70" rx="4" fill="#3a1d04" stroke="#eab308" strokeWidth="1.2" />
                    <text x="45" y="32" textAnchor="middle" fill="#fef08a" fontSize="13" fontWeight="bold">
                      Sb₂S₃
                    </text>
                    <text x="45" y="52" textAnchor="middle" fill="#fde047" fontSize="8" fontFamily="monospace">
                      RAW STIBNITE (450 KG)
                    </text>
                    <rect x="8" y="58" width="74" height="4" rx="2" fill="#713f12" />

                    {/* Vault 2: Cinnabar HgS */}
                    <rect x="110" y="0" width="90" height="70" rx="4" fill="#3a1d04" stroke="#eab308" strokeWidth="1.2" />
                    <text x="155" y="32" textAnchor="middle" fill="#fef08a" fontSize="13" fontWeight="bold">
                      HgS / S
                    </text>
                    <text x="155" y="52" textAnchor="middle" fill="#fde047" fontSize="8" fontFamily="monospace">
                      CINNABAR / SULFUR
                    </text>
                    <rect x="118" y="58" width="74" height="4" rx="2" fill="#713f12" />

                    {/* Negative Pressure Valve & Air-lock Gauge */}
                    <g transform="translate(265, 35)">
                      <circle cx="0" cy="0" r="26" fill="#1e1305" stroke="#f59e0b" strokeWidth="1.5" />
                      <line x1="0" y1="0" x2="-14" y2="-10" stroke="#ef4444" strokeWidth="2" />
                      <circle cx="0" cy="0" r="3" fill="#ffffff" />
                      <text x="0" y="38" textAnchor="middle" fill="#facc15" fontSize="8" fontFamily="monospace">
                        ΔP: -25 Pa
                      </text>
                    </g>
                  </g>

                  {/* EMBEDDED POETIC NARRATIVE CAPTION CARD */}
                  <g transform="translate(518, 186)">
                    <rect
                      x="0"
                      y="0"
                      width="374"
                      height="160"
                      rx="6"
                      fill="url(#manuscript-card-bg)"
                      stroke={activeQuadrantId === 'dakshina' ? '#f59e0b' : '#1e2d42'}
                      strokeWidth="1.2"
                    />

                    {/* Corner Reticles */}
                    <line x1="3" y1="8" x2="8" y2="3" stroke="#eab308" strokeWidth="1.5" />
                    <line x1="371" y1="8" x2="366" y2="3" stroke="#eab308" strokeWidth="1.5" />

                    {/* Sanskrit Inscription Header */}
                    <text x="12" y="18" fill="#fde047" fontSize="10" fontFamily="serif" fontWeight="bold">
                      {RASASHALA_QUADRANTS[3].poeticCaptions.sanskritVerse}
                    </text>

                    {resonanceMode !== 'hologram' && (
                      <g transform="translate(12, 32)">
                        <text
                          x="0"
                          y="0"
                          fill="#fef08a"
                          fontSize="9.5"
                          fontStyle="italic"
                          fontFamily="serif"
                        >
                          <tspan x="0" dy="0">"In the fortified southern quadrant, raw antimony sleeps</tspan>
                          <tspan x="0" dy="13">under negative vacuum, shielded from moisture until</tspan>
                          <tspan x="0" dy="13">ready for the sacred fire of Shodhana."</tspan>
                        </text>
                        <text x="0" y="48" fill="#a1a1aa" fontSize="7.5" fontFamily="monospace">
                          — {RASASHALA_QUADRANTS[3].poeticCaptions.calligraphicAttribution}
                        </text>
                      </g>
                    )}

                    {resonanceMode !== 'calligraphy' && (
                      <g transform={`translate(12, ${resonanceMode === 'duality' ? '90' : '36'})`}>
                        <rect x="0" y="0" width="350" height="58" rx="4" fill="#291804" stroke="#f59e0b" strokeWidth="0.8" opacity="0.85" />
                        <text x="8" y="14" fill="#fbbf24" fontSize="8" fontFamily="monospace" fontWeight="bold">
                          {RASASHALA_QUADRANTS[3].poeticCaptions.holographicChannelTag}
                        </text>
                        <text x="8" y="27" fill="#fef08a" fontSize="7.5" fontFamily="monospace">
                          CONTAINMENT: SB2S3 ISOLATION ZONE // NEGATIVE PRESSURE
                        </text>
                        <text x="8" y="39" fill="#fef9c3" fontSize="7.5" fontFamily="monospace">
                          VACUUM @ -25 PA // ZERO RESIDUAL PARTICULATE LEAKAGE
                        </text>
                        <text x="8" y="50" fill="#facc15" fontSize="7" fontFamily="monospace">
                          PURIFICATION: {RASASHALA_QUADRANTS[3].poeticCaptions.holographicMetadata}
                        </text>
                      </g>
                    )}
                  </g>
                </g>

                {/* ================================================================= */}
                {/* 3. CENTER: Patana Yantra Distillation Column & Agastya Battery Core */}
                {/* ================================================================= */}
                <g
                  onClick={() => handleQuadrantClick('subterranean')}
                  className="cursor-pointer transition-all duration-300"
                >
                  {/* Central Background Halo */}
                  <circle cx="480" cy="380" r="105" fill="url(#central-vacuum-glow)" />
                  <circle
                    cx="480"
                    cy="380"
                    r="82"
                    fill="#15120e"
                    stroke={activeQuadrantId === 'subterranean' ? '#f59e0b' : '#92400e'}
                    strokeWidth={activeQuadrantId === 'subterranean' ? 3 : 1.5}
                  />

                  {/* Concentric Vedic Yantra Geometry */}
                  <rect
                    x="425"
                    y="325"
                    width="110"
                    height="110"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="1"
                    strokeDasharray="4 2"
                    transform="rotate(45 480 380)"
                  />
                  <circle cx="480" cy="380" r="54" fill="#241708" stroke="#fbbf24" strokeWidth="1.8" />

                  {/* Lost-Wax Cast Bronze Distillation Column Apparatus */}
                  <g transform="translate(480, 380)">
                    <rect x="-14" y="-36" width="28" height="72" rx="3" fill="#78350f" stroke="#f59e0b" strokeWidth="1.5" />
                    <line x1="-14" y1="0" x2="14" y2="0" stroke="#fef08a" strokeWidth="2" />
                    {/* Condensation Vapor Tube */}
                    <path d="M 0 -36 Q 28 -20 28 15 L 28 36" fill="none" stroke="#fde047" strokeWidth="1.8" />
                    <circle cx="28" cy="36" r="5" fill="#f59e0b" />
                    <text x="0" y="4" textAnchor="middle" fill="#fef08a" fontSize="7" fontFamily="monospace" fontWeight="bold">
                      12 mbar
                    </text>
                  </g>

                  {/* Subterranean Conduits Radiating Outward to 500 Agastya Pots */}
                  <line x1="480" y1="462" x2="480" y2="495" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="3 2" />
                  <circle cx="480" cy="502" r="7" fill="#f59e0b" />
                  <text x="480" y="522" textAnchor="middle" fill="#fde047" fontSize="9" fontFamily="monospace" fontWeight="bold">
                    AGASTYA ORGANIC POT MATRIX (550.0 V)
                  </text>

                  {/* Embedded Center Caption Banner (Beneath Center) */}
                  <g transform="translate(255, 532)">
                    <rect
                      x="0"
                      y="0"
                      width="450"
                      height="65"
                      rx="6"
                      fill="url(#manuscript-card-bg)"
                      stroke={activeQuadrantId === 'subterranean' ? '#f59e0b' : '#334155'}
                      strokeWidth="1.2"
                    />
                    <text x="12" y="16" fill="#fde047" fontSize="9.5" fontFamily="serif" fontWeight="bold">
                      {RASASHALA_QUADRANTS[4].poeticCaptions.sanskritVerse}
                    </text>
                    <text x="12" y="32" fill="#fef08a" fontSize="8.5" fontStyle="italic" fontFamily="serif">
                      "At the motionless navel, vacuum stills the vapor while 500 buried pots drink microbial warmth from the living earth."
                    </text>
                    <text x="12" y="48" fill="#38bdf8" fontSize="7.5" fontFamily="monospace">
                      {RASASHALA_QUADRANTS[4].poeticCaptions.holographicTelemetry}
                    </text>
                  </g>
                </g>

                {/* ================================================================= */}
                {/* 4. WEST (Varuna): Mechanical Grinders & Micro-fluidic Screening   */}
                {/* ================================================================= */}
                <g
                  onClick={() => handleQuadrantClick('varuna')}
                  className="cursor-pointer transition-all duration-300"
                >
                  {/* Outer Sector Box */}
                  <rect
                    x="55"
                    y="395"
                    width="400"
                    height="320"
                    rx="10"
                    fill={activeQuadrantId === 'varuna' ? '#082f49' : '#061726'}
                    stroke={activeQuadrantId === 'varuna' ? '#0284c7' : '#0369a1'}
                    strokeWidth={activeQuadrantId === 'varuna' ? 2.5 : 1}
                    fillOpacity={activeQuadrantId === 'varuna' ? 0.55 : 0.28}
                  />

                  {/* Header Tag */}
                  <rect x="65" y="405" width="380" height="28" rx="5" fill="#032541" stroke="#0284c7" strokeWidth="0.8" opacity="0.8" />
                  <text x="75" y="423" fill="#38bdf8" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
                    वारुण (WEST) · MUSA CRUCIBLES & MICRO-FLUIDIC CHIRAL SCREENING
                  </text>
                  <circle cx="430" cy="419" r="4" fill="#38bdf8" />

                  {/* Apparatus Graphic: Grinders & Trituration Vats */}
                  <g transform="translate(85, 445)">
                    {/* Planetary Grinder 1 */}
                    <circle cx="40" cy="35" r="30" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="5 2" />
                    <circle cx="40" cy="35" r="14" fill="#0284c7" />
                    <text x="40" y="38" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace">
                      18nm
                    </text>

                    {/* Planetary Grinder 2 */}
                    <circle cx="120" cy="35" r="30" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="5 2" />
                    <circle cx="120" cy="35" r="14" fill="#0284c7" />
                    <text x="120" y="38" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace">
                      D:L
                    </text>

                    {/* Microfluidic Screening Chip */}
                    <g transform="translate(180, 5)">
                      <rect x="0" y="0" width="130" height="60" rx="4" fill="#082f49" stroke="#38bdf8" strokeWidth="1" />
                      <line x1="15" y1="15" x2="115" y2="15" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="15" y1="30" x2="115" y2="30" stroke="#34d399" strokeWidth="1.5" />
                      <line x1="15" y1="45" x2="115" y2="45" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                      <text x="65" y="33" textAnchor="middle" fill="#a7f3d0" fontSize="7.5" fontFamily="monospace">
                        99.4% D-PURITY
                      </text>
                    </g>
                  </g>

                  {/* EMBEDDED POETIC NARRATIVE CAPTION CARD */}
                  <g transform="translate(68, 545)">
                    <rect
                      x="0"
                      y="0"
                      width="374"
                      height="160"
                      rx="6"
                      fill="url(#manuscript-card-bg)"
                      stroke={activeQuadrantId === 'varuna' ? '#0284c7' : '#1e2d42'}
                      strokeWidth="1.2"
                    />

                    {/* Corner Reticles */}
                    <line x1="3" y1="8" x2="8" y2="3" stroke="#38bdf8" strokeWidth="1.5" />
                    <line x1="371" y1="8" x2="366" y2="3" stroke="#38bdf8" strokeWidth="1.5" />

                    {/* Sanskrit Inscription Header */}
                    <text x="12" y="18" fill="#7dd3fc" fontSize="10" fontFamily="serif" fontWeight="bold">
                      {RASASHALA_QUADRANTS[1].poeticCaptions.sanskritVerse}
                    </text>

                    {resonanceMode !== 'hologram' && (
                      <g transform="translate(12, 32)">
                        <text
                          x="0"
                          y="0"
                          fill="#fef08a"
                          fontSize="9.5"
                          fontStyle="italic"
                          fontFamily="serif"
                        >
                          <tspan x="0" dy="0">"Under the gentle western breeze, stone pestles dance</tspan>
                          <tspan x="0" dy="13">with herbal juices through twenty-one Bhavana cycles,</tspan>
                          <tspan x="0" dy="13">awakening the subtle asymmetric hand of the molecule."</tspan>
                        </text>
                        <text x="0" y="48" fill="#a1a1aa" fontSize="7.5" fontFamily="monospace">
                          — {RASASHALA_QUADRANTS[1].poeticCaptions.calligraphicAttribution}
                        </text>
                      </g>
                    )}

                    {resonanceMode !== 'calligraphy' && (
                      <g transform={`translate(12, ${resonanceMode === 'duality' ? '90' : '36'})`}>
                        <rect x="0" y="0" width="350" height="58" rx="4" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="0.8" opacity="0.85" />
                        <text x="8" y="14" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold">
                          {RASASHALA_QUADRANTS[1].poeticCaptions.holographicChannelTag}
                        </text>
                        <text x="8" y="27" fill="#bae6fd" fontSize="7.5" fontFamily="monospace">
                          SCREENING: D-ENANTIOMERIC PURITY: 99.4% // 0.0% LIVER
                        </text>
                        <text x="8" y="39" fill="#e0f2fe" fontSize="7.5" fontFamily="monospace">
                          CYTOTOXICITY // KALA-AZAR AMASTIGOTE MEMBRANE TARGET
                        </text>
                        <text x="8" y="50" fill="#38bdf8" fontSize="7" fontFamily="monospace">
                          METRIC: {RASASHALA_QUADRANTS[1].poeticCaptions.holographicMetadata}
                        </text>
                      </g>
                    )}
                  </g>
                </g>

                {/* ================================================================= */}
                {/* 5. SOUTHEAST (Agneya): High Energy Induction Furnaces & Foundry   */}
                {/* ================================================================= */}
                <g
                  onClick={() => handleQuadrantClick('agneya')}
                  className="cursor-pointer transition-all duration-300"
                >
                  {/* Outer Sector Box */}
                  <rect
                    x="505"
                    y="395"
                    width="400"
                    height="320"
                    rx="10"
                    fill={activeQuadrantId === 'agneya' ? '#450a0a' : '#22080a'}
                    stroke={activeQuadrantId === 'agneya' ? '#ef4444' : '#991b1b'}
                    strokeWidth={activeQuadrantId === 'agneya' ? 2.5 : 1}
                    fillOpacity={activeQuadrantId === 'agneya' ? 0.55 : 0.28}
                  />

                  {/* Header Tag */}
                  <rect x="515" y="405" width="380" height="28" rx="5" fill="#330c0e" stroke="#ef4444" strokeWidth="0.8" opacity="0.8" />
                  <text x="525" y="423" fill="#f87171" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
                    आग्नेय (SOUTHEAST) · ANGARA KOSTHI INDUCTION FURNACES & FOUNDRY
                  </text>
                  <circle cx="880" cy="419" r="4" fill="#ef4444" />

                  {/* Apparatus Graphic: Induction Furnaces & Lost-Wax Bronze Cast */}
                  <g transform="translate(540, 445)">
                    {/* Furnace 1 */}
                    <circle cx="45" cy="35" r="30" fill="#450a0a" stroke="#ef4444" strokeWidth="2" />
                    <circle cx="45" cy="35" r="16" fill="#f59e0b" />
                    <text x="45" y="38" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">
                      780°C
                    </text>

                    {/* Furnace 2 */}
                    <circle cx="125" cy="35" r="30" fill="#450a0a" stroke="#ef4444" strokeWidth="2" />
                    <circle cx="125" cy="35" r="16" fill="#f59e0b" />
                    <text x="125" y="38" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">
                      CO-GEN
                    </text>

                    {/* Lost-Wax Bronze Foundry Bracket & Biogas Duct */}
                    <g transform="translate(180, 5)">
                      <rect x="0" y="0" width="130" height="60" rx="4" fill="#2d0a0d" stroke="#f87171" strokeWidth="1" />
                      <path d="M 15 15 L 45 45 M 45 15 L 15 45" stroke="#ef4444" strokeWidth="1.5" />
                      <text x="75" y="24" fill="#fca5a5" fontSize="8" fontFamily="monospace">
                        LOST-WAX MOLD
                      </text>
                      <text x="75" y="38" fill="#f87171" fontSize="7.5" fontFamily="monospace">
                        PANCHA-LOHA
                      </text>
                      <text x="75" y="50" fill="#fca5a5" fontSize="7" fontFamily="monospace">
                        O2 &lt; 10 PPM
                      </text>
                    </g>
                  </g>

                  {/* EMBEDDED POETIC NARRATIVE CAPTION CARD */}
                  <g transform="translate(518, 545)">
                    <rect
                      x="0"
                      y="0"
                      width="374"
                      height="160"
                      rx="6"
                      fill="url(#manuscript-card-bg)"
                      stroke={activeQuadrantId === 'agneya' ? '#ef4444' : '#1e2d42'}
                      strokeWidth="1.2"
                    />

                    {/* Corner Reticles */}
                    <line x1="3" y1="8" x2="8" y2="3" stroke="#f87171" strokeWidth="1.5" />
                    <line x1="371" y1="8" x2="366" y2="3" stroke="#f87171" strokeWidth="1.5" />

                    {/* Sanskrit Inscription Header */}
                    <text x="12" y="18" fill="#fca5a5" fontSize="10" fontFamily="serif" fontWeight="bold">
                      {RASASHALA_QUADRANTS[0].poeticCaptions.sanskritVerse}
                    </text>

                    {resonanceMode !== 'hologram' && (
                      <g transform="translate(12, 32)">
                        <text
                          x="0"
                          y="0"
                          fill="#fef08a"
                          fontSize="9.5"
                          fontStyle="italic"
                          fontFamily="serif"
                        >
                          <tspan x="0" dy="0">"Where the furnace faces the solar dawn, lost-wax bronze</tspan>
                          <tspan x="0" dy="13">crucibles tame the wild antimony ore at 780°C, releasing</tspan>
                          <tspan x="0" dy="13">its healing spirit while locking its toxic teeth."</tspan>
                        </text>
                        <text x="0" y="48" fill="#a1a1aa" fontSize="7.5" fontFamily="monospace">
                          — {RASASHALA_QUADRANTS[0].poeticCaptions.calligraphicAttribution}
                        </text>
                      </g>
                    )}

                    {resonanceMode !== 'calligraphy' && (
                      <g transform={`translate(12, ${resonanceMode === 'duality' ? '90' : '36'})`}>
                        <rect x="0" y="0" width="350" height="58" rx="4" fill="#3b0f14" stroke="#ef4444" strokeWidth="0.8" opacity="0.85" />
                        <text x="8" y="14" fill="#f87171" fontSize="8" fontFamily="monospace" fontWeight="bold">
                          {RASASHALA_QUADRANTS[0].poeticCaptions.holographicChannelTag}
                        </text>
                        <text x="8" y="27" fill="#fca5a5" fontSize="7.5" fontFamily="monospace">
                          LOOP: INDUCTION CORE @ 780°C // CO-GENERATED BY SOVEREIGN
                        </text>
                        <text x="8" y="39" fill="#fee2e2" fontSize="7.5" fontFamily="monospace">
                          ANAEROBIC BIOGAS DOME // 0% MUNICIPAL GRID DEPENDENCE
                        </text>
                        <text x="8" y="50" fill="#f87171" fontSize="7" fontFamily="monospace">
                          FOUNDRY: {RASASHALA_QUADRANTS[0].poeticCaptions.holographicMetadata}
                        </text>
                      </g>
                    )}
                  </g>
                </g>
              </svg>
            </div>
          </div>

          {/* Right: Quadrant Inspector & Classical Citations (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#101420] border border-slate-800 rounded-xl p-5 flex flex-col gap-4 shadow-lg">
              {/* Quadrant Title & Direction */}
              <div className="flex items-start justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                    {activeQuadrant.cardinalDirection} Quadrant
                  </span>
                  <h3 className="text-xl font-bold font-serif text-slate-100">
                    {activeQuadrant.sanskritName}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{activeQuadrant.title}</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  {getQuadrantIcon(activeQuadrant.id)}
                </div>
              </div>

              {/* DUALITY NARRATIVE SPOTLIGHT CARD */}
              <div className="p-4 bg-gradient-to-br from-[#131926] to-[#0c101a] border border-amber-500/40 rounded-xl flex flex-col gap-3 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-serif font-bold text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Embedded Voice Analysis</span>
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded">
                    {activeQuadrant.poeticCaptions.holographicChannelTag.split('//')[0]}
                  </span>
                </div>

                {/* Calligraphic Manuscript Line */}
                <div className="p-3 bg-amber-950/20 border-l-2 border-amber-500 rounded-r text-xs text-amber-100 font-serif leading-relaxed italic">
                  <p className="font-bold text-amber-300 not-italic text-[11px] mb-1">
                    {activeQuadrant.poeticCaptions.sanskritVerse}
                  </p>
                  <p className="font-sans text-[11.5px] text-amber-200/90 not-italic">
                    "{activeQuadrant.poeticCaptions.calligraphicInscription}"
                  </p>
                  <span className="text-[10px] font-mono text-amber-400/80 block mt-1.5 not-italic">
                    — {activeQuadrant.poeticCaptions.calligraphicAttribution}
                  </span>
                </div>

                {/* Holographic Projection Stream */}
                <div className="p-3 bg-cyan-950/30 border-l-2 border-cyan-500 rounded-r text-xs font-mono text-cyan-300 leading-relaxed">
                  <p className="font-bold text-cyan-400 text-[10px] uppercase tracking-wider mb-0.5">
                    [QUANTUM HOLOGRAPHIC STREAM]
                  </p>
                  <p className="text-[11px] text-cyan-200">
                    {activeQuadrant.poeticCaptions.holographicTelemetry}
                  </p>
                  <span className="text-[9.5px] text-emerald-400 block mt-1">
                    {activeQuadrant.poeticCaptions.holographicMetadata}
                  </span>
                </div>
              </div>

              {/* Classical vs Modern Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 bg-slate-900/80 border border-slate-800 rounded-lg">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-1">
                    Classical Yantra
                  </span>
                  <p className="text-slate-300 font-sans leading-snug">
                    {activeQuadrant.classicalEquipment}
                  </p>
                </div>
                <div className="p-2.5 bg-slate-900/80 border border-slate-800 rounded-lg">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                    Quantum Equivalent
                  </span>
                  <p className="text-slate-300 font-sans leading-snug">
                    {activeQuadrant.modernEquivalent}
                  </p>
                </div>
              </div>

              {/* Live Operational Telemetry */}
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Real-Time Telemetry Parameters
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {activeQuadrant.liveParameters.map((param, idx) => (
                    <div
                      key={idx}
                      className="p-2 bg-slate-900/60 border border-slate-800/80 rounded flex flex-col gap-0.5"
                    >
                      <span className="text-[10px] text-slate-400 truncate">{param.label}</span>
                      <span className="text-sm font-mono font-bold text-slate-100 tabular-nums">
                        {param.value}
                      </span>
                      <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        {param.status.toUpperCase()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description Notes */}
              <p className="text-xs text-slate-400 leading-relaxed font-sans border-t border-slate-800/80 pt-3">
                {activeQuadrant.description}
              </p>
            </div>

            {/* Real-World Nobel Baseline Callout (2026 Kagun & Soai Homochirality Connection) */}
            <div className="p-4 bg-gradient-to-r from-blue-950/40 to-slate-900/60 border border-blue-800/40 rounded-xl text-xs flex flex-col gap-2">
              <div className="flex items-center gap-2 text-blue-300 font-serif font-bold">
                <Award className="w-4 h-4 text-blue-400" />
                <span>The Nobel 2026 Chiral Heritage Connection</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                As announced in October 2026, the Nobel Prize in Chemistry honors pioneering breakthroughs in asymmetric autocatalysis and molecular homochirality (Henri B. Kagan & Kenso Soai). The Quantum Rasashala mirrors this real-world milestone, demonstrating how Sir Upendranath Brahmachari's single-handed Urea Stibamine synthesis prefigured modern stereochemical mastery a century earlier.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* COMPANION MANUSCRIPT VIEW (PALIMPSEST OF SACRED INK & QUANTUM LIGHT)      */
        /* ========================================================================= */
        <div className="flex flex-col gap-6">
          <div className="p-5 bg-gradient-to-r from-[#121624] via-[#1a2030] to-[#101420] border border-amber-900/40 rounded-xl flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <Scroll className="w-4 h-4 text-amber-400" />
              <span>THE LIVING PALIMPSEST · FIVE SACRED ANCHORS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-100">
              Companion Manuscript: Timeless Duality of the Rasashala
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Each component of the Quantum Rasashala carries two voices at once: the hand-inscribed sacred calligraphic verse representing Brahmachari and Nagarjuna’s eternal lineage, paired side-by-side with the glowing holographic data streams projected in the 2026 Nobel auditorium.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RASASHALA_QUADRANTS.map((quadrant) => (
              <div
                key={quadrant.id}
                className={`bg-[#0f131f] border rounded-xl p-5 flex flex-col gap-4 shadow-lg transition-all ${
                  quadrant.id === activeQuadrantId
                    ? 'border-amber-500/70 ring-1 ring-amber-500/30'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Sector Title & Icon */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {getQuadrantIcon(quadrant.id)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-amber-400 uppercase">
                        {quadrant.cardinalDirection} Quadrant
                      </span>
                      <h3 className="text-base font-bold font-serif text-slate-100">
                        {quadrant.sanskritName}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setActiveQuadrantId(quadrant.id);
                      setViewMode('schematic');
                      soundEngine.playChime();
                    }}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 cursor-pointer"
                  >
                    View on Map →
                  </button>
                </div>

                {/* Voice 1: Sacred Calligraphic Inscription */}
                <div className="p-3.5 bg-amber-950/20 border-l-2 border-amber-500 rounded-r text-xs flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">
                    [VOICE I: SACRED CALLIGRAPHIC INSCRIPTION]
                  </span>
                  <p className="font-serif font-bold text-amber-300 text-xs">
                    {quadrant.poeticCaptions.sanskritVerse}
                  </p>
                  <p className="font-serif italic text-amber-100/90 leading-relaxed">
                    "{quadrant.poeticCaptions.calligraphicInscription}"
                  </p>
                  <span className="text-[10px] font-mono text-amber-400/70 text-right mt-1">
                    — {quadrant.poeticCaptions.calligraphicAttribution}
                  </span>
                </div>

                {/* Voice 2: Holographic Quantum Stream */}
                <div className="p-3.5 bg-cyan-950/30 border-l-2 border-cyan-500 rounded-r text-xs flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    [VOICE II: HOLOGRAPHIC QUANTUM STREAM]
                  </span>
                  <p className="font-mono text-cyan-200 text-xs leading-relaxed">
                    {quadrant.poeticCaptions.holographicTelemetry}
                  </p>
                  <span className="text-[10px] font-mono text-emerald-400 mt-1">
                    {quadrant.poeticCaptions.holographicMetadata}
                  </span>
                </div>

                {/* Classical vs Quantum Hardware */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
                  <div className="p-2 bg-slate-900/70 rounded border border-slate-800">
                    <span className="text-amber-400 text-[10px] block">Classical:</span>
                    <span className="text-slate-300 text-[10.5px] line-clamp-2">
                      {quadrant.classicalEquipment}
                    </span>
                  </div>
                  <div className="p-2 bg-slate-900/70 rounded border border-slate-800">
                    <span className="text-cyan-400 text-[10px] block">Quantum:</span>
                    <span className="text-slate-300 text-[10.5px] line-clamp-2">
                      {quadrant.modernEquivalent}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
