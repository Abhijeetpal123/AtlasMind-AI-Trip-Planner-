import { createContext } from "react";

export const UserDetailContext = createContext<any>({
    userDetail:null,
    setUserDetail:()=>{}
});