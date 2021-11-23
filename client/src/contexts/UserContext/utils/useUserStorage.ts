export const getUserStorageDarkMode = (username: string | null) => {
    if (!username) return false;
    let local = localStorage.getItem("darkMode");
    if (!local) {
        localStorage.setItem("darkMode", "false");
    }
    return local === "true" ? true : false;
};

export const setUserStorageDarkMode = (
    username: string | null,
    toggle: boolean
) => {
    if (!username) return;
    localStorage.setItem("darkMode", toggle.toString());
};
