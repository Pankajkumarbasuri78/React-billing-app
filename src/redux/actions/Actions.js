import { ADD_BILL, DELETE_BILL, SEARCH_BILL } from '../action-types/Bills'

export const addBill = (data) => {
    return {
      type: ADD_BILL,
      data,
    };
  };
  
  export const deleteBill = (data) => {
    //console.log(data, "Action");
    return {
      type: DELETE_BILL,
      data,
    };
  };

  export const searchBill = (query) => {
    //console.log(query);
    return {
      type: SEARCH_BILL,
      query,
    };
  };