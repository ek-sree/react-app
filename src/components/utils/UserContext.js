import { createContext } from "react";

export const UserContext = createContext({
    loggedInUser:"User"
});

export const AdminContext = createContext({
    loggedInAdmin:"Admin"
})
