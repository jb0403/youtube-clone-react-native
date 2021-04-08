import { AddData } from "./YTdataType";

export const addData = () => {
  return {
    type: AddData,
    payload: data.items,
  };
};
