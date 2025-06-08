import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  settingWorkMinutes = signal<number>(25);
  settingWorkSec = signal<number>(0);
  settingShortMinutes = signal<number>(5);
  settingShortSec = signal<number>(0);
  settingLongMinutes = signal<number>(30);
  settingLongSec = signal<number>(0);
  settingExtraMinutes = signal<number>(10);
  settingExtraSec = signal<number>(0);
}
