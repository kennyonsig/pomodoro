import { SettingGroup } from '../../interfaces/settings.interface';

export const SETTINGS_CONFIG: SettingGroup[] = [
  {
    label: 'Время работы',
    inputs: [
      {
        modelKey: 'workValue',
        id: 'work-input',
        name: 'work',
        labelFor: 'work-input',
      },
      {
        modelKey: 'workValueSec',
        id: 'work-sec-input',
        name: 'work-sec',
        labelFor: 'work-sec-input',
      },
    ],
  },
  {
    label: 'Короткий перерыв',
    inputs: [
      {
        modelKey: 'shortBreakValue',
        id: 'short-break-input',
        name: 'short',
        labelFor: 'short-break-input',
      },
      {
        modelKey: 'shortBreakValueSec',
        id: 'short-break-sec-input',
        name: 'short-sec',
        labelFor: 'short-break-sec-input',
      },
    ],
  },
  {
    label: 'Длинный перерыв',
    inputs: [
      {
        modelKey: 'longBreakValue',
        id: 'long-break-input',
        name: 'long',
        labelFor: 'long-break-input',
      },
      {
        modelKey: 'longBreakValueSec',
        id: 'long-break-sec-input',
        name: 'long-sec',
        labelFor: 'long-break-sec-input',
      },
    ],
  },
  {
    label: 'Дополнительное время',
    inputs: [
      {
        modelKey: 'extraTimeValue',
        id: 'extra-time-input',
        name: 'extra',
        labelFor: 'extra-time-input',
      },
      {
        modelKey: 'extraTimeValueSec',
        id: 'extra-time-sec-input',
        name: 'extra-sec',
        labelFor: 'extra-time-sec-input',
      },
    ],
  },
];
