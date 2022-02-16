
import { default as run } from "../../../assets/achievements/run.svg";
import { default as karate } from "../../../assets/achievements/karate.svg";
import { default as seeding} from "../../../assets/achievements/seeding.svg";

interface ClientAchievement {
    title: string;
    image: string;
    description: string;
}

export interface AchievementDataType {
    [key: string]: ClientAchievement;
}

export const achievementData: AchievementDataType = {
    "1": {
        title: "can't stop won't stop",
        image: run,
        description: "maintain your goal for one week",
    },
    "2": {
        title: "touch grass",
        image: seeding,
        description: "add another user",
    },
    "3": {
        title: "kick your habits",
        image: karate,
        description: "reduce your weekly playtime by 30 mins",
    },
};
