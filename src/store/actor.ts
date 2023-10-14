import { LocalStorageKeys } from "@store/lskeys";
import { User } from "@structures/User";
import { defineStore } from "pinia";

export interface State {
    user: User | null;
}

export const useActor = defineStore("actor", {
    state: () =>
        ({
            user: null,
        } as State),
    getters: {
        id(): string {
            return this.user?.id ?? "";
        },
    },
    actions: {
        setUser(user: User | Identity | null) {
            if (!(user as Identity)?._idty) {
                this.user = user as User;
            } else if (user && (user as Identity)._idty) {
                this.user = {
                    id: user.id,
                    display_name: user.display_name,
                    avatar_url: user.avatar_url,
                } as User;
            }

            // Update persisted identity
            if (user) {
                localStorage.setItem(
                    LocalStorageKeys.IDENTITY,
                    JSON.stringify({
                        id: user.id,
                        display_name: user.display_name,
                        avatar_url: user.avatar_url,
                    } as Identity),
                );
            } else {
                localStorage.removeItem(LocalStorageKeys.IDENTITY);
            }
        },
        getIdentity(): Identity | null {
            const v = localStorage.getItem(LocalStorageKeys.IDENTITY);
            if (v) {
                return JSON.parse(v);
            }
            return null;
        },
    },
});

export interface Identity {
    id: string;
    display_name: string;
    avatar_url: string;
    _idty: boolean;
}
