import { Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { TimerMode } from '../../models/timer.models';
import { TimerService } from '../../services/timer';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.html',
  imports: [MatIconButton, MatIcon],
  styleUrls: ['./timer.scss'],
})
export class Timer {
  timerService = inject(TimerService);
  switchMode = (mode: TimerMode) => this.timerService.switchMode(mode);
}
