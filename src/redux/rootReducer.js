import { combineReducers } from "redux";
import ThemeReducer from "./theme/ThemeReducer";
import YTReducer from "./YTdata/YTdataReducer";

const rootReducer = combineReducers({
  YTdata: YTReducer,
  Theme: ThemeReducer,
});

export default rootReducer;
