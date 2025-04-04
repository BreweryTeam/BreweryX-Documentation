// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://brewery.lumamc.net",
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        starlight({
            title: "BreweryX",
            logo: { src: "./src/assets/img/favicon.png", alt: "BreweryX" },
            favicon: "./favicon.png",
            customCss: ["./src/styles/globals.css", "./src/styles/docs.css", "./src/styles/tailwind.css"],
            social: {
                github: "https://github.com/BreweryTeam/BreweryX",
                discord: "https://discord.gg/3FkNaNDnta",
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
                            label: "Configuration",
                            autogenerate: { directory: "docs/for-server-owners/config/" },
                            collapsed: true,
                        },
                        {
                            label: "Commands",
                            autogenerate: { directory: "docs/for-server-owners/commands/" },
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
                {
                    label: "Gameplay",
                    autogenerate: { directory: "docs/gameplay/" },
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
