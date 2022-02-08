import Cookies from "js-cookie";

export const getSteamID = () => {
    const steamid = Cookies.get("steamid");
    Cookies.remove("steamid");
    return steamid;
};
