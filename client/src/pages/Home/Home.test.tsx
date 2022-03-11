import { Select } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { shallow } from "enzyme";
import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { Home } from "./Home";

describe("Home page", () => {
    it("renders two headers", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(KusaHeader)).toHaveLength(2);
    });
    describe("when drop down is selected", () => {
        //unable to query for length of data from nivo line props, so will check for state change on period only
        it("calculates new playtime selection", () => {
            const wrapper = shallow(<Home/>);
            wrapper.find(Select).simulate('change', {
                target: { value: 'year' }
            });
            expect(wrapper.find(Select).prop('value')).toEqual('year');
        });
    });
});
