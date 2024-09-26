    export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
    ];

    export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
    ];

    export const myProjects = [
    {
        title: '3D Web Car Demo Showcase',
        desc: 'This a demo using React, Three JS and React Three Fiber to have a 3D style car show demo site.',
        subdesc:
        'This is an interactive demo to produce an effect of moving car in 3D space. In addition PostProcessing is used to produce cool after effects for the animation.  The key technologies are React Fiber and PostProcessing for the ring effects',
        href: 'https://susgupta.github.io/3d_car_show/',
        texture: '/textures/project/3d_car_demo_project_export.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
        {
            id: 1,
            name: 'React.js',
            path: '/assets/react.svg',
        },
        {
            id: 2,
            name: 'TailwindCSS',
            path: 'assets/tailwindcss.png',
        }
        ],
    },
    {
        title: 'Responsive Travel Site (Design Exercise)',
        desc: 'This is a responsive design exercise to create a fake travel/beach themed site.',
        subdesc:
        'Using media queries to cover break point design. Same with site navigation for media queries.  Used ScrollReveal js library to animate on reveal',
        href: 'https://susgupta.github.io/responsive_travel_site/index.html',
        texture: '/textures/project/travel_theme_site.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
        {
            id: 1,
            name: 'React.js',
            path: '/assets/react.svg',
        },
        {
            id: 2,
            name: 'TailwindCSS',
            path: 'assets/tailwindcss.png',
        },
        ],
    },
    {
        title: 'Apple Dynamic Three JS and GSAP Clone',
        desc: 'This is a clone of Apple iPhone 15 Pro website using React.js and TailwindCSS.',
        subdesc:
        'It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models in various colors and shapes.  This is design/code exercise to explore GSAP animations and adding interactive 3D models',
        href: 'https://susgupta.github.io/clone_3d_apple/',
        texture: '/textures/project/clone_apple_site.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
        backgroundColor: '#60f5a1',
        background:
            'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
        {
            id: 1,
            name: 'React.js',
            path: '/assets/react.svg',
        },
        {
            id: 2,
            name: 'TailwindCSS',
            path: 'assets/tailwindcss.png',
        },
        {
            id: 4,
            name: 'Framer Motion',
            path: '/assets/framer.png',
        },
        ],
    },
    {
        title: 'Original Design Portfolio Site',
        desc: 'My first responsive design exercise to create a design portfolio themed site, with basic HTML and CSS.',
        subdesc:
        'The site is fully responsive using media queries and features dynamic fluid typography effects using CSS clamp.  The site supports a toggle to apply both light and dark mode, using simple JS to toggle classes.  Finally the site uses ScrollToReveal for some effects.',
        href: 'https://susgupta.github.io/sushil_designer_portfolio/index.html',
        texture: '/textures/project/original_portfolio_site.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
        {
            id: 1,
            name: 'React.js',
            path: '/assets/react.svg',
        },
        {
            id: 2,
            name: 'TailwindCSS',
            path: 'assets/tailwindcss.png',
        },
        ],
    },
    ];

    export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
    };

    export const workExperiences = [
    {
        id: 1,
        name: 'CIBC',
        pos: 'UX/UI Design Lead',
        duration: '2022 - Present',
        title: "Currently a UI/UX Design Lead creating design experiences as well as establishing and maintaining a design system.  Collaborating and working with fellow designers and clients, in addition to coaching other designers.  A problem-solver that help our partners bring their visions to life.",
        icon: '/assets/bankicon_white.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'CIBC',
        pos: 'Web/iOS Front End Developer',
        duration: '2018 - 2022',
        title: "Lead developer/designer for frontline banking application platform.  Worked and implemented on both front-end and back-end aspects, including internal as well system-to-system design.  Assisted and coached other developers within the team.  Used both web technologies (with Angular web) and native iOS as well.",
        icon: '/assets/bankicon_white.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'CIBC',
        pos: 'Java/.NET and Full Stack Developer',
        duration: '2007 - 2017',
        title: ".NET/Java  full stack developer/programmer for various banking applications.  Was both developer and technical designer",
        icon: '/assets/bankicon_white.svg',
        animation: 'salute',
    },
];