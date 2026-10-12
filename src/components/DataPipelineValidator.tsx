/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  YAML_DATA_DICTIONARY_SCHEMA,
  DOCKERFILE_CONTENT,
  PROMETHEUS_METRICS_EXPORTER_PY,
  PROMETHEUS_ALERT_RULES_YML,
  KUBERNETES_DEPLOYMENT_YML,
  REQUIREMENTS_TXT_CONTENT,
  JIVA_LIPI_YAML_SCHEMA,
  DNA_DECODER_PY,
  WEBHOOK_NOTIFIER_PY,
  INTEGRATION_TEST_PIPELINE_PY,
  DEPLOY_SH_SCRIPT,
  GITHUB_ACTIONS_WORKFLOW_YML,
  TelemetryValidatorEngine,
  TelemetryPayload,
  calculateDnaOligoRequirements,
  DnaCalculationResult,
  JivaLipiDecoderEngine,
} from '../data/pipelineData';
import {
  FileCode,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCcw,
  Layers,
  Copy,
  Check,
  Cpu,
  Dna,
  Server,
  Activity,
  Terminal,
  ShieldCheck,
  Flame,
  Gauge,
  Radio,
  ArrowRight,
} from 'lucide-react';
import { soundEngine } from '../utils/audioSynth';

type PipelineTab = 'validator' | 'schema' | 'docker_k8s' | 'prometheus' | 'dna_archive' | 'cicd_tests';

export const DataPipelineValidator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PipelineTab>('validator');
  const [currentPayload, setCurrentPayload] = useState<TelemetryPayload>(
    TelemetryValidatorEngine.generateTelemetry(false)
  );
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    message: string;
    errorField?: string;
  }>(TelemetryValidatorEngine.validate(TelemetryValidatorEngine.generateTelemetry(false)));
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Project Jiva-Lipi State
  const [txnId, setTxnId] = useState<string>('99482-fa81-4cd8-b11a-sys99');
  const [blobContent, setBlobContent] = useState<string>(
    'DEC-2026-NATIONAL-GEOLOGICAL-SURVEY-DATA-SET-VOL-04-CONFIDENTIAL-RESTRICTED'
  );
  const [timestamp, setTimestamp] = useState<string>('2026-10-12T21:47:00Z');
  const [dnaReport, setDnaReport] = useState<DnaCalculationResult>(
    calculateDnaOligoRequirements(
      '99482-fa81-4cd8-b11a-sys99',
      'DEC-2026-NATIONAL-GEOLOGICAL-SURVEY-DATA-SET-VOL-04-CONFIDENTIAL-RESTRICTED',
      '2026-10-12T21:47:00Z'
    )
  );

  // DNA Decoder Interactive State
  const [inputDnaSequence, setInputDnaSequence] = useState<string>(
    'ACGTACGTACTGACGTACGTACGTACTGACGTACGTACGTACTGACGTACGT'
  );
  const [decodedResult, setDecodedResult] = useState<{
    decodedText: string;
    decodedBytes: number;
    parityChecked: boolean;
    bitLength: number;
  }>(JivaLipiDecoderEngine.decodeDnaToText('ACGTACGTACTGACGTACGTACGTACTGACGTACGTACGTACTGACGTACGT'));

  // Integration Test Simulation State
  const [isRunningIntegrationTests, setIsRunningIntegrationTests] = useState<boolean>(false);
  const [testExecutionLogs, setTestExecutionLogs] = useState<string[]>([
    'System standby. Press "Execute End-to-End Test Suite" to run pipeline integration checks.',
  ]);

  const runValidation = (introduceError: boolean) => {
    const payload = TelemetryValidatorEngine.generateTelemetry(introduceError);
    setCurrentPayload(payload);
    const result = TelemetryValidatorEngine.validate(payload);
    setValidationResult(result);
    soundEngine.playChime();
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleRunDnaCalculation = () => {
    const report = calculateDnaOligoRequirements(txnId, blobContent, timestamp);
    setDnaReport(report);
    soundEngine.playChime();
  };

  const handleDecodeDna = () => {
    const result = JivaLipiDecoderEngine.decodeDnaToText(inputDnaSequence);
    setDecodedResult(result);
    soundEngine.playChime();
  };

  const handleRunIntegrationTests = () => {
    setIsRunningIntegrationTests(true);
    setTestExecutionLogs([
      '🧪 [STEP 1/3] Launching Jiva-Lipi Bi-Directional Codec test harness...',
      ' -> Ingesting simulated SQL row: LEDGER_REF:2026-X101-VAULT-AUTHENTICATED',
    ]);
    soundEngine.playChime();

    setTimeout(() => {
      setTestExecutionLogs((prev) => [
        ...prev,
        ' -> Rotational Huffman Encoder: 248 nt oligonucleotide synthesized (GC: 52.4%).',
        ' -> Biological constraint verification: PASSED (Max Homopolymer <= 3 nt).',
        ' -> JivaLipiDecoder reverse state machine: Reconstructed original bytes 100% intact.',
        ' ✅ [CHECKPOINT 1] Bi-directional Roundtrip Loop: PASSED (100% Data Fidelity).',
        '------------------------------------------------------------------',
        '🧪 [STEP 2/3] Simulating Prometheus Alertmanager intercept (Temperature drop 50.5°C)...',
      ]);
    }, 1000);

    setTimeout(() => {
      setTestExecutionLogs((prev) => [
        ...prev,
        ' -> Alert Rule "DnaIncubationTemperatureDrop" evaluation: FIRING (T < 52.0°C).',
        ' -> Webhook Receiver (Port 5000): Received JSON payload from Alertmanager.',
        ' -> Parsed Alert: [CRITICAL] DnaIncubationTemperatureDrop in quadrant North_Uttara.',
        ' ✅ [CHECKPOINT 2] Prometheus Alert Webhook Intercept: PASSED.',
        '------------------------------------------------------------------',
        '🧪 [STEP 3/3] Verifying Kubernetes pod rollout (jiva-lipi-bi-directional-engine)...',
        ' -> 4/4 Replicas active in namespace bio-storage.',
        ' -> LivenessProbe on port 8080: OK.',
        ' 🏆 [STATUS: SUCCESS] Entire Jiva-Lipi CI/CD pipeline verified and ready for cluster deploy.',
      ]);
      setIsRunningIntegrationTests(false);
      soundEngine.playChime();
    }, 2200);
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5">
            <span>Data Engineering Pipeline</span>
            <span aria-hidden="true">·</span>
            <span>Schema Validation & Deployment Engine v2026.4.1</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-slate-100 tracking-tight">
            Quantum Rasashala Data Infrastructure
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl font-sans">
            Production-grade pipeline validation, multi-stage Docker builds, Prometheus real-time monitoring endpoints,
            and Project Jiva-Lipi bi-directional DNA archiving codec.
          </p>
        </div>

        {/* View Toggle Tabs */}
        <div className="flex items-center flex-wrap gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono">
          <button
            onClick={() => setActiveTab('validator')}
            className={`px-3 py-1.5 rounded cursor-pointer transition-colors ${
              activeTab === 'validator'
                ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Telemetry Validator
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-3 py-1.5 rounded cursor-pointer transition-colors ${
              activeTab === 'schema'
                ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            YAML Dictionary
          </button>
          <button
            onClick={() => setActiveTab('docker_k8s')}
            className={`px-3 py-1.5 rounded cursor-pointer transition-colors ${
              activeTab === 'docker_k8s'
                ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Dockerfile & K8s
          </button>
          <button
            onClick={() => setActiveTab('prometheus')}
            className={`px-3 py-1.5 rounded cursor-pointer transition-colors ${
              activeTab === 'prometheus'
                ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Prometheus & Webhook
          </button>
          <button
            onClick={() => setActiveTab('dna_archive')}
            className={`px-3 py-1.5 rounded cursor-pointer transition-colors ${
              activeTab === 'dna_archive'
                ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Project Jiva-Lipi Codec
          </button>
          <button
            onClick={() => setActiveTab('cicd_tests')}
            className={`px-3 py-1.5 rounded cursor-pointer transition-colors ${
              activeTab === 'cicd_tests'
                ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            CI/CD & Integration Tests
          </button>
        </div>
      </div>

      {/* TAB 1: TELEMETRY VALIDATOR */}
      {activeTab === 'validator' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Test Controls & Diagnostics (5 Cols) */}
          <div className="lg:col-span-5 bg-[#101420] border border-slate-800 rounded-xl p-5 flex flex-col gap-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                Automated Test Execution
              </span>
              <span className="text-[10px] font-mono text-slate-500">Node-CI Telemetry</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Test incoming JSON payloads against the Rasashala data dictionary specification.
              Verify electrolyte enum limits, biogas ranges, and lost-wax alloys.
            </p>

            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => runValidation(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-600/50 rounded-lg shadow transition-colors cursor-pointer"
              >
                <Play className="w-4 h-4 text-emerald-400" />
                <span>Inject Nominal Telemetry (Valid Payload)</span>
              </button>

              <button
                onClick={() => runValidation(true)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold text-rose-300 bg-rose-950/60 hover:bg-rose-900/60 border border-rose-600/50 rounded-lg shadow transition-colors cursor-pointer"
              >
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>Inject Corrupted Enum (Trigger Guardrail)</span>
              </button>
            </div>

            {/* Validation Outcome Banner */}
            <div
              className={`p-4 rounded-xl border flex flex-col gap-1.5 transition-all ${
                validationResult.isValid
                  ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-300'
                  : 'bg-rose-950/30 border-rose-500/50 text-rose-300'
              }`}
            >
              <div className="flex items-center gap-2">
                {validationResult.isValid ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                )}
                <span className="text-sm font-bold font-serif">
                  {validationResult.isValid ? 'Validation Passed' : 'Validation Intercepted'}
                </span>
              </div>
              <p className="text-xs font-mono leading-relaxed mt-1">{validationResult.message}</p>
              {validationResult.errorField && (
                <span className="text-[10px] font-mono text-rose-400/80 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800/60 self-start mt-1">
                  Field: {validationResult.errorField}
                </span>
              )}
            </div>
          </div>

          {/* Right: Live Payload Inspector (7 Cols) */}
          <div className="lg:col-span-7 bg-[#101420] border border-slate-800 rounded-xl p-5 flex flex-col gap-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                Live Sensor Ingestion Payload (JSON)
              </span>
              <button
                onClick={() => handleCopy(JSON.stringify(currentPayload, null, 2), 'payload')}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                {copiedKey === 'payload' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'payload' ? 'Copied' : 'Copy Payload'}</span>
              </button>
            </div>

            <pre className="p-4 bg-[#080b12] border border-slate-800/90 rounded-lg text-xs font-mono text-slate-300 overflow-x-auto max-h-[460px] leading-relaxed">
              <code>{JSON.stringify(currentPayload, null, 2)}</code>
            </pre>
          </div>
        </div>
      )}

      {/* TAB 2: YAML DATA DICTIONARY */}
      {activeTab === 'schema' && (
        <div className="bg-[#101420] border border-slate-800 rounded-xl p-5 flex flex-col gap-4 shadow-lg">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-bold font-serif text-slate-100">
                Quantum Rasashala Orchestration Metadata (YAML)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Target configuration pipeline for sensor telemetry, Agastya storage, and biogas loops.
              </p>
            </div>
            <button
              onClick={() => handleCopy(YAML_DATA_DICTIONARY_SCHEMA, 'schema')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/60 rounded-lg transition-colors cursor-pointer"
            >
              {copiedKey === 'schema' ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'schema' ? 'Copied' : 'Copy YAML Schema'}</span>
            </button>
          </div>

          <pre className="p-4 bg-[#080b12] border border-slate-800/90 rounded-lg text-xs font-mono text-amber-300/90 overflow-x-auto leading-relaxed">
            <code>{YAML_DATA_DICTIONARY_SCHEMA}</code>
          </pre>
        </div>
      )}

      {/* TAB 3: DOCKERFILE & KUBERNETES MANIFEST */}
      {activeTab === 'docker_k8s' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Multi-Stage Dockerfile */}
          <div className="bg-[#101420] border border-slate-800 rounded-xl p-5 flex flex-col gap-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-bold font-serif text-slate-100">
                  Dockerfile (Dual-Core Codec Image)
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Secure, non-root Python 3.11 runtime image with encoder.py and decoder.py.
                </p>
              </div>
              <button
                onClick={() => handleCopy(DOCKERFILE_CONTENT, 'docker')}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                {copiedKey === 'docker' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'docker' ? 'Copied' : 'Copy Dockerfile'}</span>
              </button>
            </div>

            <pre className="p-4 bg-[#080b12] border border-slate-800/90 rounded-lg text-xs font-mono text-cyan-300 overflow-x-auto max-h-[460px] leading-relaxed">
              <code>{DOCKERFILE_CONTENT}</code>
            </pre>
          </div>

          {/* Kubernetes deployment.yaml */}
          <div className="bg-[#101420] border border-slate-800 rounded-xl p-5 flex flex-col gap-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-bold font-serif text-slate-100">
                  deployment.yaml (Kubernetes Bi-Directional Engine)
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  4 replicas, port 8080/8000, livenessProbe, and bio-storage namespace configuration.
                </p>
              </div>
              <button
                onClick={() => handleCopy(KUBERNETES_DEPLOYMENT_YML, 'k8s')}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                {copiedKey === 'k8s' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'k8s' ? 'Copied' : 'Copy YAML'}</span>
              </button>
            </div>

            <pre className="p-4 bg-[#080b12] border border-slate-800/90 rounded-lg text-xs font-mono text-amber-300 overflow-x-auto max-h-[460px] leading-relaxed">
              <code>{KUBERNETES_DEPLOYMENT_YML}</code>
            </pre>
          </div>
        </div>
      )}

      {/* TAB 4: PROMETHEUS METRICS & ALERT RULES */}
      {activeTab === 'prometheus' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* metrics_exporter.py */}
          <div className="bg-[#101420] border border-slate-800 rounded-xl p-5 flex flex-col gap-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-bold font-serif text-slate-100">
                  metrics_exporter.py (Port 8000)
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Prometheus metrics exporter for Nernst voltage, compost temp, and kWh storage.
                </p>
              </div>
              <button
                onClick={() => handleCopy(PROMETHEUS_METRICS_EXPORTER_PY, 'prom_py')}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                {copiedKey === 'prom_py' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'prom_py' ? 'Copied' : 'Copy Python'}</span>
              </button>
            </div>

            <pre className="p-4 bg-[#080b12] border border-slate-800/90 rounded-lg text-xs font-mono text-cyan-300 overflow-x-auto max-h-[440px] leading-relaxed">
              <code>{PROMETHEUS_METRICS_EXPORTER_PY}</code>
            </pre>
          </div>

          {/* webhook_notifier.py */}
          <div className="bg-[#101420] border border-slate-800 rounded-xl p-5 flex flex-col gap-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-bold font-serif text-slate-100">
                  webhook_notifier.py (Port 5000)
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Alertmanager webhook receiver for real-time temperature drop & outage notices.
                </p>
              </div>
              <button
                onClick={() => handleCopy(WEBHOOK_NOTIFIER_PY, 'webhook_py')}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                {copiedKey === 'webhook_py' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'webhook_py' ? 'Copied' : 'Copy Python'}</span>
              </button>
            </div>

            <pre className="p-4 bg-[#080b12] border border-slate-800/90 rounded-lg text-xs font-mono text-rose-300 overflow-x-auto max-h-[440px] leading-relaxed">
              <code>{WEBHOOK_NOTIFIER_PY}</code>
            </pre>
          </div>
        </div>
      )}

      {/* TAB 5: PROJECT JIVA-LIPI (BIO-DIGITAL DNA ARCHIVING & REVERSE DECODER) */}
      {activeTab === 'dna_archive' && (
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Synthesis Calculator (6 Cols) */}
            <div className="lg:col-span-6 bg-[#101420] border border-slate-800 rounded-xl p-5 flex flex-col gap-4 shadow-lg">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Dna className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-base font-bold font-serif text-slate-100">
                    Encoder: Synthesis Calculator
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                  Rotational State
                </span>
              </div>

              {/* Input Fields */}
              <div className="flex flex-col gap-3 text-xs">
                <div className="flex flex-col gap-1">
                  <label className="text-slate-400 font-mono">Transaction UUID:</label>
                  <input
                    type="text"
                    value={txnId}
                    onChange={(e) => setTxnId(e.target.value)}
                    className="px-3 py-2 bg-[#080b12] border border-slate-800 rounded font-mono text-slate-200"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-slate-400 font-mono">Document Payload BLOB:</label>
                  <textarea
                    rows={2}
                    value={blobContent}
                    onChange={(e) => setBlobContent(e.target.value)}
                    className="px-3 py-2 bg-[#080b12] border border-slate-800 rounded font-mono text-slate-200"
                  />
                </div>

                <button
                  onClick={handleRunDnaCalculation}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded shadow transition-colors cursor-pointer mt-1"
                >
                  <Dna className="w-4 h-4" />
                  <span>Calculate Biochemical Synthesis Metrics</span>
                </button>
              </div>

              {/* Compilation Stats */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-slate-800">
                <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Single Strand Length</span>
                  <span className="text-sm font-bold text-amber-400">
                    {dnaReport.singleOligoLengthBases} nt
                  </span>
                </div>
                <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Total Strands Needed</span>
                  <span className="text-sm font-bold text-emerald-400">
                    {dnaReport.totalStrandsToSynthesize} Strands (3x)
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Live Interactive DNA Reverse Decoder (6 Cols) */}
            <div className="lg:col-span-6 bg-[#101420] border border-slate-800 rounded-xl p-5 flex flex-col gap-4 shadow-lg">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-base font-bold font-serif text-slate-100">
                    Decoder: DNA-to-Binary Engine (Live)
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
                  Reverse Matrix
                </span>
              </div>

              <p className="text-xs text-slate-400 font-sans">
                Paste synthetic DNA base pairs (A, C, G, T) to decode them back into raw digital records using the reverse rotational state machine.
              </p>

              <div className="flex flex-col gap-3 text-xs">
                <div className="flex flex-col gap-1">
                  <label className="text-slate-400 font-mono">Input Synthetic DNA Strand (A, C, G, T):</label>
                  <textarea
                    rows={2}
                    value={inputDnaSequence}
                    onChange={(e) => setInputDnaSequence(e.target.value)}
                    className="px-3 py-2 bg-[#080b12] border border-slate-800 rounded font-mono text-cyan-300 uppercase tracking-wider"
                  />
                </div>

                <button
                  onClick={handleDecodeDna}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded shadow transition-colors cursor-pointer"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Execute Reverse State Decode</span>
                </button>
              </div>

              {/* Decoded Output Box */}
              <div className="p-4 bg-[#080b12] border border-cyan-800/50 rounded-xl flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-cyan-400 font-bold">RECONSTRUCTED DIGITAL RECORD:</span>
                  <span className="text-emerald-400">
                    {decodedResult.parityChecked ? 'Reed-Solomon Checked ✓' : 'Unchecked'}
                  </span>
                </div>
                <div className="p-3 bg-slate-900/90 rounded border border-slate-800 font-mono text-xs text-amber-200 break-all">
                  {decodedResult.decodedText}
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                  <span>Decoded Bytes: {decodedResult.decodedBytes}</span>
                  <span>Bitstream: {decodedResult.bitLength} bits</span>
                </div>
              </div>
            </div>
          </div>

          {/* Source Code View for dna_decoder.py */}
          <div className="bg-[#101420] border border-slate-800 rounded-xl p-5 flex flex-col gap-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-sm font-bold font-serif text-slate-100">
                  dna_decoder.py (Python Implementation Reference)
                </h3>
                <p className="text-xs text-slate-400">
                  Official reverse rotational Huffman state machine with Reed-Solomon parity stripping.
                </p>
              </div>
              <button
                onClick={() => handleCopy(DNA_DECODER_PY, 'dna_decoder_py')}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                {copiedKey === 'dna_decoder_py' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'dna_decoder_py' ? 'Copied' : 'Copy Python'}</span>
              </button>
            </div>
            <pre className="p-4 bg-[#080b12] border border-slate-800/90 rounded-lg text-xs font-mono text-emerald-300 overflow-x-auto max-h-[300px] leading-relaxed">
              <code>{DNA_DECODER_PY}</code>
            </pre>
          </div>
        </div>
      )}

      {/* TAB 6: CI/CD AUTOMATION & INTEGRATION TESTS */}
      {activeTab === 'cicd_tests' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Test Execution Terminal (6 Cols) */}
          <div className="lg:col-span-6 bg-[#101420] border border-slate-800 rounded-xl p-5 flex flex-col gap-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-bold font-serif text-slate-100">
                  integration_test_pipeline.py Execution
                </h3>
              </div>
              <button
                onClick={handleRunIntegrationTests}
                disabled={isRunningIntegrationTests}
                className="px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 rounded-lg text-xs font-mono transition-colors cursor-pointer"
              >
                {isRunningIntegrationTests ? 'Executing...' : 'Run Test Suite'}
              </button>
            </div>

            <p className="text-xs text-slate-400 font-sans">
              Runs end-to-end tests across the bi-directional codec loop, biological constraints validation, and Prometheus alert dispatch.
            </p>

            <div className="p-4 bg-[#080b12] border border-slate-800 rounded-xl flex flex-col gap-2 font-mono text-xs max-h-[360px] overflow-y-auto">
              {testExecutionLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={`leading-relaxed ${
                    log.includes('PASSED') || log.includes('SUCCESS')
                      ? 'text-emerald-400 font-semibold'
                      : log.includes('CRITICAL') || log.includes('FIRING')
                      ? 'text-rose-400 font-semibold'
                      : log.includes('STEP')
                      ? 'text-cyan-300 font-bold'
                      : 'text-slate-400'
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>
          </div>

          {/* Right: CI/CD Pipeline Manifests (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* deploy.sh */}
            <div className="bg-[#101420] border border-slate-800 rounded-xl p-5 flex flex-col gap-3 shadow-lg">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                <span className="text-xs font-mono font-bold text-slate-200">
                  deploy.sh (Cluster Deployment Script)
                </span>
                <button
                  onClick={() => handleCopy(DEPLOY_SH_SCRIPT, 'deploy_sh')}
                  className="text-xs font-mono text-slate-400 hover:text-slate-200 cursor-pointer"
                >
                  {copiedKey === 'deploy_sh' ? 'Copied' : 'Copy'}
                </button>
              </div>
              <pre className="p-3 bg-[#080b12] border border-slate-800 rounded-lg text-xs font-mono text-cyan-300 overflow-x-auto max-h-[160px] leading-relaxed">
                <code>{DEPLOY_SH_SCRIPT}</code>
              </pre>
            </div>

            {/* .github/workflows/deploy.yml */}
            <div className="bg-[#101420] border border-slate-800 rounded-xl p-5 flex flex-col gap-3 shadow-lg">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                <span className="text-xs font-mono font-bold text-slate-200">
                  .github/workflows/deploy.yml (GitHub Actions)
                </span>
                <button
                  onClick={() => handleCopy(GITHUB_ACTIONS_WORKFLOW_YML, 'actions_yml')}
                  className="text-xs font-mono text-slate-400 hover:text-slate-200 cursor-pointer"
                >
                  {copiedKey === 'actions_yml' ? 'Copied' : 'Copy'}
                </button>
              </div>
              <pre className="p-3 bg-[#080b12] border border-slate-800 rounded-lg text-xs font-mono text-amber-300 overflow-x-auto max-h-[160px] leading-relaxed">
                <code>{GITHUB_ACTIONS_WORKFLOW_YML}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
