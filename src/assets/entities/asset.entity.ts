import { AssetStatus } from 'src/assets/entities/asset.status';

export type AssetEntity = {
  id: string;
  qrImagePath?: string;
  simId?: string;
  note?: string;
  status: AssetStatus;
  buyDate: Date;
  userId?: number;
};
