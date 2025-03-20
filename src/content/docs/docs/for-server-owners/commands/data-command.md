---
title: "The 'Data' Command"
---

#### Syntax: `/breweryx data <save|reload>`

##### Permission: brewery.cmd.datamanager

The `data` command on BreweryX allows you to manage the active `DataManager` for BreweryX.

The key features of this command are **saving** and **reloading** Brewery's `DataManager`.

<br/>
When using `/brew data save` BreweryX will perform an asynchronous save to it's configured storage type (MongoDB, SQLite, etc).

<br/>
<br/>
When using `/brew data reload` BreweryX will first perform an asynchronous save, then reload the `DataManager`
with the configured `DataManager` (see: **#linktoconfigforthis**). When attempting to swap from one storage type to another (e.g. SQLite -> MySQL), this command should be used **AFTER** setting your new storage method
in your BreweryX configuration.

- Using `/brew data reload` will also reload all of your BreweryX configurations!
