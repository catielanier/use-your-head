import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: "#0d0106",
    secondary: "#36494e",
    accent: "#88958d",
    info: "#597081",
    background: "#fffbfc",
    warning: "#a50808",
    success: "#51994e"
  }
});
