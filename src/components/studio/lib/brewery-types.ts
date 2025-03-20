export enum Quality {
    Bad = "bad",
    Normal = "normal",
    Good = "good",
}

export type QualityVaryingValue<T> = Record<Quality, T> | T;

export type QualityDependentString = {
    value: string;
    /**
     * Quality for which the string is active
     *
     * Null means any
     */
    quality: Quality | null;
};

export type QualityDependentCommand = QualityDependentString & {
    /**
     * Delay of the execution, in seconds
     */
    delay: number;
};

// Maybe this should be a dictionary?
export enum WoodType {
    Any,
    Birch,
    Oak,
    Jungle,
    Spruce,
    Acacia,
    DarkOak,
    Crimson,
    Warped,
    Mangrove,
    Cherry,
    Bamboo,
    CutCopper,
    PaleOak,
}

export type HexColor = `#${string}`;

export type Effect = {
    id: string;
};
