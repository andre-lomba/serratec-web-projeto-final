import { useContext } from "react";
import { TokenContext } from "./context/TokenContext";

function App() {
  const { token, setContext } = useContext(TokenContext);
  return <></>;
}

export default App;
