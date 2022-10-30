import { ADD_BILL, DELETE_BILL } from "../action-types/Bills";

const initialState = {
    billList: [],
}

export const billReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BILL: {
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
            
            return {
              ...state,
              billList: updatedList,
            };
          }
        default:
            return state;
    }
}
