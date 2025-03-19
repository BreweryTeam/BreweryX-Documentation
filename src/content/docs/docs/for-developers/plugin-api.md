---
title: "Plugin API"
---


<script>
fetch('https://api.github.com/repos/BreweryTeam/BreweryX/releases/latest')
  .then(response => response.json())
  .then(data => {
    document.getElementById('latest-version').innerText = data.tag_name;
  })
  .catch(error => console.error('Error fetching release:', error));
</script>

If you're a developer looking to extend your plugin's functionality with BreweryX,
you've come to the right place. In this page, we'll go through how you can get set up
with BreweryX's API and start writing your own custom features.


**Latest release: <span id="latest-version">x.y.z</span>**
```kotlin
repositories {
    maven("https://repo.jsinco.dev/releases")
}

dependencies {
    compileOnly("com.dre.brewery:BreweryX:%VERSION%")
}
```

We offer a variety of utilities and events within BreweryX's [`api`](https://github.com/BreweryTeam/BreweryX/tree/master/src/main/java/com/dre/brewery/api) package.

## Example Usage

```java
// Checking if an item is a BreweryX potion

public void onPlayerInteract(PlayerInteractEvent event) {
    ItemStack item = event.getItem();
    if (BreweryApi.isBrew(item)) {
        event.getPlayer().sendMessage("This is a BreweryX potion!");
    }
}
```




