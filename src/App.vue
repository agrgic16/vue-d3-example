<template>
  <v-app>
    <v-toolbar
      app
      color="red"
      dense
    >

      <v-toolbar-title
        class="headline text-uppercase"
      >
        <span>Simple</span>
        <span class="font-weight-light">Dashboard</span>
      </v-toolbar-title>

      <v-overflow-btn
        :items="dashboards"
        editable
        label="Dashboards..."
        hide-details
        class="pa-0"
        overflow
      ></v-overflow-btn>

      <v-spacer></v-spacer>

      <v-menu
        transition="slide-y-transition"
        bottom
      >

        <template
          v-slot:activator="{ on }"
        >
          <v-btn
            v-on="on"
            flat
            icon
          >
            <v-icon >more_vert</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-tile
            v-for="(item, i) in menuItems"
            :key="i"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>

      </v-menu>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      menuItems: [
        {
          title: 'COLORS',
          icon: '',
        },
        {
          title: 'EDIT',
          icon: '',
        },
        {
          title: 'SHARE',
          icon: '',
        },
      ],
    dashboards: [
      { text: 'Dashboard A' },
      { text: 'Dashboard B' },
      { text: 'Dashboard C' },
    ]
    };
  },
};
</script>

<style lang="scss">
  h1 {
    font-size: calc(12px + 1.4vw);
  }
</style>
