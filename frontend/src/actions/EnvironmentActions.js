import httpRequest from "../utils/httpRequest";
import utility from "../utils/utility";
import underscore from "../utils/Underscore";
import pathRegexp, { compile } from "path-to-regexp";
import appConstants from "../constants/appConstants";
import apiConstants from "../constants/apiConstants";

export const windowResize = (height, width) => ({
  type: appConstants.WINDOW_RESIZE,
  height: height,
  width: width
});

const actions = {};

// end wordpress processes




export { actions }