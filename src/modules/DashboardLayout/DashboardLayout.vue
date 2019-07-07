<template>
  <div :class="layoutClass">
    <div
      v-for="(section, index) in sections"
      :key="index"
      :class="section.layoutClass"
    >
      <slot name="section" v-bind="section">
        <template v-slot:card="tile">
          <slot name="chart" v-bind="tile"></slot>
        </template>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BarChart from '@/modules/BarChart/BarChart.vue';
import DashboardSectionComponent from '@/modules/DashboardSection/DashboardSection.vue';
import { DashboardSection } from '@/core/models';

@Component<DashboardLayoutComponent>({
  components: {
    BarChart,
    DashboardSection: DashboardSectionComponent,
  },
  props: [
    'layoutClass',
    'sections',
  ],
})
export default class DashboardLayoutComponent extends Vue {
  layoutClass!: string;
  sections!: DashboardSection[];
}
</script>

<style lang="scss" scoped>
  .dashboard-column {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .dashboard-row {
    display: flex;
    flex-direction: row;
    flex: 1;
  }
</style>
