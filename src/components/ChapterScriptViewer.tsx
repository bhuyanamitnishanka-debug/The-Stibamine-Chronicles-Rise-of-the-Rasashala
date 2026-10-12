/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NOVEL_CHAPTERS, NovelChapter, NovelChapterPanel } from '../data/chaptersData';
import { BookOpen, User, Volume2, Activity, ChevronRight } from 'lucide-react';
import { soundEngine } from '../utils/audioSynth';

export const ChapterScriptViewer: React.FC = () => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>('ch-1');

  const activeChapter =
    NOVEL_CHAPTERS.find((ch) => ch.id === selectedChapterId) || NOVEL_CHAPTERS[0];

  const handleSelectChapter = (id: string) => {
    setSelectedChapterId(id);
    soundEngine.playChime();
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Chapter Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {NOVEL_CHAPTERS.map((ch) => (
          <button
            key={ch.id}
            onClick={() => handleSelectChapter(ch.id)}
            className={`px-3.5 py-2 rounded-lg text-xs font-serif font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedChapterId === ch.id
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            Chapter {ch.chapterNumber}: {ch.title.split(': ')[1] || ch.title}
          </button>
        ))}
      </div>

      {/* Chapter Overview Box */}
      <div className="p-5 bg-gradient-to-r from-[#141824] via-[#1a1f2e] to-[#121520] border border-amber-900/40 rounded-xl flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs font-mono text-amber-400">
          <span>{activeChapter.era}</span>
          <span>{activeChapter.setting}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-100">
          {activeChapter.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          {activeChapter.synopsis}
        </p>
      </div>

      {/* Panels List */}
      <div className="flex flex-col gap-5">
        {activeChapter.panels.map((panel) => (
          <article
            key={panel.panelNumber}
            className="bg-[#101420] border border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col gap-4 shadow-lg hover:border-slate-700 transition-colors"
          >
            {/* Panel Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-xs font-mono">
              <span className="font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded">
                PANEL {panel.panelNumber}
              </span>
              <span className="text-slate-300 font-serif font-semibold text-sm">
                {panel.title}
              </span>
              {panel.soundEffect && (
                <span className="text-slate-500 text-[11px] italic">
                  [{panel.soundEffect}]
                </span>
              )}
            </div>

            {/* Visual Direction */}
            <div className="p-3 bg-[#080b12] border-l-2 border-cyan-500 rounded-r text-xs text-slate-300 leading-relaxed font-sans">
              <span className="text-cyan-400 font-mono font-bold text-[10px] uppercase block mb-0.5">
                [VISUAL DIRECTION]
              </span>
              {panel.visualDirection}
            </div>

            {/* Caption if present */}
            {panel.caption && (
              <div className="p-2.5 bg-slate-900/70 border-l-2 border-amber-500 rounded-r text-xs text-amber-200/90 italic font-sans">
                <span className="text-amber-400 font-mono font-semibold not-italic text-[10px] mr-1.5 uppercase">
                  [CAPTION]:
                </span>
                {panel.caption}
              </div>
            )}

            {/* Dialogues */}
            <div className="flex flex-col gap-2.5 pt-1">
              {panel.dialogues.map((dlg, dIdx) => {
                const isBrahmachari = dlg.character.includes('Brahmachari');
                const isSterling = dlg.character.includes('Sterling');
                const isAnanth = dlg.character.includes('Ananth');

                const borderClass = isBrahmachari
                  ? 'border-amber-600/40 bg-[#161a26]'
                  : isSterling
                  ? 'border-rose-700/40 bg-[#1e1315]'
                  : isAnanth
                  ? 'border-cyan-600/40 bg-[#101a24]'
                  : 'border-slate-700 bg-slate-900';

                const nameColor = isBrahmachari
                  ? 'text-amber-400'
                  : isSterling
                  ? 'text-rose-400'
                  : isAnanth
                  ? 'text-cyan-300'
                  : 'text-slate-300';

                return (
                  <div
                    key={dIdx}
                    className={`p-3 rounded-lg border ${borderClass} flex flex-col gap-1`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={`font-bold font-serif ${nameColor}`}>
                        {dlg.character}
                      </span>
                      {dlg.isOffPanel && (
                        <span className="text-[10px] text-slate-500 uppercase">
                          (Off-Panel)
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                      "{dlg.text}"
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Technical Telemetry Callout if present */}
            {panel.technicalTelemetry && (
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
                <span className="text-[10px] font-mono text-slate-500 uppercase">
                  Linked Telemetry:
                </span>
                {panel.technicalTelemetry.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-400"
                  >
                    {t.label}: <strong className="text-slate-100">{t.value}</strong>
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};
