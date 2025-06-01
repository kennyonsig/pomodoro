import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SettingsService} from '../../services/settings';

@Component({
  selector: 'app-settings',
  imports: [
    FormsModule
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})
export class Settings implements OnInit {

  workValue!: number;
  shortBreakValue!: number;
  longBreakValue!: number;
  extraTimeValue!: number;

  settingsService = inject(SettingsService);

  ngOnInit() {
    this.workValue = this.settingsService.settingWorkMinutes();
    this.shortBreakValue = this.settingsService.settingShortMinutes();
    this.longBreakValue = this.settingsService.settingLongMinutes();
    this.extraTimeValue = this.settingsService.settingExtraMinutes();
  }

  updateWorkMinutes(value: number) {
    this.settingsService.settingWorkMinutes.set(+value);
  }

  updateShortMinutes(value: number) {
    this.settingsService.settingShortMinutes.set(+value);
  }

  updateLongMinutes(value: number) {
    this.settingsService.settingLongMinutes.set(+value);
  }

  updateExtraMinutes(value: number) {
    this.settingsService.settingExtraMinutes.set(+value);
  }
}
