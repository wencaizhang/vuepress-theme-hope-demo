// .vuepress/theme/config.ts
import { defineClientConfig } from "@vuepress/client";
import About from "./layout/About.vue";

export default defineClientConfig({
  // 你可以在这里覆盖或新增布局
  layouts: {
    About,
  },
});
