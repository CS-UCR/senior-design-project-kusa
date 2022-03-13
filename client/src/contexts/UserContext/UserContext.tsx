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
    userId?: string;
    name?: string;
    email?: string;
    emailStatus?: boolean;
    isLoggedIn?: boolean;
    goal?: number;
    darkMode?: boolean | undefined;
    avatar?: string;
    connections?: Connection[];
}

interface UserContextProps {
    userId: string;
    name: string;
    isLoggedIn: boolean;
    email: string | null;
    emailStatus: boolean;
    goal: number;
    darkMode: boolean | undefined;
    avatar?: string;
    connections: Connection[];
    setDarkMode: (toggle: boolean) => void;
    setEmailStatus: (toggle: boolean) => void;
    setUserInfo: (user: User) => void;
}

//the userId is a steamid
const defaultValue = {
    userId: "",
    email: "",
    emailStatus: true,
    isLoggedIn: false,
    darkMode: false,
    goal: 300,
    name: "test_steam",
    avatar: "",
    connections: [] as Connection[],
    setDarkMode: () => null,
    setEmailStatus: () => null,
    setUserInfo: () => null,
};

interface UserContextProviderProps {
    userId?: string;
    name?: string;
    email?: string;
    goal?: number;
    emailStatus?: boolean;
    isLoggedIn?: boolean;
    darkMode?: boolean;
    avatar?: string;
    connections?: Connection[] | [];
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
