import * as React from "react";
import {
    getUserStorageDarkMode,
    setUserStorageDarkMode,
} from "./utils/useUserStorage";

interface Connection {
    title: string;
    name: string;
}
interface User {
    userId: string | null;
    name: string | null;
    email: string;
    emailStatus: boolean;
    isLoggedIn: boolean;
    darkMode: boolean | undefined;
    connections: Connection[];
}

interface UserContextProps {
    userId: string | null;
    name: string | null;
    isLoggedIn: boolean;
    email: string;
    emailStatus: boolean;
    darkMode: boolean | undefined;
    connections: Connection[];
    setDarkMode: (toggle: boolean) => void;
    setEmailStatus: (toggle: boolean) => void;
    setUserInfo: (user: User) => void;
}

//defaulted to loggedin for testing purposes, change with authentication implementation
//userId will be an invalid entry -> will delete entry after development, so no security worries for this fake user
const defaultValue = {
    userId: "61eb3dd52f761e5ced7222bd",
    email: "test@test.com",
    emailStatus: true,
    isLoggedIn: true,
    darkMode: false,
    name: "test_steam",
    connections: [{ title: "insta", name: "test_insta_hndle" }],
    setDarkMode: () => null,
    setEmailStatus: () => null,
    setUserInfo: () => null,
};

interface UserContextProviderProps {
    userId?: string | null;
    name?: string | null;
    email?: string;
    emailStatus?: boolean;
    isLoggedIn?: boolean;
    darkMode?: boolean;
    connections: Connection[];
}

export const UserContext = React.createContext<UserContextProps>(defaultValue);

export const UserContextProvider: React.FC<React.FC> = (props) => {
    const currentMode = getUserStorageDarkMode(defaultValue.name);

    const setUserInfo = (user: UserContextProviderProps) => {
        setState((prevState) => ({ ...prevState, user }));
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
