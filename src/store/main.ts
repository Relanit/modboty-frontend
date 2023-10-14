import { LocalStorageKeys } from "@store/lskeys";
import { defineStore } from "pinia";

export interface State {
    isAuthenticated: boolean | null;
    navOpen: boolean;
}

export const useStore = defineStore("main", {
    state: () =>
        ({
            isAuthenticated: Boolean(localStorage.getItem(LocalStorageKeys.AUTHENTICATED)),
            navOpen: false,
        } as State),
    getters: {
        getNavOpen: (state) => state.navOpen,
    },
    actions: {
        setAuthenticated(newAuthenticated: boolean) {
            localStorage.setItem(LocalStorageKeys.AUTHENTICATED, String(newAuthenticated));
            this.isAuthenticated = newAuthenticated;
        },
        setNavOpen(newNavOpen: boolean) {
            this.navOpen = newNavOpen;
        },
    },
});
