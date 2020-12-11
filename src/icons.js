import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
// import { faCaretSquareUp } from "@fortawesome/free-regular-svg-icons";
library.add(faChevronDown);

Vue.component('fa-icon', FontAwesomeIcon);
