import * as React from "react";

interface Achievement {
    id: string;
    dateAchieved?: Date;
    progress: number;
}

interface AchieveContextProps {
    goal: number;
    achievements: Achievement[];
}

const defaultValue: AchieveContextProps = {
    goal: 20,
    achievements: [
        {
            id: "1",
            progress: 30,
        },
        {
            id: "2",
            dateAchieved: new Date(),
            progress: 90,
        },
        {
            id: "3",
            progress: 60,
        },
    ],
};

export const AchieveContext =
    React.createContext<AchieveContextProps>(defaultValue);

export const AchieveContextProvider: React.FC<React.FC> = (props) => {
    const [state, setState] = React.useState(defaultValue);

    return (
        <AchieveContext.Provider value={state}>
            {props.children}
        </AchieveContext.Provider>
    );
};
