/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NovelChapterPanel {
  panelNumber: number;
  title: string;
  visualDirection: string;
  caption?: string;
  dialogues: {
    character: string;
    text: string;
    isOffPanel?: boolean;
    style?: string;
  }[];
  soundEffect?: string;
  technicalTelemetry?: {
    label: string;
    value: string;
  }[];
}

export interface NovelChapter {
  id: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  era: string;
  setting: string;
  synopsis: string;
  panels: NovelChapterPanel[];
}

export const NOVEL_CHAPTERS: NovelChapter[] = [
  {
    id: 'ch-1',
    chapterNumber: 1,
    title: 'Chapter 1: The Agneya Ignitions',
    subtitle: 'Calcutta Monsoon 1921 · The Off-Grid Genesis',
    era: 'Calcutta, Monsoon 1921',
    setting: 'Hooghly Riverbanks & Sovereign Subterranean Facility',
    synopsis: 'As British inspectors cut the municipal power lines to freeze Indian medical research, Dr. Upendranath Brahmachari activates the subterranean 500-cell Agastya Network, proving that sovereign energy is invited by the geometry of space.',
    panels: [
      {
        panelNumber: 1,
        title: 'The Sanctuary on the Hooghly',
        visualDirection: 'A cinematic, wide exterior shot of a sprawling compound nestled along the misty banks of the Hooghly River. Walls made of thick, hand-carved local stone are bound together by sleek, matte-black carbon-fiber structural frames. Roofs are lined with modern solar shingles arranged in geometric, ancient Vedic brick patterns. Rain lashes against the high windows.',
        caption: 'Calcutta. The monsoon of 1921 brought disease, darkness, and destiny. Inside a sovereign sanctuary built away from colonial eyes, an ancient science awakens.',
        dialogues: [
          {
            character: 'Dr. Upendranath Brahmachari',
            text: 'Energy is not created by the machine, my boy. It is invited by the geometry of the space.',
            isOffPanel: true,
          },
        ],
        soundEffect: 'THUNDER ... ROAR OF THE HOOGHLY',
      },
      {
        panelNumber: 2,
        title: 'The Cut Wires',
        visualDirection: 'Interior shot of the primary command deck. Warm amber lighting from the server racks glints off the highly polished bronze fixtures holding the hybrid borosilicate glass piping together. Dr. Brahmachari stands tall in a crisp khadi lab coat over traditional attire, unrolling a heavy parchment map over a diagnostic screen. His young assistant, Ananth, stands beside him holding a sealed clay crucible.',
        dialogues: [
          {
            character: 'Assistant Ananth',
            text: 'The British medical inspectors just crossed the river, Sir. They have cut our grid access to the city power lines. They mean to starve out our research.',
          },
          {
            character: 'Dr. Upendranath Brahmachari',
            text: 'Let them cut the wires, Ananth. They think power only flows through copper lines strung on wooden poles. They do not know what lies beneath their boots.',
          },
        ],
        soundEffect: 'CLICK-CLACK OF VALVES',
      },
      {
        panelNumber: 3,
        title: 'The Agastya Subterranean Matrix',
        visualDirection: 'A dramatic underground cross-section cutaway. Deep beneath the stone floor of the lab, giant clay vessels—the Agastya Pots—are buried in a glowing, dark organic matrix of fermenting biomass and compost. Heavy copper and zinc plates inside the pots hum with a deep current, connected to thick conduits leading up into the lab foundation.',
        caption: 'The Agastya Network. 500 electrochemical cells buried in active anaerobic compost.',
        dialogues: [
          {
            character: 'Dr. Upendranath Brahmachari',
            text: 'Fifty cells in series to scale the potential. Twenty parallel strings to draw the current. Heated by the microbial fire of the earth to fifty-five degrees Celsius. The Nernst equation favors the patient, Ananth.',
          },
        ],
        technicalTelemetry: [
          { label: 'Array Structure', value: '50 Series × 20 Parallel' },
          { label: 'Compost Temp', value: '55.0 °C (328.15 K)' },
          { label: 'Electrolyte Quotient Q', value: '0.05 ([Zn²⁺]/[Cu²⁺])' },
        ],
      },
      {
        panelNumber: 4,
        title: 'The Needle Swings Green',
        visualDirection: 'Close-up on Ananth’s face, illuminated by a sharp blue light reflecting from a terminal. His eyes are wide with astonishment as digital needle gauges swing sharply into the green operating zone.',
        dialogues: [
          {
            character: 'Assistant Ananth',
            text: 'The underground voltage is stabilizing at fifty-five point four volts! The biogas turbines in the western quadrant are firing up automatically! The immersion tanks are flooding with the non-conductive herbal cooling oil!',
          },
          {
            character: 'Dr. Upendranath Brahmachari',
            text: 'Excellent. Activate the satellite uplink payload. Let the GSAT multi-spectral array map the molecular changes in real-time.',
          },
        ],
        soundEffect: 'TURBINE HUM ... GSAT UPLINK CHIME',
      },
      {
        panelNumber: 5,
        title: 'The Agneya Crucible',
        visualDirection: 'Massive full-width panel. Brahmachari steps up to the Agneya Quadrant—the Southeast furnace room. In front of him stands a towering vacuum distillation column (the Patana Yantra). The core valves and structural joints are made of intricate bronze cast using the ancient Bhartiya lost-wax method (Madhuchista Vidhana), holding crystal-clear borosilicate retorts that begin to glow with a deep orange-yellow chemical slurry.',
        dialogues: [
          {
            character: 'Dr. Upendranath Brahmachari',
            text: 'For a century, our people have died because foreign medicine gave them toxic mixtures that destroyed the liver while fighting the parasite. Today, we change the rules of health science.',
          },
        ],
        technicalTelemetry: [
          { label: 'Column Pressure', value: '12 mbar' },
          { label: 'Foundry Alloy', value: 'Pancha-Loha Bronze' },
        ],
      },
      {
        panelNumber: 6,
        title: 'The Crystalline Shroud',
        visualDirection: 'Extreme close-up on the glowing borosilicate chamber. Inside the orange liquid, dark gray heavy molecules of raw Antimony are being structurally surrounded and locked inside an organic cage of symmetrical Urea rings, creating a perfect, single-handed crystalline formation.',
        caption: 'The positive non-linear effect. Asymmetric amplification inside a sovereign off-grid facility.',
        dialogues: [
          {
            character: 'Dr. Upendranath Brahmachari',
            text: 'We will take their heavy minerals, and we will tame them using the living geometry of our text formulas. The loop is complete, Ananth. Engage the automated telemetry pipelines... let the Stibamine form!',
          },
        ],
        soundEffect: 'CRACKLE ... LATTICE NUCLEATION',
      },
    ],
  },
  {
    id: 'ch-2',
    chapterNumber: 2,
    title: 'Chapter 2: The Sovereign Threshold',
    subtitle: '02:15 AM · The Colonial Confrontation',
    era: 'Calcutta, 02:15 AM',
    setting: 'The Main Gates & Central Atrium of the Quantum Rasashala',
    synopsis: 'Major Donald Sterling and colonial medical inspectors arrive to enforce an illegal shutdown order, only to find an off-grid laboratory radiating clean amber light, aromatic steam, and absolute self-reliance.',
    panels: [
      {
        panelNumber: 1,
        title: 'Monsoon Enforcement',
        visualDirection: 'Striking wide exterior shot of the main entrance gates of the Quantum Rasashala in pouring rain. A black colonial steam vehicle idles outside, headlights cutting through monsoon mist. Three British medical inspectors in heavy trench coats step out. Major Donald Sterling holds a clipboard. The gates slide open silently without a single screech—balanced on counterweights.',
        caption: '02:15 AM. The colonial authority arrives to enforce the shutdown order.',
        dialogues: [
          {
            character: 'Major Donald Sterling',
            text: 'Keep your eyes open, men. The grid logs show this entire district went dark three hours ago. If Brahmachari is running bootleg coal generators, I want them seized.',
          },
        ],
      },
      {
        panelNumber: 2,
        title: 'Camphor and Amber',
        visualDirection: 'Interior shot looking from the darkened vestibule out toward the heavy entrance doors as they swing open. Major Sterling and his officers step inside stamping muddy boots. Instead of cold abandonment, they are hit by a warm, aromatic wave of steam smelling of camphor and eucalyptus, and a vibrant ambient amber glow.',
        dialogues: [
          {
            character: 'Major Donald Sterling',
            text: 'What in God’s name...? Why is it warm in here? Where is the smell of kerosene?',
          },
        ],
      },
      {
        panelNumber: 3,
        title: 'The Electric Marvel',
        visualDirection: 'Wide panoramic view of the central atrium. Deep low-frequency acoustic vibration. Towering server racks dip down into glass-walled immersion pools filled with clear, bubbling herbal dielectric fluids. Overhead, hybrid borosilicate glass tubes held by intricate lost-wax bronze brackets pulsate with glowing fluids moving between quadrants.',
        dialogues: [
          {
            character: 'Inspector Hughes',
            text: 'Major... look at the walls. There are no gas lamps. No electrical wiring from the municipal poles. Yet the entire facility is radiating light!',
          },
        ],
        soundEffect: 'HUMMMMM OF IMMERSION CORES',
      },
      {
        panelNumber: 4,
        title: 'Brahmachari Steps Forward',
        visualDirection: 'Dr. Brahmachari steps out from the Western Quadrant wiping his hands with a clean cloth. Ananth follows, holding a real-time diagnostic slate displaying the green metrics of the Agastya Battery Grid.',
        dialogues: [
          {
            character: 'Dr. Upendranath Brahmachari',
            text: 'Good evening, Major Sterling. I trust the monsoon roads from the government house were not too unkind to your vehicle.',
          },
          {
            character: 'Major Donald Sterling',
            text: 'Cut the pleasantries, Brahmachari! You were served a grid-termination notice at midnight. By British medical decree, this lab is operating illegally without an authorized power grid!',
          },
        ],
      },
      {
        panelNumber: 5,
        title: 'Beyond the Wire',
        visualDirection: 'Close-up on Brahmachari taking the clipboard, glancing briefly, and dropping it onto a stone counter. He leans against a bronze distillation column as reflections of orange Urea Stibamine dance across his spectacles.',
        dialogues: [
          {
            character: 'Dr. Upendranath Brahmachari',
            text: 'You speak of a grid that relies on burning coal to generate power, transmitted over fragile wires that fail at the first drop of rain. Look around you, Major. We do not use your grid.',
          },
          {
            character: 'Major Donald Sterling',
            text: 'Don’t play games with me! A facility of this scale requires hundreds of kilowatts! You are stealing power from the railway lines!',
          },
        ],
      },
      {
        panelNumber: 6,
        title: 'Power from the Soil',
        visualDirection: 'Dramatic low-angle shot looking up at Brahmachari pointing downward to the stone floor beneath their feet. A faint glowing schematic overlay appears on the stone, revealing the multi-cell Agastya Pots shifting energy dynamically to the mini data center.',
        dialogues: [
          {
            character: 'Dr. Upendranath Brahmachari',
            text: 'The energy fueling this room comes from the soil beneath your very boots. Microbial fermentation of agricultural waste pushes our biogas loop, while five hundred organic cells in the earth maintain our voltage matrix. Your authority ends at the wire, Major Sterling. But the science of Bharat... draws its power from the earth itself.',
          },
        ],
        technicalTelemetry: [
          { label: 'Ground Bio-Potential', value: '55.4 V Active' },
          { label: 'Digester Pressure', value: '28.4 mbar' },
        ],
      },
      {
        panelNumber: 7,
        title: 'The Shattered Illusion',
        visualDirection: 'Tight close-up on Major Sterling’s clenched jaw. His eyes dart to a humming immersion tank where a digital readout reads: GSAT SYNC: SECURE // ANIONIC AMPLIFICATION: 99.5% PURITY. He realizes he has no technical or legal leverage to shut down a machine that does not plug into his world.',
        caption: 'The illusion of control shatters against the reality of absolute self-reliance.',
        dialogues: [
          {
            character: 'Assistant Ananth',
            text: 'Sir! Synthesis cycle locked. Zero free antimony ions detected.',
          },
        ],
      },
    ],
  },
  {
    id: 'ch-3',
    chapterNumber: 3,
    title: 'Chapter 3: The Clinical Crucible',
    subtitle: 'The Cellular Demonstration · Pure Urea Stibamine',
    era: 'Calcutta, 02:40 AM',
    setting: 'Central Microfluidic Projection Deck, Quantum Rasashala',
    synopsis: 'Major Sterling challenges Brahmachari’s off-grid science. In response, Brahmachari introduces pure Urea Stibamine into a live Leishmania donovani holographic cell culture, achieving instant parasite eradication while leaving human cells completely untouched.',
    panels: [
      {
        panelNumber: 1,
        title: 'The Colonial Skeptic',
        visualDirection: 'A mid-shot focusing on Major Sterling, whose face is twisted in skepticism and growing frustration. He gestures wildly at the humming, glass-and-bronze Patana Yantra distillation column behind Dr. Brahmachari.',
        dialogues: [
          {
            character: 'Major Donald Sterling',
            text: 'Nonsense! Earth batteries and compost gas cannot make medicine, Brahmachari! You are playing with mud and calling it miracles. The Kala-azar parasite is a death sentence. Only our imports of native antimony can check it, even if it burns the patient’s vitals!',
          },
        ],
      },
      {
        panelNumber: 2,
        title: 'Patient Zero Culture',
        visualDirection: 'Dr. Brahmachari steps away from the column, walking toward a sterilized glass containment chamber in the center of the lab. Inside, a high-powered microfluidic imaging array—illuminated by a sharp neon-green laser—projects a live, holographic cellular view into the air above it.',
        dialogues: [
          {
            character: 'Dr. Upendranath Brahmachari',
            text: 'Your imports kill the parasite by destroying the body that hosts it, Major. Because your chemistry lacks precision. Ananth, load the micro-sample from Patient Zero.',
          },
          {
            character: 'Assistant Ananth',
            text: 'Loading live Leishmania donovani culture, Sir. Telemetry sync is locked with the satellite node.',
          },
        ],
      },
      {
        panelNumber: 3,
        title: 'The Swarm in the Hologram',
        visualDirection: 'Extreme macro shot of the floating holographic projection. Thousands of rod-shaped, aggressively motile Kala-azar parasites are swimming chaotically across the screen, devouring healthy cellular structures. The projection shows a blood sample in critical failure.',
        dialogues: [
          {
            character: 'Inspector Miller',
            text: 'My word... that is a live cellular projection. I have never seen imaging this crisp in London...',
          },
          {
            character: 'Major Donald Sterling',
            text: 'Silence, Miller! It is just a magic lantern trick!',
          },
        ],
        soundEffect: 'BUZZING PARASITIC MOTILITY HUM',
      },
      {
        panelNumber: 4,
        title: 'The Asymmetric Drop',
        visualDirection: 'Close-up on Brahmachari’s hand as he turns a lost-wax cast bronze dial on the side of the retort. A microscopic drop of the glowing orange-yellow Urea Stibamine solution is introduced into the microfluidic channel via a borosilicate micro-needle.',
        dialogues: [
          {
            character: 'Dr. Upendranath Brahmachari',
            text: 'Watch closely, gentlemen. This is the difference between raw poison and asymmetric amplification.',
          },
        ],
      },
      {
        panelNumber: 5,
        title: 'The Molecular Key',
        visualDirection: 'A split panel showing the action inside the projection. Left side: The single-handed Urea Stibamine molecules wrap around the surface receptors of the parasite with perfect geometric alignment, mimicking a key locking into place. Right side: Within fractions of a second, the outer membranes of the parasites rupture and dissolve into inert cellular debris, while healthy human white blood cells remain completely untouched and vibrant.',
        dialogues: [
          {
            character: 'Narrator Caption',
            text: 'Stereochemical precision: selective amastigote membrane rupture with zero host cytotoxicity.',
          },
        ],
        soundEffect: 'POP ... MEMBRANE LYSIS RESONANCE',
      },
      {
        panelNumber: 6,
        title: 'Count: Zero',
        visualDirection: 'A wide shot of the room. The three British inspectors stand frozen, the glowing green light of the successful simulation washing over their stunned faces. Major Sterling drops his hand, staring at the screen where the parasite count reads: ZERO.',
        dialogues: [
          {
            character: 'Assistant Ananth',
            text: 'Complete elimination! Ninety-nine point five percent structural affinity. No toxicity to the host tissue!',
          },
          {
            character: 'Dr. Upendranath Brahmachari',
            text: 'You see, Major, when you understand the "handedness" of the molecule—a secret our Rasashala sages mastered centuries ago—chemistry ceases to be a blunt weapon. It becomes a silver bullet. Your grid termination notice is meaningless. Because you cannot terminate a cure that has already begun.',
          },
        ],
        technicalTelemetry: [
          { label: 'Parasite Count', value: '0 (100% Cleared)' },
          { label: 'Host Viability', value: '100% Intact' },
        ],
      },
      {
        panelNumber: 7,
        title: 'The Forgotten Clipboard',
        visualDirection: 'A final, powerful shot of Major Sterling slowly turning around, walking toward the heavy entrance doors without saying a word, his clipboard left forgotten on the stone counter. Outside, the rain begins to clear, and the first light of a new Indian dawn breaks through the clouds, illuminating the proud stone and carbon-fiber towers of the sovereign lab.',
        caption: 'The dawn of sovereign health science. The empire of disease has met its match.',
        dialogues: [
          {
            character: 'Dr. Upendranath Brahmachari',
            text: 'Let the Assam and Bengal vials be prepared, Ananth. We begin clinical shipments at dawn.',
          },
        ],
      },
    ],
  },
  {
    id: 'ch-4',
    chapterNumber: 4,
    title: 'Chapter 4: The Nobel Sovereign Tribute',
    subtitle: 'Stockholm 2026 · The Global Lineage',
    era: 'Stockholm, 2026',
    setting: 'Stockholm Concert Hall & Global Digital Quantum Auditorium',
    synopsis: 'The 2026 Nobel Prize in Chemistry is awarded to Dr. Ananya Ray, who explicitly credits Sir Upendranath Brahmachari’s Agastya bio-pot, anaerobic biogas loops, and satellite telemetry pods as the engineering foundation of sustainable global nanomedicine.',
    panels: [
      {
        panelNumber: 1,
        title: 'The Podium of History',
        visualDirection: 'Fast forward to 2026 Stockholm digital auditorium. A young Indian scientist in an elegant dark sherwani stands at the Nobel podium holding the gold Chemistry medal. Behind her, colossal holographic screens display the architectural blueprint of the Quantum Rasashala—Agastya bio-pots, biogas digestors, satellite pods, and crystalline server racks.',
        caption: 'A century after Calcutta, the world acknowledges the engineering infrastructure that made sovereign nanomedicine possible.',
        dialogues: [
          {
            character: 'Dr. Ananya Ray',
            text: 'Sir Upendranath Brahmachari did not merely tame Antimony with Urea. He built a laboratory powered by the living earth—cow-dung and compost fueling the Agastya bio-pot, biogas driving furnaces, satellite pods carrying molecular data across the ether, and crystalline servers preserving the Rasashala’s memory.',
          },
        ],
      },
      {
        panelNumber: 2,
        title: 'The Sustainable Blueprint',
        visualDirection: 'The hologram projects the 13th-century Rasa Ratna Samuccaya four-quadrant spatial orientation seamlessly superimposed over modern cancer nanocarriers and decentralized micro-grids.',
        dialogues: [
          {
            character: 'Dr. Ananya Ray',
            text: 'Today, those exact principles guide our non-toxic cancer nanomedicines and zero-carbon quantum compute clusters. By listening to the earth beneath our feet, we transformed ancient wisdom into the global standard of healing.',
          },
        ],
        technicalTelemetry: [
          { label: 'Gold Nanocarrier Affinity', value: '99.8% Targeting' },
          { label: 'Grid Decarbonization', value: '100% Off-Grid' },
        ],
      },
      {
        panelNumber: 3,
        title: 'Cosmic Dawn',
        visualDirection: 'Full-page splash. Faint starlight outlines of Maharshi Nagarjuna, Acharya P.C. Ray, and Sir Upendranath Brahmachari smile down from the cosmos as glowing celestial rings of the Agastya bio-pot and satellite pod orbit like cosmic yantras.',
        caption: 'The loop is complete. The ancient fire of the Rasashala burns bright in the crucible of modern time. Bharat claims its rightful dawn.',
        dialogues: [
          {
            character: 'Cosmic Chorus',
            text: 'Energy is not created by the machine. It is invited by the geometry of the space.',
          },
        ],
        soundEffect: 'STANDING OVATION ... CELESTIAL RESONANCE',
      },
    ],
  },
];

