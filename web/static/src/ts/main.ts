///<amd-module name="main" />

import RootWidget from "./widgets/RootWidget";
import env from "./env";

document.addEventListener("DOMContentLoaded", async function() {
  const rootWidget = new RootWidget(env);
  await rootWidget.mount(document.body);
});