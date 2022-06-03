import { createWebHistory, createRouter } from "vue-router";
import Connexion from "@/components/Connexion.vue";
import Inscription from "@/components/Inscription.vue";

import {useUserStore} from "@/services/userStore";

const { user } = useUserStore();

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/connexion",
            name: "connexion",
            component: Connexion
        },
        {
            path: "/inscription",
            name: "inscription",
            component: Inscription
        }
    ]
});
export default router;
