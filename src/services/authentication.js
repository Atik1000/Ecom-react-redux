import { BASE_URL } from "../static";
import axios from "axios";

export const loginHandler = (values) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${BASE_URL}/signin`, values)
            .then((res) => {
                console.log(res);
                const { userInfo, message } = res.data;
                sessionStorage.setItem("user_info", {
                    user: userInfo.user,
                    token: userInfo.token,
                    expire_at: userInfo.expire_at,
                });
                sessionStorage.setItem("auth", true);
                resolve(`${message}!`);
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            });
    });
};

export const isAuthenticated = () => sessionStorage.getItem("auth");

export const logoutAuth = () => {
    sessionStorage.removeItem("auth");
    sessionStorage.removeItem("user_info");
};
