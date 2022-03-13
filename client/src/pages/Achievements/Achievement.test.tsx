import { shallow } from "enzyme";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { AchievementRow } from "../../components/Achievement/AchievementRow/AchievementRow";
import { Typography } from "@mui/material";

describe("Achievement Row Component", () => {
    it("renders two kusa boxes", () => {
        const wrapper = shallow(<AchievementRow id="1" progress={0} date_achieved=""/>);
        expect(wrapper.find(KusaBox)).toHaveLength(2);
    });
    describe("when date_achieved is not an empty string (achievement unlocked)", () => {
        it("should have render an extra Typography", () => {
          const wrapper = shallow(<AchievementRow  id="1" progress={0} date_achieved="03/10/2022"/>);
          expect(wrapper.find(Typography)).toHaveLength(3);
        });
    });
    describe("when date_achieved is an empty string (achievement not unlocked)", () => {
        it("should only have two Typography components", () => {
          const wrapper = shallow(<AchievementRow  id="1" progress={0} date_achieved=""/>);
          expect(wrapper.find(Typography)).toHaveLength(2);
        });
    });  
});
