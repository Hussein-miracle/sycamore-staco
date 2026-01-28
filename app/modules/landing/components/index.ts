import LandingHeroSection from "./landing-hero-section.vue";

const LandingDisclaimerSection = defineAsyncComponent(() => import("./landing-disclaimer-section.vue"))

const LandingFooterSection = defineAsyncComponent(() => import("./landing-footer-section.vue"))
// icons
import LandingDoodleOne from "./icon/landing-doodle-one.vue";
import LandingDoodleTwo from "./icon/landing-doodle-two.vue";
import LandingVectorOne from "./icon/landing-vector-one.vue";
import LandingVectorTwo from "./icon/landing-vector-two.vue";
import LandingVectorThree from "./icon/landing-vector-three.vue";
import LandingVectorFour from "./icon/landing-vector-four.vue";
import LandingVectorFive from "./icon/landing-vector-five.vue";
import LandingVectorSix from "./icon/landing-vector-six.vue";
import MegaMenuOne from "./mega-menu-one.vue";
import MegaMenuTwo from "./mega-menu-two.vue";

import IconPlay from "./icon/play.vue";
import IconPause from "./icon/pause.vue";

export {
  MegaMenuOne,
  MegaMenuTwo,
  LandingHeroSection,
  LandingDisclaimerSection,
  LandingFooterSection,
  LandingVectorOne,
  LandingDoodleOne,
  LandingDoodleTwo,
  IconPlay,
  IconPause,
  LandingVectorTwo,
  LandingVectorThree,
  LandingVectorFour,
  LandingVectorFive,
  LandingVectorSix,
};
