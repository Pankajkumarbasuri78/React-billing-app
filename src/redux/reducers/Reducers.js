import { ADD_BILL, DELETE_BILL, SEARCH_BILL } from "../action-types/Bills";


const initialList = () => {
  const list = localStorage.getItem("bill-list");
  let bills = [];
  if(list){
    bills = JSON.parse(list);
  }
  return bills;
}
const initialState = {
    billList: initialList(),
    query:"",
}

export const billReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BILL: {
          localStorage.setItem("bill-list", JSON.stringify([...state.billList, action.data]));
            return {
                ...state,
                billList: [...state.billList, action.data],
            };
        }
        case DELETE_BILL: {
            const { data } = action;
            const updatedList = state.billList.filter(
              (item) => item.createdAt !== data.createdAt
            );
            localStorage.setItem("bill-list", JSON.stringify(updatedList));
            return {
              ...state,
              billList: updatedList,
            };
          }
        case SEARCH_BILL: {
          const { query } = action;
          return {
            ...state,
            query,
          };
        }
        default:
            return state;
    }
}
