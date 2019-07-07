<template>
  <svg :id="tileId"></svg>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as d3 from 'd3';

const colors = [
  {
    name: 'seafoam',
    color: '#42f5ad',
  },
  {
    name: 'blue',
    color: '#4287f5',
  },
];


@Component<Chart>({
  components: {
  },
  props: [
    'data',
    'height',
    'tileId',
    'width',
  ],
})
export default class Chart extends Vue {
  data!: { name: string; value: number; }[];
  height!: number;
  tileId!: string;
  width!: number;

  mounted() {
    this.createChart();
  }

  async createChart() {
    // const data: any = await d3.csv('https://gist.githubusercontent.com/mbostock/81aa27912ad9b1ed577016797a780b2c/raw/3a807eb0cbb0f5904053ac2f9edf765e2f87a2f5/alphabet.csv', ({letter, frequency}) => ({name: letter, value: +(frequency as string)}))

    const { data } = this;

    data.sort((a: any, b: any) => b.value - a.value);

    const margin = {
      top: 20,
      right: 0,
      bottom: 30,
      left: 40,
    };

    const height = this.height;
    const width = this.width;

    const { color } = colors[1];

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, (d: any) => d.value)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const x = d3.scaleBand()
      .domain(data.map((d: any) => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yAxis = (g: any) => g
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y))
      .call((g: any) => g.select('.domain').remove());

    const xAxis = (g: any) => g
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0));

    const chart = () => {
      const svg = d3.select(`#${this.tileId}`)
        .attr('viewBox', [0, 0, width, height]);

      svg.append('g')
        .attr('fill', color)
        .selectAll('rect')
        .data(data)
        .join('rect')
        .attr('x', (d: any) => x(d.name))
        .attr('y', (d: any) => y(d.value))
        .attr('height', (d: any) => y(0) - y(d.value))
        .attr('width', x.bandwidth());

      svg.append('g')
        .call(xAxis);

      svg.append('g')
        .call(yAxis);

      return svg.node();
    };

    const svg = chart();
  }
}
</script>

<style lang="scss" scoped>
</style>
