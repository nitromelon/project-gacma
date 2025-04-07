// Reference: https://stackoverflow.com/a/68785061

import { browser } from "$app/environment";
import { get, writable, type Writable } from "svelte/store";

interface LanguagePreference {
    language: LayoutLanguage;
}

export const enum LayoutLanguage {
    Vietnamese = 0,
    English = 1,
}

const LANGUAGE_PREFERENCE_KEYWORD = "layout-language-preference-keyword";

function storage<T>(key: string, init: T): Writable<T> {
    const store = writable(init);
    if (!browser) return store;

    const stored_value_string = localStorage.getItem(key);

    if (stored_value_string !== null) {
        store.set(JSON.parse(stored_value_string));
    }

    store.subscribe((val: any) => {
        if ([null, undefined].includes(val)) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(val));
        }
    });

    window.addEventListener("storage", () => {
        const stored_value_string = localStorage.getItem(key);
        if (stored_value_string === null) return;

        const local_value = JSON.parse(stored_value_string);
        if (local_value !== get(store)) {
            store.set(local_value);
        }
    });

    return store;
}

const language_perference = storage<LanguagePreference>(LANGUAGE_PREFERENCE_KEYWORD, {
    language: LayoutLanguage.English,
});

export function display_text(preference: LanguagePreference, ...languages_text: string[]): string {
    return languages_text[preference.language] ?? "";
}

export default language_perference;
