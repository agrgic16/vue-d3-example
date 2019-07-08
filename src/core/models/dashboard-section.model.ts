import { DashboardTile } from './dashboard-tile.model';

export interface DashboardSection<TT = any, TS = any> {
  layoutClass: string;
  sections: DashboardSection<TS>[];
  tiles: DashboardTile<TT>[];
  sectionId: string;
}
