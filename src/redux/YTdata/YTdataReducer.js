import { AddData } from "./YTdataType";

const initialState = [];

const YTReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddData:
      return {
        ...state,
        YTdata: action.payload,
      };

    default:
      return state;
  }
};

export default YTReducer;
