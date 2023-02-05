import { useContext, createContext, useState } from "react";

/*
 localStorage.setItem("ACCESS_TOKEN", 40222222200);
const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export const ContextProvider = ({ children }) => {
    const { user, setUser } = useState({});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    function setToken(token) {
        //    console.log("token :::",token)
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    }

    return (
        <StateContext.Provider value={{ user, setUser,token, setToken }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);

*/







// import { createContext, useState, useContext } from "react";

// const StateContext = createContext({
//     users: null,
//     token: null,
//     setUser: () => {},
//     setToken: () => {},
// });

// //........................

// export const contextProvider = ({ children }) => {
//     //.....
//     const { user, setUser } = useState({});
//     const { token, _setToken } = useState(localStorage.getItem("ACCESS_TOKEN"));

//     function setToken(token) {
//         _setToken(token);

//         if (!token) {
//             localStorage.setItem("ACCSS_TOKEN", token);
//         } else {
//             localStorage.removeItem("ACCESS_TOKEN");
//         }
//     }
//     //.....

//     return (
//         <StateContext.Provider value={{ user, token, setUser, setToken }}>
//             {{ children }}
//         </StateContext.Provider>
//     );
// };

// //........................

// export const useStateContext = ()=> useContext(StateContext)

// //........................
