import { StudioSidebar } from "./sidebar/studio-sidebar";
import { useState } from "react";
import { RecipesEditor } from "./tab/recipes-editor";
import { proxy } from "valtio";
import type { Recipe } from "./lib/recipes/recipes-file";
import { Quality, WoodType } from "./lib/brewery-types";

// TODO: Improve this "router"
const TABS: {
    [x: string]: React.ComponentType<any>;
} = {
    recipes: RecipesEditor,
};

export type EditorState = {
    recipes: Recipe[];
};

// If I understand correctly, valtio uses some weird trickery to update (and render) this state efficiently
// so this should be fine, right?
// we'll see i guess
const state: EditorState = proxy({
    recipes: [
        {
            id: "ex",
            enabled: true,
            name: {
                bad: "Bad Example Recipe",
                normal: "Normal Example Recipe",
                good: "Good Example Recipe",
            },

            ingredients: [
                {
                    id: "diamond",
                    count: 3,
                    type: "minecraft",
                },
                {
                    type: "plugin",
                    id: "osmium_ingot",
                    count: 1,
                    namespace: "nexo"
                },
            ],

            cookingTime: 2,
            distillRuns: 1,
            distillTime: 20,
            wood: WoodType.Spruce,

            color: "#fbabab",
            difficulty: 6,
            alcohol: 20,
            lore: [
                {
                    quality: Quality.Bad,
                    value: "Bad Lore",
                },
                {
                    quality: Quality.Normal,
                    value: "Normal Lore",
                },
                {
                    quality: Quality.Bad,
                    value: "Good Lore",
                },
                {
                    quality: null,
                    value: "Any Lore",
                },
            ],
            serverCommands: [
                {
                    quality: Quality.Bad,
                    value: "say Bad Server Command",
                    delay: 5,
                },
                {
                    quality: Quality.Normal,
                    value: "say Normal Server Command",
                    delay: 3,
                },
                {
                    quality: Quality.Bad,
                    value: "say Good Server Command",
                    delay: 1,
                },
                {
                    quality: null,
                    value: "say Any Server Command",
                    delay: 10,
                },
            ],
            playerCommands: [
                {
                    quality: Quality.Bad,
                    value: "say Bad Player Command",
                    delay: 5,
                },
                {
                    quality: Quality.Normal,
                    value: "say Normal Player Command",
                    delay: 3,
                },
                {
                    quality: Quality.Bad,
                    value: "say Good Player Command",
                    delay: 1,
                },
                {
                    quality: null,
                    value: "say Any Player Command",
                    delay: 10,
                },
            ],

            drinkMessage: "Drink Message",
            drinkTitle: "Drink Title",

            glint: true,
            customModelData: {
                bad: 34,
                normal: 35,
                good: 36,
            },
        },
    ],
});

function TabRenderer({ tab }: { tab: string | null }) {
    if (!tab) return "Select something from the sidebar";

    const TabComponent = TABS[tab];
    if (!TabComponent) return "how";

    return <TabComponent state={state} />;
}

export default function BreweryStudio() {
    const [openTab, setOpenTab] = useState<string | null>(null);

    return (
        <div className="flex w-full">
            <StudioSidebar onTabSelect={setOpenTab} />
            <main className="p-4">
                <TabRenderer tab={openTab} />
            </main>
        </div>
    );
}
