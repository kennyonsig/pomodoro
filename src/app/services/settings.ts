import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settingWorkMinutes = signal<number>(25);
  settingShortMinutes = signal<number>(2);
  settingLongMinutes = signal<number>(2);
  settingExtraMinutes = signal<number>(2);
}
