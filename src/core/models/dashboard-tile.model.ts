export interface DashboardTile<T = any> {
  data: T[];
  height: number;
  width: number;

  tileId: string;
  title: string;
}
