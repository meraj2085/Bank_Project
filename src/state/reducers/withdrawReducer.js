export const withdrawReducer = (state = 0, action) => {
  switch (action.type) {
    case "WITHDRAW":
      return state + action.payload;
    default:
      return state;
  }
};
