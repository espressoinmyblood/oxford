import aboutImg from '../../images/about.svg';
import discoverImg from '../../images/collaboration.svg';
import projectsImg from '../../images/connectedworld.svg';
import teamImg from '../../images/therealteam.svg';

export const aboutObj = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: "About Us",
    heading: "Well, hello",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis diam in libero suscipit feugiat. Donec lobortis erat ac mi faucibus, in bibendum sapien iaculis. Donec rhoncus et nisl vel aliquam. Mauris porta sollicitudin nisl, ut scelerisque nibh convallis a. Aenean vel faucibus metus, ac consequat elit. Aliquam purus nisi, venenatis vel suscipit eu, feugiat at tortor.",
    buttonLabel: "Our Services",
    imgStart: false,
    img: aboutImg,
    alt: "Teach Connect Learn",
    dark: true,
    primary: true,
    darkText: false
};

export const discoverObj = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: "Discover Us",
    heading: "Our Mission",
    description: "Nullam eget felis eget nunc. Cras sed felis eget velit aliquet. Amet commodo nulla facilisi nullam vehicula ipsum a. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Non sodales neque sodales ut. Vitae tempus quam pellentesque nec nam aliquam. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit.",
    buttonLabel: "What We Do",
    imgStart: true,
    img: discoverImg,
    alt: "Discover Teach Connect Learn",
    dark: false,
    primary: false,
    darkText: true
};

export const projectsObj = {
    id: 'projects',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: "The Projects",
    heading: "What We Have Done",
    description: 'The state-of-the-art, ultra-modern buildings that follow local architectural tradition, are the center of attraction for the local community. This is a safe and accessible space for anyone to use. Following the multi-generational approach, it should welcome and cater to the needs of both children and their families.<br/>The key is to provide training for the adults and children simultaneously, so the latter can enjoy “worry-free” time to educate themselves, network and relax.',
    buttonLabel: "Get Started",
    imgStart: true,
    img: projectsImg,
    alt: "Projects Teach Connect Learn",
    dark: false,
    primary: false,
    darkText: true
};

export const teamObj = {
    id: 'team',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: "Meet the Team",
    heading: "Who We Are",
    description: "Ahmed Talaat, Director and certified Project Manager<br/>Dr. Yoseph Araya, Lecturer at Open University<br/>Moumin Talaat, North Africa Coordinator<br/>Ekaterina Titova, Educator and Researcher<br/>Mona Abdulla, Higher Education Liason",
    buttonLabel: "Make an Impact",
    imgStart: false,
    img: teamImg,
    alt: "Team Teach Connect Learn",
    dark: true,
    primary: true,
    darkText: false
};

