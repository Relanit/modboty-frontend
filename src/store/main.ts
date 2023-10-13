import { defineStore } from "pinia";

export interface State {
    navOpen: boolean;
}

export const useStore = defineStore("main", {
    state: () =>
        ({
            navOpen: false,
        } as State),
    getters: {
        getNavOpen: (state) => state.navOpen,
    },
    actions: {
        setNavOpen(newNavOpen: boolean) {
            this.navOpen = newNavOpen;
        },
    },
});
