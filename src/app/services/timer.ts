import { computed, effect, inject, Injectable, signal } from '@angular/core';

import { TimerMode } from '../models/timer.models';

import { SettingsService } from './settings';

@Injectable({ providedIn: 'root' })
export class TimerService {
  settings = inject(SettingsService);
  private timerInterval: number | undefined;

  MODES = computed(() => ({
    work: this.settings.settingWorkMinutes() * 60 + this.settings.settingWorkSec(),
    'short-break': this.settings.settingShortMinutes() * 60 + this.settings.settingShortSec(),
    'long-break': this.settings.settingLongMinutes() * 60 + this.settings.settingLongSec(),
    extra: this.settings.settingExtraMinutes() * 60 + this.settings.settingExtraSec(),
  }));

  currentMode = signal<TimerMode>('work');
  currentTime = signal<number>(0);
  isRunning = signal(false);

  minutes = computed(() =>
    Math.floor(this.currentTime() / 60)
      .toString()
      .padStart(2, '0'),
  );
  seconds = computed(() => (this.currentTime() % 60).toString().padStart(2, '0'));

  constructor() {
    effect(() => {
      this.resetTimer();
    });
  }

  switchMode(mode: TimerMode) {
    this.currentMode.set(mode);
    this.resetTimer();
  }

  startTimer() {
    this.isRunning.set(true);
    this.timerInterval = setInterval(() => {
      this.currentTime.update(t => {
        if (t <= 1) {
          clearInterval(this.timerInterval);
          this.isRunning.set(false);
          this.resetTimer();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }

  pauseTimer() {
    this.isRunning.set(false);
    clearInterval(this.timerInterval);
  }

  resetTimer() {
    this.pauseTimer();
    this.currentTime.set(this.MODES()[this.currentMode()]);
  }

  isActiveMode(mode: TimerMode): boolean {
    return this.currentMode() === mode;
  }
}
