<template>
  <Dashboard :dashboards="dashboards">
    <template v-slot:navigation="navigation">
      <v-breadcrumbs v-bind="navigation" divider="|"></v-breadcrumbs>
    </template>
    <template v-slot:data="dashboard">
      <DashboardLayout v-bind="dashboard">
        <template v-slot:section="section">
          <DashboardSection v-bind="section">
            <template v-slot:card="card">
              <BarChart v-bind="card" />
            </template>
          </DashboardSection>
        </template>
      </DashboardLayout>
    </template>
  </Dashboard>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Dashboard } from '@/core/models';

import BarChart from '@/modules/BarChart/BarChart.vue';
import DashboardLayout from '@/modules/DashboardLayout/DashboardLayout.vue';
import DashboardSection from '@/modules/DashboardSection/DashboardSection.vue';
import DashboardComponent from '@/modules/Dashboard/Dashboard.vue';

import dashboards from './api/data.json';

@Component<HomeComponent>({
  components: {
    BarChart,
    DashboardLayout,
    DashboardSection,
    Dashboard: DashboardComponent,
  },
})
export default class HomeComponent extends Vue {
  dashboards: Dashboard[] = [];

  mounted() {
    this.dashboards = dashboards as Dashboard[];
  }
}
</script>
