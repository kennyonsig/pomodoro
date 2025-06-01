import {Injectable, computed, effect, signal, inject} from '@angular/core';
import {TimerMode} from '../models/timer.models';
import {SettingsService} from './settings';



@Injectable({ providedIn: 'root' })
export class TimerService {

  settingService = inject(SettingsService);

  get settingWorkMinutes() { return this.settingService.settingWorkMinutes; }
  get settingShortMinutes() { return this.settingService.settingShortMinutes; }
  get settingLongMinutes() { return this.settingService.settingLongMinutes; }
  get settingExtraMinutes() { return this.settingService.settingExtraMinutes; }

  private timerInterval: any;

  MODES = computed(() => ({
    'work': this.settingWorkMinutes() * 60,
    'short-break': this.settingShortMinutes() * 60,
    'long-break': this.settingLongMinutes() * 60,
    'extra': this.settingExtraMinutes() * 60
  }))

  currentMode = signal<TimerMode>('work');
  currentTime = signal<number>(0);
  isRunning = signal(false);

  minutes = computed(() =>
    Math.floor(this.currentTime() / 60).toString().padStart(2, '0')
  );

  seconds = computed(() =>
    (this.currentTime() % 60).toString().padStart(2, '0')
  );

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
        const newTime = t - 1;

        if (newTime <= 0) {
          clearInterval(this.timerInterval);
          this.isRunning.set(false);
          this.resetTimer();
        }

        return newTime;
      });
    }, 1000);
  }

  pauseTimer() {
    this.isRunning.set(false);
    clearInterval(this.timerInterval);
  }

  resetTimer() {
    this.pauseTimer();
    const modes = this.MODES();
    this.currentTime.set(modes[this.currentMode()]);
  }

  isActiveMode(mode: TimerMode): boolean {
    return this.currentMode() === mode;
  }
}
