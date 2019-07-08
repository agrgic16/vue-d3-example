<template>
  <div>
    <v-toolbar class="card-toolbar" color="primary" dense>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <Chart
      :data="data"
      :height="height"
      :tileId="tileId"
      :width="width"
      :primaryColor="primaryColor"
      :secondaryColor="secondaryColor"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Chart from './components/Chart.vue';

@Component<BarChartComponent>({
  props: [
    'data',
    'tileId',
    'title',
    'width',
    'height',
    'primaryColor',
    'secondaryColor',
  ],
  components: {
    Chart,
  },
})
export default class BarChartComponent extends Vue {
  data!: { name: string; value: number; }[];
  height!: number;
  tileId!: string;
  title!: string;
  width!: number;
  primaryColor!: string;
  secondaryColor!: string;
}
</script>

<style lang="scss" scoped>
  .card-toolbar {
    position: relative;
    top: -25px;
  }
</style>
