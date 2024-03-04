export interface Output {
  name: string;
  content: string | null;
  tts: boolean;
  embeds: Embed[];
  rows: (Button[] | Select)[];
  attachments: string[];
}

export interface Embed {
  title: string;
  description: string;
  color: string;
  fields: EmbedField[];
}

export interface EmbedField {
  name: string;
  value: string;
}

export interface Button {
  customId: string;
  label: string;
  style: number;
  emoji: string | null;
  url: string | null;
  disabled: boolean;
}

export interface Select {
  customId: string;
  placeholder: string | null;
  min: number | null;
  max: number | null;
  options: Option[];
}

export interface Option {
  label: string;
  value: string;
  description: string | null;
  emoji: string | null;
  default: boolean;
}
