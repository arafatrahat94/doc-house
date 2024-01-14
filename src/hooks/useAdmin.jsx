import { useContext, useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Pages/Provider/AuthProvider";

const useAdmin = () => {
  const token = localStorage.getItem("DOC-ACCESS");
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/admin/${user?.userMail}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
      });
  }, [user, token]);

  return isAdmin;
};

export default useAdmin;
