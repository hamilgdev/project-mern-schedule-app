import { UI_SET_OPEN_MODAL, UI_SET_CLOSE_MODAL } from '../types/uiType';

const initialState = {
  modalOpen: false
};

/**
 * Reducer
 */
export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_SET_OPEN_MODAL:
      return {
        ...state,
        modalOpen: true
      };
    case UI_SET_CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false
      };
    default:
      return state;
  }
};
