// import axios from "axios";
// import { createContext, useState, useEffect } from "react";

// export const UserContext = createContext({});

// export function UserContextProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!user) {
//       axios
//         .get("/profile")
//         .then(({ data }) => {
//           setUser(data);
//           setLoading(false);
//         })
//         .catch(() => {
//           setUser(null);
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   }, [user]);

//   return (
//     <UserContext.Provider value={{ user, setUser, loading }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// import axios from "axios";
// import { createContext, useState, useEffect } from "react";

// export const UserContext = createContext({});

// export function UserContextProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!user) {
//       axios
//         .get("/profile")
//         .then(({ data }) => {
//           setUser(data);
//           setLoading(false);
//         })
//         .catch(() => {
//           setUser(null);
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   }, [user]);

//   return (
//     <UserContext.Provider value={{ user, setUser, loading }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(""); // Step 1: Add a new state variable for user type
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      axios
        .get("/profile")
        .then(({ data }) => {
          setUser(data);
          setUserType(data.role); // Step 2: Assume the response has a 'type' field indicating user type
          console.log("User Type:", data.role); // Log statement to see the user type
          setLoading(false);
        })
        .catch(() => {
          setUser(null);
          setUserType(""); // Reset userType on error
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, userType, loading }}>
      {" "}
      {children}
    </UserContext.Provider>
  );
}
