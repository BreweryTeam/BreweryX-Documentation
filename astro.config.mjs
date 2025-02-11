// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [
        starlight({
            title: "BreweryX",
            logo: {
                src: "./src/assets/img/favicon.png",
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
                    label: "For Server Owners",
                    items: [
                        {
                            label: "Install",
                            link: "docs/for-server-owners/install",
                        },
                        {
                            label: "Config",
                            autogenerate: { directory: "docs/for-server-owners/config/" },
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
                plugins: [pluginLineNumbers()],
            },
        }),
        react(),
    ],
});
