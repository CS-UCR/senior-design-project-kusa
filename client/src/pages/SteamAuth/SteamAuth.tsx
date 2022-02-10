import * as React from "react";
import { Button, Container, Grid } from "@mui/material";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../constants/backendURL";
import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { getToken } from "../../contexts/UserContext/utils/useUserCookies.js";
import { headers } from "../../constants/headers";
import { UserContext } from "../../contexts/UserContext/UserContext";
import axios from "axios";

export const SteamAuth: React.FC = () => {
    const { setUserInfo } = React.useContext(UserContext);
    const token = getToken();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (token) {
            axios
                .post(`${BACKEND_URL}/getAUser/`, {
                    headers: {
                        ...headers,
                        Authorization: "Bearer " + getToken(),
                    },
                })
                //clean up later
                .then((response) => {
                    const data = response.data;
                    const userId = data.id;
                    const email = data.email;
                    const emailStatus = data.emailsEnabled;
                    const name = data.personaname;
                    setUserInfo({ userId, email, name, emailStatus });
                    if (email !== "") {
                        setUserInfo({ isLoggedIn: true });
                        navigate("/home")
                    }
                    else navigate("/signup");
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [navigate, setUserInfo, token]);

    return (
        <Container>
            <KusaHeader>connect your steam account:</KusaHeader>
            <KusaBox
                width="90%"
                styles={{
                    mx: "auto",
                    width: "90%",
                    padding: "2rem",
                    marginTop: "1rem",
                }}
            >
                <>
                    <Grid
                        sx={{
                            paddingX: 7,
                            paddingY: 2,
                            mx: "auto",
                            width: "90%",
                        }}
                        textAlign="center"
                    >
                        <a href={`${BACKEND_URL}/login`}>
                            <Button
                                variant="contained"
                                sx={{
                                    fontSize: "1.5rem",
                                    backgroundColor: "#171a21",
                                    color: "white",
                                    textTransform: "none",
                                }}
                            >
                                connect with steam
                            </Button>
                        </a>
                    </Grid>
                </>
            </KusaBox>
        </Container>
    );
};
