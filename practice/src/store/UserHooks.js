import { useContext } from "react";
import Context from "./Context";

export const UserHooks = () => {
  const [state, dispatch] = useContext(Context);

  return [state, dispatch];
};
