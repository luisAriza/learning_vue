import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/about",
			name: "about",
			component: () => import("@/views/AboutView.vue"),
		},
		{
			path: "/chats",
			name: "chats",
			component: () => import("@/views/ChatsView.vue"),
			children: [
				{
					path: ":chatId",
					name: "chat",
					component: () => import("@/views/ChatView.vue"),
				},
			],
		},
	],
});

export default router;
