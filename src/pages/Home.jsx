import { useContext } from "react";
import { TokenContext } from "./context/TokenContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/");
  }, []);
  return <></>;
}

export default Home;
