import * as React from "react";
import axios from "axios";
import {
    Alert,
    AlertColor,
    Box,
    Button,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { KusaButton } from "../../components/Kusa/KusaButton/KusaButton";
import { default as linkSVG } from "../../assets/profile/link.svg";
import { default as suitcase } from "../../assets/profile/suitcase.svg";
import { default as twitter } from "../../assets/socials/twitter.svg";
import { default as write } from "../../assets/profile/write.svg";
import { default as steam } from "../../assets/socials/steam.svg";
import { default as insta } from "../../assets/socials/insta.svg";
import { ProfileField } from "../../components/Profile/ProfileField/ProfileField";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { ProfileIcon } from "../../components/Profile/ProfileIcon/ProfileIcon";
import { CSSTransition } from "react-transition-group";
import { BACKEND_URL } from "../../constants/backendURL";
import { headers } from "../../constants/headers";
import { KusaLoadingSpinner } from "../../components/Kusa/KusaSpinner/KusaLoadingSpinner";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../contexts/UserContext/utils/useUserCookies";

//revisit - have some weird render issues with animations here
const bounceStyles = {
    appear: "animate__animated",
    appearActive: "animate_animated animate__bounceInUp",
    appearDone: "animate__animated animate__bounceInUp",
    enter: "animate__animated",
    enterActive: "animate__bounceOutBottom",
    enterDone: "animate__animated",
    exit: "animate__animated",
    exitActive: "animate__bounceOutBottom",
    exitDone: "animate_animated",
};

const StatusMap: { [key in AlertColor]: string } = {
    success: "success",
    warning: "warning",
    error: "error",
    info: "info",
};

export const Profile: React.FC = () => {
    const {
        name,
        goal,
        email,
        emailStatus,
        darkMode,
        connections,
        setUserInfo,
        setEmailStatus,
    } = React.useContext(UserContext);
    const [status, setStatus] = React.useState<AlertColor | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [operation, setOperation] = React.useState<string>("");
    const [edit, setEdit] = React.useState<boolean>(false);
    const [newGoal, setNewGoal] = React.useState<string | null>(null);
    const navigate = useNavigate();
    const iconHeight = 40;

    //implement with backend, sends requests to endpoints per action
    const getDeactivate = () => {
        setLoading(true);
        axios
            .get(
                `${BACKEND_URL}/Deactivate/`,
                { withCredentials: true, headers }
            )
            .then(() => {
                setOperation(
                    "Your account has been deactivated. Logging out momentarily."
                );
                setUserInfo({
                    userId: "",
                    name: "",
                    email: "",
                    emailStatus: false,
                    isLoggedIn: false,
                    darkMode,
                    connections: [],
                });
                removeToken();
                navigate("/");
                setStatus("success");
                setLoading(false);
            })
            .catch((err) => {
                setStatus("error");
                setOperation("An error occurred");
                setLoading(false);
            });
    };
    const getEmailToggle = () => {
        setLoading(true);
        axios
            .post(
                `${BACKEND_URL}/ToggleUserEmail/`,
                JSON.stringify({
                    emailStatus: !emailStatus,
                }),
                { headers, withCredentials: true }
            )
            .then(() => {
                if (emailStatus)
                    setOperation("Email notifications have been removed.");
                else setOperation("Email notifications have been enabled.");
                setEmailStatus(!emailStatus);
                setStatus("success");
                setLoading(false);
            })
            .catch((err) => {
                setStatus("error");
                setOperation("An error occurred");
                setLoading(false);
            });
    };
    const submitGoal = () => {
        setLoading(true);
        if (!newGoal || newGoal.length < 1) {
            setStatus("error");
            setOperation("Invalid goal provided");
            setLoading(false);
            return;
        }
        axios
            .post(
                `${BACKEND_URL}/UpdateGoal/`,
                JSON.stringify({
                    goal: newGoal,
                }),
                {
                    headers,
                    withCredentials: true,
                }
            )
            .then(() => {
                setOperation("Goal successfully changed.");
                setUserInfo({ goal });
                setStatus("success");
                setLoading(false);
            })
            .catch((err) => {
                setStatus("error");
                setOperation("An error occurred");
                setLoading(false);
            });
    };

    return (
        <Container>
            <KusaLoadingSpinner loading={loading} />
            <KusaHeader>
                <img
                    src={suitcase}
                    alt="suit"
                    width={iconHeight}
                    height={iconHeight}
                    style={{ marginRight: "1rem", marginBottom: "-0.5rem" }}
                />
                your information
            </KusaHeader>
            <KusaBox width="90%" styles={{ padding: "2rem" }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography
                            variant="h5"
                            marginTop={1.5}
                            color="neutral.main"
                        >
                            username
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <ProfileField>{name}</ProfileField>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            variant="h5"
                            marginTop={1.5}
                            color="neutral.main"
                        >
                            email
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <ProfileField>{email}</ProfileField>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            variant="h5"
                            marginTop={1.5}
                            color="neutral.main"
                        >
                            notifications
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <ProfileField>
                            {emailStatus ? "enabled" : "disabled"}
                        </ProfileField>
                    </Grid>
                </Grid>
            </KusaBox>
            <KusaBox
                width="90%"
                styles={{ marginTop: "1rem", padding: "2rem" }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography
                            variant="h5"
                            marginTop={1.5}
                            color="neutral.main"
                        >
                            goal
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <ProfileField
                            styles={{ width: "80%" }}
                            onChange={
                                edit
                                    ? (e: { target: HTMLInputElement }) =>
                                          setNewGoal(e.target.value)
                                    : null
                            }
                            value={goal}
                        >
                            {goal} hours
                        </ProfileField>
                    </Grid>
                    <Grid item xs={1}>
                        <Button
                            onClick={() => {
                                if (edit && newGoal) submitGoal();
                                setNewGoal(null);
                                setEdit(!edit);
                            }}
                        >
                            <img
                                src={write}
                                alt="edit"
                                width={iconHeight}
                                height={iconHeight}
                                style={{
                                    marginRight: "1rem",
                                    marginBottom: "-0.5rem",
                                }}
                            />
                        </Button>
                    </Grid>
                </Grid>
            </KusaBox>
            <KusaHeader>
                <img
                    src={linkSVG}
                    alt="link"
                    width={iconHeight}
                    height={iconHeight}
                    style={{ marginRight: "1rem", marginBottom: "-0.5rem" }}
                />
                account links
            </KusaHeader>
            <KusaBox
                width="90%"
                styles={{ marginBottom: "4rem", padding: "2rem" }}
            >
                <Grid container spacing={2}>
                    {steam && (
                        <>
                            <Grid item xs={4}>
                                <ProfileIcon svg={steam} />
                            </Grid>
                            <Grid item xs={8}>
                                <ProfileField>{name}</ProfileField>
                            </Grid>
                        </>
                    )}
                    {connections.map((connection) => {
                        if (connection.title === "twitter") {
                            return (
                                <>
                                    <Grid item xs={4}>
                                        <ProfileIcon svg={twitter} />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <ProfileField>
                                            {connection.name}
                                        </ProfileField>
                                    </Grid>
                                </>
                            );
                        } else if (connection.title === "insta") {
                            return (
                                <>
                                    <Grid item xs={4}>
                                        <ProfileIcon svg={insta} />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <ProfileField>
                                            {connection.name}
                                        </ProfileField>
                                    </Grid>
                                </>
                            );
                        } else {
                            return <></>;
                        }
                    })}
                </Grid>
            </KusaBox>
            <KusaHeader>
                <img
                    src={suitcase}
                    alt="suit"
                    width={iconHeight}
                    height={iconHeight}
                    style={{ marginRight: "1rem", marginBottom: "-0.5rem" }}
                />
                account options
            </KusaHeader>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                textAlign="center"
            >
                <Grid item marginTop={2}>
                    <KusaButton
                        label="toggle emails"
                        color="warning"
                        onClick={getEmailToggle}
                    />
                </Grid>
                <Grid item marginTop={2}>
                    <KusaButton
                        label="deactivate"
                        color="error"
                        onClick={getDeactivate}
                    />
                </Grid>
            </Grid>
            <Box
                className="popin"
                sx={{
                    position: "absolute",
                    top: "5%",
                    boxShadow: 4,
                }}
            >
                {!loading && status && (
                    <CSSTransition
                        appear
                        in={StatusMap[status] !== null}
                        key={StatusMap[status]}
                        classNames={bounceStyles}
                        timeout={10}
                    >
                        <Alert
                            severity={status}
                            color="success"
                            action={
                                <Button
                                    color="inherit"
                                    size="small"
                                    onClick={() => setStatus(null)}
                                >
                                    X
                                </Button>
                            }
                        >
                            {operation}
                        </Alert>
                    </CSSTransition>
                )}
            </Box>
        </Container>
    );
};
