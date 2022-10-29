import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		// Redireccion
		// {
		// 	path: "/home",
		// 	redirect: {
		// 		name: "home",
		// 	},
		// },
		{
			path: "/",
			name: "home",
			component: HomeView,
			// Alias
			alias: "/home",
		},
		{
			path: "/session",
			component: () => import("@/views/SessionView.vue"),
			children: [
				{
					path: "",
					components: {
						default: () => import("@/views/LoginView.vue"),
						register: () => import("@/views/RegisterView.vue"),
					},
				},
			],
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
					component: () => import("@/views/ChatView.vue"),
					// props: true,
					// props: {
					// 	chatId: "3",
					// },
					props: (route) => {
						return {
							chatId: route.params.chatId,
						};
					},
				},
			],
		},
	],
});

export default router;
