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
            url: "#",
            title: "Instagram",
            icon: "la-instagram",
        },
        {
            url: "#",
            title: "Twitter",
            icon: "la-twitter",
        },
        {
            url: "#",
            title: "LinkedIn",
            icon: "la-linkedin-in",
        },
        {
            url: "#",
            title: "GitHub",
            icon: "la-github",
        },
    ],
    about: {
        title: "About Me",
        info: [
            {
                name: "Name",
                value: "Reece",
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
                progress: 80,
            },
            {
                title: "C# / .NET Core 2",
                progress: 80,
            },
            {
                title: "C# / .NET Core 3",
                progress: 80,
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
    copyrightText: `Copyright &copy; ${new Date().getFullYear()} - All rights reserved`,
};
