// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "BreweryX",
            logo: {
                src: "./src/assets/img/breweryx.png",
                replacesTitle: true,
            },
            customCss: ["./src/styles/globals.css", "./src/styles/docs.css"],
            social: {
                github: "https://github.com/withastro/starlight",
            },
            sidebar: [
                {
                    label: "Welcome",
                    slug: "docs/welcome",
                },
                {
                    label: "Plugin Usage",
                    items: [
                        {
                            label: "Config",
                            autogenerate: { directory: "docs/plugin-usage/config/" },
                            collapsed: true,
                        },
                    ],
                },
                {
                    label: "For Developers",
                    items: [
                        {
                            label: "Plugin API",
                            link: "docs/for-developers/plugin-api",
                        },
                        {
                            label: "Addons",
                            collapsed: true,
                            autogenerate: { directory: "docs/for-developers/addons/", collapsed: true },
                        },
                    ],
                },
            ],
            expressiveCode: {
                themes: ["slack-dark", "light-plus"],
                plugins: [pluginLineNumbers()]
            },
        }),
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
    ],
});
