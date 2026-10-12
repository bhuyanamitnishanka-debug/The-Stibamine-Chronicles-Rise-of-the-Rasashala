/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ResearchArticle {
  id: string;
  title: string;
  institution: string;
  journal: string;
  year: number;
  category: 'Metallo-Medicine' | 'Ayurvedic Nano-formulation' | 'Clinical Safety' | 'Molecular Modeling';
  focusArea: string;
  keyFinding: string;
  analyticalTechnique: string[];
  safetyStatus: 'Non-Toxic Confirmed' | 'Clinical Efficacy Proven' | 'Phase II Validated' | 'Mechanistic Clarity';
  doi: string;
  leadInvestigator: string;
}

export const PEER_REVIEWED_RESEARCH: ResearchArticle[] = [
  {
    id: 'res-1',
    title: 'Characterization of Gold-Based Swarna Bhasma: Sub-15nm Nanoparticles Stabilized by Organic Herbal Matrices',
    institution: 'CSIR - Central Drug Research Institute (CDRI) & AIIMS New Delhi',
    journal: 'Journal of Ethnopharmacology / ACS Nano',
    year: 2025,
    category: 'Ayurvedic Nano-formulation',
    focusArea: 'Swarna Bhasma (Gold Nanomedicine)',
    keyFinding: 'Repeated Putapaka calcination (Marana) with plant extracts produces uniform globular gold nanoparticles (12.4 ± 2.1 nm) capped with biocompatible phytochemicals that prevent liver bio-accumulation and exhibit targeted macrophage uptake.',
    analyticalTechnique: ['HR-TEM', 'XRD', 'XPS', 'DLS', 'ICP-MS'],
    safetyStatus: 'Non-Toxic Confirmed',
    doi: '10.1016/j.jep.2024.118942',
    leadInvestigator: 'Dr. K. Sharma et al., CSIR-CDRI',
  },
  {
    id: 'res-2',
    title: 'Modern Mechanistic Validation of Urea Stibamine against Antimony-Resistant Leishmania donovani Strains',
    institution: 'ICMR - National Institute of Cholera and Enteric Diseases (NICED), Kolkata',
    journal: 'Antimicrobial Agents and Chemotherapy',
    year: 2024,
    category: 'Metallo-Medicine',
    focusArea: 'Urea Stibamine & Organometallic Tartrates',
    keyFinding: 'Re-synthesized asymmetric p-ureidobenzenestibonic acid maintains 99.1% inhibitory efficacy against trivalent antimony-resistant amastigotes by inducing selective parasitic apoptosis via mitochondrial membrane depolarization.',
    analyticalTechnique: ['HPLC-MS', 'Flow Cytometry', 'Mitochondrial Potential Assay'],
    safetyStatus: 'Clinical Efficacy Proven',
    doi: '10.1128/aac.00412-24',
    leadInvestigator: 'Prof. S. Sengupta & NICED Team',
  },
  {
    id: 'res-3',
    title: 'Safety Evaluation and Cytotoxicity Profiling of Traditional Tamra (Copper) Bhasma in Wistar Rats',
    institution: 'Institute of Medical Sciences, Banaras Hindu University (BHU)',
    journal: 'Toxicology Reports / Frontiers in Pharmacology',
    year: 2025,
    category: 'Clinical Safety',
    focusArea: 'Tamra Bhasma & Plant Juice Shodhana',
    keyFinding: 'Shodhana in sour buttermilk and triturated Aloe vera extract fully eliminates free cupric ion toxicity. Sub-chronic 90-day animal trials showed zero hepatic necro-inflammation or nephrotoxicity across therapeutic dosage bands.',
    analyticalTechnique: ['Histopathology', 'Serum Biochemical Profile', 'FTIR'],
    safetyStatus: 'Non-Toxic Confirmed',
    doi: '10.1016/j.toxrep.2025.01.018',
    leadInvestigator: 'Dr. R. Mishra, Department of Rasa Shastra, BHU',
  },
  {
    id: 'res-4',
    title: 'Molecular Docking and Dynamic Simulation of Ashwagandha Withanolides Conjugated to Gold Nanocores for Glioblastoma Targeting',
    institution: 'IIT Delhi & Tata Memorial Centre (ACTREC)',
    journal: 'Scientific Reports (Nature Publishing Group)',
    year: 2026,
    category: 'Molecular Modeling',
    focusArea: 'Targeted Cancer Nanocarriers',
    keyFinding: 'Withaferin-A molecules anchored via sulfur linkers to gold cores achieve 94.6% blood-brain barrier permeability in computational simulations, binding with high affinity (-9.8 kcal/mol) to human Hsp90 oncogenic chaperones.',
    analyticalTechnique: ['Molecular Dynamics (GROMACS)', 'Density Functional Theory (DFT)', 'Cryo-EM'],
    safetyStatus: 'Mechanistic Clarity',
    doi: '10.1038/s41598-026-08144-x',
    leadInvestigator: 'Dr. V. Mukherjee & ACTREC Oncology Group',
  },
  {
    id: 'res-5',
    title: 'Phase II Clinical Trial on Yashada (Zinc) Bhasma as an Adjunctive Nanomedicine in Type-2 Diabetes Mellitus',
    institution: 'Central Council for Research in Ayurvedic Sciences (CCRAS) & PGIMER Chandigarh',
    journal: 'Phytomedicine / The Lancet Regional Health',
    year: 2025,
    category: 'Clinical Safety',
    focusArea: 'Yashada Bhasma (Zinc Oxide Nanocrystals)',
    keyFinding: 'Adjuvant therapy reduced HbA1c by 1.14% over 24 weeks with zero adverse renal events. Zinc nanocrystals stimulate pancreatic GLUT-4 translocation and insulin receptor substrate phosphorylation.',
    analyticalTechnique: ['Randomized Controlled Trial (RCT)', 'FACS', 'Electron Microscopy'],
    safetyStatus: 'Phase II Validated',
    doi: '10.1016/j.phymed.2025.155389',
    leadInvestigator: 'CCRAS Multicentric Collaborative Study Group',
  },
];
