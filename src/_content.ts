export interface AboutInfoProps {
    name: string;
    value: string;
}

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
                icon: "la-apple",
                header: "Applications",
                description: "Lots of world-class applications.",
            },
        ],
    },
    resume: {
        title: "My Resume",
        education: [
            {
                title: "Level 4 Diplma Soft. Langs",
                date: {
                    start: "2018",
                    finish: "2019",
                },
                description: "lorem ipsum",
            },
        ],
        experience: [
            {
                title: "Level 4 Diplma Soft. Langs",
                date: {
                    start: "2018",
                    finish: "2019",
                },
                description: "lorem ipsum",
            },
        ],
    },
    copyrightText: `Copyright &copy; ${new Date().getFullYear()} - All rights reserved`,
};
