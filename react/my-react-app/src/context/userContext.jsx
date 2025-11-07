import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

const token = localStorage.getItem("token");
const decodedToken = jwtDecode(token);

const userContext = createContext(decodedToken ? decodedToken : null);
// eslint-disable-next-line react-refresh/only-export-components
export default userContext;

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(decodedToken ? decodedToken : null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
