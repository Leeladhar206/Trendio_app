// import { useState, useEffect, createContext, ReactNode } from "react";
// import { useNavigate } from "react-router-dom";
// // import Swal from "sweetalert2";

// interface User {
//   userName: string;
//   password: string;
//   isAuthenticated: boolean;
// }

// interface AuthContextType {
//   isAuth: boolean;
//   login: (userName: string, password: string) => void;
//   logout: () => void;
// }

// export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// interface AuthContextProviderProps {
//   children: ReactNode;
// }

// // const getAuthenticatedUser: User[] = JSON.parse(localStorage.getItem("authentication")) || [];
// const getAuthenticatedUser: User[] = JSON.parse(localStorage.getItem("authentication") || "[]");

// const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
//   const [isAuth, setIsAuth] = useState<boolean>(false);
//   const [authdata, setAuthdata] = useState<User[]>(getAuthenticatedUser);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const authenticatedUser = authdata.find((user) => user.isAuthenticated === true);
//     setIsAuth(Boolean(authenticatedUser));
//   }, [authdata]);

//   const login = (userName: string, password: string) => {
//     const match = authdata.find(
//       (user) => user.userName === userName && user.password === password
//     );

//     if (match) {
//       // Mark the matched user as authenticated
//       const updatedAuthData = authdata.map((user) => ({
//         ...user,
//         isAuthenticated: user.userName === userName,
//       }));

//       localStorage.setItem("authentication", JSON.stringify(updatedAuthData));
//       setIsAuth(true);
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Wrong User Name and Password",
//       });
//     }
//   };

//   const logout = () => {
//     // Mark all users as not authenticated
//     const updatedAuthData = authdata.map((user) => ({
//       ...user,
//       isAuthenticated: false,
//     }));

//     localStorage.setItem("authentication", JSON.stringify(updatedAuthData));
//     setIsAuth(false);
//     navigate("/"); // Redirect to the home page after logout (you can change the URL as needed)
//   };

//   return (
//     <AuthContext.Provider value={{ isAuth, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;
