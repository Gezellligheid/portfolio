import type { Config } from "vike/types";
import vikePhoton from "vike-photon/config";
import vikeVue from "vike-vue/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/head-tags
  title: "Elias — Fullstack Developer",

  description: "Portfolio of Elias, a fullstack developer passionate about Vue, React, Vike and modern web.",
  extends: [vikeVue, vikePhoton],

  clientRouting: true,

  // https://vike.dev/vike-photon
  photon: {
    server: "../server/entry.ts",
  },

  prerender: true,
} as Config;
