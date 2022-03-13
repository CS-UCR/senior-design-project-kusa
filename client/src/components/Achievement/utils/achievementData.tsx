import { IconRun, IconKarate, IconStairs, IconFriends, IconToggleRight, IconSoccerField, IconCrown, IconUsers, IconTrash, IconFlame} from "@tabler/icons";

interface ClientAchievement {
    title: string;
    image: any;
    description: string;
}

export interface AchievementDataType {
    [key: string]: ClientAchievement;
}

export const achievementData: AchievementDataType = {
    "1": {
        title: "a new step",
        image: <IconStairs/>,
        description: "welcome to Kusa! here’s a free achievement",
    },
    "2": {
        title: "goal in!",
        image: <IconSoccerField/>,
        description: "update your personal goal ",
    },
    "3": {
        title: "kick your habits",
        image: <IconKarate/>,
        description: "decreased your playtime from last week",
    },
    "4": {
        title: "can’t stop won’t stop",
        image: <IconFlame/>,
        description: "maintained your goal for one week",
    },
    "5": {
        title: "staying on track",
        image: <IconRun/>, 
        description: "maintained your goal for one month",
    },
    "6": {
        title: "power of friendship",
        image: <IconUsers/>,
        description: "made your first friend on Kusa!",
    },
    "7": {
        title: "squad goals",
        image: <IconFriends/>,
        description: "made five friends on Kusa! ",
    },
    "8": {
        title: "toggled",
        image: <IconToggleRight/>,
        description: "toggled email notifications",
    },
    "9": {
        title: "super achiever",
        image: <IconCrown/>,
        description: "get 10 achievements",
    },
    "10": {
        title: "pwned",
        image: <IconTrash/>,
        description: "blocked a user",
    },
};
