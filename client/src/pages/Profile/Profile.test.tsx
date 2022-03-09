import { Button } from "@mui/material";
import { shallow } from "enzyme";
import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { ProfileField } from "../../components/Profile/ProfileField/ProfileField";
import { Profile } from "./Profile";

jest.mock("react-router-dom", () => {
    const mockNavigate = jest.fn();
    return {
        __esModule: true,
        useNavigate: mockNavigate,
    };
});

describe("Profile page", () => {
    it("renders three headers", () => {
        const wrapper = shallow(<Profile />);
        expect(wrapper.find(KusaHeader)).toHaveLength(3);
    });
    it("displays goal from the user context",()=>{
        const defaultGoal = 300;
        const wrapper = shallow(<Profile />);
        expect(wrapper.find(ProfileField).get(3).props.value).toEqual(defaultGoal);
    });
});
