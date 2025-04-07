import { ConfigContainer, type ConfigEntryValueMap } from "../config-tree";

const config: ConfigEntryValueMap = {
    root: true,
    type: "map",
    children: [
        {
            comment: "# I am a comment"
        },
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
                        comment: "# Copypasta for testing"
                    },
                    {
                        comment: "# Remember to remove"
                    },
                    {
                        comment: "# My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession. If you're watching this tape, I'm probably dead, murdered by my brother-in-law Hank Schrader. Hank has been building a meth empire for over a year now and using me as his chemist. Shortly after my 50th birthday, Hank came to me with a rather, shocking proposition. He asked that I use my chemistry knowledge to cook methamphetamine, which he would then sell using his connections in the drug world. Connections that he made through his career with the DEA. I was... astounded, I... I always thought that Hank was a very moral man and I was... thrown, confused, but I was also particularly vulnerable at the time, something he knew and took advantage of. I was reeling from a cancer diagnosis that was poised to bankrupt my family. Hank took me on a ride along, and showed me just how much money even a small meth operation could make. And I was weak. I didn't want my family to go into financial ruin so I agreed. Every day, I think back at that moment with regret. I quickly realized that I was in way over my head, and Hank had a partner, a man named Gustavo Fring, a businessman. Hank essentially sold me into servitude to this man, and when I tried to quit, Fring threatened my family. I didn't know where to turn. Eventually, Hank and Fring had a falling out. From what I can gather, Hank was always pushing for a greater share of the business, to which Fring flatly refused to give him, and things escalated. Fring was able to arrange, uh I guess I guess you call it a \"hit\" on my brother-in-law, and failed, but Hank was seriously injured, and I wound up paying his medical bills which amounted to a little over $177,000. Upon recovery, Hank was bent on revenge, working with a man named Hector Salamanca, he plotted to kill Fring, and did so. In fact, the bomb that he used was built by me, and he gave me no option in it. I have often contemplated suicide, but I'm a coward. I wanted to go to the police, but I was frightened. Hank had risen in the ranks to become the head of the Albuquerque DEA, and about that time, to keep me in line, he took my children from me. For 3 months he kept them. My wife, who up until that point, had no idea of my criminal activities, was horrified to learn what I had done, why Hank had taken our children. We were scared. I was in Hell, I hated myself for what I had brought upon my family. Recently, I tried once again to quit, to end this nightmare, and in response, he gave me this. I can't take this anymore. I live in fear every day that Hank will kill me, or worse, hurt my family. I... All I could think to do was to make this video in hope that the world will finally see this man, for what he really is."
                    },
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
        {
            key: "enableEncode",
            value: {
                value: false,
                type: "boolean",
                description: (
                    <p>
                        The used Ingredients and other brewing-data is saved to all Brewery Items. To prevent hacked
                        clients from reading what exactly was used to brew an item, the data can be encoded/scrambled.
                        <br />
                        This is a fast process to stop players from hacking out recipes, once they get hold of a brew.
                        <br />
                        <br />
                        If this is enabled, Brewery items can only be used on another server with the same encodeKey.
                        <br />
                        <br />
                        So enable this if you want to make recipe cheating harder, but don't share any brews by world
                        download, schematics, or other means.
                    </p>
                ),
            },
        },
        {
            key: "encodeKey",
            value: {
                value: -1,
                type: "integer",
                description: (
                    <p>
                        The key used to encode Brewery item data. This key is unique to you and randomly generated by
                        Brewery when you first create your config.
                    </p>
                ),
            },
        },
        {
            key: "useWorldGuard",
            value: {
                value: true,
                type: "boolean",
                description: "Should BreweryX hook into WorldGuard?",
            },
        },
        {
            key: "useLWC",
            value: {
                value: true,
                type: "boolean",
                description: "Should BreweryX hook into LWC?",
            },
        },
        {
            key: "useGriefPrevention",
            value: {
                value: true,
                type: "boolean",
                description: "Should BreweryX hook into GriefPrevention?",
            },
        },
        {
            key: "useTowny",
            value: {
                value: true,
                type: "boolean",
                description: "Should BreweryX hook into Towny?",
            },
        },
        {
            key: "useLands",
            value: {
                value: true,
                type: "boolean",
                description: "Should BreweryX hook into Lands?",
            },
        },
        {
            key: "useBlockLocker",
            value: {
                value: true,
                type: "boolean",
                description: "Should BreweryX hook into BlockLocker?",
            },
        },
        {
            key: "useGMInventories",
            value: {
                value: true,
                type: "boolean",
                description: "Should BreweryX hook into GMInventories?",
            },
        },
        {
            key: "useLogBlock",
            value: {
                value: true,
                type: "boolean",
                description: "Enable the Logging of Barrel Inventories to LogBlock?",
            },
        },
        {
            key: "useVirtualChestPerms",
            value: {
                value: true,
                type: "boolean",
                description: (
                    <p>
                        Use a virtual chest when opening a Barrel to check with all other protection plugins?
                        <br />
                        This could confuse Anti-Cheat plugins, but is otherwise good to useuse this for{" "}
                        <code>Residence</code>
                        plugins or any others that don't check all cases in the <code>PlayerInteractEvent</code>.
                    </p>
                ),
            },
        },
        {
            key: "useOffhandForCauldron",
            value: {
                value: true,
                type: "boolean",
                description: "If items in offhand should be added to the cauldron as well.",
            },
        },
        {
            key: "hangoverDays",
            value: {
                value: 7,
                type: "integer",
                description:
                    "Time (in days) that drunkenness-data stays in memory after a player goes offline, to apply hangover etc.",
            },
        },
        {
            key: "colorInBarrels",
            value: {
                value: true,
                type: "boolean",
                description: "Color the Item information (lore) depending on quality while it is in a barrel.",
            },
        },
        {
            key: "colorInBrewer",
            value: {
                value: true,
                type: "boolean",
                description: "Color the Item information (lore) depending on quality while it is in a brewing stand.",
            },
        },
        {
            key: "openLargeBarrelEverywhere",
            value: {
                value: true,
                type: "boolean",
                description: (
                    <p>
                        If a Large Barrel can be opened by clicking on any of its blocks, not just Spigot or Sign. This
                        is always true for Small Barrels.
                        <br />
                        For consistency, we recommend leaving this to true.
                    </p>
                ),
            },
        },
        {
            key: "barrelInvSizeLarge",
            value: {
                value: 3,
                type: "integer",
                description: (
                    <p>
                        How many rows of an inventory should different types of barrels have?
                        <br />
                        Must be an integer between 1 and 6 (a Minecraft / GUI limitation)
                        <br />
                        <i>A server restart is required for changes here to take effect.</i>
                    </p>
                ),
            },
        },
        {
            key: "barrelInvSizeSmall",
            value: {
                value: 1,
                type: "integer",
                description: (
                    <p>
                        How many rows of an inventory should different types of barrels have?
                        <br />
                        Must be an integer between 1 and 6 (a Minecraft / GUI limitation)
                        <br />
                        <i>A server restart is required for changes here to take effect.</i>
                    </p>
                ),
            },
        },
        {
            key: "brewHopperDump",
            value: {
                value: true,
                type: "boolean",
                description: "Allow emptying brews into hoppers to discard brews while keeping the glass bottle.",
            },
        },
        {
            key: "enableChatDistortion",
            value: {
                value: true,
                type: "boolean",
                description: (
                    <p>
                        If written chat is distorted when the player is drunk, so that it looks like drunk writing.
                        <br />
                        How much the chat is distorted depends on how drunk the player is.
                        <br />
                        Below are settings for what and how changes in chat occur.
                    </p>
                ),
            },
        },
        {
            key: "logRealChat",
            value: {
                value: true,
                type: "boolean",
                description: "Log to the console what the player actually wrote, before their words were altered.",
            },
        },
        {
            key: "distortCommands",
            value: {
                type: "array",
                description: "Text after specified commands will be distored when drunk.",
                children: [
                    {
                        type: "string",
                        value: "/gl",
                    },
                    {
                        type: "string",
                        value: "/global",
                    },
                    {
                        type: "string",
                        value: "/fl",
                    },
                    {
                        type: "string",
                        value: "/s",
                    },
                    {
                        type: "string",
                        value: "/letter",
                    },
                    {
                        type: "string",
                        value: "/g",
                    },
                    {
                        type: "string",
                        value: "/l",
                    },
                    {
                        type: "string",
                        value: "/lokal",
                    },
                    {
                        type: "string",
                        value: "/local",
                    },
                    {
                        type: "string",
                        value: "/mail send",
                    },
                    {
                        type: "string",
                        value: "/m",
                    },
                    {
                        type: "string",
                        value: "/msg",
                    },
                    {
                        type: "string",
                        value: "/w",
                    },
                    {
                        type: "string",
                        value: "/whisper",
                    },
                    {
                        type: "string",
                        value: "/reply",
                    },
                    {
                        type: "string",
                        value: "/r",
                    },
                    {
                        type: "string",
                        value: "/t",
                    },
                    {
                        type: "string",
                        value: "/tell",
                    },
                ],
            },
        },
        {
            key: "distortSignText",
            value: {
                value: true,
                type: "boolean",
                description: "Distort text written on a sign while drunk.",
            },
        },
        {
            key: "distortBypass",
            value: {
                type: "array",
                description: (
                    <p>
                        Enclose a chat text with these letters to bypass chat distortion. (Use "," as separator)
                        <br />
                        <strong>Chat example: Hello I am drunk, *I'm testing Brewery.*</strong>
                    </p>
                ),
                children: [
                    {
                        type: "string",
                        value: "*,*",
                    },
                    {
                        type: "string",
                        value: "[,]",
                    },
                ],
            },
        },
        {
            key: "words",
            value: {
                type: "array",
                description: (
                    <p>
                        Words and letters that will be altered when chatting while being drunk.
                        <br />
                        Will be processed from first to last and a written sentence is altered in that order.
                    </p>
                ),
                children: [
                    {
                        type: "map",
                        description: "test",
                        children: [
                            {
                                key: "replace",
                                value: {
                                    type: "string",
                                    description: (
                                        <p>
                                            Word or letter to be replaced. (Special: "-space": replaces space,
                                            "-random": insert into random position, "-all": everything, "-start": At
                                            Beginning, "-end": At the End.)
                                        </p>
                                    ),
                                    value: "s",
                                },
                            },
                            {
                                key: "to",
                                value: {
                                    type: "string",
                                    description: "What to replace it with.",
                                    value: "sh",
                                },
                            },
                            {
                                key: "alcohol",
                                value: {
                                    type: "integer",
                                    description: "1-100 minimum drunkenness after which this word is replaced.",
                                    value: 30,
                                },
                            },
                            {
                                key: "percentage",
                                value: {
                                    type: "integer",
                                    description: "Probability of replacing a word when drunk.",
                                    value: 90,
                                },
                            },
                        ],
                    },
                    {
                        type: "map",
                        description: "test",
                        children: [
                            {
                                key: "replace",
                                value: {
                                    type: "string",
                                    description: (
                                        <p>
                                            Word or letter to be replaced. (Special: "-space": replaces space,
                                            "-random": insert into random position, "-all": everything, "-start": At
                                            Beginning, "-end": At the End.)
                                        </p>
                                    ),
                                    value: "ch",
                                },
                            },
                            {
                                key: "to",
                                value: {
                                    type: "string",
                                    description: "What to replace it with.",
                                    value: "sh",
                                },
                            },
                            {
                                key: "pre",
                                value: {
                                    type: "string",
                                    description: "Words and Letters before the wanted word (split with ',').",
                                    value: "u,s,o,a",
                                },
                            },
                            {
                                key: "match",
                                value: {
                                    type: "string",
                                    description:
                                        "True = one of the 'pre'-Words has to be before the wanted Word, false = none of the 'pre' Words is allowed before the wanted world.",
                                    value: "false",
                                },
                            },
                            {
                                key: "alcohol",
                                value: {
                                    type: "integer",
                                    description: "1-100 minimum drunkenness after which this word is replaced.",
                                    value: 10,
                                },
                            },
                            {
                                key: "percentage",
                                value: {
                                    type: "integer",
                                    description: "Probability of replacing a word when drunk.",
                                    value: 70,
                                },
                            },
                        ],
                    },
                ],
            },
        },
    ],
};

export function MainConfig() {
    return <ConfigContainer config={config} />;
}
