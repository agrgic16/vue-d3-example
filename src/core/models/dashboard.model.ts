import { DashboardSection } from './dashboard-section.model';

export interface Dashboard<TT = any, TS = any> {
  layoutClass: string;
  sections: DashboardSection<TT, TS>[];
  title: string;
  dashboardId: string;
}
