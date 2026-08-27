import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const projList = [
    {
        id: 1,
        title: 'PanOptik Digital Marketing Inc.',
        description: 'A digital marketing team helping businesses build a clear, effective online presence.',
        stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        image: require('@/assets/images/Project/ProjectLogo/panoptik.jpg'),
        imageAlt: 'PanOptik Digital Marketing Inc. project preview',
    },
    {
        id: 2,
        title: 'Karwaheng Pinoy',
        description: 'A delivery-app concept inspired by the convenience of services such as Grab and Lalamove.',
        stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        image: require('@/assets/images/Project/ProjectLogo/logoyellowbg.jpg'),
        imageAlt: 'Karwaheng Pinoy project preview',
    },
];

const skillCard = [
    {
        id: 1,
        name: 'Front-end Development',
        items: ['JavaScript', 'VueJS', 'ReactJS', 'TypeScript', 'Git', 'CSS', 'LESS', 'Vuetify'],
    },
    {
        id: 2,
        name: 'Back-end Development',
        items: ['Laravel', 'GitLab CI/CD', 'Docker', 'MySQL'],
    },
    {
        id: 3,
        name: 'Quality Assurance',
        items: ['Web Application QA'],
    },
    {
        id: 4,
        name: 'Game Development',
        items: ['Unity Engine', 'C#'],
    },
    {
        id: 5,
        name: 'Technical Support',
        items: ['Computer basic troubleshooting'],
    },
];

const experienceList = [
    {
        id: 1,
        company: 'Collabera – Essilor',
        location: 'Alabang, Muntinlupa City',
        role: 'Senior Analyst Programmer',
        period: 'Sept 2022 – Present',
        highlights: [
            'Created data models to support decision-making processes.',
            'Developed comprehensive risk management strategies to minimize potential losses and safeguard business interests.',
            'Utilized data visualization techniques to present and explain complex data sets.',
            'Generated ad-hoc reports to evaluate specific business requirements.',
            'Investigated system issues and implemented resolutions to reduce downtime.',
            'Optimized core processes to improve business performance and operational agility.',
        ],
    },
    {
        id: 2,
        company: 'Teknovarik Inc.',
        location: 'Valenzuela City',
        role: 'Fullstack Developer, Project Support, DevOps',
        period: 'Jun 2021 – Sept 2022',
        highlights: [
            'Built interactive prototypes for client approval using wireframing tools such as Corel.',
            'Optimized web applications for speed, scalability, and security.',
            'Reduced load times by optimizing images, code minification, and implementing caching techniques.',
            'Worked closely with UX/UI designers to translate complex designs into functional web pages.',
            'Spearheaded production of page content such as visuals and text copy to meet project specifications.',
            'Maintained consistency in branding across multiple platforms by developing reusable UI components.',
        ],
    },
    {
        id: 3,
        company: 'AYX Technologies',
        location: 'Mainland, China',
        role: 'Front-end Developer',
        period: 'Jan 2019 – Apr 2021',
        highlights: [
            'Enhanced user experience by implementing responsive web designs for seamless browsing across devices.',
            'Designed intuitive user interfaces through close collaboration with UX designers, increasing user satisfaction.',
            'Optimized web applications for speed, scalability, and security.',
            'Developed user-friendly web forms with validation and error handling.',
        ],
    },
    {
        id: 4,
        company: 'Freelance',
        location: 'Remote',
        role: 'Front-end Developer',
        period: 'Jan 2018 – Dec 2020',
        highlights: [
            'Developed user-oriented visuals and features using front-end languages to increase site traffic.',
            'Reviewed code to validate structures, assess security, and verify browser and device compatibility.',
            'Engaged with clients to plan and optimize site issues and queries.',
            'Planned and engineered RESTful web services to manipulate dynamic datasets.',
        ],
    },
];

export default new Vuex.Store({
    state: {
        projectsList: projList,
        skillList: skillCard,
        experienceList: experienceList
    },
    getters: {
        getProjectList(state){
            return state.projectsList;
        },
        getSkillList(state){
            return state.skillList;
        },
        getExperienceList(state){
            return state.experienceList;
        },
    },
    mutations: {},
    actions: {},
    modules: {}
});