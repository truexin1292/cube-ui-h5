// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
	/* eslint-disable no-unused-vars */
	Style,
	Button,
	Toolbar,
	CheckboxGroup,
	Radio,
	Input,
	Textarea,
	Select,
	Switch,
	Rate,
	Validator,
	Form,
	Loading,
	Tip,
	Popup,
	Toast,
	Picker,
	CascadePicker,
	DatePicker,
	SegmentPicker,
	TimePicker,
	Dialog,
	ActionSheet,
	Drawer,
	Scroll,
	Slide,
	IndexList,
	Swipe,
	Upload,
	createAPI
} from "cube-ui";
import App from "./App";
import router from "./router";

import SubscribeDialog from "./components/subscribe-dialog/subscribe-dialog";

createAPI(Vue, SubscribeDialog, [], true);

Vue.use(Button);
Vue.use(Toolbar);
Vue.use(CheckboxGroup);
Vue.use(Radio);
Vue.use(Input);
Vue.use(Textarea);
Vue.use(Select);
Vue.use(Switch);
Vue.use(Rate);
Vue.use(Validator);
Vue.use(Form);
Vue.use(Loading);
Vue.use(Tip);
Vue.use(Toast);
Vue.use(Picker);
Vue.use(CascadePicker);
Vue.use(DatePicker);
Vue.use(SegmentPicker);
Vue.use(TimePicker);
Vue.use(Dialog);
Vue.use(Popup);
Vue.use(ActionSheet);
Vue.use(Drawer);
Vue.use(Scroll);
Vue.use(Slide);
Vue.use(IndexList);
Vue.use(Swipe);
Vue.use(Upload);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	template: "<App/>",
	components: { App }
});
