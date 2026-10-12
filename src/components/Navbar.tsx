/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export type NavTab =
  | 'novel'
  | 'blueprint'
  | 'synthesizer'
  | 'telemetry'
  | 'pipeline'
  | 'research'
  | 'codex';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  isPlayingAudio,
  onToggleAudio,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0e14]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => onSelectTab('novel')}
          className="text-lg sm:text-xl font-bold font-serif tracking-tight text-amber-300 hover:text-amber-200 whitespace-nowrap shrink-0 transition-colors text-left cursor-pointer"
        >
          The Stibamine Chronicles
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-400">
          <button
            onClick={() => onSelectTab('novel')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentTab === 'novel'
                ? 'text-amber-300 font-semibold'
                : 'hover:text-slate-200'
            }`}
          >
            Graphic Novel
          </button>
          <button
            onClick={() => onSelectTab('blueprint')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentTab === 'blueprint'
                ? 'text-amber-300 font-semibold'
                : 'hover:text-slate-200'
            }`}
          >
            Digital Twin
          </button>
          <button
            onClick={() => onSelectTab('synthesizer')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentTab === 'synthesizer'
                ? 'text-amber-300 font-semibold'
                : 'hover:text-slate-200'
            }`}
          >
            Chiral Lab
          </button>
          <button
            onClick={() => onSelectTab('telemetry')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentTab === 'telemetry'
                ? 'text-amber-300 font-semibold'
                : 'hover:text-slate-200'
            }`}
          >
            Bio-Energy Grid
          </button>
          <button
            onClick={() => onSelectTab('pipeline')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentTab === 'pipeline'
                ? 'text-amber-300 font-semibold'
                : 'hover:text-slate-200'
            }`}
          >
            Data Pipeline
          </button>
          <button
            onClick={() => onSelectTab('research')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentTab === 'research'
                ? 'text-amber-300 font-semibold'
                : 'hover:text-slate-200'
            }`}
          >
            Research Tracker
          </button>
          <button
            onClick={() => onSelectTab('codex')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentTab === 'codex'
                ? 'text-amber-300 font-semibold'
                : 'hover:text-slate-200'
            }`}
          >
            Codex
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleAudio}
            className="p-1.5 rounded-lg text-slate-400 hover:text-amber-300 bg-slate-900 border border-slate-800 transition-colors cursor-pointer"
            title="Toggle laboratory ambient drone"
          >
            {isPlayingAudio ? (
              <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => onSelectTab(currentTab === 'novel' ? 'blueprint' : 'novel')}
            className="px-3.5 py-1.5 text-xs font-semibold font-mono text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {currentTab === 'novel' ? 'Explore Digital Twin' : 'Read Graphic Novel'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Sub-bar */}
      <div className="lg:hidden flex items-center overflow-x-auto gap-1 px-3 py-2 border-t border-slate-800/80 bg-[#080b10] text-[11px] font-mono text-slate-400 scrollbar-none">
        <button
          onClick={() => onSelectTab('novel')}
          className={`px-2.5 py-1 rounded cursor-pointer whitespace-nowrap ${currentTab === 'novel' ? 'text-amber-300 font-bold bg-amber-500/10' : ''}`}
        >
          Novel
        </button>
        <button
          onClick={() => onSelectTab('blueprint')}
          className={`px-2.5 py-1 rounded cursor-pointer whitespace-nowrap ${currentTab === 'blueprint' ? 'text-amber-300 font-bold bg-amber-500/10' : ''}`}
        >
          Blueprint
        </button>
        <button
          onClick={() => onSelectTab('synthesizer')}
          className={`px-2.5 py-1 rounded cursor-pointer whitespace-nowrap ${currentTab === 'synthesizer' ? 'text-amber-300 font-bold bg-amber-500/10' : ''}`}
        >
          Chiral Lab
        </button>
        <button
          onClick={() => onSelectTab('telemetry')}
          className={`px-2.5 py-1 rounded cursor-pointer whitespace-nowrap ${currentTab === 'telemetry' ? 'text-amber-300 font-bold bg-amber-500/10' : ''}`}
        >
          Bio-Energy
        </button>
        <button
          onClick={() => onSelectTab('pipeline')}
          className={`px-2.5 py-1 rounded cursor-pointer whitespace-nowrap ${currentTab === 'pipeline' ? 'text-amber-300 font-bold bg-amber-500/10' : ''}`}
        >
          Data Pipeline
        </button>
        <button
          onClick={() => onSelectTab('research')}
          className={`px-2.5 py-1 rounded cursor-pointer whitespace-nowrap ${currentTab === 'research' ? 'text-amber-300 font-bold bg-amber-500/10' : ''}`}
        >
          Research
        </button>
        <button
          onClick={() => onSelectTab('codex')}
          className={`px-2.5 py-1 rounded cursor-pointer whitespace-nowrap ${currentTab === 'codex' ? 'text-amber-300 font-bold bg-amber-500/10' : ''}`}
        >
          Codex
        </button>
      </div>
    </header>
  );
};
