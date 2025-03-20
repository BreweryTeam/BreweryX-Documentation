import { useSnapshot } from "valtio";
import type { EditorState } from "../brewery-studio";

export function RecipesEditor({ state }: { state: EditorState }) {
    const recipes = useSnapshot(state.recipes);

    return (
        <>
            <div className="flex flex-col">
                {recipes.map((recipe) => (
                    <div key={recipe.id}></div>
                ))}
            </div>
        </>
    );
}
