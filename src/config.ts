// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Boden McHale";
export const SITE_DESCRIPTION =
  "Various development and literary topics.";
export const TWITTER_HANDLE = "@BodenMcHale";
export const MY_NAME = "Boden McHale";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
