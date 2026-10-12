/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface PanelArtworkProps {
  panelNumber: number;
}

export const PanelArtwork: React.FC<PanelArtworkProps> = ({ panelNumber }) => {
  switch (panelNumber) {
    case 1:
      // Calcutta 1921: Campbell Medical School & Ancient Blueprints
      return (
        <div className="relative w-full h-72 sm:h-84 md:h-96 bg-gradient-to-b from-[#141824] via-[#1a1c2b] to-[#0c0e14] overflow-hidden rounded-lg border border-amber-900/40">
          {/* Colonial laboratory background with high arched windows */}
          <svg className="w-full h-full" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="p1-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2c221e" />
                <stop offset="100%" stopColor="#141113" />
              </linearGradient>
              <linearGradient id="p1-sunbeam" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
              </linearGradient>
              <radialGradient id="p1-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#d97706" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Room Architecture */}
            <rect width="800" height="450" fill="url(#p1-sky)" />
            
            {/* Colonial Arched Window */}
            <path d="M 120 40 Q 220 -20 320 40 L 320 300 L 120 300 Z" fill="#201c1f" stroke="#78350f" strokeWidth="2" opacity="0.6" />
            <line x1="220" y1="10" x2="220" y2="300" stroke="#78350f" strokeWidth="2" opacity="0.5" />
            <line x1="120" y1="120" x2="320" y2="120" stroke="#78350f" strokeWidth="2" opacity="0.5" />
            <line x1="120" y1="210" x2="320" y2="210" stroke="#78350f" strokeWidth="2" opacity="0.5" />

            {/* Dusty Sunlight Beam */}
            <polygon points="120,40 320,40 700,450 300,450" fill="url(#p1-sunbeam)" />

            {/* Laboratory Shelves with Reagent Bottles */}
            <rect x="20" y="80" width="70" height="8" fill="#451a03" />
            <rect x="25" y="45" width="16" height="35" rx="3" fill="#0284c7" opacity="0.6" />
            <rect x="48" y="52" width="22" height="28" rx="2" fill="#d97706" opacity="0.7" />
            <rect x="20" y="160" width="70" height="8" fill="#451a03" />
            <rect x="30" y="125" width="20" height="35" rx="3" fill="#10b981" opacity="0.5" />

            {/* Wooden Drafting Table */}
            <polygon points="180,280 760,260 720,440 100,440" fill="#291a13" stroke="#451a03" strokeWidth="2" />
            
            {/* Ancient Blueprint Scroll on Table with Glowing Vedic Yantra geometry */}
            <polygon points="260,290 680,275 650,420 220,410" fill="#fef3c7" opacity="0.12" stroke="#d97706" strokeWidth="1.5" />
            
            {/* Mandalas / Yantra Lines on Blueprint */}
            <circle cx="450" cy="350" r="45" fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.8" />
            <rect x="415" y="315" width="70" height="70" fill="none" stroke="#f59e0b" strokeWidth="1.2" opacity="0.7" transform="rotate(45 450 350)" />
            <circle cx="450" cy="350" r="22" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.8" />
            <line x1="370" y1="350" x2="530" y2="350" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <line x1="450" y1="280" x2="450" y2="420" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

            {/* Glowing Blueprint Glow */}
            <circle cx="450" cy="350" r="90" fill="url(#p1-glow)" />

            {/* Dr. Upendranath Brahmachari Silhouette */}
            <g transform="translate(480, 110)">
              {/* Head with spectacles */}
              <circle cx="50" cy="50" r="32" fill="#1c1917" stroke="#b45309" strokeWidth="1.5" />
              {/* Round spectacles gleam */}
              <circle cx="42" cy="48" r="8" fill="none" stroke="#fbbf24" strokeWidth="1.8" />
              <circle cx="58" cy="48" r="8" fill="none" stroke="#fbbf24" strokeWidth="1.8" />
              <line x1="50" y1="48" x2="50" y2="48" stroke="#fbbf24" strokeWidth="1.5" />
              {/* Scholarly Coat / Kurta */}
              <path d="M 15 82 Q 50 78 85 82 L 120 280 L -10 280 Z" fill="#0c0a09" stroke="#78350f" strokeWidth="1" />
              {/* Left hand gesturing to blueprint */}
              <path d="M 20 120 Q -20 170 -60 210" fill="none" stroke="#b45309" strokeWidth="8" strokeLinecap="round" />
            </g>

            {/* Assistant Silhouette */}
            <g transform="translate(180, 150)">
              <circle cx="40" cy="40" r="26" fill="#1c1917" />
              <path d="M 14 65 Q 40 60 66 65 L 85 240 L -5 240 Z" fill="#0f172a" />
              {/* Test Tube with raw antimony */}
              <rect x="75" y="85" width="8" height="42" rx="4" fill="#38bdf8" opacity="0.8" />
              <circle cx="79" cy="120" r="3" fill="#cbd5e1" />
            </g>

            {/* Text Overlay in Sanskrit */}
            <text x="450" y="390" textAnchor="middle" fill="#d97706" fontSize="11" fontFamily="sans-serif" letterSpacing="2" opacity="0.9">
              रसशाला निर्माण · Campbell Medical School 1921
            </text>
          </svg>
          <div className="absolute top-3 left-3 bg-black/80 border border-amber-500/30 px-2.5 py-1 text-[11px] font-mono text-amber-300 rounded uppercase">
            CALCUTTA 1921 · CAMPBELL MEDICAL SCHOOL
          </div>
          <div className="absolute bottom-3 right-3 text-right">
            <span className="text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-0.5 border border-slate-800 rounded">
              Spatial Prana Flow vs Western Ducting
            </span>
          </div>
        </div>
      );

    case 2:
      // Quadrant Architecture: Agneya Furnaces & West Grinders
      return (
        <div className="relative w-full h-72 sm:h-84 md:h-96 bg-[#0f131c] overflow-hidden rounded-lg border border-amber-900/40">
          <svg className="w-full h-full" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="p2-furnace" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
              <linearGradient id="p2-grind" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            <rect width="800" height="450" fill="#090d16" />

            {/* Grid overlay */}
            <g stroke="#1e293b" strokeWidth="0.5" strokeDasharray="4 4">
              <line x1="400" y1="0" x2="400" y2="450" stroke="#b45309" strokeWidth="1.5" />
              <line x1="0" y1="225" x2="800" y2="225" stroke="#b45309" strokeWidth="1.5" />
            </g>

            {/* SE Quadrant: High Energy Induction Furnaces */}
            <g transform="translate(430, 240)">
              <rect width="340" height="190" fill="#1c1315" rx="6" stroke="#ef4444" strokeWidth="1.2" />
              <text x="170" y="28" textAnchor="middle" fill="#f87171" fontSize="13" fontWeight="bold" letterSpacing="1">
                आग्नेय (SOUTHEAST) · ANGARA KOSTHI
              </text>
              {/* Induction Coil */}
              <circle cx="170" cy="115" r="50" fill="none" stroke="url(#p2-furnace)" strokeWidth="6" strokeDasharray="14 6" />
              <circle cx="170" cy="115" r="32" fill="#7f1d1d" />
              <circle cx="170" cy="115" r="18" fill="#f59e0b" />
              <text x="170" y="119" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="monospace">
                780 °C
              </text>
              <text x="170" y="178" textAnchor="middle" fill="#fca5a5" fontSize="10" fontFamily="monospace">
                HEAT FACES THE SUN · LOST-WAX MOLDS
              </text>
            </g>

            {/* West Quadrant: Mechanical Grinders & Micro-fluidics */}
            <g transform="translate(30, 240)">
              <rect width="340" height="190" fill="#0c1626" rx="6" stroke="#38bdf8" strokeWidth="1.2" />
              <text x="170" y="28" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold" letterSpacing="1">
                वारुण (WEST) · MUSA CRUCIBLE DYNAMICS
              </text>
              {/* Planetary Grinder Cog / Mill */}
              <circle cx="170" cy="115" r="48" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeDasharray="8 4" />
              <circle cx="170" cy="115" r="28" fill="#0369a1" opacity="0.4" />
              <circle cx="135" cy="115" r="12" fill="#38bdf8" />
              <circle cx="205" cy="115" r="12" fill="#38bdf8" />
              <circle cx="170" cy="80" r="12" fill="#38bdf8" />
              <text x="170" y="178" textAnchor="middle" fill="#bae6fd" fontSize="10" fontFamily="monospace">
                BHAVANA TRITURATION · CHIRAL PARTITION
              </text>
            </g>

            {/* North Quadrant: Compute & Pure Waters */}
            <g transform="translate(30, 20)">
              <rect width="340" height="190" fill="#0d1b1e" rx="6" stroke="#10b981" strokeWidth="1.2" />
              <text x="170" y="28" textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="bold" letterSpacing="1">
                उत्तर (NORTH) · PRISTINE COMPUTE
              </text>
              {/* Server crystalline racks */}
              <rect x="90" y="55" width="45" height="90" fill="#064e3b" stroke="#10b981" rx="2" />
              <rect x="145" y="55" width="45" height="90" fill="#064e3b" stroke="#10b981" rx="2" />
              <rect x="200" y="55" width="45" height="90" fill="#064e3b" stroke="#10b981" rx="2" />
              <line x1="90" y1="85" x2="245" y2="85" stroke="#34d399" strokeWidth="1" />
              <line x1="90" y1="115" x2="245" y2="115" stroke="#34d399" strokeWidth="1" />
              <text x="170" y="178" textAnchor="middle" fill="#a7f3d0" fontSize="10" fontFamily="monospace">
                HERBAL DIELECTRIC IMMERSION · GSAT LINK
              </text>
            </g>

            {/* South Quadrant: Toxic Ore Isolation */}
            <g transform="translate(430, 20)">
              <rect width="340" height="190" fill="#1c160c" rx="6" stroke="#eab308" strokeWidth="1.2" />
              <text x="170" y="28" textAnchor="middle" fill="#facc15" fontSize="13" fontWeight="bold" letterSpacing="1">
                दक्षिण (SOUTH) · HEAVY ORE ISOLATION
              </text>
              {/* Hazard Isolation Vault */}
              <polygon points="170,55 230,145 110,145" fill="none" stroke="#eab308" strokeWidth="3" />
              <text x="170" y="125" textAnchor="middle" fill="#fef08a" fontSize="24" fontWeight="bold">
                Sb
              </text>
              <text x="170" y="178" textAnchor="middle" fill="#fef08a" fontSize="10" fontFamily="monospace">
                RAW ANTIMONY ORE · ISOLATED FROM WATER
              </text>
            </g>
          </svg>
          <div className="absolute top-3 left-3 bg-black/80 border border-cyan-500/30 px-2.5 py-1 text-[11px] font-mono text-cyan-300 rounded uppercase">
            RASA RATNA SAMUCCAYA · 4-QUADRANT SPATIAL MATRIX
          </div>
        </div>
      );

    case 3:
      // The Convergence: Nagarjuna's Phantom & Patana Yantra
      return (
        <div className="relative w-full h-72 sm:h-84 md:h-96 bg-gradient-to-tr from-[#080b12] via-[#101426] to-[#1a1530] overflow-hidden rounded-lg border border-purple-900/40">
          <svg className="w-full h-full" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="p3-ethereal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#eab308" stopOpacity="0.0" />
              </linearGradient>
              <radialGradient id="p3-halo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Cosmic Starlight Backdrop */}
            <rect width="800" height="450" fill="#080b14" />
            <circle cx="120" cy="60" r="1.5" fill="#ffffff" opacity="0.6" />
            <circle cx="280" cy="40" r="2" fill="#ffffff" opacity="0.8" />
            <circle cx="680" cy="80" r="1" fill="#ffffff" opacity="0.7" />
            <circle cx="720" cy="150" r="2" fill="#ffffff" opacity="0.5" />

            {/* Glowing Ethereal Avatar of Maharshi Nagarjuna */}
            <circle cx="480" cy="160" r="160" fill="url(#p3-halo)" />
            <g transform="translate(430, 40)" opacity="0.85">
              {/* Sage Silhouette with Jata (Matted Hair) */}
              <circle cx="50" cy="45" r="32" fill="#581c87" stroke="#c084fc" strokeWidth="2" />
              <ellipse cx="50" cy="15" rx="18" ry="12" fill="#581c87" stroke="#c084fc" strokeWidth="1.5" />
              {/* Sage Robe / Utariya */}
              <path d="M 10 75 Q 50 65 90 75 L 140 320 L -30 320 Z" fill="#3b0764" stroke="#a855f7" strokeWidth="1.5" />
              {/* Third Eye Glow */}
              <circle cx="50" cy="40" r="4" fill="#fbbf24" />
            </g>

            {/* Traditional Patana Yantra transforming into Modern Rotary Evaporator */}
            <g transform="translate(340, 160)">
              {/* Lower Vessel (Classical Earthen / Lost-Wax Bronze) */}
              <path d="M 20 180 Q 70 230 120 180 L 110 110 Q 70 90 30 110 Z" fill="#78350f" stroke="#d97706" strokeWidth="2.5" />
              {/* Bent Glass Condenser Tube */}
              <path d="M 70 90 C 70 30 180 30 180 110 L 220 160" fill="none" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
              <path d="M 180 110 L 220 160" fill="none" stroke="#e0f2fe" strokeWidth="2" />
              {/* Modern Receiving Flask (Borosilicate Floating) */}
              <circle cx="230" cy="180" r="28" fill="#0284c7" opacity="0.4" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="230" cy="190" r="14" fill="#fbbf24" opacity="0.8" />
              {/* Vacuum gauge */}
              <circle cx="130" cy="35" r="12" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1="130" y1="35" x2="136" y2="30" stroke="#ef4444" strokeWidth="2" />
            </g>

            {/* Dr. Upendranath Brahmachari in foreground */}
            <g transform="translate(140, 150)">
              <circle cx="50" cy="50" r="30" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
              {/* Spectacles with burning conviction */}
              <circle cx="44" cy="48" r="7" fill="none" stroke="#fbbf24" strokeWidth="2" />
              <circle cx="58" cy="48" r="7" fill="none" stroke="#fbbf24" strokeWidth="2" />
              <path d="M 20 80 Q 50 75 80 80 L 110 300 L -10 300 Z" fill="#0f172a" stroke="#312e81" strokeWidth="1.5" />
            </g>

            <text x="400" y="420" textAnchor="middle" fill="#c084fc" fontSize="12" fontFamily="monospace" letterSpacing="2">
              "WE WILL CONVERT AYURVEDA INTO THE ULTIMATE, PRECISE ALLOPATHY!"
            </text>
          </svg>
          <div className="absolute top-3 left-3 bg-black/80 border border-purple-500/30 px-2.5 py-1 text-[11px] font-mono text-purple-300 rounded uppercase">
            PATANA YANTRA · ROTARY DISTILLATION EVOLUTION
          </div>
        </div>
      );

    case 4:
      // Act II: Shodhana to Organometallic Nanocage (Split Screen)
      return (
        <div className="relative w-full h-72 sm:h-84 md:h-96 bg-[#0a0f18] overflow-hidden rounded-lg border border-cyan-900/40">
          <svg className="w-full h-full" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
            <rect width="800" height="450" fill="#090d16" />

            {/* Split Screen Divider */}
            <line x1="400" y1="0" x2="400" y2="450" stroke="#1e293b" strokeWidth="3" />
            <line x1="400" y1="0" x2="400" y2="450" stroke="#f59e0b" strokeWidth="1" strokeDasharray="6 6" />

            {/* Left Side: Ancient Shodhana with Plant Juices */}
            <g transform="translate(20, 20)">
              <text x="180" y="25" textAnchor="middle" fill="#d97706" fontSize="13" fontWeight="bold" letterSpacing="1">
                ANCIENT SHODHANA & MARANA
              </text>
              <text x="180" y="45" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                RASA RATNA SAMUCCAYA · BOTANICAL INCINERATION
              </text>

              {/* Clay Mortar (Khalva Yantra) with herbal juices */}
              <ellipse cx="180" cy="220" rx="110" ry="45" fill="#451a03" stroke="#78350f" strokeWidth="3" />
              <ellipse cx="180" cy="215" rx="85" ry="30" fill="#14532d" />
              {/* Ore particles in herbal swirl */}
              <circle cx="150" cy="210" r="6" fill="#eab308" />
              <circle cx="190" cy="220" r="5" fill="#eab308" />
              <circle cx="170" cy="205" r="7" fill="#eab308" />
              <circle cx="210" cy="215" r="4" fill="#eab308" />

              {/* Incineration Flames */}
              <path d="M 120 300 Q 140 250 150 290 Q 170 230 180 285 Q 200 240 210 295 Q 230 250 240 300 Z" fill="#dc2626" opacity="0.6" />
              <text x="180" y="360" textAnchor="middle" fill="#fef08a" fontSize="11" fontFamily="sans-serif">
                100× Herbal Trituration → Sub-Micron Bhasma
              </text>
            </g>

            {/* Right Side: Modern Organometallic Urea Cage */}
            <g transform="translate(420, 20)">
              <text x="180" y="25" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold" letterSpacing="1">
                MODERN GEOMETRIC DETOXIFICATION
              </text>
              <text x="180" y="45" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                ORGANIC UREA CAGING ANTIMONY CORE
              </text>

              {/* Central Antimony Core (Sb) */}
              <circle cx="180" cy="210" r="34" fill="#ef4444" stroke="#f87171" strokeWidth="3" />
              <text x="180" y="217" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="bold">
                Sb
              </text>

              {/* Organic Urea Molecules Wrapping Around like a Protective Cage */}
              <g stroke="#38bdf8" strokeWidth="2" fill="none">
                {/* Ring 1 */}
                <ellipse cx="180" cy="210" rx="90" ry="38" transform="rotate(-30 180 210)" />
                {/* Ring 2 */}
                <ellipse cx="180" cy="210" rx="90" ry="38" transform="rotate(30 180 210)" />
              </g>

              {/* Urea Molecule Nodes */}
              <circle cx="105" cy="170" r="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="105" y="174" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">NH2</text>
              
              <circle cx="255" cy="250" r="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="255" y="254" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">C=O</text>

              <circle cx="245" cy="165" r="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="245" y="169" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">NH</text>

              <text x="180" y="340" textAnchor="middle" fill="#4ade80" fontSize="11" fontWeight="bold">
                Liver Toxicity Neutralized · Parasite Penetration Active
              </text>
              <text x="180" y="360" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                [H₂N-CO-NH-C₆H₄-SbO₂]
              </text>
            </g>
          </svg>
          <div className="absolute top-3 left-3 bg-black/80 border border-amber-500/30 px-2.5 py-1 text-[11px] font-mono text-amber-300 rounded uppercase">
            PARADIGM CONVERGENCE · SHODHANA VS STEREOCHEMISTRY
          </div>
        </div>
      );

    case 5:
      // Panel 5: The Crucible at 2:00 AM (Vacuum Distillation)
      return (
        <div className="relative w-full h-72 sm:h-84 md:h-96 bg-[#0a0d14] overflow-hidden rounded-lg border border-cyan-800/40">
          <svg className="w-full h-full" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="p5-frost" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="800" height="450" fill="#070a10" />

            {/* Laboratory Clock reading 2:00 AM */}
            <circle cx="710" cy="70" r="38" fill="#1e293b" stroke="#475569" strokeWidth="2" />
            <line x1="710" y1="70" x2="710" y2="45" stroke="#f87171" strokeWidth="2" />
            <line x1="710" y1="70" x2="728" y2="70" stroke="#f87171" strokeWidth="2" />
            <text x="710" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
              02:00 AM
            </text>

            {/* Custom Vacuum Distillation Apparatus */}
            <g transform="translate(240, 60)">
              {/* Boiling Flask heated by Agneya coil */}
              <circle cx="100" cy="220" r="60" fill="#1e1b4b" stroke="#f59e0b" strokeWidth="3" />
              {/* Liquid inside bubbling */}
              <path d="M 45 230 Q 100 215 155 230 A 60 60 0 0 1 45 230" fill="#d97706" opacity="0.8" />
              <circle cx="85" cy="245" r="4" fill="#fef08a" />
              <circle cx="115" cy="235" r="6" fill="#fef08a" />

              {/* Heating Mantle / Furnace Glow */}
              <path d="M 30 250 Q 100 310 170 250" fill="none" stroke="#ef4444" strokeWidth="6" />

              {/* Vertical Column */}
              <rect x="90" y="50" width="20" height="110" fill="#0284c7" opacity="0.3" stroke="#38bdf8" strokeWidth="2" />
              {/* Distillation Head & Thermometer */}
              <circle cx="100" cy="50" r="16" fill="#0284c7" opacity="0.4" stroke="#38bdf8" strokeWidth="2" />
              <line x1="100" y1="15" x2="100" y2="70" stroke="#ef4444" strokeWidth="2" />

              {/* Angled Condenser with Swirling Liquid Nitrogen Mist */}
              <line x1="110" y1="50" x2="260" y2="160" stroke="#38bdf8" strokeWidth="18" strokeLinecap="round" opacity="0.5" />
              <line x1="110" y1="50" x2="260" y2="160" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />

              {/* Liquid Nitrogen Frost Clouds around feet */}
              <ellipse cx="200" cy="330" rx="180" ry="40" fill="url(#p5-frost)" />

              {/* Receiving Flask */}
              <circle cx="280" cy="210" r="35" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="280" cy="225" r="18" fill="#eab308" opacity="0.8" />
            </g>

            {/* Dr. Brahmachari operating valves */}
            <g transform="translate(110, 110)">
              <circle cx="50" cy="50" r="28" fill="#1c1917" stroke="#b45309" strokeWidth="2" />
              <circle cx="44" cy="48" r="6" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
              <circle cx="58" cy="48" r="6" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
              {/* Sweat drop gleam */}
              <circle cx="68" cy="42" r="2" fill="#38bdf8" />
              <path d="M 20 78 Q 50 72 80 78 L 100 290 L -5 290 Z" fill="#090a0f" stroke="#78350f" strokeWidth="1" />
              <path d="M 75 110 L 160 140" stroke="#b45309" strokeWidth="7" strokeLinecap="round" />
            </g>

            {/* Assistant Nilmani at Pressure Gauges */}
            <g transform="translate(580, 150)">
              <circle cx="40" cy="40" r="24" fill="#1c1917" stroke="#38bdf8" strokeWidth="1.5" />
              <path d="M 15 64 Q 40 58 65 64 L 80 250 L 0 250 Z" fill="#0f172a" />
              {/* Pressure Gauge */}
              <circle cx="10" cy="90" r="18" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
              <line x1="10" y1="90" x2="16" y2="80" stroke="#ef4444" strokeWidth="2" />
            </g>

            <text x="400" y="420" textAnchor="middle" fill="#f59e0b" fontSize="12" fontFamily="monospace" letterSpacing="1">
              PRESSURE: 12 mbar · FURNACE: 780 °C · CHIRAL TRANSITION IN PROGRESS
            </text>
          </svg>
          <div className="absolute top-3 left-3 bg-black/80 border border-amber-500/30 px-2.5 py-1 text-[11px] font-mono text-amber-300 rounded uppercase">
            2:00 AM · CRITICAL VACUUM PATANA YANTRA PHASE
          </div>
        </div>
      );

    case 6:
      // Panel 6: Macro Shot — Asymmetric Amplification & Urea Stibamine
      return (
        <div className="relative w-full h-72 sm:h-84 md:h-96 bg-[#090b14] overflow-hidden rounded-lg border border-amber-500/50">
          <svg className="w-full h-full" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="p6-center-burst" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
                <stop offset="25%" stopColor="#f59e0b" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#b45309" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#090b14" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Glowing Golden Burst of Crystallization */}
            <rect width="800" height="450" fill="#080911" />
            <circle cx="400" cy="225" r="260" fill="url(#p6-center-burst)" />

            {/* Beautiful Ordered Rhombohedral Crystalline Lattice */}
            <g stroke="#fef08a" strokeWidth="1.5" opacity="0.85">
              {/* Central Diamond Crystal Lattice */}
              <polygon points="400,100 480,180 400,260 320,180" fill="#f59e0b" fillOpacity="0.25" stroke="#fde047" strokeWidth="2" />
              <polygon points="480,180 560,260 480,340 400,260" fill="#f59e0b" fillOpacity="0.2" stroke="#fde047" strokeWidth="2" />
              <polygon points="320,180 400,260 320,340 240,260" fill="#f59e0b" fillOpacity="0.2" stroke="#fde047" strokeWidth="2" />
              <polygon points="400,260 480,340 400,420 320,340" fill="#f59e0b" fillOpacity="0.3" stroke="#fde047" strokeWidth="2" />

              {/* Chiral Seed Rays radiating outwards */}
              <line x1="400" y1="225" x2="600" y2="80" stroke="#fef08a" strokeWidth="2" strokeDasharray="6 3" />
              <line x1="400" y1="225" x2="200" y2="80" stroke="#fef08a" strokeWidth="2" strokeDasharray="6 3" />
              <line x1="400" y1="225" x2="650" y2="350" stroke="#fef08a" strokeWidth="2" strokeDasharray="6 3" />
              <line x1="400" y1="225" x2="150" y2="350" stroke="#fef08a" strokeWidth="2" strokeDasharray="6 3" />
            </g>

            {/* Antimony-Urea Complex Atoms */}
            <circle cx="400" cy="225" r="22" fill="#ef4444" stroke="#fef08a" strokeWidth="3" />
            <text x="400" y="232" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">
              Sb
            </text>

            <circle cx="400" cy="100" r="14" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
            <text x="400" y="104" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Urea</text>

            <circle cx="560" cy="260" r="14" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
            <text x="560" y="264" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Urea</text>

            <circle cx="240" cy="260" r="14" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
            <text x="240" y="264" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Urea</text>

            <text x="400" y="380" textAnchor="middle" fill="#fde047" fontSize="14" fontWeight="bold" letterSpacing="2">
              UREA STIBAMINE · CHIRAL AMPLIFICATION (99.4%)
            </text>
            <text x="400" y="405" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">
              Nagarjuna's Bhasma Realized in Modern Organic Chemistry
            </text>
          </svg>
          <div className="absolute top-3 left-3 bg-black/80 border border-yellow-500/50 px-2.5 py-1 text-[11px] font-mono text-yellow-300 rounded uppercase">
            CRYSTALLIZATION COMPLETE · POSITIVE NON-LINEAR EFFECT
          </div>
        </div>
      );

    case 7:
      // Act III: Stockholm 2026 Nobel Prize Ceremony
      return (
        <div className="relative w-full h-72 sm:h-84 md:h-96 bg-[#0a0e1c] overflow-hidden rounded-lg border border-blue-900/40">
          <svg className="w-full h-full" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="p7-screen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <rect width="800" height="450" fill="#070913" />

            {/* Giant Holographic Screens in Stockholm Auditorium */}
            <rect x="80" y="30" width="640" height="240" rx="8" fill="url(#p7-screen)" stroke="#38bdf8" strokeWidth="1.5" />
            
            {/* Holographic Wireframe of the Quantum Rasashala */}
            <g stroke="#38bdf8" strokeWidth="1" opacity="0.6">
              <polygon points="400,60 620,130 400,200 180,130" fill="none" />
              <line x1="400" y1="60" x2="400" y2="200" />
              <line x1="180" y1="130" x2="620" y2="130" />
              <circle cx="400" cy="130" r="40" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
            </g>

            {/* Text on Hologram Screen */}
            <text x="400" y="85" textAnchor="middle" fill="#93c5fd" fontSize="13" fontWeight="bold" letterSpacing="2">
              THE NOBEL PRIZE IN CHEMISTRY 2026
            </text>
            <text x="400" y="240" textAnchor="middle" fill="#fef08a" fontSize="11" fontFamily="monospace">
              "QUANTUM METALLURGY OF THE RASA RATNA SAMUCCAYA"
            </text>

            {/* Nobel Podium in Foreground */}
            <polygon points="340,320 460,320 490,450 310,450" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
            
            {/* Dr. Ananya Ray at the Podium */}
            <g transform="translate(370, 240)">
              {/* Nobel Laureate Silhouette */}
              <circle cx="30" cy="30" r="22" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
              <path d="M 5 50 Q 30 45 55 50 L 70 180 L -10 180 Z" fill="#1e1b4b" stroke="#312e81" strokeWidth="1" />
              {/* Nobel Gold Medal Gleam */}
              <circle cx="30" cy="95" r="9" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
            </g>

            <text x="400" y="420" textAnchor="middle" fill="#38bdf8" fontSize="11" fontFamily="sans-serif">
              Stockholm Concert Hall · Dedicated to Sir Upendranath Brahmachari & Acharya P.C. Ray
            </text>
          </svg>
          <div className="absolute top-3 left-3 bg-black/80 border border-blue-500/40 px-2.5 py-1 text-[11px] font-mono text-blue-300 rounded uppercase">
            STOCKHOLM 2026 · NOBEL PRIZE IN CHEMISTRY
          </div>
        </div>
      );

    case 8:
      // Targeted Vedic Nanomedicine: Ashwagandha-Gold Conjugate
      return (
        <div className="relative w-full h-72 sm:h-84 md:h-96 bg-[#0b101d] overflow-hidden rounded-lg border border-emerald-900/40">
          <svg className="w-full h-full" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
            <rect width="800" height="450" fill="#080d17" />

            {/* Central Gold-Sulfur Nanoparticle Core */}
            <g transform="translate(400, 225)">
              {/* Outer Ligand Cloud */}
              <circle cx="0" cy="0" r="140" fill="#047857" opacity="0.15" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="0" cy="0" r="100" fill="#065f46" opacity="0.3" stroke="#34d399" strokeWidth="1.5" />

              {/* Gold-Sulfur Core (Au-S) */}
              <circle cx="0" cy="0" r="50" fill="#d97706" stroke="#fbbf24" strokeWidth="3" />
              <text x="0" y="8" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="bold">
                Au·S
              </text>

              {/* Radiating Ashwagandha Glycoprotein Ligands (Withaferin-A) */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 45 * Math.PI) / 180;
                const x1 = Math.cos(angle) * 50;
                const y1 = Math.sin(angle) * 50;
                const x2 = Math.cos(angle) * 115;
                const y2 = Math.sin(angle) * 115;
                return (
                  <g key={i}>
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
                    <circle cx={x2} cy={y2} r="8" fill="#10b981" stroke="#a7f3d0" strokeWidth="1" />
                  </g>
                );
              })}
            </g>

            {/* Target Cancer Cell Membrane */}
            <path d="M 620 40 Q 690 225 620 410" fill="none" stroke="#f43f5e" strokeWidth="4" strokeDasharray="8 6" opacity="0.7" />
            <text x="710" y="225" textAnchor="middle" fill="#fda4af" fontSize="11" fontFamily="sans-serif">
              Target Receptor (99.8% Binding)
            </text>

            <text x="400" y="400" textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="bold" letterSpacing="1">
              VEDIC NANO-CARRIER: ASHWAGANDHA ROOT + GOLD BHASMA CORE
            </text>
            <text x="400" y="420" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
              Non-toxic Delivery Platform Derived from Ancient Rasashala Blueprints
            </text>
          </svg>
          <div className="absolute top-3 left-3 bg-black/80 border border-emerald-500/40 px-2.5 py-1 text-[11px] font-mono text-emerald-300 rounded uppercase">
            FUTURE PHARMACOPOEIA · RASA BINDING ARCHITECTURE
          </div>
        </div>
      );

    case 9:
      // Final Splash: Cosmic Constellation of Bharat
      return (
        <div className="relative w-full h-72 sm:h-84 md:h-96 bg-gradient-to-b from-[#060814] via-[#0b0e22] to-[#141026] overflow-hidden rounded-lg border border-amber-600/40">
          <svg className="w-full h-full" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="p9-cosmic" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#4338ca" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#7e22ce" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#060814" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="800" height="450" fill="#060814" />
            <circle cx="400" cy="180" r="300" fill="url(#p9-cosmic)" />

            {/* Star Constellations */}
            {Array.from({ length: 45 }).map((_, i) => (
              <circle
                key={i}
                cx={(i * 37) % 780 + 10}
                cy={(i * 53) % 430 + 10}
                r={((i % 3) + 1) * 0.8}
                fill="#ffffff"
                opacity={(i % 5) * 0.2 + 0.2}
              />
            ))}

            {/* Three Cosmic Silhouettes Smiling in the Firmament */}
            {/* 1. Maharshi Nagarjuna (Left) */}
            <g transform="translate(180, 80)" opacity="0.75">
              <circle cx="50" cy="40" r="30" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="50" y="85" textAnchor="middle" fill="#c084fc" fontSize="10" fontFamily="serif" letterSpacing="1">
                MAHARSHI NAGARJUNA
              </text>
            </g>

            {/* 2. Acharya P.C. Ray (Center) */}
            <g transform="translate(350, 50)" opacity="0.85">
              <circle cx="50" cy="40" r="34" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
              <text x="50" y="95" textAnchor="middle" fill="#fbbf24" fontSize="11" fontFamily="serif" letterSpacing="1">
                ACHARYA P.C. RAY
              </text>
            </g>

            {/* 3. Sir Upendranath Brahmachari (Right) */}
            <g transform="translate(520, 80)" opacity="0.75">
              <circle cx="50" cy="40" r="30" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="50" y="85" textAnchor="middle" fill="#7dd3fc" fontSize="10" fontFamily="serif" letterSpacing="1">
                DR. U.N. BRAHMACHARI
              </text>
            </g>

            {/* Ancient Alchemical Fire in Modern Crucible */}
            <g transform="translate(400, 320)">
              {/* Crucible Bowl */}
              <path d="M -80 0 Q 0 80 80 0 Z" fill="#1c1917" stroke="#d97706" strokeWidth="2.5" />
              {/* Sacred Flame */}
              <path d="M -30 -5 Q -10 -70 0 -90 Q 10 -70 30 -5 Z" fill="#f59e0b" />
              <path d="M -15 -5 Q 0 -50 0 -65 Q 0 -50 15 -5 Z" fill="#fef08a" />
            </g>

            <text x="400" y="420" textAnchor="middle" fill="#fef08a" fontSize="13" fontWeight="bold" letterSpacing="2">
              BHARAT CLAIMS ITS RIGHTFUL DAWN · THE UNBROKEN LINEAGE
            </text>
          </svg>
          <div className="absolute top-3 left-3 bg-black/80 border border-amber-500/50 px-2.5 py-1 text-[11px] font-mono text-amber-300 rounded uppercase">
            ACT III FINALE · COSMIC LINEAGE FULFILLED
          </div>
        </div>
      );

    default:
      return null;
  }
};
