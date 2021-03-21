import content from "../_content";

const setTitle = (title: string): void => {
    document.title = title + " | " + content.meta.baseTitle;
};

export { setTitle };
