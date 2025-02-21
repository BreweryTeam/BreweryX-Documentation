import { StudioSidebar } from "./sidebar/studio-sidebar";
import { useState } from "react";
import { RecipesEditor } from "./tab/recipes-editor";
import { proxy } from "valtio";

// TODO: Improve this "router"
const TABS: {
    [x: string]: React.ComponentType<any>;
} = {
    recipes: RecipesEditor,
};

export type EditorState = {
    recipes: {
        id: string;
        name: string;
    }[];
};

// If I understand correctly, valtio uses some weird trickery to update (and render) this state efficiently
// so this should be fine, right?
// we'll see i guess
const state: EditorState = proxy({ recipes: [] });

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
