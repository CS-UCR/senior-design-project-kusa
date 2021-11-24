import { Box } from "@mui/system";
import "./ProfileIcon.scss";

interface ProfileIconProps {
    svg: string;
}
export const ProfileIcon: React.FC<ProfileIconProps> = ({ svg }) => (
    <Box
        width={80}
        height={80}
        sx={{
            borderRadius: 10,
            backgroundColor: "neutral.dark",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 1,
        }}
    >
        <img src={svg} alt={svg} className="center" />
    </Box>
);
