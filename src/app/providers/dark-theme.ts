import { InjectionToken, ValueProvider,  } from "@angular/core";

export const ENABLE_DARK_THEME_TOKEN = new InjectionToken('ENABLE_DARK_THEME');

export const ENABLE_DARK_THEME_PROVIDER: ValueProvider = {
    provide: ENABLE_DARK_THEME_TOKEN,
    useValue: true
};
