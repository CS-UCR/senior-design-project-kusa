import { shallow } from "enzyme";
import React from "react";
import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { ProfileField } from "../../components/Profile/ProfileField/ProfileField";
import { Profile } from "./Profile";

const mockID = "blah";
const defaultGoal = 300;

jest.mock("react-router-dom", () => {
    const mockNavigate = jest.fn();
    return {
        __esModule: true,
        useNavigate: mockNavigate,
    };
});

React.useContext = jest.fn().mockImplementation(() => ({
    userId: mockID,
    connections: [],
    name: "blahName",
    email: "blahEmail",
    goal: defaultGoal,
}));

describe("Profile page", () => {
    it("renders three headers", () => {
        const wrapper = shallow(<Profile />);
        expect(wrapper.find(KusaHeader)).toHaveLength(3);
    });
    it("displays goal from the user context", () => {
        const wrapper = shallow(<Profile />);
        expect(wrapper.find(ProfileField).get(4).props.value).toEqual(
            defaultGoal
        );
    });
    it("displays steamid from the user context", () => {
        const wrapper = shallow(<Profile />);
        expect(wrapper.find("ProfileField").get(1).props).toEqual({
            children: mockID,
        });
    });
});
