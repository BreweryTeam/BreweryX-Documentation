import { ConfigContainer, type ConfigEntryMap } from "../config-tree";

const config: ConfigEntryMap = {
    root: true,
    type: "map",
    children: [
        {
            key: "language",
            value: {
                type: "string",
                description: (
                    <>
                        The language translation used by the plugin.
                        <br />
                        <br />
                        See the{" "}
                        <a href="https://github.com/BreweryTeam/BreweryX/tree/master/src/main/resources/languages">
                            languages/
                        </a>{" "}
                        directory for available options.
                    </>
                ),
                value: "en",
            },
        },
        {
            key: "resolveUpdatesFrom",
            value: {
                type: "string",
                description: (
                    <>
                        Specifies the service to use for checking for updates, or disables update checks.
                        <br />
                        <br />
                        Available options: <code>GitHub</code>, <code>Snapshots</code>, <code>Spigot</code>,{" "}
                        <code>None</code>
                    </>
                ),
                value: "GITHUB",
            },
        },
        {
            key: "autosave",
            value: {
                type: "integer",
                description: "The interval, in minutes, at which plugin data is automatically saved.",
                value: 10,
            },
        },
        {
            key: "pluginPrefix",
            value: {
                type: "string",
                description: "The prefix displayed before plugin messages in chat and console.",
                value: "&2[BreweryX]&f ",
            },
        },
        {
            key: "debug",
            value: {
                type: "boolean",
                description:
                    "Enables detailed debug messages in the server logs. Recommended only for troubleshooting plugin issues.",
                value: false,
            },
        },
        {
            key: "storage",
            value: {
                type: "map",
                description: "Settings related to data storage.",
                children: [
                    {
                        key: "type",
                        value: {
                            type: "string",
                            description: (
                                <>
                                    Specifies the type of storage backend to use for plugin data.
                                    <br />
                                    <br />
                                    Available types:
                                    <ul>
                                        <li>
                                            <code>FlatFile</code> - Stores data in human-readable files. Easier to
                                            inspect manually but significantly slower than database options and not
                                            recommended for larger servers.
                                        </li>
                                        <li>
                                            <code>MySQL</code> - Stores data in a MySQL/MariaDB database. Allows data to
                                            be stored on an external server. Requires further configuration below.
                                        </li>
                                        <li>
                                            <code>SQLite</code> - Stores data in a local file-based database. Fast and
                                            doesn't require any extra server setup. Recommended for most single-server
                                            setups.
                                        </li>
                                        <li>
                                            <code>MongoDB</code> - Stores data in a MongoDB database. Allows data to be
                                            stored on an external server. Requires further configuration below.
                                        </li>
                                    </ul>
                                </>
                            ),
                            value: "SQLITE",
                        },
                    },
                    {
                        key: "database",
                        value: {
                            type: "string",
                            description:
                                "The database name. For SQLite/FlatFile, this is the filename (e.g., brewery-data.db).",
                            value: "brewery-data",
                        },
                    },
                    {
                        key: "tablePrefix",
                        value: {
                            type: "string",
                            value: "brewery_",
                        },
                    },
                    {
                        key: "address",
                        value: {
                            type: "string",
                            value: "localhost",
                        },
                    },
                    {
                        key: "username",
                        value: {
                            type: "string",
                            value: "root",
                        },
                    },
                    {
                        key: "password",
                        value: {
                            type: "string",
                            value: "password",
                        },
                    },
                ],
            },
        },
        {
            key: "commandAliases",
            value: {
                type: "array",
                description: "A list of alternative command names (aliases) that can be used instead of /breweryx.",
                children: [
                    {
                        type: "string",
                        value: "brewery",
                    },
                    {
                        type: "string",
                        value: "brew",
                    },
                ],
            },
        },
    ],
};

export function MainConfig() {
    return <ConfigContainer config={config} />;
}
