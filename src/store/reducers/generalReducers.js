const initState = {
  showRightbar: false,
  showSidebar: false,
};

const generalReducers = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SHOW_RIGHT_BAR":
      return { ...state, showRightbar: payload };
    case "SHOW_SIDE_BAR":
      return { ...state, showSidebar: payload };
    default:
      return state;
  }
};

export default generalReducers;
