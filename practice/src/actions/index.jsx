import { Add_User } from "../store/Constants";

export const addUser = (payload) => ({
  type: Add_User,
  payload,
});
