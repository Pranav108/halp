interface User {
  createdDate?: Date;
  updatedDate?: Date;
  username: String;
  _id: String;
  email: String;
}

interface Action {
  type: String;
  payload: Object;
}

export const userReducer = (
  state: User = { _id: "", email: "", username: "" },
  action: Action
) => {
  if (action.type === "USER_LOGIN") {
    return action.payload;
  } else if (action.type === "USER_LOGOUT") {
    return action.payload;
  }
  return state;
};
