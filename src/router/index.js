import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Home from "@/components/Home";
import Match from "@/components/Match";
import List from "@/components/List";
import DishMap from "@/components/DishMap";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "Login",
			component: Login
		},
		{
			path: "/home",
			name: "Home",
			component: Home
		},
		{
			path: "/match",
			name: "Match",
			component: Match
		},
		{
			path: "/list",
			name: "List",
			component: List
		},
		{
			path: "/dishMap",
			name: "DishMap",
			component: DishMap
		}
	]
});
