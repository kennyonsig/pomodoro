export interface SettingGroup {
  label: string;
  inputs: SettingInput[];
}

export interface SettingInput {
  modelKey: string;
  id: string;
  name: string;
  labelFor: string;
}
