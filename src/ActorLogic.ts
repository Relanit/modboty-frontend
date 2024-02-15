import { Ref, watch } from "vue";
// import { axiosClient } from "../../modboty-frontend/src/axios";
import { useActor } from "../../modboty-frontend/src/store/actor";

export async function setupActor(isAuthenticated: Ref<boolean | null>) {
    const actor = useActor();

    async function fetch() {
        // Set up initial identity (pre-fetch)
        actor.setUser(null);
        return;
        // const identity = actor.getIdentity();
        // if (identity) {
        //     actor.setUser({ ...identity, _idty: true });
        // }

        // await axiosClient
        //     .get("/users/me")
        //     .then((res) => {
        //         if (!res.data) return;

        //         const usr = res.data;
        //         if (!usr) {
        //             actor.setUser(null);
        //             return;
        //         }

        //         actor.setUser(usr);
        //     })
        //     .catch((error) => {
        //         throw new Error(error);
        //     });
    }

    fetch();

    watch(isAuthenticated, () => fetch(), { immediate: true });
}
