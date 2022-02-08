import * as React from "react";
import { getSteamID } from "./utils/useUserCookies.js";
import {
    getUserStorageDarkMode,
    getUserToken,
    setUserStorageDarkMode,
} from "./utils/useUserStorage";

interface Connection {
    title: string;
    name: string;
}
interface User {
    userId?: string;
    name?: string;
    email?: string;
    emailStatus?: boolean;
    isLoggedIn?: boolean;
    darkMode?: boolean | undefined;
    connections?: Connection[];
}

interface UserContextProps {
    userId: string;
    name: string;
    isLoggedIn: boolean;
    email: string;
    emailStatus: boolean;
    darkMode: boolean | undefined;
    connections: Connection[];
    setDarkMode: (toggle: boolean) => void;
    setEmailStatus: (toggle: boolean) => void;
    setUserInfo: (user: User) => void;
}

//the userId is a steamid
const steamid = getSteamID()
const defaultValue = {
    userId: steamid,
    email: "test@test.com",
    emailStatus: true,
    isLoggedIn: getUserToken(steamid) ? true : false,
    darkMode: false,
    name: "test_steam",
    connections: [{ title: "insta", name: "test_insta_hndle" }],
    setDarkMode: () => null,
    setEmailStatus: () => null,
    setUserInfo: () => null,
};

interface UserContextProviderProps {
    userId?: string;
    name?: string;
    email?: string;
    emailStatus?: boolean;
    isLoggedIn?: boolean;
    darkMode?: boolean;
    connections?: Connection[];
}

export const UserContext = React.createContext<UserContextProps>(defaultValue);

export const UserContextProvider: React.FC<React.FC> = (props) => {
    const currentMode = getUserStorageDarkMode(defaultValue.name);
    const setUserInfo = (user: UserContextProviderProps) => {
        setState((prevState) => ({ ...prevState, ...user }));
    };
    const setDarkModeStore = (toggle: boolean) => {
        setUserStorageDarkMode(state.name, toggle);
        setState((prevState) => ({ ...prevState, darkMode: toggle }));
    };
    const setEmailStatus = (toggle: boolean) => {
        setState((prevState) => ({ ...prevState, emailStatus: toggle }));
    };

    const [state, setState] = React.useState({
        ...defaultValue,
        darkMode: currentMode,
        setDarkMode: setDarkModeStore,
        setUserInfo,
        setEmailStatus,
    });

    return (
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    );
};
