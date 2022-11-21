export const AssetStatus = {
  Active: 'active',
  InActive: 'inActive',
  Broken: 'broken',
} as const;

export type AssetStatus = typeof AssetStatus[keyof typeof AssetStatus];
