export enum GloomhavenClass {
  InoxBrute = "Inox Brute",
  HumanScoundrel = "Human Scoundrel",
  OrchidSpellweaver = "Orchid Spellweaver",
  QuatrylTinkerer = "Quatryl Tinkerer",
  VermlingMindthief = "Vermling Mindthief",
  SavvasCragheart = "Savvas Cragheart",
}

export enum AttackModifierOperation {
  Add,
  Multiply,
  NullEffect,
}

export interface AttackModifier {
  value: number;
  op: AttackModifierOperation;
}
