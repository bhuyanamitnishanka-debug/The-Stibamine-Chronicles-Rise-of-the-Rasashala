/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Procedural Web Audio API sound generator for Quantum Rasashala ambiance

class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private droneOsc1: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;
  private bubbleInterval: number | null = null;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggle(mood: 'calcutta' | 'furnace' | 'vacuum' | 'cosmic' = 'vacuum'): boolean {
    this.init();
    if (!this.ctx) return false;

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start(mood);
      return true;
    }
  }

  public start(mood: 'calcutta' | 'furnace' | 'vacuum' | 'cosmic' = 'vacuum') {
    if (!this.ctx) return;
    this.stop();

    this.isPlaying = true;

    // Master gain
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    // Filter
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, this.ctx.currentTime);
    filter.connect(this.masterGain);

    // Deep drone 1 (108 Hz Vedic harmonic or 55 Hz grounding)
    this.droneOsc1 = this.ctx.createOscillator();
    this.droneOsc1.type = 'sine';
    this.droneOsc1.frequency.setValueAtTime(mood === 'cosmic' ? 108 : 54, this.ctx.currentTime);

    // Deep drone 2 (Subtle detune for acoustic shimmer)
    this.droneOsc2 = this.ctx.createOscillator();
    this.droneOsc2.type = 'triangle';
    this.droneOsc2.frequency.setValueAtTime(mood === 'furnace' ? 72 : 81, this.ctx.currentTime);

    const oscGain1 = this.ctx.createGain();
    oscGain1.gain.setValueAtTime(0.4, this.ctx.currentTime);
    this.droneOsc1.connect(oscGain1);
    oscGain1.connect(filter);

    const oscGain2 = this.ctx.createGain();
    oscGain2.gain.setValueAtTime(0.2, this.ctx.currentTime);
    this.droneOsc2.connect(oscGain2);
    oscGain2.connect(filter);

    this.droneOsc1.start();
    this.droneOsc2.start();

    // Occasional resonant bubbling sound for laboratory distillation
    if (mood === 'vacuum' || mood === 'calcutta') {
      this.startBubbles();
    }
  }

  private startBubbles() {
    if (!this.ctx || !this.masterGain) return;

    this.bubbleInterval = window.setInterval(() => {
      if (!this.ctx || !this.isPlaying || !this.masterGain) return;
      try {
        const bubbleOsc = this.ctx.createOscillator();
        const bubbleGain = this.ctx.createGain();

        bubbleOsc.type = 'sine';
        const startFreq = 400 + Math.random() * 500;
        const endFreq = startFreq + 150 + Math.random() * 200;

        bubbleOsc.frequency.setValueAtTime(startFreq, this.ctx.currentTime);
        bubbleOsc.frequency.exponentialRampToValueAtTime(endFreq, this.ctx.currentTime + 0.08);

        bubbleGain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        bubbleGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

        bubbleOsc.connect(bubbleGain);
        bubbleGain.connect(this.masterGain);

        bubbleOsc.start();
        bubbleOsc.stop(this.ctx.currentTime + 0.09);
      } catch {
        // Safe catch for suspended audio contexts
      }
    }, 600);
  }

  public playChime() {
    this.init();
    if (!this.ctx) return;
    try {
      const chime = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      chime.type = 'sine';
      chime.frequency.setValueAtTime(880, this.ctx.currentTime);
      chime.frequency.exponentialRampToValueAtTime(1760, this.ctx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);

      chime.connect(gain);
      gain.connect(this.ctx.destination);
      chime.start();
      chime.stop(this.ctx.currentTime + 0.6);
    } catch {
      // ignore
    }
  }

  public stop() {
    if (this.bubbleInterval) {
      clearInterval(this.bubbleInterval);
      this.bubbleInterval = null;
    }
    if (this.droneOsc1) {
      try {
        this.droneOsc1.stop();
        this.droneOsc1.disconnect();
      } catch {
        // ignore
      }
      this.droneOsc1 = null;
    }
    if (this.droneOsc2) {
      try {
        this.droneOsc2.stop();
        this.droneOsc2.disconnect();
      } catch {
        // ignore
      }
      this.droneOsc2 = null;
    }
    this.isPlaying = false;
  }

  public getStatus() {
    return this.isPlaying;
  }
}

export const soundEngine = new AmbientSoundEngine();
