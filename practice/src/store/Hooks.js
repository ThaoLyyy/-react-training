import { useContext } from "react";
import Context from "./Context";

export const Hooks = () => {
  const [state, dispatch] = useContext(Context);

  return [state, dispatch];
};
