import Cookies from "js-cookie";

export const getSteamID = () => {
    const id = Cookies.get("steamid");
    Cookies.remove("steamid");
    return id;
};

export const getToken = () => {
    return Cookies.get("token");
};

export const removeToken = () =>{
    return Cookies.remove("token")
}