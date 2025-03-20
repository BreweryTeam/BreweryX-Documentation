import { useEffect, useState } from "react";

/**
 * Returns the lastest BreweryX version as a React component
 *
 * I hate this, but it's better than embedding a script tag in the markdown imo ~Nadwey
 */
export function LatestBreweryxVersion() {
    const [version, setVersion] = useState("Loading...");

    useEffect(() => {
        fetch("https://api.github.com/repos/BreweryTeam/BreweryX/releases/latest")
            .then((res) => res.json())
            .then((data) => setVersion(data.tag_name));
    }, []);

    return version;
}
