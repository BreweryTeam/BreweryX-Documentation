import { type PropsWithChildren, type ReactNode } from "react";
import "@/styles/tailwind.css";
import { twMerge } from "tailwind-merge";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "../ui/collapsible";

type PrimitiveType = "string" | "boolean" | "integer" | "float";
type CompositeType = "array" | "map";
type Type = PrimitiveType | CompositeType;

type ConfigEntryBase<T extends Type> = {
    root?: boolean;
    type: T;
    description?: ReactNode;
};

type ConfigEntryValue = ConfigEntryBase<PrimitiveType> & {
    value?: any;
};

type ConfigEntryMap = ConfigEntryBase<"map"> & {
    children: { key: string; value: ConfigEntry }[];
};

type ConfigEntryArray = ConfigEntryBase<"array"> & {
    children: ConfigEntry[];
};

type ConfigEntry = ConfigEntryValue | ConfigEntryMap | ConfigEntryArray;

const PRIMITIVE_TYPES = ["string", "boolean", "integer", "float"];

const config: ConfigEntryMap = {
    root: true,
    type: "map",
    children: [
        {
            key: "recipes",
            value: {
                type: "map",
                children: [
                    {
                        key: "recipe1",
                        value: {
                            type: "map",
                            children: [
                                {
                                    key: "name",
                                    value: {
                                        type: "string",
                                        value: "Cold Brew/Temperate Brew/Warm Brew",
                                        description: (
                                            <>
                                                Different names for bad/normal/good
                                                <br />
                                                (Formatting codes possible: such as &6 or hex as &#123123) <br />
                                                <br />
                                                Example:
                                                <br />
                                                <code>
                                                    name: "Worst drink/Good Drink/Best drink i had in my entire life!"
                                                </code>
                                            </>
                                        ),
                                    },
                                },
                                {
                                    key: "ingredients",
                                    value: {
                                        type: "array",
                                        children: [
                                            {
                                                type: "string",
                                                value: "Diamond/1",
                                            },
                                            {
                                                type: "string",
                                                value: "Spruce_Planks/8",
                                            },
                                            {
                                                type: "string",
                                                value: "Bedrock/1",
                                            },
                                            {
                                                type: "string",
                                                value: "ex-item/4",
                                            },
                                        ],
                                    },
                                },
                                {
                                    key: "cookingtime",
                                    value: {
                                        type: "integer",
                                        value: 3,
                                        description: "Cooking Time",
                                    },
                                },
                                {
                                    key: "distillruns",
                                    value: {
                                        type: "integer",
                                        value: 2,
                                        description: "Distill Runs",
                                    },
                                },
                                {
                                    key: "distilltime",
                                    value: {
                                        type: "integer",
                                        value: 60,
                                        description: "Distill Time",
                                    },
                                },
                                {
                                    key: "glint",
                                    value: {
                                        type: "boolean",
                                        value: true,
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
};

function KeyDisplay({ value }: { value: string }) {
    return (
        <>
            <span className="text-blue-500">{value}</span>:
        </>
    );
}

function ValueDisplay({ value, type }: { value: any; type: PrimitiveType }) {
    const TYPE_COLORS: { [key: string]: string } = {
        integer: "text-green-500",
        float: "text-green-500",
        string: "text-yellow-600",
        boolean: "text-blue-500",
    };

    return <span className={TYPE_COLORS[type]}> {value.toString()}</span>;
}

function Description({ entry, entryKey }: { entry: ConfigEntry; entryKey: string }) {
    return (
        <div className="mx-2 my-1 flex flex-col gap-0 rounded-lg bg-zinc-800 p-3 font-[monospace] text-sm text-zinc-100">
            <div className="flex gap-1">
                <span className="text-zinc-400">Key:</span>
                <span>{entryKey}</span>
            </div>

            <div className="flex gap-1">
                <span className="text-zinc-400">Type:</span>
                <span className="text-cyan-400">{entry.type}</span>
            </div>

            {entry.description && (
                <p className="font-inter !mt-3 rounded-lg bg-zinc-900/50 p-2 text-sm text-zinc-300">
                    {entry.description}
                </p>
            )}
        </div>
    );
}

function DescriptionWrapper({
    entry,
    entryKey,
    children,
}: { entry: ConfigEntry; entryKey: string } & PropsWithChildren) {
    return (
        <Collapsible>
            <CollapsibleTrigger asChild>{children}</CollapsibleTrigger>
            <CollapsibleContent>
                <Description entry={entry} entryKey={entryKey} />
            </CollapsibleContent>
        </Collapsible>
    );
}

export function ConfigTree({ entry }: { entry: ConfigEntry }) {
    switch (entry.type) {
        case "map":
            return (
                <div className="flex flex-col">
                    <div className={twMerge("flex flex-col", !entry.root && "!ml-4")}>
                        {entry.children.map((childEntry) => (
                            <div key={childEntry.key}>
                                {PRIMITIVE_TYPES.includes(childEntry.value.type) ? ( // we can wrap the whole primitive types in a collapsible trigger
                                    <DescriptionWrapper entry={childEntry.value} entryKey={childEntry.key}>
                                        <div>
                                            <KeyDisplay value={childEntry.key} />
                                            <ConfigTree entry={childEntry.value} />
                                        </div>
                                    </DescriptionWrapper>
                                ) : (
                                    // but we wrap only the key on composite types, so children don't trigger the collapsible
                                    <>
                                        <DescriptionWrapper entry={childEntry.value} entryKey={childEntry.key}>
                                            <div>
                                                <KeyDisplay value={childEntry.key} />
                                            </div>
                                        </DescriptionWrapper>
                                        <ConfigTree entry={childEntry.value} />
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            );
        case "array":
            return (
                <div className="flex flex-col">
                    <div className={twMerge("flex flex-col", !entry.root && "!ml-4")}>
                        {entry.children.map((childEntry, index) => (
                            <div key={index}>
                                - <ConfigTree entry={childEntry} />
                            </div>
                        ))}
                    </div>
                </div>
            );
        case "boolean":
        case "float":
        case "integer":
        case "string":
            return <ValueDisplay type={entry.type} value={entry.value} />;
    }
}

export function ConfigContainer() {
    return (
        <div className="not-content !my-2 rounded-lg border border-zinc-800 bg-[var(--code-background)] px-3 py-2 font-[monospace]">
            <ConfigTree entry={config} />
        </div>
    );
}
