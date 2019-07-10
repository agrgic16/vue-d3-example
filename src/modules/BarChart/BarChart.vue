<template>
  <div>
    <v-toolbar class="card-toolbar" color="transparent" dense flat>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <Chart
      :data="data"
      :height="height"
      :tileId="tileId"
      :width="width"
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
}
</script>

<style lang="scss" scoped>
  .card-toolbar {
    width: 100%;
    padding: 0;
    margin: 0;
  }
</style>
