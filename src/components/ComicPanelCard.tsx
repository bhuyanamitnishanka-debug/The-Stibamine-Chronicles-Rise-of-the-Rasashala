/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ComicPanel, RasashalaQuadrantId } from '../types';
import { PanelArtwork } from './PanelArtwork';
import { Sparkles, Compass, Volume2, BookOpen, Atom } from 'lucide-react';
import { soundEngine } from '../utils/audioSynth';

interface ComicPanelCardProps {
  panel: ComicPanel;
  onSelectQuadrant?: (quadrantId: RasashalaQuadrantId) => void;
  isFocused?: boolean;
}

export const ComicPanelCard: React.FC<ComicPanelCardProps> = ({
  panel,
  onSelectQuadrant,
  isFocused = false,
}) => {
  const [showSanskritDetails, setShowSanskritDetails] = useState(false);

  const handlePlaySoundEffect = () => {
    soundEngine.playChime();
  };

  return (
    <article
      className={`group relative flex flex-col bg-[#111622] rounded-xl border transition-all duration-300 overflow-hidden ${
        isFocused
          ? 'border-amber-500/80 shadow-2xl shadow-amber-500/10 ring-1 ring-amber-500/30'
          : 'border-slate-800/80 hover:border-slate-700'
      }`}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d121c] border-b border-slate-800/80 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded text-[11px]">
            PANEL {panel.panelNumber}
          </span>
          <span className="text-slate-400 font-mono text-[11px]">{panel.era}</span>
          <span className="hidden sm:inline text-slate-600">·</span>
          <span className="hidden sm:inline text-slate-400 text-[11px] truncate max-w-xs">{panel.location}</span>
        </div>

        <div className="flex items-center gap-2">
          {panel.quadrantLink && onSelectQuadrant && (
            <button
              onClick={() => onSelectQuadrant(panel.quadrantLink!)}
              className="inline-flex items-center gap-1.5 px-2 py-1 text-[11px] font-mono text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/50 rounded transition-colors cursor-pointer"
              title="Inspect linked Rasashala facility quadrant"
            >
              <Compass className="w-3 h-3 text-cyan-400" />
              <span>Inspect Facility</span>
            </button>
          )}

          {panel.soundEffect && (
            <button
              onClick={handlePlaySoundEffect}
              className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-mono text-amber-300 bg-amber-950/30 hover:bg-amber-900/40 border border-amber-800/40 rounded transition-colors cursor-pointer"
              title="Play sound effect cue"
            >
              <Volume2 className="w-3 h-3 text-amber-400" />
              <span className="hidden md:inline">{panel.soundEffect.split('...')[0]}</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Panel Content */}
      <div className="p-4 sm:p-5 flex flex-col gap-4">
        {/* Title */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-100 tracking-wide">
            {panel.title}
          </h3>
          <p className="text-xs text-amber-500/90 font-mono mt-0.5">{panel.subtitle}</p>
        </div>

        {/* Narrative Caption */}
        <div className="relative pl-3.5 pr-3 py-2 bg-[#090d15] border-l-2 border-amber-500 rounded-r text-xs sm:text-sm text-slate-300 italic leading-relaxed">
          <span className="font-semibold text-amber-400 not-italic mr-1.5 uppercase font-mono text-[10px]">
            [NARRATOR]
          </span>
          {panel.caption}
        </div>

        {/* Visual Artwork Box */}
        <div className="relative w-full rounded-lg overflow-hidden shadow-inner">
          <PanelArtwork panelNumber={panel.panelNumber} />
        </div>

        {/* Chemical Equation Box if applicable */}
        {panel.chemicalFormula && (
          <div className="flex items-center gap-2.5 px-3 py-2 bg-slate-900/90 border border-cyan-800/40 rounded-lg text-xs font-mono text-cyan-300">
            <Atom className="w-4 h-4 text-cyan-400 shrink-0" />
            <div className="truncate">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider mr-2">Reaction:</span>
              <span className="font-semibold">{panel.chemicalFormula}</span>
            </div>
          </div>
        )}

        {/* Dialogue Balloons */}
        <div className="flex flex-col gap-3">
          {panel.dialogues.map((item, idx) => {
            const isBrahmachari = item.avatarVariant === 'brahmachari';
            const isNagarjuna = item.avatarVariant === 'nagarjuna';
            const isLaureate = item.avatarVariant === 'laureate';

            const borderClass = isBrahmachari
              ? 'border-amber-600/40 bg-[#161a26]'
              : isNagarjuna
              ? 'border-purple-600/40 bg-[#171426]'
              : isLaureate
              ? 'border-blue-600/40 bg-[#121929]'
              : 'border-slate-700/60 bg-[#141822]';

            const badgeColor = isBrahmachari
              ? 'text-amber-400'
              : isNagarjuna
              ? 'text-purple-300'
              : isLaureate
              ? 'text-blue-300'
              : 'text-slate-300';

            return (
              <div
                key={idx}
                className={`relative p-3.5 rounded-lg border ${borderClass} flex flex-col gap-1.5 shadow-sm`}
              >
                <div className="flex items-center justify-between text-[11px]">
                  <span className={`font-bold font-serif tracking-wider ${badgeColor}`}>
                    {item.character}
                  </span>
                  <span className="text-slate-500 text-[10px] font-mono">{item.role}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                  "{item.dialogue}"
                </p>

                {item.expression && (
                  <p className="text-[10px] text-slate-500 italic mt-0.5">
                    Expression: {item.expression}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Sanskrit Classical Verse Citation if present */}
        {panel.sanskritVerse && (
          <div className="bg-[#121521] border border-amber-900/40 rounded-lg p-3 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-serif font-bold">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Rasa Shastra Manuscript Anchor</span>
              </div>
              <button
                onClick={() => setShowSanskritDetails(!showSanskritDetails)}
                className="text-[10px] font-mono text-slate-400 hover:text-slate-200 underline cursor-pointer"
              >
                {showSanskritDetails ? 'Collapse' : 'View Classical Source'}
              </button>
            </div>

            <p className="text-xs sm:text-sm text-amber-200/90 font-serif leading-relaxed italic">
              {panel.sanskritVerse.sanskrit}
            </p>

            {showSanskritDetails && (
              <div className="mt-1 pt-2 border-t border-slate-800 text-xs flex flex-col gap-1 text-slate-400">
                <p className="font-mono text-[11px] text-slate-300">
                  <span className="text-slate-500">Transliteration:</span> {panel.sanskritVerse.transliteration}
                </p>
                <p className="text-slate-300">
                  <span className="text-slate-500">Meaning:</span> {panel.sanskritVerse.english}
                </p>
                <p className="text-[10px] font-mono text-amber-500/80">
                  Source: {panel.sanskritVerse.source}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
