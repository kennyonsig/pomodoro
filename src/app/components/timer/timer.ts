import { Component, inject } from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {TimerMode} from '../../models/timer.models';
import {TimerService} from '../../services/timer';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.html',
  imports: [
    MatIconButton,
    MatIcon
  ],
  styleUrls: ['./timer.scss']
})
export class Timer {
  timerService = inject(TimerService);

  get minutes() { return this.timerService.minutes; }
  get seconds() { return this.timerService.seconds; }
  get isRunning() { return this.timerService.isRunning; }
  get currentTime() { return this.timerService.currentTime; }

  switchMode = (mode: TimerMode) =>
    this.timerService.switchMode(mode);

  startTimer = () => this.timerService.startTimer();
  pauseTimer = () => this.timerService.pauseTimer();
  resetTimer = () => this.timerService.resetTimer();

  isActiveMode(mode: TimerMode) {
    return this.timerService.isActiveMode(mode);
  }
}
