<template>
  <div>
    <div class="card-title">
      <h1>{{title}}</h1>
      <v-icon>color_lens</v-icon>
    </div>
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
  .card-title {
    justify-content: space-between;
    display: flex;
    flex-direction: row;
  }
</style>
