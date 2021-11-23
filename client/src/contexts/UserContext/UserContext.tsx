import * as React from "react";
import {
    getUserStorageDarkMode,
    setUserStorageDarkMode,
} from "./utils/useUserStorage";

interface User {
    username: string | null;
    isLoggedIn: boolean;
    darkMode: boolean | undefined;
    steamname: string | null;
}

interface UserContextProps {
    username: string | null;
    isLoggedIn: boolean;
    darkMode: boolean | undefined;
    steamname: string | null;
    setDarkMode: (toggle: boolean) => void;
    setUserInfo: (user: User) => void;
}

//defaulted to loggedin for testing purposes, change with authentication implementation
const defaultValue = {
    username: 'test',
    isLoggedIn: true,
    darkMode: false,
    steamname: null,
    setDarkMode: () => null,
    setUserInfo: () => null,
};

interface UserContextProviderProps {
    username?: string | null;
    isLoggedIn?: boolean;
    darkMode?: boolean;
    steamname?: string | null;
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

    console.log("currentMode",state.darkMode);
    return <UserContext.Provider value={state}>{props.children}</UserContext.Provider>;
};

