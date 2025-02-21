import { useSnapshot } from "valtio";
import type { EditorState } from "../brewery-studio";

export function RecipesEditor({ state }: { state: EditorState }) {
    const snap = useSnapshot(state);

    function addRecipe() {
        for (let i = 0; i < 1000; i++)
            state.recipes.push({
                id: crypto.randomUUID().toString(),
                name: "test123",
            });
    }

    return (
        <>
            <div className="flex flex-col">
                {snap.recipes.map((recipe) => (
                    <div key={recipe.id}>
                        id: {recipe.id}, name: {recipe.name}
                    </div>
                ))}
            </div>
            <button onClick={addRecipe}>Add Recipe</button>
        </>
    );
}
