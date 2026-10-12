/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { ComicReader } from './components/ComicReader';
import { RasashalaBlueprint } from './components/RasashalaBlueprint';
import { ChiralSynthesizer } from './components/ChiralSynthesizer';
import { TelemetryDashboard } from './components/TelemetryDashboard';
import { HistoricalCodex } from './components/HistoricalCodex';
import { DataPipelineValidator } from './components/DataPipelineValidator';
import { ResearchTracker } from './components/ResearchTracker';
import { RasashalaQuadrantId } from './types';
import { soundEngine } from './utils/audioSynth';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('novel');
  const [selectedQuadrant, setSelectedQuadrant] = useState<RasashalaQuadrantId>('agneya');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const handleToggleAudio = () => {
    const active = soundEngine.toggle('vacuum');
    setIsPlayingAudio(active);
  };

  const handleSelectQuadrantFromPanel = (quadrantId: RasashalaQuadrantId) => {
    setSelectedQuadrant(quadrantId);
    setCurrentTab('blueprint');
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-100 flex flex-col font-sans">
      {/* Top Bar Header */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main Viewport Container */}
      <main className="flex-1 pb-16">
        {currentTab === 'novel' && (
          <ComicReader
            onSelectQuadrant={handleSelectQuadrantFromPanel}
            onLaunchSynthesizer={() => setCurrentTab('synthesizer')}
          />
        )}

        {currentTab === 'blueprint' && (
          <RasashalaBlueprint
            selectedQuadrantId={selectedQuadrant}
            onSelectQuadrant={setSelectedQuadrant}
            onLaunchSynthesizer={() => setCurrentTab('synthesizer')}
            onLaunchEnergyGrid={() => setCurrentTab('telemetry')}
          />
        )}

        {currentTab === 'synthesizer' && <ChiralSynthesizer />}

        {currentTab === 'telemetry' && <TelemetryDashboard />}

        {currentTab === 'pipeline' && <DataPipelineValidator />}

        {currentTab === 'research' && <ResearchTracker />}

        {currentTab === 'codex' && <HistoricalCodex />}
      </main>

      {/* Disciplined Anti-Slop Footer */}
      <footer className="border-t border-slate-900 bg-[#07090f] py-8 px-4 text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-serif font-bold text-slate-400">The Stibamine Chronicles</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>Honoring Sir Upendranath Brahmachari (1873–1946) & Maharshi Nagarjuna</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={() => setCurrentTab('codex')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Archival Codex
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setCurrentTab('pipeline')}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Data Pipeline YAML
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setCurrentTab('research')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              CSIR/ICMR Monitor
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
