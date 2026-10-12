/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PEER_REVIEWED_RESEARCH, ResearchArticle } from '../data/researchData';
import {
  Search,
  BookOpen,
  Award,
  ExternalLink,
  ShieldCheck,
  Microscope,
  CheckCircle2,
  Atom,
} from 'lucide-react';

export const ResearchTracker: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Ayurvedic Nano-formulation',
    'Metallo-Medicine',
    'Clinical Safety',
    'Molecular Modeling',
  ];

  const filteredArticles = PEER_REVIEWED_RESEARCH.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.focusArea.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1.5">
            <span>Automated Research Monitor</span>
            <span aria-hidden="true">·</span>
            <span>CSIR · ICMR · Global Pharmacology</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-slate-100 tracking-tight">
            Ayurvedic Nano-Formulation & Metallo-Medicine Monitor
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl font-sans">
            Continuous peer-reviewed clinical tracking of Ayurvedic Bhasmas, traditional organometallic
            complexes, and targeted nanomedicines across leading pharmacology research institutions.
          </p>
        </div>

        {/* Status Pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-700/50 text-xs font-mono text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Monitor Active: Tracking Peer-Reviewed Breakthroughs</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="flex items-center overflow-x-auto gap-1.5 w-full sm:w-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Bhasma, CSIR, ICMR..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#101420] border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      {/* Research Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="bg-[#101420] border border-slate-800/90 rounded-xl p-5 flex flex-col justify-between gap-3 shadow-lg hover:border-slate-700 transition-colors"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 font-semibold">{article.category}</span>
                <span className="text-slate-400">{article.year}</span>
              </div>

              <h3 className="text-base font-bold font-serif text-slate-100 leading-snug">
                {article.title}
              </h3>

              <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-slate-300">{article.institution}</span>
                <span>·</span>
                <span className="text-slate-400 italic">{article.journal}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                {article.keyFinding}
              </p>
            </div>

            <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-800/80">
              {/* Analytical Techniques */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                <span className="text-slate-500 text-[10px] uppercase">Techniques:</span>
                {article.analyticalTechnique.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Status and DOI */}
              <div className="flex items-center justify-between text-xs font-mono pt-1">
                <span className="inline-flex items-center gap-1 text-emerald-300 text-[11px] bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{article.safetyStatus}</span>
                </span>

                <span className="text-[11px] text-slate-400 font-mono">
                  DOI: {article.doi}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
