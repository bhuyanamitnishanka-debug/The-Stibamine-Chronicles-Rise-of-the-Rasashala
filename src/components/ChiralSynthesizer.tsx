/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { calculateSynthesisYield } from '../data/rasashalaData';
import {
  FlaskConical,
  Flame,
  Gauge,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  RotateCcw,
  Check,
  Atom,
  Play,
  History,
  X,
  FileCheck2,
  Share2,
  ChevronRight,
  Award,
  Layers,
  Sparkle,
} from 'lucide-react';
import { soundEngine } from '../utils/audioSynth';

export interface SynthesisBatchRecord {
  id: string;
  batchNumber: number;
  timestamp: string;
  furnaceTempC: number;
  vacuumLevelMbar: number;
  herbalExtractMl: number;
  chiralSeedAdded: boolean;
  enantiomerPurity: number;
  parasiteMortality: number;
  liverCytotoxicity: number;
  isSafeForHumanTrials: boolean;
  crystalStructure: string;
  vialsProduced: number;
  clinicalTarget: string;
}

export const ChiralSynthesizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 4>(3);
  const [furnaceTempC, setFurnaceTempC] = useState<number>(780);
  const [vacuumLevelMbar, setVacuumLevelMbar] = useState<number>(12);
  const [herbalExtractMl, setHerbalExtractMl] = useState<number>(50);
  const [chiralSeedAdded, setChiralSeedAdded] = useState<boolean>(true);
  const [viewStructureMode, setViewStructureMode] = useState<'urea-stibamine' | 'raw-antimony'>('urea-stibamine');

  // Batch Synthesis State
  const [isSynthesizing, setIsSynthesizing] = useState<boolean>(false);
  const [synthesisProgress, setSynthesisProgress] = useState<number>(0);
  const [synthesisStageName, setSynthesisStageName] = useState<string>('');
  const [batchCounter, setBatchCounter] = useState<number>(101);
  const [activeToast, setActiveToast] = useState<SynthesisBatchRecord | null>(null);
  const [batchHistory, setBatchHistory] = useState<SynthesisBatchRecord[]>([
    {
      id: 'batch-100',
      batchNumber: 100,
      timestamp: '02:00 AM · Historical Genesis',
      furnaceTempC: 780,
      vacuumLevelMbar: 12,
      herbalExtractMl: 50,
      chiralSeedAdded: true,
      enantiomerPurity: 99.4,
      parasiteMortality: 99.8,
      liverCytotoxicity: 0.8,
      isSafeForHumanTrials: true,
      crystalStructure: 'Uniform Rhombohedral Chiral Lattice (Urea Stibamine Pure)',
      vialsProduced: 500,
      clinicalTarget: 'Campbell Medical School Hospital & Assam Epidemic Ward',
    },
  ]);
  const [showHistoryModal, setShowHistoryModal] = useState<boolean>(false);
  const [selectedCertificateBatch, setSelectedCertificateBatch] = useState<SynthesisBatchRecord | null>(null);

  const yieldData = calculateSynthesisYield(
    furnaceTempC,
    vacuumLevelMbar,
    chiralSeedAdded,
    herbalExtractMl
  );

  const handleToggleChiralSeed = () => {
    setChiralSeedAdded(!chiralSeedAdded);
    soundEngine.playChime();
  };

  const handleResetOptimal = () => {
    setFurnaceTempC(780);
    setVacuumLevelMbar(12);
    setHerbalExtractMl(50);
    setChiralSeedAdded(true);
    soundEngine.playChime();
  };

  // Automated Progressive Batch Synthesis
  const handleInitiateBatch = () => {
    if (isSynthesizing) return;
    setIsSynthesizing(true);
    setSynthesisProgress(5);
    setSynthesisStageName('Stage 1/4: Shodhana Thermal Calcination & O2 Scavenging');
    soundEngine.playChime();

    const stages = [
      { progress: 28, name: 'Stage 1/4: Shodhana Thermal Calcination (780°C)', delay: 500 },
      { progress: 54, name: 'Stage 2/4: Bhavana Trituration with Herbal Decoction', delay: 1100 },
      { progress: 82, name: 'Stage 3/4: Patana Yantra Vacuum Condensation (12 mbar)', delay: 1700 },
      { progress: 98, name: 'Stage 4/4: Asymmetric Chiral Amplification & Crystallization', delay: 2300 },
    ];

    stages.forEach((stage) => {
      setTimeout(() => {
        setSynthesisProgress(stage.progress);
        setSynthesisStageName(stage.name);
      }, stage.delay);
    });

    setTimeout(() => {
      setSynthesisProgress(100);
      setIsSynthesizing(false);

      // Create new completed batch record
      const newBatch: SynthesisBatchRecord = {
        id: `batch-${batchCounter}`,
        batchNumber: batchCounter,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        furnaceTempC,
        vacuumLevelMbar,
        herbalExtractMl,
        chiralSeedAdded,
        enantiomerPurity: yieldData.enantiomerPurity,
        parasiteMortality: yieldData.parasiteMortality,
        liverCytotoxicity: yieldData.liverCytotoxicity,
        isSafeForHumanTrials: yieldData.isSafeForHumanTrials,
        crystalStructure: yieldData.crystalStructure,
        vialsProduced: chiralSeedAdded ? 500 : 80,
        clinicalTarget: yieldData.isSafeForHumanTrials
          ? 'Bengal & Assam Visceral Leishmaniasis Relief Camp'
          : 'Toxic Racemate — Quarantined to South Vault',
      };

      setBatchHistory((prev) => [newBatch, ...prev]);
      setBatchCounter((prev) => prev + 1);
      setActiveToast(newBatch);
      soundEngine.playChime();
    }, 2800);
  };

  // Toast Auto-Dismiss Timer (7 seconds)
  useEffect(() => {
    if (!activeToast) return;
    const timer = setTimeout(() => {
      setActiveToast(null);
    }, 8500);
    return () => clearTimeout(timer);
  }, [activeToast]);

  return (
    <div className="relative flex flex-col gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Title & Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest mb-1.5">
            <span>Campbell Medical School Laboratory · 2:00 AM Workbench</span>
            <span aria-hidden="true">·</span>
            <span>Batch Synthesis Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-slate-100 tracking-tight">
            Urea Stibamine Chiral Synthesizer
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl font-sans">
            Simulate Sir Upendranath Brahmachari’s landmark discovery: taming deadly Antimony
            by condensing it with organic urea under high-vacuum Patana Yantra distillation.
          </p>
        </div>

        <div className="flex items-center flex-wrap gap-2.5">
          <button
            onClick={() => setShowHistoryModal(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <History className="w-3.5 h-3.5 text-amber-400" />
            <span>Batch Ledger ({batchHistory.length})</span>
          </button>
          <button
            onClick={handleResetOptimal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to 1921 Breakthrough</span>
          </button>
        </div>
      </div>

      {/* Synthesis Step Pipeline */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {[
          {
            step: 1,
            title: '1. Shodhana (Purification)',
            desc: 'Botanical decoction of Stibnite ore',
          },
          {
            step: 2,
            title: '2. Marana (Nanoparticle)',
            desc: 'Trituration with tartaric acid',
          },
          {
            step: 3,
            title: '3. Patana Distillation',
            desc: 'Vacuum condensation with Urea at 2 AM',
          },
          {
            step: 4,
            title: '4. Chiral Seeding',
            desc: 'Asymmetric crystal amplification',
          },
        ].map((item) => (
          <button
            key={item.step}
            onClick={() => setActiveStep(item.step as 1 | 2 | 3 | 4)}
            className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition-all cursor-pointer ${
              activeStep === item.step
                ? 'bg-[#182030] border-amber-500 shadow-md ring-1 ring-amber-500/30'
                : 'bg-[#10141f] border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-400">STAGE {item.step}</span>
              {activeStep === item.step && (
                <span className="w-2 h-2 rounded-full bg-amber-400" />
              )}
            </div>
            <span className="text-xs font-bold font-serif text-slate-200">{item.title}</span>
            <span className="text-[10px] text-slate-400 line-clamp-1">{item.desc}</span>
          </button>
        ))}
      </div>

      {/* Active Synthesis Progress Bar (Appears when batch is processing) */}
      {isSynthesizing && (
        <div className="p-4 bg-gradient-to-r from-amber-950/40 via-cyan-950/40 to-slate-900 border border-amber-500/50 rounded-xl shadow-xl flex flex-col gap-2 animate-pulse">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-amber-300 font-bold flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-amber-400 animate-spin" />
              <span>SYNTHESIZING BATCH #{batchCounter}...</span>
            </span>
            <span className="text-cyan-300 font-bold">{synthesisProgress}%</span>
          </div>
          <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-700">
            <div
              className="bg-gradient-to-r from-amber-500 to-cyan-400 h-full transition-all duration-300"
              style={{ width: `${synthesisProgress}%` }}
            />
          </div>
          <span className="text-[11px] font-mono text-slate-400">{synthesisStageName}</span>
        </div>
      )}

      {/* Main Workbench Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Interactive Control Knobs (5 Cols) */}
        <div className="lg:col-span-5 bg-[#101420] border border-slate-800 rounded-xl p-5 flex flex-col gap-5 shadow-lg">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold font-mono text-amber-300 uppercase tracking-wider flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-amber-400" />
              <span>Reaction Chamber Controls</span>
            </h3>
            <span className="text-[10px] font-mono text-slate-400">Patana Model-V26</span>
          </div>

          {/* Slider 1: Furnace Heat */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-slate-300 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-rose-400" />
                <span>Agneya Furnace Heat</span>
              </span>
              <span className="font-mono font-bold text-rose-400 tabular-nums">
                {furnaceTempC} °C
              </span>
            </div>
            <input
              type="range"
              min="400"
              max="1100"
              step="10"
              value={furnaceTempC}
              onChange={(e) => setFurnaceTempC(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>400 °C</span>
              <span className="text-amber-500 font-semibold">Target: 780 °C</span>
              <span>1100 °C</span>
            </div>
          </div>

          {/* Slider 2: Vacuum Pressure */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-slate-300 flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 text-cyan-400" />
                <span>Patana Yantra Vacuum</span>
              </span>
              <span className="font-mono font-bold text-cyan-400 tabular-nums">
                {vacuumLevelMbar} mbar
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={vacuumLevelMbar}
              onChange={(e) => setVacuumLevelMbar(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>1 mbar (High Vacuum)</span>
              <span className="text-cyan-400 font-semibold">Target: &lt;15 mbar</span>
              <span>100 mbar (Atmospheric Drift)</span>
            </div>
          </div>

          {/* Slider 3: Herbal Extract Ratio */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Herbal Distillate Matrix (Bhavana)</span>
              </span>
              <span className="font-mono font-bold text-emerald-400 tabular-nums">
                {herbalExtractMl} mL
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={herbalExtractMl}
              onChange={(e) => setHerbalExtractMl(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>10 mL (Under-tamed)</span>
              <span className="text-emerald-400 font-semibold">Target: 50 mL</span>
              <span>100 mL</span>
            </div>
          </div>

          {/* Chiral Seed Button */}
          <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-lg flex items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-slate-200 block">
                Chiral Seed Inoculation
              </span>
              <span className="text-[10px] text-slate-400">
                Trigger positive non-linear stereochemical amplification
              </span>
            </div>
            <button
              onClick={handleToggleChiralSeed}
              className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-lg border transition-colors cursor-pointer ${
                chiralSeedAdded
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
              }`}
            >
              {chiralSeedAdded ? 'Seeded (D-Form)' : 'Add Seed'}
            </button>
          </div>

          {/* Real-time Yield Metrics */}
          <div className="p-4 bg-[#0a0d14] border border-slate-800 rounded-lg flex flex-col gap-3">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              Predicted Analytical Yield
            </span>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-slate-900/60 rounded border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Chiral Purity</span>
                <span className="text-base font-mono font-bold text-amber-400 tabular-nums">
                  {yieldData.enantiomerPurity}%
                </span>
              </div>
              <div className="p-2 bg-slate-900/60 rounded border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Parasite Kill</span>
                <span className="text-base font-mono font-bold text-emerald-400 tabular-nums">
                  {yieldData.parasiteMortality}%
                </span>
              </div>
              <div className="p-2 bg-slate-900/60 rounded border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Liver Toxicity</span>
                <span
                  className={`text-base font-mono font-bold tabular-nums ${
                    yieldData.liverCytotoxicity < 15 ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {yieldData.liverCytotoxicity}
                </span>
              </div>
            </div>

            {/* Clinical Safety Verdict */}
            <div
              className={`p-2.5 rounded border text-xs flex items-center gap-2 ${
                yieldData.isSafeForHumanTrials
                  ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300'
                  : 'bg-rose-950/40 border-rose-800/60 text-rose-300'
              }`}
            >
              {yieldData.isSafeForHumanTrials ? (
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
              )}
              <span className="leading-tight">
                {yieldData.isSafeForHumanTrials
                  ? 'Safe for Kala-azar clinical administration. Millions saved.'
                  : 'Toxic racemic mixture! Excessive liver cytotoxicity. Adjust vacuum or add chiral seed.'}
              </span>
            </div>
          </div>

          {/* PRIMARY BATCH EXECUTION BUTTON */}
          <button
            onClick={handleInitiateBatch}
            disabled={isSynthesizing}
            className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-serif font-bold text-sm shadow-xl transition-all cursor-pointer ${
              isSynthesizing
                ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/20 ring-1 ring-amber-400'
            }`}
          >
            <FlaskConical className={`w-4 h-4 ${isSynthesizing ? 'animate-spin' : ''}`} />
            <span>{isSynthesizing ? 'Crystallizing Batch...' : 'Initiate Batch Synthesis'}</span>
          </button>
        </div>

        {/* Right: Molecular Conformation & Nanocage Inspector (7 Cols) */}
        <div className="lg:col-span-7 bg-[#0b0e14] border border-slate-800 rounded-xl p-5 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Atom className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-200 font-bold">ORGANOMETALLIC GEOMETRY INSPECTOR</span>
            </div>

            {/* Toggle view mode */}
            <div className="flex items-center p-0.5 bg-slate-900 border border-slate-800 rounded">
              <button
                onClick={() => setViewStructureMode('urea-stibamine')}
                className={`px-2 py-0.5 text-[11px] font-mono rounded cursor-pointer ${
                  viewStructureMode === 'urea-stibamine'
                    ? 'bg-amber-500/20 text-amber-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Urea Stibamine
              </button>
              <button
                onClick={() => setViewStructureMode('raw-antimony')}
                className={`px-2 py-0.5 text-[11px] font-mono rounded cursor-pointer ${
                  viewStructureMode === 'raw-antimony'
                    ? 'bg-rose-500/20 text-rose-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Raw Antimony
              </button>
            </div>
          </div>

          {/* Molecular SVG Viewport */}
          <div className="relative w-full aspect-[16/10] bg-[#070a12] rounded-lg border border-slate-800/80 overflow-hidden flex items-center justify-center p-4">
            <svg className="w-full h-full" viewBox="0 0 600 380">
              <defs>
                <radialGradient id="sb-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#ef4444" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#070a12" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="urea-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#070a12" stopOpacity="0" />
                </radialGradient>
              </defs>

              <rect width="600" height="380" fill="#060910" />

              {viewStructureMode === 'urea-stibamine' ? (
                /* UREA STIBAMINE ORGANOMETALLIC CAGE */
                <g transform="translate(300, 190)">
                  {/* Organic Urea Caging Rings */}
                  <ellipse
                    cx="0"
                    cy="0"
                    rx="150"
                    ry="70"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    strokeDasharray={chiralSeedAdded ? 'none' : '6 4'}
                    transform="rotate(-25)"
                  />
                  <ellipse
                    cx="0"
                    cy="0"
                    rx="150"
                    ry="70"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    strokeDasharray={chiralSeedAdded ? 'none' : '6 4'}
                    transform="rotate(35)"
                  />

                  {/* Central Antimony Core */}
                  <circle cx="0" cy="0" r="70" fill="url(#sb-glow)" />
                  <circle cx="0" cy="0" r="32" fill="#ef4444" stroke="#fca5a5" strokeWidth="2.5" />
                  <text x="0" y="7" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="bold">
                    Sb
                  </text>
                  <text x="0" y="24" textAnchor="middle" fill="#fee2e2" fontSize="9" fontFamily="monospace">
                    +5 Valence
                  </text>

                  {/* Urea Coordinate Bonds */}
                  {/* North Node: Urea - NH2 */}
                  <g transform="translate(-100, -85)">
                    <circle cx="0" cy="0" r="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                    <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">
                      NH₂
                    </text>
                  </g>
                  {/* Carbonyl Node: C=O */}
                  <g transform="translate(0, -115)">
                    <circle cx="0" cy="0" r="16" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                    <text x="0" y="4" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">
                      C=O
                    </text>
                  </g>
                  {/* Secondary Amine Node: NH */}
                  <g transform="translate(100, -85)">
                    <circle cx="0" cy="0" r="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                    <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">
                      NH
                    </text>
                  </g>
                  {/* P-aminophenyl Benzene Ring */}
                  <polygon
                    points="0,60 40,85 40,135 0,160 -40,135 -40,85"
                    fill="#0f172a"
                    stroke="#10b981"
                    strokeWidth="2"
                  />
                  <circle cx="0" cy="110" r="22" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="0" y="114" textAnchor="middle" fill="#a7f3d0" fontSize="10" fontWeight="bold">
                    C₆H₄
                  </text>

                  {/* Stibonic Acid Oxygen bonds */}
                  <line x1="-18" y1="-22" x2="-60" y2="-55" stroke="#ef4444" strokeWidth="2.5" />
                  <line x1="18" y1="-22" x2="60" y2="-55" stroke="#ef4444" strokeWidth="2.5" />
                  <circle cx="-60" cy="-55" r="8" fill="#dc2626" />
                  <text x="-60" y="-52" textAnchor="middle" fill="#fff" fontSize="8">O</text>
                  <circle cx="60" cy="-55" r="8" fill="#dc2626" />
                  <text x="60" y="-52" textAnchor="middle" fill="#fff" fontSize="8">OH</text>
                </g>
              ) : (
                /* RAW UNPROTECTED ANTIMONY (TOXIC) */
                <g transform="translate(300, 190)">
                  <circle cx="0" cy="0" r="90" fill="url(#sb-glow)" />
                  <circle cx="0" cy="0" r="45" fill="#b91c1c" stroke="#f87171" strokeWidth="3" />
                  <text x="0" y="8" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="bold">
                    Sb³⁺
                  </text>
                  <text x="0" y="28" textAnchor="middle" fill="#fca5a5" fontSize="10" fontFamily="monospace">
                    Raw Poison
                  </text>

                  {/* Heavy Sulfide Clusters */}
                  {[-70, 70, -100, 100].map((pos, idx) => (
                    <circle key={idx} cx={pos} cy={(idx % 2 === 0 ? 40 : -40)} r="14" fill="#ca8a04" stroke="#fde047" strokeWidth="1.5" />
                  ))}

                  <text x="0" y="120" textAnchor="middle" fill="#f87171" fontSize="13" fontWeight="bold">
                    UNSHROUDED TOXIC MINERAL (HEAVY HEPATOTOXICITY)
                  </text>
                  <text x="0" y="140" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                    Causes Acute Hepatic Necrosis within 72 Hours
                  </text>
                </g>
              )}
            </svg>

            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-400 bg-black/80 px-2 py-1 rounded border border-slate-800">
              Lattice: {yieldData.crystalStructure}
            </div>
          </div>

          {/* Mechanism of Action Explanation */}
          <div className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-lg text-xs leading-relaxed text-slate-300 font-sans flex flex-col gap-1.5">
            <span className="font-bold text-amber-400 font-serif">
              The Spatial Chemistry of Maharshi Nagarjuna & Sir Brahmachari
            </span>
            <p>
              "We don't change the metal. We change its geometry!" Raw antimony readily binds to mammalian
              sulfhydryl enzymes, wreaking havoc in the liver. Encapsulating the antimony inside a urea-condensed
              cage shields the heavy metal until it is phagocytosed by macrophages hosting the{' '}
              <em className="text-cyan-200">Leishmania</em> parasite. Inside the phagolysosome, the parasite's acidic
              environment cleaves the cage, selectively releasing antimony to destroy the parasite's topoisomerase enzymes.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TOAST SUMMARY NOTIFICATION SYSTEM (APPEARS WHEN BATCH COMPLETES)          */}
      {/* ========================================================================= */}
      {activeToast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md w-full p-4 bg-[#0c101a]/95 backdrop-blur-xl border border-amber-500/60 rounded-2xl shadow-2xl flex flex-col gap-3 ring-1 ring-amber-500/30 animate-in slide-in-from-bottom duration-300">
          {/* Toast Top Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40">
                <Sparkles className="w-4 h-4 text-amber-400" />
              </span>
              <div>
                <h4 className="text-xs font-serif font-bold text-slate-100 flex items-center gap-1.5">
                  <span>Batch #{activeToast.batchNumber} Completed</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-normal">
                    [{activeToast.timestamp}]
                  </span>
                </h4>
                <span className="text-[10px] font-mono text-slate-400">
                  {activeToast.isSafeForHumanTrials
                    ? 'Clinical Grade · High-Vacuum Asymmetric Condensation'
                    : 'Quarantine Required · Racemic Drift'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setActiveToast(null)}
              className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800 cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Molecular Yield Summary Grid */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
            <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-800">
              <span className="text-[9.5px] text-slate-400 block">D-Enantiomer</span>
              <span className="text-sm font-bold text-amber-400 tabular-nums">
                {activeToast.enantiomerPurity}%
              </span>
            </div>
            <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-800">
              <span className="text-[9.5px] text-slate-400 block">Parasite Kill</span>
              <span className="text-sm font-bold text-emerald-400 tabular-nums">
                {activeToast.parasiteMortality}%
              </span>
            </div>
            <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-800">
              <span className="text-[9.5px] text-slate-400 block">Liver Toxicity</span>
              <span
                className={`text-sm font-bold tabular-nums ${
                  activeToast.liverCytotoxicity < 15 ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {activeToast.liverCytotoxicity}
              </span>
            </div>
          </div>

          {/* Vials Output & Release Target */}
          <div className="p-2.5 bg-[#080b12] border border-slate-800 rounded-lg text-xs font-mono flex items-center justify-between">
            <span className="text-slate-400">Yield Volume:</span>
            <span className="text-amber-300 font-bold">
              {activeToast.vialsProduced} Clinical Vials
            </span>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center justify-between pt-1 text-xs font-mono">
            <button
              onClick={() => {
                setSelectedCertificateBatch(activeToast);
                setShowHistoryModal(true);
              }}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>View Batch Certificate</span>
            </button>
            <button
              onClick={() => setActiveToast(null)}
              className="text-slate-400 hover:text-slate-200 cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* BATCH HISTORY LEDGER & CERTIFICATE MODAL                                 */}
      {/* ========================================================================= */}
      {showHistoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#0e121c] border border-slate-800 rounded-2xl shadow-2xl p-6 flex flex-col gap-5 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-serif font-bold text-slate-100">
                  Urea Stibamine Production Ledger & Release Certificates
                </h3>
              </div>
              <button
                onClick={() => {
                  setShowHistoryModal(false);
                  setSelectedCertificateBatch(null);
                }}
                className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {selectedCertificateBatch ? (
              /* INDIVIDUAL BATCH CERTIFICATE */
              <div className="p-6 bg-[#080b12] border border-amber-500/40 rounded-xl flex flex-col gap-4 font-serif">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
                      OFFICIAL MEDICAL CERTIFICATE OF ANALYSIS
                    </span>
                    <h4 className="text-xl font-bold text-slate-100">
                      Urea Stibamine Clinical Release #{selectedCertificateBatch.batchNumber}
                    </h4>
                    <span className="text-xs text-slate-400 font-sans">
                      Synthesized at Campbell Medical School Laboratory · {selectedCertificateBatch.timestamp}
                    </span>
                  </div>
                  <Award className="w-10 h-10 text-amber-400" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono text-xs">
                  <div className="p-3 bg-slate-900/80 rounded border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Enantiomer Purity</span>
                    <span className="text-base font-bold text-amber-400">
                      {selectedCertificateBatch.enantiomerPurity}%
                    </span>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Parasite Mortality</span>
                    <span className="text-base font-bold text-emerald-400">
                      {selectedCertificateBatch.parasiteMortality}%
                    </span>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Liver Cytotoxicity</span>
                    <span className="text-base font-bold text-slate-100">
                      {selectedCertificateBatch.liverCytotoxicity}
                    </span>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Vials Released</span>
                    <span className="text-base font-bold text-amber-300">
                      {selectedCertificateBatch.vialsProduced}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-slate-900/50 rounded border border-slate-800 text-xs font-sans text-slate-300 leading-relaxed">
                  <span className="font-bold text-amber-300 block mb-1 font-serif">
                    Clinical Destination & Authorization:
                  </span>
                  {selectedCertificateBatch.clinicalTarget}
                </div>

                <div className="flex justify-between items-center pt-2 text-xs font-mono">
                  <button
                    onClick={() => setSelectedCertificateBatch(null)}
                    className="text-cyan-400 hover:text-cyan-300 cursor-pointer"
                  >
                    ← Back to All Batches
                  </button>
                  <span className="text-slate-500">Authorized: Sir Upendranath Brahmachari, M.D., Ph.D.</span>
                </div>
              </div>
            ) : (
              /* LIST OF ALL BATCHES */
              <div className="flex flex-col gap-3">
                {batchHistory.map((batch) => (
                  <div
                    key={batch.id}
                    className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-slate-700 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-slate-200">
                          Batch #{batch.batchNumber}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                            batch.isSafeForHumanTrials
                              ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60'
                              : 'bg-rose-950/60 text-rose-300 border-rose-800/60'
                          }`}
                        >
                          {batch.isSafeForHumanTrials ? 'CLINICAL PASS' : 'RACEMIC DRIFT'}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{batch.timestamp}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mt-1">
                        <span>Purity: {batch.enantiomerPurity}%</span>
                        <span>·</span>
                        <span>Kill: {batch.parasiteMortality}%</span>
                        <span>·</span>
                        <span>Vials: {batch.vialsProduced}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedCertificateBatch(batch)}
                      className="px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-lg text-xs font-mono transition-colors cursor-pointer self-start sm:self-auto"
                    >
                      Certificate →
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
