import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import GridSystem from "@/views/GridSystem";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "/grid",
			name: "GridSystem",
			component: GridSystem,
		},
	],
});
