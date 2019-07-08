import Vue from 'vue';
import Vuetify from 'vuetify';

import colors from 'vuetify/lib/util/colors'

import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'md',
  /*
  theme: {
    primary: colors.red,
    secondary: colors.grey,
    accent: colors.red.accent1,
    error: colors.red.accent3,
  },
  */
});
