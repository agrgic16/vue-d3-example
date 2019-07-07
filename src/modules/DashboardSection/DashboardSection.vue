<template>
  <div :class="layoutClass">

    <v-card class="card" v-for="tile in tiles" :key="tile.tileId">
      <slot name="card" v-bind="tile"></slot>
    </v-card>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DashboardTile } from '@/core/models';

@Component<DashboardSectionComponent>({
  components: {
  },
  props: [
    'layoutClass',
    'tiles',
  ],
})
export default class DashboardSectionComponent extends Vue {
  layoutClass!: string;
  tiles!: DashboardTile<any>[];
}
</script>

<style lang="scss" scoped>
  .card {
    margin: 20px;
    padding: 5px 20px 5px 20px;
    flex: 1;
  }
</style>
