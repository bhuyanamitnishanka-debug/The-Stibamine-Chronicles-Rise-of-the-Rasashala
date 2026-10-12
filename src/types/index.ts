/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ActId = 'act-1' | 'act-2' | 'act-3';

export type RasashalaQuadrantId = 'agneya' | 'varuna' | 'uttara' | 'dakshina' | 'subterranean';

export interface CharacterDialogue {
  character: string;
  role: string;
  dialogue: string;
  expression?: string;
  avatarVariant: 'brahmachari' | 'assistant' | 'nagarjuna' | 'laureate';
}

export interface ComicPanel {
  id: string;
  panelNumber: number;
  actId: ActId;
  actTitle: string;
  title: string;
  subtitle: string;
  era: string;
  location: string;
  visualPrompt: string;
  caption: string;
  dialogues: CharacterDialogue[];
  chemicalFormula?: string;
  sanskritVerse?: {
    sanskrit: string;
    transliteration: string;
    english: string;
    source: string;
  };
  quadrantLink?: RasashalaQuadrantId;
  soundEffect?: string;
}

export interface GraphicNovelAct {
  id: ActId;
  number: number;
  title: string;
  subtitle: string;
  era: string;
  panels: ComicPanel[];
}

export interface PoeticNarrativeCaption {
  sanskritVerse: string;
  sanskritTransliteration: string;
  calligraphicInscription: string;
  calligraphicAttribution: string;
  holographicTelemetry: string;
  holographicMetadata: string;
  holographicChannelTag: string;
}

export interface RasashalaQuadrant {
  id: RasashalaQuadrantId;
  sanskritName: string;
  cardinalDirection: string;
  title: string;
  classicalSource: string;
  purpose: string;
  classicalEquipment: string;
  modernEquivalent: string;
  liveParameters: {
    label: string;
    value: string;
    status: 'nominal' | 'active' | 'optimal' | 'warning';
  }[];
  description: string;
  xPercent: number; // For blueprint mapping
  yPercent: number;
  poeticCaptions: PoeticNarrativeCaption;
}

export interface AgastyaGridParams {
  cellCount: number;
  capacityAh: number;
  dungMassKg: number;
  compostMassKg: number;
}

export interface BiogasParams {
  digesterVolumeM3: number;
  methanePercentage: number;
  generatorEfficiency: number;
}

export interface SatComParams {
  satelliteName: string;
  downlinkGbps: number;
  encryptionProtocol: string;
  orbitAltitudeKm: number;
}

export interface DataCenterParams {
  rackCount: number;
  coolingType: string;
  fluidTempCelsius: number;
}

export interface SynthesisControlState {
  furnaceTempC: number;
  vacuumLevelMbar: number;
  herbalExtractMl: number;
  chiralSeedAdded: boolean;
  activeStep: 1 | 2 | 3 | 4;
}
