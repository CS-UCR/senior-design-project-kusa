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
    username: string | null;
    email: string;
    isLoggedIn: boolean;
    darkMode: boolean | undefined;
    steamname: string | null;
    connections: Connection[];
}

interface UserContextProps {
    username: string | null;
    isLoggedIn: boolean;
    email: string;
    darkMode: boolean | undefined;
    steamname: string | null;
    connections: Connection[];
    setDarkMode: (toggle: boolean) => void;
    setUserInfo: (user: User) => void;
}

//defaulted to loggedin for testing purposes, change with authentication implementation
const defaultValue = {
    username: "test",
    email: "test@test.com",
    isLoggedIn: true,
    darkMode: false,
    steamname: "test_steam",
    connections: [{ title: "insta", name: "test_insta_hndle" }],
    setDarkMode: () => null,
    setUserInfo: () => null,
};

interface UserContextProviderProps {
    username?: string | null;
    email?: string;
    isLoggedIn?: boolean;
    darkMode?: boolean;
    steamname?: string | null;
    connections: Connection[];
}

export const UserContext = React.createContext<UserContextProps>(defaultValue);

export const UserContextProvider: React.FC<React.FC> = (props) => {
    const currentMode = getUserStorageDarkMode(defaultValue.username);

    const setUserInfo = (user: UserContextProviderProps) => {
        setState((prevState) => ({ ...prevState, user }));
    };
    const setDarkModeStore = (toggle: boolean) => {
        setUserStorageDarkMode(state.username, toggle);
        setState((prevState) => ({ ...prevState, darkMode: toggle }));
    };

    const [state, setState] = React.useState({
        ...defaultValue,
        darkMode: currentMode,
        setDarkMode: setDarkModeStore,
        setUserInfo: setUserInfo,
    });

    return (
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    );
};
