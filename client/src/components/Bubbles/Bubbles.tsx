import React from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { default as steam } from "../../assets/socials/steam.svg";
import { default as darksteam } from "../../assets/socials/darksteam.svg";
import { default as star } from "../../assets/socials/star.svg";
import { default as darkstar } from "../../assets/socials/darkstar.svg";
import Particles from "react-tsparticles";
import "./Bubbles.css";

export const Bubbles: React.FC<any> = () => {
    const { darkMode } = React.useContext(UserContext);
    const n = 15;
    return (
        <Particles
            className="tsparticles"
            height="3rem"
            options={{
                autoPlay: true,
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                fpsLimit: 60,
                particles: {
                    number: {
                        value: n,
                    },
                    shape: {
                        type: "images",
                        images: [
                            {
                                height: 100,
                                src: darkMode ? darkstar : star,
                                width: 100,
                                replaceColor: false,
                                replace_color: false,
                            },
                            {
                                height: 100,
                                src: darkMode ? darksteam : steam,
                                width: 100,
                                replaceColor: false,
                                replace_color: false,
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
                    },
                },
                retina_detect: true,
            }}
        />
    );
};

/*
{
    height: 100,
    src: darkMode ? darkstar : star,
    width: 100,
    replaceColor: false,
}
*/
