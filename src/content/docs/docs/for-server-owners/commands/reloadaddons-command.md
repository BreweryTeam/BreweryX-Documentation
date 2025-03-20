---
title: "The 'ReloadAddons' Command"
---

:::caution[Usage discouraged]
Using this command is **highly** discouraged and it should **never** be used in production environments.
This command reloads addons _COMPLETELY_ and effectively works the same way as [Bukkit's `/reload`](https://madelinemiller.dev/blog/problem-with-reload/) command!

If you are trying to reload addon configuration files, please use `/breweryx reload`.
:::

#### Syntax: `/breweryx reloadaddons`

##### Permission: brewery.cmd.reloadaddons

Unloads and reloads all of BreweryX's addons. This command will directly pull addons from BreweryX's addon folder and load them into memory.

Addon classes loaded by BreweryX use the `PluginLoader` ClassLoader, which means this command will slowly consume more and more memory as it's used because old addon classes won't get garbage collected.

Usage of this command is discouraged and addon authors may not provide proper support for disabling their addons and this can cause a variety of issues.

If you are trying to reload addon configuration files, please use `/breweryx reload`.
