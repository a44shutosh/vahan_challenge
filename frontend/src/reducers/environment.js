import appConstants from "../constants/appConstants";

const initialState = {
  height: 0,
  width: 0,
  loader: false
};

const environment = (state = initialState, action) => {
  switch (action.type) {
    case appConstants.WINDOW_RESIZE:
      return {
        ...state,
        height: action.height,
        width: action.width
      };

    case appConstants.ROUTER_CHANGE:
      return {
        ...state,
        route: action.path
      };

    default:
      return state;
  }
};

export default environment;
