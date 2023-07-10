type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    const activeKeysMods = [];

    for (const key in mods) {
        if (Object.prototype.hasOwnProperty.call(mods, key) && !!mods[key]) {
            activeKeysMods.push(key);
        }
    }

    return [
        cls,
        ...activeKeysMods,
        ...additional.filter(Boolean),
    ].join(" ");
}