import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PlantVisualizer } from './components/plant-visualizer/plant-visualizer';
import { Settings } from './components/settings/settings';
import { Stats } from './components/stats/stats';
import { Timer } from './components/timer/timer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlantVisualizer, Settings, Timer, Stats],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'pomodoro';
}
