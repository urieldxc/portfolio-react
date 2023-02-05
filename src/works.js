import placeholder from '../src/img/placeholder.png'
import portfolio from "../src/img/portfolio.jpg"
import postitApp from "../src/img/postitApp.jpg"
import apuriApp from "../src/img/apuriApp.jpg"
export const workTags = ["All", "TailwindCSS", "SASS", "Bootstrap", "JavaScript", "React"]


export const workList = [
    {
        title: "Apuri App",
        descriptionEN: "Anime app made with React where you can have a personal list of your favourite animes. Project has anime filters and search bar.",
        descriptionES: "Aplicación de anime hecha con React en la cual puedes tener una lista personal de tus animes favoritos. El proyecto tiene filtros y barra de búsqueda.",
        image: apuriApp,
        live: "/",
        github: "/",
        tags: ["HTML & CSS", "React"]
    },
    {
        title: "Portfolio",
        descriptionEN: "Portfolio made with React and SASS, minimalistic style, own language system, programming language filters and project cards from JSON.",
        descriptionES: "Portfolio hecho con React y SASS, estética minimalista, sistema propio de lenguage, filtros de lenguajes y proyectos traídos desde JSON.",
        image: portfolio,
        live: "/",
        github: "/",
        tags: ["HTML & CSS", "React"]
    },
    {
        title: "Post-it App",
        descriptionEN: "Post-it app made with vanilla JavaScript and TailwindCSS wich saves the notes in LocalStorage for user's session simulation.",
        descriptionES: "Aplicación de post-it hecha con JavaScript puro y TailwindCSS que guarda las notas en LocalStorage para simular una sesión de usuario.",
        image: postitApp,
        live: "https://urieldxc.github.io/localstorage-notes/",
        github: "/",
        tags: ["HTML & CSS", "JavaScript"]
    },
    




    {
        title: "Portfolio",
        descriptionEN: "Portfolio made with React",
        descriptionES: "Portfolio hecho con React",
        image: placeholder,
        live: "/",
        github: "/",
        tags: ["HTML & CSS", "React"]
    },
    {
        title: "Post-it App",
        descriptionEN: "Post-it app made with vanilla JavaScript and TailwindCSS",
        descriptionES: "Aplicación de post-it hecha con JavaScript puro y TailwindCSS",
        image: placeholder,
        live: "/",
        github: "/",
        tags: ["HTML & CSS", "JavaScript"]
    },
    {
        title: "Apuri App",
        descriptionEN: "Anime app made with React where you can have a personal list of your favourite animes",
        descriptionES: "Aplicación de anime hecha con React en la cual puedes tener una lista personal de tus animes favoritos",
        image: placeholder,
        live: "/",
        github: "/",
        tags: ["HTML & CSS", "React"]
    },


]

export const numberAll = workList.length
export const numberHtmlCss = workList.filter(element => element.tags.includes("HTML & CSS")).length
export const numberJS = workList.filter(element => element.tags.includes("JavaScript")).length
export const numberReact = workList.filter(element => element.tags.includes("React")).length
