/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  calculateNernstAgastyaDynamics,
  calculateBiogasPower,
  calculateSatComTelemetry,
  calculateDataCenterMetrics,
  evaluateClusterLoad,
  ClusterOrchestratorState,
} from '../data/rasashalaData';
import { BiogasPressureGauge } from './BiogasPressureGauge';
import {
  BatteryCharging,
  Zap,
  Radio,
  Server,
  Flame,
  Layers,
  Thermometer,
  ShieldCheck,
  RefreshCw,
  Cpu,
  Activity,
  Play,
  Pause,
} from 'lucide-react';
import { soundEngine } from '../utils/audioSynth';

export const TelemetryDashboard: React.FC = () => {
  // --- NERNST QUANTUM AGASTYA GRID PARAMS ---
  const [nSeries, setNSeries] = useState<number>(50);
  const [nParallel, setNParallel] = useState<number>(20);
  const [cellCapacityAh, setCellCapacityAh] = useState<number>(150);
  const [compostTempC, setCompostTempC] = useState<number>(55.0);
  const [concentrationRatio, setConcentrationRatio] = useState<number>(0.05);

  // --- BIOGAS GENERATOR PARAMS ---
  const [digesterVolumeM3, setDigesterVolumeM3] = useState<number>(120);
  const [methanePercentage, setMethanePercentage] = useState<number>(65);

  // --- SATCOM TELEMETRY PARAMS ---
  const [downlinkGbps, setDownlinkGbps] = useState<number>(10);

  // --- CLUSTER LOAD SHIFTER STATE (QuantumLoadShifter) ---
  const [orchestratorActive, setOrchestratorActive] = useState<boolean>(true);
  const [liveBiogasKwh, setLiveBiogasKwh] = useState<number>(38.4);
  const [liveAgastyaSoc, setLiveAgastyaSoc] = useState<number>(82.0);

  // Calculations
  const nernstData = calculateNernstAgastyaDynamics({
    nSeries,
    nParallel,
    cellCapacityAh,
    compostTempCelsius: compostTempC,
    concentrationRatio,
  });

  const biogasMetrics = calculateBiogasPower({
    digesterVolumeM3,
    methanePercentage,
    generatorEfficiency: 0.3,
  });

  const satComMetrics = calculateSatComTelemetry({
    satelliteName: 'GSAT-Quantum 26',
    downlinkGbps,
    encryptionProtocol: 'Post-Quantum Chiral Lattice Cryptography',
    orbitAltitudeKm: 35786,
  });

  const clusterState: ClusterOrchestratorState = evaluateClusterLoad(
    liveBiogasKwh,
    liveAgastyaSoc,
    128
  );

  // Orchestrator heartbeat loop simulating fluctuating microbial production & SOC
  useEffect(() => {
    if (!orchestratorActive) return;

    const interval = setInterval(() => {
      // Fluctuate biogas production and battery SOC
      const newBiogas = 18 + Math.random() * 26; // 18 to 44 kWh
      const newSoc = 35 + Math.random() * 58; // 35% to 93%
      setLiveBiogasKwh(Math.round(newBiogas * 10) / 10);
      setLiveAgastyaSoc(Math.round(newSoc * 10) / 10);
    }, 3500);

    return () => clearInterval(interval);
  }, [orchestratorActive]);

  const handleRecalibrate = () => {
    soundEngine.playChime();
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-yellow-400 uppercase tracking-widest mb-1.5">
            <span>Decentralized Sovereign Infrastructure</span>
            <span aria-hidden="true">·</span>
            <span>Thermodynamic Nernst Agastya Grid</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-slate-100 tracking-tight">
            Bio-Energy Grid & Computational Telemetry
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl font-sans">
            Mathematical model of the subterranean Agastya bio-electric battery pots powered by microbial compost heat,
            anaerobic digestion biogas pressure gauge, and dynamic cluster load-shifting.
          </p>
        </div>

        <button
          onClick={handleRecalibrate}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-yellow-300 bg-yellow-950/40 hover:bg-yellow-900/50 border border-yellow-800/60 rounded-lg transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5 text-yellow-400" />
          <span>Sync Subsystems</span>
        </button>
      </div>

      {/* TOP ROW: BIOGAS PRESSURE GAUGE & DIGESTER DYNAMICS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Visual Biogas Pressure Gauge (5 cols) */}
        <div className="lg:col-span-5">
          <BiogasPressureGauge
            basePressureMbar={biogasMetrics.basePressureMbar}
            methanePercentage={methanePercentage}
            digesterVolumeM3={digesterVolumeM3}
          />
        </div>

        {/* Anaerobic Biogas Co-generation Specs & Sliders (7 cols) */}
        <div className="lg:col-span-7 bg-[#101420] border border-slate-800 rounded-xl p-5 flex flex-col gap-4 shadow-lg">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-orange-950/50 border border-orange-800/40">
                <Flame className="w-4 h-4 text-orange-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold font-serif text-slate-100">
                  Anaerobic Biogas Digester Loop
                </h3>
                <span className="text-[10px] font-mono text-slate-400">
                  Medicinal & Plant Residue Co-generation
                </span>
              </div>
            </div>
            <span className="text-[11px] font-mono font-bold text-orange-400 bg-orange-950/40 px-2 py-0.5 rounded border border-orange-800/40">
              {biogasMetrics.totalDailyKwh} kWh/day Electricity
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
            <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Thermal Co-Gen</span>
              <span className="text-sm font-bold text-rose-400 tabular-nums">
                {biogasMetrics.thermalCoGenKw} kWt
              </span>
              <span className="text-[9px] text-slate-500 block">Agneya Furnaces</span>
            </div>
            <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Methane Content</span>
              <span className="text-sm font-bold text-orange-400 tabular-nums">
                {methanePercentage}% CH₄
              </span>
              <span className="text-[9px] text-slate-500 block">Energy Density: {biogasMetrics.energyDensityPerM3.toFixed(2)} kWh/m³</span>
            </div>
            <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Carbon Offset</span>
              <span className="text-sm font-bold text-emerald-400 tabular-nums">
                {biogasMetrics.carbonOffsetKgDay} kg/day
              </span>
              <span className="text-[9px] text-slate-500 block">Zero Grid Emissions</span>
            </div>
          </div>

          {/* Interactive Digester Sliders */}
          <div className="flex flex-col gap-3 pt-1 text-xs">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <span className="text-slate-300">Digester Dome Volume:</span>
                <span className="font-mono text-orange-400 font-bold">{digesterVolumeM3} m³</span>
              </div>
              <input
                type="range"
                min="50"
                max="300"
                step="10"
                value={digesterVolumeM3}
                onChange={(e) => setDigesterVolumeM3(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-orange-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <span className="text-slate-300">Methane Concentration:</span>
                <span className="font-mono text-amber-400 font-bold">{methanePercentage}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="80"
                step="1"
                value={methanePercentage}
                onChange={(e) => setMethanePercentage(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-amber-400"
              />
            </div>
          </div>

          <div className="p-3 bg-[#0a0e16] border border-slate-800/90 rounded-lg text-xs font-mono text-slate-300 flex items-center justify-between">
            <span className="text-slate-400">Heat Ducting Destination:</span>
            <span className="text-rose-400 font-bold">{biogasMetrics.furnaceHeatRedirect}</span>
          </div>
        </div>
      </div>

      {/* SECTION 2: THE MATHEMATICAL MODEL OF THE UNDERGROUND AGASTYA GRID (NERNST EQUATION) */}
      <div className="bg-[#101420] border border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col gap-5 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-yellow-950/50 border border-yellow-800/40">
              <BatteryCharging className="w-4 h-4 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-base font-bold font-serif text-slate-100">
                Thermodynamic Nernst Agastya Grid Architecture
              </h3>
              <p className="text-xs text-slate-400">
                Electrochemical copper-zinc cells buried in active compost (55 °C) with concentrated plant juice electrolyte.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">Array Scale:</span>
            <span className="text-yellow-400 font-bold bg-yellow-950/50 px-2 py-0.5 rounded border border-yellow-800/40">
              {nernstData.totalCells} Cells ({nSeries}S × {nParallel}P)
            </span>
          </div>
        </div>

        {/* Nernst Equation Visual Formula Breakdown */}
        <div className="p-4 bg-[#0a0d14] border border-amber-900/30 rounded-xl flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-mono text-amber-400">
            <span>NERNST VOLTAGE CORRECTION (THERMODYNAMIC AMPLIFICATION)</span>
            <span>T = {compostTempC}°C ({nernstData.kelvinTemp} K)</span>
          </div>

          <div className="p-3 bg-slate-900/70 border border-slate-800 rounded-lg text-xs font-mono text-slate-200 overflow-x-auto">
            <code>
              E_cell = E° - (RT / nF) · ln(Q) = 1.10 V - ({nernstData.nernstCorrectionMv < 0 ? '-' : ''}{Math.abs(nernstData.nernstCorrectionMv / 1000).toFixed(4)} V) = <span className="text-amber-300 font-bold">{nernstData.eCell.toFixed(3)} V</span>
            </code>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate-400 pt-1">
            <span>Standard Potential E°: 1.100 V</span>
            <span>·</span>
            <span>Nernst Gain: +{nernstData.thermalGainPercent}%</span>
            <span>·</span>
            <span>Electrolyte Quotient Q: {concentrationRatio} ([Zn²⁺]/[Cu²⁺])</span>
          </div>
        </div>

        {/* Output Metrics Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Single Cell Voltage</span>
            <span className="text-xl font-mono font-bold text-yellow-400 tabular-nums">
              {nernstData.eCell.toFixed(3)} V
            </span>
            <span className="text-[9px] font-mono text-emerald-400 block mt-0.5">Nernst-Calculated</span>
          </div>

          <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Total Grid Voltage (V_grid)</span>
            <span className="text-xl font-mono font-bold text-slate-100 tabular-nums">
              {nernstData.totalVoltage.toFixed(1)} V
            </span>
            <span className="text-[9px] font-mono text-slate-400 block mt-0.5">{nSeries} in Series</span>
          </div>

          <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Total Capacity (C_grid)</span>
            <span className="text-xl font-mono font-bold text-cyan-400 tabular-nums">
              {nernstData.totalCapacityAh.toFixed(0)} Ah
            </span>
            <span className="text-[9px] font-mono text-slate-400 block mt-0.5">{nParallel} Parallel Strings</span>
          </div>

          <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Total Energy Storage</span>
            <span className="text-xl font-mono font-bold text-emerald-400 tabular-nums">
              {nernstData.totalEnergyKwh.toFixed(1)} kWh
            </span>
            <span className="text-[9px] font-mono text-slate-400 block mt-0.5">(V × Ah) / 1000</span>
          </div>
        </div>

        {/* Grid Parameter Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs pt-1">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <span className="text-slate-300">Series Cells (N_series):</span>
              <span className="font-mono text-yellow-400 font-bold">{nSeries}</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={nSeries}
              onChange={(e) => setNSeries(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-yellow-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <span className="text-slate-300">Parallel Strings (N_parallel):</span>
              <span className="font-mono text-cyan-400 font-bold">{nParallel}</span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={nParallel}
              onChange={(e) => setNParallel(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <span className="text-slate-300">Compost Temp (T):</span>
              <span className="font-mono text-rose-400 font-bold">{compostTempC} °C</span>
            </div>
            <input
              type="range"
              min="25"
              max="65"
              step="1"
              value={compostTempC}
              onChange={(e) => setCompostTempC(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-rose-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <span className="text-slate-300">Ionic Ratio (Q):</span>
              <span className="font-mono text-emerald-400 font-bold">{concentrationRatio}</span>
            </div>
            <input
              type="range"
              min="0.01"
              max="0.20"
              step="0.01"
              value={concentrationRatio}
              onChange={(e) => setConcentrationRatio(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-emerald-400"
            />
          </div>
        </div>
      </div>

      {/* SECTION 3: QUANTUM LOAD SHIFTER & COMPUTE ORCHESTRATION */}
      <div className="bg-[#101420] border border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col gap-5 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-950/50 border border-emerald-800/40">
              <Cpu className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-base font-bold font-serif text-slate-100">
                QuantumLoadShifter: Dynamic Data Center Orchestration
              </h3>
              <p className="text-xs text-slate-400">
                128 sovereign immersion compute nodes automatically modulate based on real-time biogas production and Agastya SOC.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOrchestratorActive(!orchestratorActive)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border transition-colors cursor-pointer ${
                orchestratorActive
                  ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {orchestratorActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{orchestratorActive ? 'Heartbeat Active' : 'Heartbeat Paused'}</span>
            </button>
          </div>
        </div>

        {/* Current Live Telemetry & Cluster State Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 flex flex-col gap-0.5">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Live Biogas Generation</span>
            <span className="text-lg font-mono font-bold text-orange-400 tabular-nums">
              {liveBiogasKwh.toFixed(1)} kWh
            </span>
            <span className="text-[10px] text-slate-500">Anaerobic digester output</span>
          </div>

          <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 flex flex-col gap-0.5">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Agastya Battery Bank SOC</span>
            <span className="text-lg font-mono font-bold text-yellow-400 tabular-nums">
              {liveAgastyaSoc.toFixed(1)}%
            </span>
            <span className="text-[10px] text-slate-500">Organic compost energy reserve</span>
          </div>

          <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 flex flex-col gap-0.5">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Active Compute Nodes</span>
            <span className="text-lg font-mono font-bold text-emerald-400 tabular-nums">
              {clusterState.activeNodes} / {clusterState.totalNodes} Nodes
            </span>
            <span className="text-[10px] text-slate-500">
              {Math.round((clusterState.activeNodes / clusterState.totalNodes) * 100)}% cluster utilization
            </span>
          </div>
        </div>

        {/* Algorithmic Decision Status */}
        <div
          className={`p-3.5 rounded-lg border text-xs font-mono leading-relaxed flex items-center gap-2.5 ${
            clusterState.mode === 'surge'
              ? 'bg-rose-950/30 border-rose-800/60 text-rose-300'
              : clusterState.mode === 'steady'
              ? 'bg-emerald-950/30 border-emerald-800/60 text-emerald-300'
              : 'bg-amber-950/30 border-amber-800/60 text-amber-300'
          }`}
        >
          <Activity className="w-4 h-4 shrink-0" />
          <span>{clusterState.status}</span>
        </div>

        {/* 128 Immersion Node Visual Matrix */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>SOVEREIGN CLUSTER NODE MATRIX (128 IMMERSION NODES)</span>
            <span>
              {clusterState.activeNodes} ONLINE · {clusterState.totalNodes - clusterState.activeNodes} HIBERNATING
            </span>
          </div>

          <div className="grid grid-cols-16 sm:grid-cols-32 gap-1 p-3 bg-[#080b12] rounded-lg border border-slate-800">
            {Array.from({ length: 128 }).map((_, idx) => {
              const isNodeActive = idx < clusterState.activeNodes;
              return (
                <div
                  key={idx}
                  title={`Node #${idx + 1}: ${isNodeActive ? 'Active' : 'Hibernating'}`}
                  className={`h-3 rounded-xs transition-colors duration-300 ${
                    isNodeActive
                      ? clusterState.mode === 'surge'
                        ? 'bg-rose-500 shadow-xs shadow-rose-500/50'
                        : 'bg-emerald-500 shadow-xs shadow-emerald-500/50'
                      : 'bg-slate-800/60'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
