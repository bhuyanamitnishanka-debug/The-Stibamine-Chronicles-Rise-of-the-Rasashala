/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ComicPanel, GraphicNovelAct, RasashalaQuadrantId, ActId } from '../types';
import { COMIC_PANELS, GRAPHIC_NOVEL_ACTS } from '../data/graphicNovelData';
import { ComicPanelCard } from './ComicPanelCard';
import {
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Grid,
  Sparkles,
  BookOpen,
  FlaskConical,
} from 'lucide-react';
import { soundEngine } from '../utils/audioSynth';

import { ChapterScriptViewer } from './ChapterScriptViewer';

interface ComicReaderProps {
  onSelectQuadrant: (quadrantId: RasashalaQuadrantId) => void;
  onLaunchSynthesizer: () => void;
}

export const ComicReader: React.FC<ComicReaderProps> = ({
  onSelectQuadrant,
  onLaunchSynthesizer,
}) => {
  const [selectedActId, setSelectedActId] = useState<ActId | 'all'>('all');
  const [novelViewType, setNovelViewType] = useState<'acts' | 'chapters'>('acts');
  const [viewMode, setViewMode] = useState<'cinematic' | 'grid'>('cinematic');
  const [currentPanelIndex, setCurrentPanelIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioMood, setAudioMood] = useState<'calcutta' | 'furnace' | 'vacuum' | 'cosmic'>('vacuum');
  const [showChemicalDialogueDoc, setShowChemicalDialogueDoc] = useState(false);

  const filteredPanels =
    selectedActId === 'all'
      ? COMIC_PANELS
      : COMIC_PANELS.filter((p) => p.actId === selectedActId);

  const activePanel = filteredPanels[currentPanelIndex] || filteredPanels[0];

  // Keyboard navigation for cinematic mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'cinematic') return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentPanelIndex((prev) => (prev < filteredPanels.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentPanelIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, filteredPanels.length]);

  const toggleAmbiance = (mood?: 'calcutta' | 'furnace' | 'vacuum' | 'cosmic') => {
    const targetMood = mood || audioMood;
    setAudioMood(targetMood);
    const active = soundEngine.toggle(targetMood);
    setIsPlayingAudio(active);
  };

  const handleNextPanel = () => {
    if (currentPanelIndex < filteredPanels.length - 1) {
      setCurrentPanelIndex(currentPanelIndex + 1);
      soundEngine.playChime();
    }
  };

  const handlePrevPanel = () => {
    if (currentPanelIndex > 0) {
      setCurrentPanelIndex(currentPanelIndex - 1);
      soundEngine.playChime();
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Title & Dramatic Kicker */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest mb-1.5">
            <span>Historical Sequential Novel</span>
            <span aria-hidden="true">·</span>
            <span>Sir Upendranath Brahmachari</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-slate-100 tracking-tight">
            The Stibamine Chronicles
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl font-sans">
            Rise of the Rasashala: The Quantum Legacy of Sir Upendranath Brahmachari,
            Campbell Medical School 1921 to Stockholm 2026.
          </p>
        </div>

        {/* Reader Controls Toolbar */}
        <div className="flex items-center flex-wrap gap-2.5">
          {/* Audio Ambiance Toggle */}
          <button
            onClick={() => toggleAmbiance()}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border transition-colors cursor-pointer ${
              isPlayingAudio
                ? 'bg-amber-950/80 border-amber-500/70 text-amber-300 shadow-sm'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title="Toggle Web Audio procedural lab soundscape"
          >
            {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>{isPlayingAudio ? 'Ambiance ON' : 'Ambiance OFF'}</span>
          </button>

          {/* Novel View Type: Illustrated Acts vs Chapters 1-3 */}
          <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-lg">
            <button
              onClick={() => setNovelViewType('acts')}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded transition-colors cursor-pointer ${
                novelViewType === 'acts'
                  ? 'bg-amber-500/20 text-amber-300 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3 h-3" />
              <span>Illustrated Acts</span>
            </button>
            <button
              onClick={() => setNovelViewType('chapters')}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded transition-colors cursor-pointer ${
                novelViewType === 'chapters'
                  ? 'bg-amber-500/20 text-amber-300 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>Chapters 1–3</span>
            </button>
          </div>

          {/* View Mode Toggle for Acts */}
          {novelViewType === 'acts' && (
            <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-lg">
              <button
                onClick={() => setViewMode('cinematic')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded transition-colors cursor-pointer ${
                  viewMode === 'cinematic'
                    ? 'bg-amber-600/30 text-amber-200 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Maximize2 className="w-3 h-3" />
                <span>Cinematic</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-amber-600/30 text-amber-200 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Grid className="w-3 h-3" />
                <span>Full Grid</span>
              </button>
            </div>
          )}

          {/* Chemical Script Expansion */}
          <button
            onClick={() => setShowChemicalDialogueDoc(!showChemicalDialogueDoc)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/60 rounded-lg transition-colors cursor-pointer"
          >
            <FlaskConical className="w-3.5 h-3.5 text-cyan-400" />
            <span>Chemical Script</span>
          </button>
        </div>
      </div>

      {novelViewType === 'chapters' ? (
        <ChapterScriptViewer />
      ) : (
        <>
          {/* Act Filter Tabs */}
          <div className="flex items-center overflow-x-auto gap-2 pb-1 scrollbar-none">
            <button
              onClick={() => {
                setSelectedActId('all');
                setCurrentPanelIndex(0);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedActId === 'all'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              All Panels (1–9)
            </button>
            {GRAPHIC_NOVEL_ACTS.map((act) => (
              <button
                key={act.id}
                onClick={() => {
                  setSelectedActId(act.id);
                  setCurrentPanelIndex(0);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedActId === act.id
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                Act {act.number}: {act.number === 1 ? 'The Blueprint' : act.number === 2 ? 'The Alchemy' : 'The Lineage'}
              </button>
            ))}
          </div>

      {/* Chemical Dialogue & Technical Script Drawer */}
      {showChemicalDialogueDoc && (
        <div className="p-5 bg-[#0f1420] border border-cyan-800/60 rounded-xl flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold font-serif text-cyan-300">
              <FlaskConical className="w-4 h-4 text-cyan-400" />
              <span>Act II Technical Script: Chemical Dialogue & Asymmetric Amplification</span>
            </div>
            <button
              onClick={() => setShowChemicalDialogueDoc(false)}
              className="text-xs font-mono text-slate-400 hover:text-slate-200 cursor-pointer"
            >
              Close
            </button>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Sir Upendranath Brahmachari synthesized Urea Stibamine in 1920–1921 in a damp, poorly ventilated room at
            Campbell Medical School without hot water or an electric refrigerator. Raw Antimony (Stibnite) was fatal
            due to severe trivalent hepatotoxicity. By condensing stibanilic acid with urea, he created an asymmetric
            organometallic complex (<code className="font-mono text-amber-300">p-ureidobenzenestibonic acid</code>)
            where the organic urea shroud shielded the antimony atom from host tissues while allowing selective intake
            by the <em className="text-cyan-200">Leishmania donovani</em> amastigotes.
          </p>
          <div className="p-3 bg-amber-950/20 border border-amber-800/40 rounded-lg text-xs font-sans text-amber-200/90 leading-relaxed">
            <strong className="text-amber-400 font-serif block mb-0.5">Act II: Integrated Midnight Experiment Script</strong>
            In this dramatic rendition, Brahmachari and assistant Nilmani speak directly about the underground Agastya bio-pot (surging to 44 mbar), the GSAT satellite pod (routing excess voltage for 10 Gbps chiral lattice sync), and the 128 immersion compute nodes spinning up at 2:00 AM!
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] font-mono text-cyan-400 pt-1">
            <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">
              Kala-azar Mortality: 95% → &lt;10%
            </span>
            <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">
              Assam/Bengal Lives Saved: ~3,200,000
            </span>
            <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">
              Nobel Nominations: 1929, 1942 (Physiology/Medicine)
            </span>
          </div>
        </div>
      )}

      {/* VIEW MODE 1: CINEMATIC FOCUS */}
      {viewMode === 'cinematic' ? (
        <div className="flex flex-col gap-4">
          {/* Navigation Bar for Cinematic Carousel */}
          <div className="flex items-center justify-between px-2 text-xs font-mono text-slate-400">
            <span>
              PANEL {activePanel.panelNumber} OF {COMIC_PANELS.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevPanel}
                disabled={currentPanelIndex === 0}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-slate-200 cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
              <button
                onClick={handleNextPanel}
                disabled={currentPanelIndex === filteredPanels.length - 1}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-600/30 hover:bg-amber-600/40 border border-amber-500/50 text-amber-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                <span>Next Panel</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Focused Panel Card */}
          <ComicPanelCard
            panel={activePanel}
            onSelectQuadrant={onSelectQuadrant}
            isFocused={true}
          />

          {/* Panel Thumbnail Scrub Bar */}
          <div className="grid grid-cols-9 gap-1.5 pt-2">
            {filteredPanels.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => {
                  setCurrentPanelIndex(idx);
                  soundEngine.playChime();
                }}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded border text-center transition-all cursor-pointer ${
                  currentPanelIndex === idx
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                    : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:border-slate-700'
                }`}
              >
                <span className="text-[10px] font-mono">P{p.panelNumber}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* VIEW MODE 2: CONTINUOUS GRID SPREAD */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPanels.map((panel) => (
            <ComicPanelCard
              key={panel.id}
              panel={panel}
              onSelectQuadrant={onSelectQuadrant}
            />
          ))}
        </div>
      )}
    </>
  )}

      {/* Quick Launch CTA to Simulator */}
      <div className="mt-4 p-5 bg-gradient-to-r from-[#141b2b] via-[#1a1c2e] to-[#121622] rounded-xl border border-amber-600/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold font-serif text-amber-200">
            Synthesize Urea Stibamine in the Patana Yantra
          </h4>
          <p className="text-xs text-slate-300 mt-0.5">
            Step inside the 2:00 AM reaction chamber. Control the Agneya furnace temperature, vacuum column, and chiral seeds.
          </p>
        </div>
        <button
          onClick={onLaunchSynthesizer}
          className="px-4 py-2 text-xs font-semibold font-mono text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-colors whitespace-nowrap cursor-pointer shrink-0"
        >
          Launch Chiral Synthesizer
        </button>
      </div>
    </div>
  );
};
