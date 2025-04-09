import { Children, type PropsWithChildren, type ReactNode } from "react";
import "@/styles/tailwind.css";
import { twMerge } from "tailwind-merge";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// TODO: Come up with better names and finally decide whether I'm using BigMediumSmall or SmallMediumBig
// TODO: Use colors from expressive code via css variables

/**
 * Types of leaf nodes in the configuration
 *
 * Basically YAML primitives
 */
type PrimitiveType = "string" | "boolean" | "integer" | "float";

/**
 * Types with nested data
 */
type CompositeType = "array" | "map";

/**
 * A union of all types that can represent an actual value
 */
type ValueType = PrimitiveType | CompositeType;

/**
 * Represents special node types within the configuration that don't hold any meaningful data
 */
type CustomNodeType = "comment";

/**
 * All types that can appear in a config
 *
 * Ideally ValueConfigNode should have its own property in the config tree, but this component is already too verbose
 */
type NodeType = ValueType | CustomNodeType;

type ConfigEntryBase<T extends NodeType> = {
    root?: boolean;
    type: T;
};

type ConfigEntryValue<T extends NodeType> = ConfigEntryBase<T> & {
    description?: ReactNode;
};

export type ConfigEntryValuePrimitive = ConfigEntryValue<PrimitiveType> & {
    /**
     * Value of the entry
     *
     * Also serves as the default value
     */
    value?: any;
};

export type ConfigEntryValueMapChild = { key: string; value: ConfigEntry } | { comment: string  | ReactNode };

export type ConfigEntryValueMap = ConfigEntryValue<"map"> & {
    children: ConfigEntryValueMapChild[];
};

export type ConfigEntryValueArray = ConfigEntryValue<"array"> & {
    children: ConfigEntry[];
};

export type ConfigEntryCustomComment = ConfigEntryBase<"comment"> & {
    comment: ReactNode;
};

export type ValueConfigEntry = ConfigEntryValuePrimitive | ConfigEntryValueMap | ConfigEntryValueArray;
export type ConfigEntry = ValueConfigEntry | ConfigEntryCustomComment;

const PRIMITIVE_TYPES = ["string", "boolean", "integer", "float"];

function KeyDisplay({ value }: { value: string }) {
    return (
        <>
            <span className="text-[#599ED7]">{value}</span>:
        </>
    );
}

function ValueDisplay({ value, type }: { value: any; type: PrimitiveType }) {
    /**
     * regex for checking is a string needs to be escaped and surrounded with quotes
     *
     * not based on the spec, just a basic regex implementing this: https://stackoverflow.com/a/22235064
     */
    const INVALID_PLAIN_STRING_REGEX = /^(\d*\.?\d)|(.*[:{}\[\],&*#?|\-<>=!%@\\].*)$/;

    const TYPE_COLORS: { [key: string]: string } = {
        integer: "text-[#B5CEA8]",
        float: "text-[#B5CEA8]",
        string: "text-[#CE9178]",
        boolean: "text-[#599ED7]",
    };

    if (type === "string" && INVALID_PLAIN_STRING_REGEX.test(value))
        value = `"${(value as string).replace(/\\/g, "\\\\")}"`;

    return <span className={TYPE_COLORS[type]}> {value.toString()}</span>;
}

function Description({ entry, entryKey }: { entry: ValueConfigEntry; entryKey: string }) {
    return (
        <div className="mx-2 my-1 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800 text-sm text-zinc-100 shadow">
            <div className="p-3 font-[monospace] text-zinc-400">
                <div className="flex flex-col gap-0">
                    <div className="flex gap-2">
                        <span>Key:</span>
                        <span className="text-zinc-200">{entryKey}</span>
                    </div>

                    <div className="flex gap-2">
                        <span>Type:</span>
                        <span className="text-cyan-400">{entry.type}</span>
                    </div>
                </div>
            </div>

            {entry.description && (
                <div className="border-t border-zinc-700 bg-zinc-900/40 p-3">
                    <p className="config-description-container font-sans text-xs text-zinc-300">{entry.description}</p>
                </div>
            )}
        </div>
    );
}

function DescriptionWrapper({
    entry,
    entryKey,
    children,
}: { entry: ValueConfigEntry; entryKey: string } & PropsWithChildren) {
    return (
        <Collapsible>
            <CollapsibleTrigger asChild>
                <div className="flex cursor-pointer items-center gap-2 rounded transition-colors duration-100 hover:bg-zinc-700/30">
                    <div>{children}</div>{" "}
                    {entry.description && (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Info className="text-zinc-500" size="1rem" strokeWidth={2.5} />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Click the line to show info and description</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <Description entry={entry} entryKey={entryKey} />
            </CollapsibleContent>
        </Collapsible>
    );
}

function ConfigTreeMapChild({ entry }: { entry: ConfigEntryValueMapChild }) {
    if ("comment" in entry) {
        return (
            <ConfigTree
                entry={{
                    type: "comment",
                    comment: entry.comment,
                }}
            />
        );
    }

    // If the value has a type of primitive, wrap the whole entry in a DescriptionWrapper
    // (see the final return)
    if (PRIMITIVE_TYPES.includes(entry.value.type)) {
        return (
            <DescriptionWrapper entry={entry.value as ValueConfigEntry} entryKey={entry.key}>
                <KeyDisplay value={entry.key} />
                <ConfigTree entry={entry.value} />
            </DescriptionWrapper>
        );
    }

    // But we can't do that on composite types, since clicking a child entry would also trigger the parent's description
    return (
        <>
            {" "}
            <DescriptionWrapper entry={entry.value as ValueConfigEntry} entryKey={entry.key}>
                <KeyDisplay value={entry.key} />
                <span className="ml-1 text-zinc-500 italic select-none"> {`{${entry.value.type}}`}</span>
            </DescriptionWrapper>
            <ConfigTree entry={entry.value} />
        </>
    );
}

export function ConfigTree({ entry, inArray }: { entry: ConfigEntry; inArray?: boolean }) {
    switch (entry.type) {
        case "map":
            return (
                <div className={twMerge("flex flex-col", !entry.root && !inArray ? "!ml-4" : "")}>
                    {entry.children.map((childEntry) => (
                        // so uhh, I don't really want to make comments require keys, so we just supply one, when it exists
                        // we don't really require performance here anyways
                        //
                        // - Nadwey
                        <ConfigTreeMapChild key={("key" in childEntry && childEntry.key) || null} entry={childEntry} />
                    ))}
                </div>
            );
        case "array":
            return (
                <div className="flex flex-col">
                    <div className={twMerge("flex flex-col", !entry.root && "!ml-4")}>
                        {entry.children.map((childEntry, index) => (
                            <div
                                key={index}
                                className="flex gap-1 rounded px-1 transition-colors duration-100 hover:bg-zinc-700/30"
                            >
                                <span>-</span>
                                <ConfigTree inArray entry={childEntry} />
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
        case "comment":
            return <div className="text-[#7AA468]">{entry.comment}</div>;
    }
}

export function ConfigContainer({ config, filename }: { config: ConfigEntry, filename?: string }) {
    return (
        <div className="not-content !my-2 flex flex-col overflow-hidden rounded-lg border border-[#333333]">
            <div className="bg-[#252526] px-4 py-1 text-white">{filename || "config.yml"}</div>
            <div className="overflow-x-scroll bg-[#0f0f12] px-6 py-4 font-[monospace] text-nowrap">
                <div className="border-l border-zinc-800 pl-4">
                    <ConfigTree entry={config} />
                </div>
            </div>
        </div>
    );
}
