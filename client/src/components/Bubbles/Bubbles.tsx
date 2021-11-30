import React from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { default as steam } from "../../assets/socials/steam.svg";
import { default as darksteam } from "../../assets/socials/darksteam.svg";
import { default as star } from "../../assets/socials/star.svg";
import { default as darkstar } from "../../assets/socials/darkstar.svg";
import Particles from "react-tsparticles";
import "./Bubbles.css";

export const Bubbles: React.FC<number | null> = (bubbleNum) => {
    const { darkMode } = React.useContext(UserContext);
    const n = bubbleNum ? bubbleNum : 5;
    return (
            <Particles
                id="tsparticles"
                options={{
                    background: {
                        size: "20%",
                    },
                    fpsLimit: 60,
                    emitters: {
                        direction: "top",
                        size: {
                            width: 100,
                            height: 10,
                        },
                        position: {
                            x: 50,
                            y: 100,
                        },
                        rate: {
                            delay: 0.5,
                            quantity: 1,
                        },
                    },
                    particles: {
                        number: {
                            value: n,
                            limit: n,
                        },
                        color: {
                            value: "#ffffff",
                        },
                        shape: {
                            type: "image",
                            image: [
                                {
                                    src: darkMode ? darksteam : steam,
                                    width: 100,
                                    height: 100,
                                },
                                {
                                    height: 100,
                                    src: darkMode ? darkstar : star,
                                    width: 100,
                                },
                            ],
                        },
                        opacity: {
                            value: 0.5,
                        },
                        size: {
                            value: 30,
                        },
                        move: {
                            enable: true,
                            speed: 3,
                            direction: "top",
                            random: false,
                            straight: false,
                            out_mode: "destroy",
                        },
                    },
                }}
            />
    );
};
