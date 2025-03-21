type ConfigEntryBase<T> = {
    type: T;
    key: string;
};

type ConfigEntryValue = ConfigEntryBase<"value"> & {
    valueType: "string" | "boolean" | "integer" | "float";
    defaultValue?: any;
};

type ConfigEntryMap = ConfigEntryBase<"map"> & {
    children: ConfigEntry[];
};

type ConfigEntry = ConfigEntryValue | ConfigEntryMap;

const config: ConfigEntryMap = {
    type: "map",
    key: "recipes",
    children: [
        {
            type: "value",
            key: "name",
            valueType: "string",
            defaultValue: "Cold Brew/Temperate Brew/Warm Brew",
        },
        {
            type: "map",
            key: "test",
            children: [
                {
                    type: "value",
                    key: "key1",
                    valueType: "string",
                },
            ],
        },
    ],
};

function ValueTypeBadge({ type }: { type: string }) {
    return <span style={{ fontSize: "0.8rem", color: "#aaaaaa", backgroundColor: "#44444450", padding: "0.2rem", borderRadius: "0.5rem" }}>{type}</span>;
}

export function ConfigTree({ entry }: { entry: ConfigEntry }) {
    switch (entry.type) {
        case "map":
            return (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "0",
                    }}
                >
                    <div>{entry.key}:</div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "0 0 0 1rem",
                        }}
                    >
                        {entry.children.map((childEntry) => (
                            <ConfigTree key={childEntry.key} entry={childEntry} />
                        ))}
                    </div>
                </div>
            );
        case "value":
            return (
                <div>
                    {entry.key}: {entry.defaultValue} <ValueTypeBadge type={entry.valueType} />
                </div>
            );
    }
}

export function Test() {
    return (
        <div style={{ fontFamily: "monospace" }}>
            <ConfigTree entry={config} />
        </div>
    );
}
