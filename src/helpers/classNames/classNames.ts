type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    const activeKeysMods = [];

    for (let key in mods) {
        if (mods.hasOwnProperty(key) && !!mods[key]) {
            activeKeysMods.push(key)
        }
    }

    return [
        cls,
        ...activeKeysMods,
        ...additional
    ].join(' ');
}