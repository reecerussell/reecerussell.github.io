export default {
    meta: {
        baseTitle:
            "Reece Russell | Software Developer | C#, .NET Core, Go, JavaScript",
    },
    socials: [
        {
            url: "https://www.instagram.com/_reecerussell/",
            title: "Instagram",
            icon: "la-instagram",
        },
        {
            url: "https://twitter.com/_reecerussell",
            title: "Twitter",
            icon: "la-twitter",
        },
        {
            url:
                "https://www.linkedin.com/in/reece-russell-software-developer/",
            title: "LinkedIn",
            icon: "la-linkedin-in",
        },
        {
            url: "https://github.com/reecerussell",
            title: "GitHub",
            icon: "la-github",
        },
    ],
    about: {
        title: "About Me",
        info: [
            {
                name: "Name",
                value: "Reece Russell",
            },
            {
                name: "Email",
                value: "me@reece-russell.co.uk",
            },
            {
                name: "Job",
                value: "Software Developer",
            },
        ],
        body: {
            header: "I am a developer",
            text: `<p>A highly motivated, self-taught software developer working
            with .NET Framework and .NET Core. I started with JavaScript
            when I was 12 and have since explored into .NET and Go. I
            have two, level 4 diplomas from BCS, in software development
            methodologies and software languages, which I believe I was
            the youngest in the country to complete.</p>`,
        },
        skills: [
            {
                title: "C# / .NET Core 1",
                progress: 90,
            },
            {
                title: "Go",
                progress: 65,
            },
            {
                title: "JavaScript / ReactJS",
                progress: 80,
            },
            {
                title: "SQL",
                progress: 70,
            },
        ],
        services: [
            {
                icon: "la-code",
                header: "Development",
                description:
                    "Built static websites with either HTML or ReactJS.",
            },
            {
                icon: "la-server",
                header: "RESTful Services",
                description:
                    "Experience with Go and .NET Core RESTful web APIs.",
            },
            {
                icon: "la-database",
                header: "SQL",
                description:
                    "Designed and maintained relational database systems, such as SQL Server and MySQL.",
            },
        ],
    },
    resume: {
        title: "My Resume",
        education: [
            {
                title: "Software Development Methodologies",
                date: {
                    start: "2018",
                    finish: "2019",
                },
                description:
                    "I completed a BCS level 4 diploma in software development methodologies, with a focus on agile principles, practises and teams.",
            },
            {
                title: "Software Languages",
                date: {
                    start: "2018",
                    finish: "2019",
                },
                description:
                    "Alongside the Software Development Methodologies, I gained another level 4 diploma in software languages, mainly looking at event-driven and object-oriented C#.NET",
            },
        ],
        experience: [
            {
                title: "Software Engineer, Sainsbury's Tech",
                date: {
                    start: "Oct 2020",
                    finish: "Present",
                },
                description:
                    "Supporting and maintaining a number of internal SaaS solutions, built with .NET Core and SQL Server/MongoDB, following event-driven and microservice patterns. As well as, managing and setting up infrastructure in Azure and Kubernetes using IaaC approaches.",
            },
            {
                title: "Software Developer, Prominent Media",
                date: {
                    start: "Sept 2018",
                    finish: "Oct 2020",
                },
                description:
                    "Fullstack software developer working on a range of custom CRM systems, built using C#.NET and MySQL, following domain-driven design and CQRS principles. As well as, building static, and database driven, brouchure websites using either static HTML, .NET MVC or ReactJS.",
            },
        ],
    },
    projects: {
        title: "My Projects",
        items: [
            {
                name: "gojwt",
                tags: ["Go"],
                repo: "https://github.com/reecerussell/gojwt",
                description:
                    "A lightweight, extensible, Go module used to build, sign and verify JSON-Web-Tokens.",
            },
            {
                name: "TxCommand",
                tags: ["C#"],
                repo: "https://github.com/reecerussell/tx-command",
                description:
                    "A small commanding library used to give support for CQRS commands to execute within a database transaction.",
            },
            {
                name: "migrations",
                tags: ["Go", "Docker"],
                repo: "https://github.com/reecerussell/migrations",
                description:
                    "A migrations tool, designed for database migraions, written in Go with the idea being migrations would be applied from a CI/CD pipeline.",
            },
            {
                name: "Open Social",
                tags: ["Go", "k8s", "React"],
                repo: "https://github.com/reecerussell/open-social",
                description:
                    "An open-source social media platform with Go-powered microservices, utilising Kubernetes and Google Cloud PLatform.",
            },
            {
                name: "Adaptive Password Hasher",
                tags: ["Go"],
                repo:
                    "https://github.com/reecerussell/adaptive-password-hasher",
                description:
                    "A simple, fully customisable password hashing package in Go. Using the PBKDF2 algorithm, this package takes all of the noisey overhead out of hashing passwords.",
            },
        ],
    },
    copyrightText: `Copyright &copy; ${new Date().getFullYear()} - All rights reserved`,
};
