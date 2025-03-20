import type {
    HexColor,
    QualityDependentCommand,
    QualityDependentString,
    QualityVaryingValue,
    WoodType,
} from "../brewery-types";

export type RecipeIngredient = {
    type: string;
    count: number;
    id: string;
};

export type RecipeIngredientMinecraft = {
    type: "minecraft";
} & RecipeIngredient;

export type RecipeIngredientPlugin = {
    type: "plugin";
    namespace: string;
} & RecipeIngredient;

export type Recipe = {
    id: string;

    enabled: boolean;
    name: QualityVaryingValue<string>;

    ingredients: (RecipeIngredientMinecraft | RecipeIngredientPlugin)[];
    cookingTime: number;
    distillRuns?: number;
    distillTime?: number;
    wood?: WoodType;

    color?: HexColor;
    difficulty: number;
    alcohol: number;
    lore?: QualityDependentString[];

    serverCommands: QualityDependentCommand[];
    playerCommands: QualityDependentCommand[];

    drinkMessage?: string;
    drinkTitle?: string;

    glint?: boolean;
    customModelData: QualityVaryingValue<number>;

    // TODO: effects
};
