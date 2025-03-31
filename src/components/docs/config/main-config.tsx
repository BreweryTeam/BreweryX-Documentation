import { ConfigContainer, type ConfigEntryMap } from "../config-tree";

const config: ConfigEntryMap = {
    root: true,
    type: "map",
    children: [
        {
            key: "language",
            value: {
                type: "string",
                description: "TODO",
                value: "en",
            },
        },
    ],
};

export function MainConfig() {
    return <ConfigContainer config={config} />;
}
