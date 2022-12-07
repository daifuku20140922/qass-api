export const AssetStatus = {
  Active: 'active',
  InActive: 'inActive',
  Broken: 'broken',
  Maintenance: 'maintenance',
} as const;

export type AssetStatus = typeof AssetStatus[keyof typeof AssetStatus];

const AssetStatuses: AssetStatus[] = [
  AssetStatus.Active,
  AssetStatus.InActive,
  AssetStatus.Broken,
  AssetStatus.Maintenance,
];

export const isAssetStatus = (status: string): status is AssetStatus => {
  return AssetStatuses.some((x) => x === status);
};
