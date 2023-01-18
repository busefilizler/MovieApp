import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHatWizard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.use(Vuetify);
library.add(faHatWizard);
Vue.component("font-awesome-icon", FontAwesomeIcon);
export default new Vuetify({
  customProperties: true,
  icons: {
    iconfont: "faSvg", // The bees knees, what most people are looking for.
  },
});
