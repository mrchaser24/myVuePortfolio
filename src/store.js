import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const projList = [
    {
        title: "PanOptik Digital Marketing Inc.",
        description: "A digital marketing inc that helps a business get up and running",
        tools: "HTML5, CSS3, JS, Bootstrap",
    },
    {
        title: "Karwaheng Pinoy",
        description: "A delivery app that is similar to Grab and Lalamove",
        tools: "HTML5, CSS3, JS, Bootstrap",
    },
];

export default new Vuex.Store({
    state: {
        projectsList: projList,

    },
    getters: {
        getProjectList(state){
            return state.projectsList;
        },
    },
    mutations: {},
    actions: {},
    modules: {}
});