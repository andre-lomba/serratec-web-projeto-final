import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Produto() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.email) navigate("/");
  }, []);
  return <></>;
}

export default Produto;
