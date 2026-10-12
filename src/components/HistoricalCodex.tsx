/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, Award, Sparkles, Scroll, ExternalLink } from 'lucide-react';

export const HistoricalCodex: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'brahmachari' | 'nagarjuna' | 'pcray' | 'glossary'>('brahmachari');

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest mb-1.5">
          <span>Archival Codex & Scientific Lineage</span>
          <span aria-hidden="true">·</span>
          <span>Campbell Medical School & Ancient Rasa Shastra</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-slate-100 tracking-tight">
          The Historical Codex of Bharat's Alchemy
        </h1>
        <p className="text-sm text-slate-400 mt-1 max-w-2xl font-sans">
          The true historical record of Sir Upendranath Brahmachari, Maharshi Nagarjuna,
          and Acharya Prafulla Chandra Ray — unravelling how ancient Indian metallurgy anticipated modern nanomedicine.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto scrollbar-none">
        {[
          { id: 'brahmachari', label: 'Sir Upendranath Brahmachari' },
          { id: 'nagarjuna', label: 'Maharshi Nagarjuna' },
          { id: 'pcray', label: 'Acharya Prafulla Chandra Ray' },
          { id: 'glossary', label: 'Rasa Ratna Samuccaya Glossary' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-3.5 py-1.5 text-xs font-serif font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === tab.id
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Sir Upendranath Brahmachari */}
      {activeTab === 'brahmachari' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#101420] border border-slate-800 rounded-xl p-6 shadow-xl">
          <div className="md:col-span-8 flex flex-col gap-4">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                1873 – 1946 · Pioneer of Organometallic Chemotherapy
              </span>
              <h2 className="text-2xl font-bold font-serif text-slate-100 mt-1">
                Sir Upendranath Brahmachari
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Campbell Medical School, Calcutta · Nominated for Nobel Prize in 1929 & 1942
              </p>
            </div>

            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans space-y-3">
              <p>
                In the early decades of the 20th century, an epidemic known as <strong className="text-amber-200">Kala-azar (Visceral Leishmaniasis)</strong> devastated the plains of Bengal and Assam. Entire villages were emptied as the protozoan parasite decimated populations with a horrifying mortality rate of over 95%.
              </p>
              <p>
                Working in a dimly lit, damp room at the Campbell Medical School in Calcutta without modern amenities or electrical refrigeration, Dr. Brahmachari spent endless nights synthesizing compounds. Raw antimony had been tested by Western researchers, but its trivalent salts destroyed the human liver.
              </p>
              <p>
                In 1920–1921, Brahmachari achieved his epochal breakthrough: <strong>Urea Stibamine</strong> (carbostibamide). By shrouding the antimony atom in an organic urea cage, he created a drug that eradicated the parasite within weeks while sparing the patient’s liver.
              </p>
              <p>
                Between 1923 and 1935, over 3.2 million lives were saved in Assam and Bengal alone. Sir Brahmachari donated the proceeds of his discoveries to establish research endowments, schools, and hospitals across Bengal.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Mortality Reduction</span>
                <span className="text-lg font-mono font-bold text-emerald-400 tabular-nums">95% → &lt;7%</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Clinical cure rate</span>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Lives Saved</span>
                <span className="text-lg font-mono font-bold text-amber-400 tabular-nums">3,200,000+</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Assam & Bengal epidemics</span>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Nobel Recognition</span>
                <span className="text-lg font-mono font-bold text-cyan-400">1929, 1942</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Physiology or Medicine</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 p-5 bg-[#0a0d14] border border-amber-900/30 rounded-xl flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-serif font-bold text-amber-300">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Historical Quotes</span>
            </div>
            <blockquote className="text-xs text-slate-300 italic leading-relaxed border-l-2 border-amber-500 pl-3">
              "I recall with joy that generous morning in 1921 when, in a small, suffocating laboratory at Campbell Hospital, I saw the sparkling yellow crystals of Urea Stibamine. The monster of Kala-azar had been chained."
              <footer className="text-[10px] font-mono text-amber-400 not-italic mt-1.5">
                — Sir U.N. Brahmachari, Presidential Address (1936)
              </footer>
            </blockquote>

            <div className="border-t border-slate-800 pt-3 text-xs text-slate-400">
              <span className="font-mono text-slate-300 block mb-1">Key Scientific Publications:</span>
              <ul className="list-disc list-inside space-y-1 text-[11px]">
                <li>Indian Journal of Medical Research (1922)</li>
                <li>Treatise on Kala-azar (John Bale, London, 1928)</li>
                <li>Biochemical Journal (1924, Royal Society)</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Maharshi Nagarjuna */}
      {activeTab === 'nagarjuna' && (
        <div className="bg-[#101420] border border-slate-800 rounded-xl p-6 flex flex-col gap-5 shadow-xl">
          <div>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
              8th – 10th Century CE · Father of Indian Alchemy & Metallurgy
            </span>
            <h2 className="text-2xl font-bold font-serif text-slate-100 mt-1">
              Maharshi Nagarjuna & The Rasaratnakara
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Chancellor of Nalanda University · Author of Rasaratnakara & Arogyamanjari
            </p>
          </div>

          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans space-y-3">
            <p>
              Maharshi Nagarjuna stands as the supreme philosopher-metallurgist of ancient India. In his magnum opus, the <strong className="text-purple-300">Rasaratnakara</strong>, he laid down the operational foundations of metallurgical transmutation, distillation, and the medicinal detoxification of heavy metals.
            </p>
            <p>
              Nagarjuna pioneered the concept that poisons could be rendered bio-compatible through precise chemical and physical processes:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-200">
              <li>
                <strong className="text-amber-300">Shodhana (Purification):</strong> Boiling and triturating heavy metals with organic decoctions, cow milk, and acidic plant juices to strip away inorganic impurities.
              </li>
              <li>
                <strong className="text-rose-300">Marana (Incineration):</strong> Subjecting the metal to 100+ cycles of calcination in sealed crucibles (Musa) until the crystalline lattice fractures into sub-micron nanoparticles (Bhasma).
              </li>
              <li>
                <strong className="text-cyan-300">Bhavana (Potentiation):</strong> Grinding nanoparticles with medicinal plant matrices so that organic phytochemicals chelate to the metal core.
              </li>
            </ul>
          </div>

          <div className="p-4 bg-[#090b14] border border-purple-900/40 rounded-xl flex flex-col gap-2">
            <span className="text-xs font-serif font-bold text-purple-300">
              Rasaratnakara Sanskrit Inscription:
            </span>
            <p className="text-xs sm:text-sm text-purple-200/90 font-serif italic">
              "सिद्धे रसे करिष्यामि निर्दारिद्र्यमहं जगत्। रसवेधविधिं वक्ष्ये सर्वसत्त्वोपकारकम्॥"
            </p>
            <p className="text-xs text-slate-400 font-mono">
              "When my mercury-metallic science is perfected, I shall free the entire world of all poverty and disease. I speak the method of Rasavedha for the welfare of all living beings."
            </p>
          </div>
        </div>
      )}

      {/* Tab 3: Acharya Prafulla Chandra Ray */}
      {activeTab === 'pcray' && (
        <div className="bg-[#101420] border border-slate-800 rounded-xl p-6 flex flex-col gap-5 shadow-xl">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              1861 – 1944 · Father of Indian Chemistry
            </span>
            <h2 className="text-2xl font-bold font-serif text-slate-100 mt-1">
              Acharya Prafulla Chandra Ray
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Founder of Bengal Chemicals · Author of "History of Hindu Chemistry"
            </p>
          </div>

          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans space-y-3">
            <p>
              Acharya P.C. Ray was a towering giant of modern Indian science. A world-renowned inorganic chemist who discovered <strong className="text-cyan-200">Mercurous Nitrite</strong> in 1896, he founded India’s first modern pharmaceutical enterprise: <strong>Bengal Chemical & Pharmaceutical Works</strong>.
            </p>
            <p>
              In his monumental two-volume historical work, <strong className="text-amber-200">The History of Hindu Chemistry (1902–1909)</strong>, Acharya Ray meticulously translated ancient Sanskrit and Prakrit manuscripts, proving to the Royal Society and the international scientific community that ancient Indians had perfected zinc distillation by the 12th century at Zawar (Rajasthan)—centuries before William Champion’s 1738 English patent.
            </p>
            <p>
              Ray was the mentor and scientific inspiration for Upendranath Brahmachari, Satyendra Nath Bose (Bose-Einstein statistics), and Meghnad Saha (Saha ionization equation).
            </p>
          </div>
        </div>
      )}

      {/* Tab 4: Rasa Ratna Samuccaya Glossary */}
      {activeTab === 'glossary' && (
        <div className="bg-[#101420] border border-slate-800 rounded-xl p-6 flex flex-col gap-4 shadow-xl">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              Technical Lexicon · Vagbhata (13th Century CE)
            </span>
            <h2 className="text-2xl font-bold font-serif text-slate-100 mt-1">
              Glossary of Rasashala Metallurgy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            {[
              {
                term: 'Patana Yantra (पातन यन्त्र)',
                def: 'Distillation apparatus consisting of two vessels connected by an angled neck. Divided into Urdhva-patana (upward), Adhah-patana (downward), and Tiryak-patana (sideward). The direct ancestor of the modern rotary vacuum evaporator.',
              },
              {
                term: 'Angara Kosthi (अङ्गार कोष्ठी)',
                def: 'Specialized high-temperature metallurgical furnace fueled by charcoal and compressed air bellows, traditionally located in the Southeast (Agneya) quadrant to align with solar thermal dynamics.',
              },
              {
                term: 'Musha (मूषा)',
                def: 'Crucible crafted from a composite refractory matrix of burnt river clay, iron dust, and carbonized rice husk. Capable of withstanding temperatures exceeding 1,200 °C without fracturing.',
              },
              {
                term: 'Madhuchista Vidhana (मधूच्छिष्ट विधान)',
                def: 'The ancient Indian lost-wax casting technique used to forge seamless bronze, brass, and Panchaloha alloy laboratory housings, fittings, and intricate condenser brackets.',
              },
              {
                term: 'Bhasma (भस्म)',
                def: 'Biocompatible organometallic nanoparticles achieved through repetitive Marana (incineration) with plant extracts. Tests in Rasa texts include Varitara (floating on water) and Rekhapurna (entering the skin ridges).',
              },
              {
                term: 'Agastya Kumbha (अगस्त्य कुम्भ)',
                def: 'Galvanic battery cells described in ancient chemical treatises, utilizing copper sulfate, zinc, and fermented compost electrolyte to generate localized electric current.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 bg-slate-900/70 border border-slate-800 rounded-lg flex flex-col gap-1">
                <span className="font-serif font-bold text-amber-300 text-sm">{item.term}</span>
                <p className="text-slate-300 leading-relaxed">{item.def}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
