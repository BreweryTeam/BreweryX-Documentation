---
title: "The 'Reload' Command"
---

#### Syntax: `/breweryx reload`

##### Permission: brewery.cmd.reload

This command instructs BreweryX and it's addons to reload their data from configuration files.

When using this command, BreweryX will:

- config.yml
- recipes.yml
- cauldron.yml
- custom-items.yml
- All locale files located in <u>BreweryX/langs/</u>.
- Tell all loaded addons to reload their data from their respective configuration files.

This command will **NOT**:

- Save BreweryX data
- Reload BreweryX DataManager (configurated in `config.yml#storage`)

For the actions above, `/breweryx data save` or `/breweryx data reload` should be used.
