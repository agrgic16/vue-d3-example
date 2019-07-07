<template>
  <DashboardLayout v-bind="dashboards[0]">
    <template v-slot:section="section">
      <DashboardSection v-bind="section">
        <template v-slot:card="card">
          <BarChart v-bind="card" />
        </template>
      </DashboardSection>
    </template>
  </DashboardLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Dashboard } from '@/core/models';

import BarChart from '@/modules/BarChart/BarChart.vue';
import DashboardLayout from '@/modules/DashboardLayout/DashboardLayout.vue';
import DashboardSection from '@/modules/DashboardSection/DashboardSection.vue';

import dashboards from './api/data.json';

@Component<HomeComponent>({
  components: {
    BarChart,
    DashboardLayout,
    DashboardSection,
  },
})
export default class HomeComponent extends Vue {
  dashboards: Dashboard[] = [];

  mounted() {
    this.dashboards = dashboards;
  }
}
</script>

<style lang="scss" scoped>
</style>
