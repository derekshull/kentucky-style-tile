import Vue from "vue";
import Router from "vue-router";
import Hello from "@/views/Hello";
import GridSystem from "@/views/GridSystem";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "Hello",
			component: Hello,
		},
		{
			path: "/grid",
			name: "GridSystem",
			component: GridSystem,
		},
	],
});
