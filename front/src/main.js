
import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter);






import HomeComponent from './components/HomeComponent.vue';
import IndexSprintComponent from './components/Sprints/IndexSprintComponent.vue';
import CreateSprintComponent from './components/Sprints/CreateSprintComponent.vue';
import CreateIssueComponent from './components/Issues/CreateIssueComponent.vue';
import IndexIssueComponent from './components/Issues/IndexIssueComponent.vue';
import EditIssueComponent from './components/Issues/EditIssueComponent.vue';
import CreateTaskComponent from './components/Tasks/CreateTaskComponent.vue';
import IndexTaskComponent from './components/Tasks/IndexTaskComponent.vue';
import EditTaskComponent from './components/Tasks/EditTaskComponent.vue';

const routes = [
  {
      name: 'home',
      path: '/',
      component: HomeComponent
  },
  {
    name: 'sprint',
    path: '/sprint',
    component: IndexSprintComponent
  },
  {
    name: 'createSprint',
    path: '/create-sprint',
    component: CreateSprintComponent
  },
  {
      name: 'createIssue',
      path: '/create-issue',
      component: CreateIssueComponent
  },
  {
      name: 'issues',
      path: '/issues',
      component: IndexIssueComponent
  },
  {
      name: 'editIssue',
      path: '/edit/Issue/:id',
      component: EditIssueComponent
  },
  {
      name: 'createTask',
      path: '/create-task',
      component: CreateTaskComponent
  },
  {
      name: 'tasks',
      path: '/tasks',
      component: IndexTaskComponent
  },
  {
      name: 'editTask',
      path: '/edit/Task/:id',
      component: EditTaskComponent
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');