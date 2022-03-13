import * as React from "react";

export interface Achievement {
    id: string;
    date_achieved?: string;
    progress: number;
}
export interface AchievementsList{
    achievements: Achievement[];
}
interface AchievementsContextProps {
    achievements: Achievement[];
    setAchievements: (achievements: AchievementsList) => void;
}

const defaultValue: AchievementsContextProps  = {
    achievements: [] as Achievement[],
    setAchievements: (a : AchievementsList) => null,
};

interface AchieveContextProviderProps {
    achievements: Achievement[] | [];
}
export const AchieveContext =
    React.createContext<AchievementsContextProps>(defaultValue);

export const AchieveContextProvider: React.FC<React.FC> = (props) => {
    const setAchievements = (a : AchieveContextProviderProps) => {
        setState((prevState) => ({ ...prevState, ...a }));
    };
    const [state, setState] = React.useState({
        ...defaultValue,
        setAchievements,
    });
    return (
        <AchieveContext.Provider value={state}>
            {props.children}
        </AchieveContext.Provider>
    );
};