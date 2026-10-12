/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Flame, ShieldCheck, AlertTriangle, Wind, Gauge } from 'lucide-react';

interface BiogasPressureGaugeProps {
  basePressureMbar: number;
  methanePercentage: number;
  digesterVolumeM3: number;
  onVentingStateChange?: (isVenting: boolean) => void;
}

export const BiogasPressureGauge: React.FC<BiogasPressureGaugeProps> = ({
  basePressureMbar,
  methanePercentage,
  digesterVolumeM3,
  onVentingStateChange,
}) => {
  // Real-time simulated micro-fluctuations (anaerobic microbial digestion gas pulse)
  const [liveJitter, setLiveJitter] = useState<number>(0);
  const [manualBleedValveOpen, setManualBleedValveOpen] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Natural oscillating pressure fluctuation from microbial methane release
      const jitter = (Math.sin(Date.now() / 1200) * 1.8) + (Math.random() * 0.8 - 0.4);
      setLiveJitter(jitter);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  // Compute effective dynamic pressure
  const currentPressure = Math.max(
    2,
    Math.round((basePressureMbar + liveJitter - (manualBleedValveOpen ? 12 : 0)) * 10) / 10
  );

  const maxScale = 60; // Max gauge scale in mbar
  const clampedPressure = Math.min(maxScale, Math.max(0, currentPressure));

  // Gauge angle sweep: -135 deg to +135 deg (total 270 deg)
  const angle = -135 + (clampedPressure / maxScale) * 270;

  // Determine pressure zones
  const isLow = currentPressure < 15;
  const isOptimal = currentPressure >= 15 && currentPressure <= 38;
  const isElevated = currentPressure > 38 && currentPressure <= 46;
  const isOverpressure = currentPressure > 46;

  useEffect(() => {
    if (onVentingStateChange) {
      onVentingStateChange(isOverpressure || manualBleedValveOpen);
    }
  }, [isOverpressure, manualBleedValveOpen, onVentingStateChange]);

  const getStatusColor = () => {
    if (isOverpressure) return 'text-rose-400 border-rose-500/50 bg-rose-950/40';
    if (isElevated) return 'text-amber-400 border-amber-500/50 bg-amber-950/40';
    if (isOptimal) return 'text-emerald-400 border-emerald-500/50 bg-emerald-950/40';
    return 'text-cyan-400 border-cyan-500/50 bg-cyan-950/40';
  };

  return (
    <div className="bg-[#0b0f19] border border-slate-800 rounded-xl p-5 flex flex-col gap-4 shadow-lg">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-orange-950/40 border border-orange-800/40">
            <Gauge className="w-4 h-4 text-orange-400" />
          </div>
          <div>
            <h4 className="text-sm font-bold font-serif text-slate-100">
              Digester Biogas Pressure
            </h4>
            <span className="text-[10px] font-mono text-slate-400">
              Anaerobic Gas Dome Model-P50
            </span>
          </div>
        </div>

        {/* Live Status Pill */}
        <div className={`px-2.5 py-1 rounded text-[11px] font-mono border ${getStatusColor()}`}>
          {isOverpressure
            ? 'OVERPRESSURE · VENTING'
            : isElevated
            ? 'HIGH PRESSURE'
            : isOptimal
            ? 'OPTIMAL OPERATING'
            : 'CHARGING DOME'}
        </div>
      </div>

      {/* Main Radial Gauge SVG */}
      <div className="relative flex flex-col items-center justify-center py-2">
        <div className="relative w-56 h-56">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="gaugeGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="35%" stopColor="#10b981" />
                <stop offset="70%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>

            {/* Gauge Background Track (-135 to 135 deg) */}
            <circle
              cx="100"
              cy="100"
              r="76"
              fill="none"
              stroke="#1e293b"
              strokeWidth="12"
              strokeDasharray="358"
              strokeDashoffset="89.5"
              strokeLinecap="round"
              transform="rotate(135 100 100)"
            />

            {/* Colored Active Arc */}
            <circle
              cx="100"
              cy="100"
              r="76"
              fill="none"
              stroke="url(#gaugeGradient)"
              strokeWidth="12"
              strokeDasharray="358"
              strokeDashoffset={358 - (clampedPressure / maxScale) * 268.5}
              strokeLinecap="round"
              transform="rotate(135 100 100)"
              className="transition-all duration-300"
            />

            {/* Major Tick Marks */}
            {[0, 15, 30, 45, 60].map((val) => {
              const tickAngle = (-135 + (val / maxScale) * 270) * (Math.PI / 180);
              const x1 = 100 + 64 * Math.cos(tickAngle);
              const y1 = 100 + 64 * Math.sin(tickAngle);
              const x2 = 100 + 70 * Math.cos(tickAngle);
              const y2 = 100 + 70 * Math.sin(tickAngle);
              const textX = 100 + 52 * Math.cos(tickAngle);
              const textY = 100 + 52 * Math.sin(tickAngle) + 3;

              return (
                <g key={val}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#94a3b8" strokeWidth="1.5" />
                  <text
                    x={textX}
                    y={textY}
                    fill="#64748b"
                    fontSize="8"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    {val}
                  </text>
                </g>
              );
            })}

            {/* Needle Pivot & Needle */}
            <g
              transform={`rotate(${angle} 100 100)`}
              className="transition-transform duration-300 ease-out"
            >
              {/* Needle Arrow */}
              <polygon
                points="97,100 100,28 103,100"
                fill={isOverpressure ? '#f43f5e' : '#f59e0b'}
              />
              <circle cx="100" cy="100" r="7" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
            </g>

            {/* Inner Center Hub */}
            <circle cx="100" cy="100" r="3" fill="#ffffff" />
          </svg>

          {/* Digital Readout Center Overlay */}
          <div className="absolute inset-x-0 bottom-4 flex flex-col items-center text-center">
            <span className="text-2xl font-mono font-bold text-slate-100 tabular-nums tracking-tight">
              {currentPressure.toFixed(1)}
            </span>
            <span className="text-[10px] font-mono uppercase text-slate-400">
              mbar ({ (currentPressure * 0.1).toFixed(2) } kPa)
            </span>
          </div>
        </div>

        {/* Operating Band Legend */}
        <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-slate-400 mt-2">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            15–38 Optimal
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
            38–46 High
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
            &gt;46 Venting
          </span>
        </div>
      </div>

      {/* Safety Valve & Combustion Telemetry Strip */}
      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
        <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800 flex flex-col gap-0.5">
          <span className="text-[10px] text-slate-400 flex items-center gap-1">
            <Flame className="w-3 h-3 text-orange-400" />
            <span>Furnace Redirect Valve</span>
          </span>
          <span className="text-slate-200 font-bold">
            {isOverpressure || manualBleedValveOpen ? 'Auto-Bypass (100%)' : 'Modulated (42%)'}
          </span>
        </div>

        <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800 flex flex-col gap-0.5">
          <span className="text-[10px] text-slate-400 flex items-center gap-1">
            {isOverpressure ? (
              <AlertTriangle className="w-3 h-3 text-rose-400" />
            ) : (
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
            )}
            <span>Relief Valve Status</span>
          </span>
          <span className={isOverpressure ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>
            {isOverpressure ? 'Relief Open (>46mbar)' : 'Hermetic Seal Intact'}
          </span>
        </div>
      </div>

      {/* Manual Bleed Valve Interactivity */}
      <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded border border-slate-800 text-xs">
        <div className="flex items-center gap-1.5 text-slate-300">
          <Wind className="w-3.5 h-3.5 text-cyan-400" />
          <span>Manual Emergency Depressurization:</span>
        </div>
        <button
          onClick={() => setManualBleedValveOpen(!manualBleedValveOpen)}
          className={`px-2.5 py-1 text-[11px] font-mono rounded border transition-colors cursor-pointer ${
            manualBleedValveOpen
              ? 'bg-rose-500/20 text-rose-300 border-rose-500'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
          }`}
        >
          {manualBleedValveOpen ? 'Valve OPEN (Bleeding)' : 'Valve CLOSED'}
        </button>
      </div>
    </div>
  );
};
