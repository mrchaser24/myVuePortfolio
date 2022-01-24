import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const projList = [
    {
        id_proj:1,
        title: "PanOptik Digital Marketing Inc.",
        description: "A digital marketing inc that helps a business get up and running",
        tools: "HTML5, CSS3, JS, Bootstrap",
        projImg:  require('@/assets/images/Project/ProjectLogo/panoptik.jpg'),
    },
    {
        id_proj:2,
        title: "Karwaheng Pinoy",
        description: "A delivery app that is similar to Grab and Lalamove",
        tools: "HTML5, CSS3, JS, Bootstrap",
        projImg:  require('@/assets/images/Project/ProjectLogo/logoyellowbg.jpg'),
    },
    {
        id_proj:3,
        title: "TEST 1",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt cupiditate iusto deserunt fugiat maiores voluptatum fugit commodi nihil neque nulla, adipisci doloremque, pariatur sequi!",
        tools: "Vue 2",
        projImg:  require('@/assets/images/Project/ProjectLogo/tkdslide1.jpg'),
    },
    {
        id_proj:4,
        title: "TEST 2",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt cupiditate iusto deserunt fugiat maiores voluptatum fugit commodi nihil neque nulla, adipisci doloremque, pariatur sequi!",
        tools: "Laravel",
        projImg: require('@/assets/images/Project/ProjectLogo/tkdslide1.jpg'),
    },
];

const skillCard = [
    {
        id:1,
        name:"HTML",
        imgSrc: require('@/assets/images/Home/my-skills/HTML.png'),
        desc:"<p>75</p><p>Lorem ipsum dolor sit amet.</p>",
    },
    {
        id:2,
        name:"CSS",
        imgSrc: require('@/assets/images/Home/my-skills/CSS.png'),
        desc:"<p>75</p>",
    },
    {
        id:3,
        name:"JavaScript",
        imgSrc: require('@/assets/images/Home/my-skills/JavaScript.png'),
        desc:"<p>60</p>",
    },
    {
        id:4,
        name:"TypeScript",
        imgSrc: require('@/assets/images/Home/my-skills/TypeScript.png'),
        desc:"<p>60</p>",
    },
    {
        id:5,
        name:"VueJS",
        imgSrc: require('@/assets/images/Home/my-skills/VueJS.png'),
        desc:"<p>50</p>",
    },
    {
        id:6,
        name:"Less",
        imgSrc: require('@/assets/images/Home/my-skills/Less.png'),
        desc:"<p>50</p>",
    },
    {
        id:7,
        name:"MySQL",
        imgSrc: require('@/assets/images/Home/my-skills/MySQL.png'),
        desc:"<p>40</p>",
    },
    {
        id:8,
        name:"Express",
        imgSrc: require('@/assets/images/Home/my-skills/ExpressJS.png'),
        desc:"<p>30</p>",
    },
    {
        id:9,
        name:"PHP",
        imgSrc: require('@/assets/images/Home/my-skills/PHP.png'),
        desc:"<p>30</p>",
    },
    {
        id:10,
        name:"Laravel",
        imgSrc: require('@/assets/images/Home/my-skills/Laravel.png'),
        desc:"<p>10</p>",
    },
];

export default new Vuex.Store({
    state: {
        projectsList: projList,
        skillList: skillCard
    },
    getters: {
        getProjectList(state){
            return state.projectsList;
        },
        getSkillList(state){
            return state.skillList;
        },
    },
    mutations: {},
    actions: {},
    modules: {}
});