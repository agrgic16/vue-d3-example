<template>
  <div class="dashboard">
    <slot name="navigation" :items="dashboardNavigation"></slot>
    <slot name="data" v-bind="currentDashboard"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Dashboard } from '@/core/models';

@Component<DashboardComponent>({
  props: [
    'dashboards',
  ],
})
export default class DashboardComponent extends Vue {
  get dashboardNavigation() {
    return this.dashboards.map(({title, dashboardId}) => ({
      text: title,
      to: dashboardId,
      append: !this.$route.params.dashboard_id,
    }));
  }

  get currentDashboard() {
    return this.dashboards.find(({dashboardId}) => dashboardId === this.$route.params.dashboard_id);
  }

  dashboards!: Dashboard[];
}
</script>

<style lang="scss" scoped>
</style>
