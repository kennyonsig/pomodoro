import { Component, inject, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SettingGroup } from '../../interfaces/settings.interface';
import { SettingsService } from '../../services/settings';

import { SETTINGS_CONFIG } from './settingsConfig';

@Component({
  selector: 'app-settings',
  imports: [FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  settingsConf: SettingGroup[] = SETTINGS_CONFIG;

  settingsService = inject(SettingsService);

  signalsMap: Record<string, WritableSignal<number>> = {
    workValue: this.settingsService.settingWorkMinutes,
    shortBreakValue: this.settingsService.settingShortMinutes,
    longBreakValue: this.settingsService.settingLongMinutes,
    extraTimeValue: this.settingsService.settingExtraMinutes,
    workValueSec: this.settingsService.settingWorkSec,
    shortBreakValueSec: this.settingsService.settingShortSec,
    longBreakValueSec: this.settingsService.settingLongSec,
    extraTimeValueSec: this.settingsService.settingExtraSec,
  };

  updateSetting(key: string, value: string | number) {
    this.signalsMap[key].set(Number(value));
  }
}
