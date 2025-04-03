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
            key: "enableHome",
            value: {
                value: true,
                type: "boolean",
                description: (
                    <p>
                        Toggles players waking up at their specified <code>home</code> locations when logging in after
                        excessive drinking. (See below!)
                    </p>
                ),
            },
        },
        {
            key: "homeType",
            value: {
                value: "cmd: home",
                type: "string",
                description: (
                    <p>
                        Determines how BreweryX should handle home behavior for players after excessive drinking.
                        <br />
                        <br />
                        Available option types:
                        <ul>
                            <li>
                                <code>cmd: &lt;command&gt;</code> - Teleports players to their home location using the
                                specified command.
                            </li>
                            <li>
                                <code>bed</code> - Teleports players to their bed spawn point.
                            </li>
                        </ul>
                    </p>
                ),
            },
        },
        {
            key: "enableWake",
            value: {
                value: true,
                type: "boolean",
                description: (
                    <p>
                        If players should "wake up" at a random place when offline for some time after drinking (the
                        places have to be defined with <code>/brew wakeup add</code> by an admin)
                    </p>
                ),
            },
        },
        {
            key: "enableLoginDisallow",
            value: {
                value: true,
                type: "boolean",
                description: (
                    <p>
                        Toggle whether or not players should have to try logging in multiple times before being able to
                        connect to the server when extremely drunk.
                    </p>
                ),
            },
        },
        {
            key: "enableKickOnOverdrink",
            value: {
                value: true,
                type: "boolean",
                description: (
                    <p>
                        If players should <i>faint</i> and get kicked from the server when they drink too much.
                    </p>
                ),
            },
        },
        {
            key: "enablePuke",
            value: {
                value: true,
                type: "boolean",
                description: (
                    <p>
                        If players should <i>puke</i> up items (defined below) when they drink too much.
                        <br />
                        The items can not be collected and stay on the ground until they despawn after a short period.
                    </p>
                ),
            },
        },
        {
            key: "pukeItem",
            value: {
                type: "array",
                description: (
                    <p>
                        Items that are spewed out from the mouths of players when they drink too much.
                        <br />
                        These items are not collectable and will despawn after a short period.
                    </p>
                ),
                children: [
                    {
                        type: "string",
                        value: "soul_sand",
                    },
                ],
            },
        },
        {
            key: "pukeDespawntime",
            value: {
                value: 60,
                type: "integer",
                description: (
                    <p>
                        Time in seconds until the pukeitems despawn, (Minecraft's default is 300 seconds)
                        <br />
                        If the item despawn time was changed in the spigot.yml, the pukeDespawntime changes as well.
                    </p>
                ),
            },
        },
        {
            key: "stumblePercent",
            value: {
                value: 100,
                type: "integer",
                description: (
                    <p>
                        How much the player stumbles depending on the amount of alcohol they've had.
                        <br />
                        Can be set to 0 or higher than 100.
                    </p>
                ),
            },
        },
        {
            key: "showStatusOnDrink",
            value: {
                value: true,
                type: "boolean",
                description: (
                    <p>Display the player's drunkenness to the player when they drink a brew or eats a drainItem.</p>
                ),
            },
        },
        {
            key: "drainItems",
            value: {
                type: "array",
                description: "Consumable Item/strength. Decreases the alcohol level by <strength> when consumed.",
                children: [
                    {
                        type: "string",
                        value: "bread/4",
                    },
                    {
                        type: "string",
                        value: "milk_bucket/2",
                    },
                ],
            },
        },
        {
            key: "enableCauldronParticles",
            value: {
                value: true,
                type: "boolean",
                description: (
                    <p>
                        Show particles over cauldrons when they have ingredients and a heat source.
                        <br />
                        The changing color of the particles can help with timing some recipes.
                    </p>
                ),
            },
        },
        {
            key: "minimalParticles",
            value: {
                value: true,
                type: "boolean",
                description:
                    "If Cauldron Particles should be reduced. This generally won't give you any performance gains since particles are async anyway.",
            },
        },
        {
            key: "craftSealingTable",
            value: {
                value: true,
                type: "boolean",
                description: (
                    <p>
                        If sealing tables should be craftable. Requires a server restart to take effect.
                        <br />
                        <i>(Sealing tables can be crafted with 2 glass bottles over 4 planks!)</i>
                    </p>
                ),
            },
        },
        {
            key: "enableSealingTable",
            value: {
                value: true,
                type: "boolean",
                description: (
                    <p>
                        If sealing tables should be enabled.
                        <br />
                        <i>(Sealing tables can be crafted with 2 glass bottles over 4 planks!)</i>
                    </p>
                ),
            },
        },
        {
            key: "sealingTableBlock",
            value: {
                value: "SMOKER",
                type: "string",
                description: (
                    <p>
                        By default, Brewery uses Smoker as a Sealing Table, this option allows you to change it.
                        <br />
                        <strong>IMPORTANT:</strong> It needs to be a container - meaning a block that can store items
                        <i>(e.g., SMOKER, CHEST, BLAST_FURNACE)</i>.
                    </p>
                ),
            },
        },
        {
            key: "alwaysShowQuality",
            value: {
                value: true,
                type: "boolean",
                description:
                    "Always show the 1-5 stars on the item depending on the quality. If false, they will only appear when brewing.",
            },
        },
        {
            key: "alwaysShowAlc",
            value: {
                value: true,
                type: "boolean",
                description: (
                    <p>
                        Always show the alcohol content on the item. If false, it will only show in the brewing stand.
                        <br />
                        Sealed brews will not show the alcohol content regardless of this setting.
                    </p>
                ),
            },
        },
        {
            key: "alwaysShowAlcIndicator",
            value: {
                value: true,
                type: "boolean",
                description: (
                    <p>
                        Always show that a brew is alcoholic by putting "Alcoholic" in the item's lore.
                        <br />
                        Sealed brews will show that a brew is alcoholic, but not its alcohol content.
                    </p>
                ),
            },
        },
        {
            key: "showBrewer",
            value: {
                value: false,
                type: "boolean",
                description: "If we should show who brewed the drink.",
            },
        },
        {
            key: "requireKeywordOnSigns",
            value: {
                value: true,
                type: "boolean",
                description: (
                    <p>
                        If barrels are only created when the sign placed contains the word "barrel"
                        <br />
                        (or a translation when using another language).
                    </p>
                ),
            },
        },
        {
            key: "ageInMCBarrels",
            value: {
                value: true,
                type: "boolean",
                description: (
                    <p>
                        If aging in Minecraft barrels in enabled.
                        <br />
                        How many Brewery drinks can be put into them.
                    </p>
                ),
            },
        },
        {
            key: "agingYearDuration",
            value: {
                value: 20,
                type: "integer",
                description: (
                    <p>
                        Duration (in minutes) of a <code>year</code> when aging drinks.
                    </p>
                ),
            },
        },
        {
            key: "commandAliases",
            value: {
                type: "array",
                description: (
                    <p>
                        A list of alternative command names (aliases) that can be used instead of <code>/breweryx</code>
                        . Requires a server restart to take effect.
                    </p>
                ),
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
