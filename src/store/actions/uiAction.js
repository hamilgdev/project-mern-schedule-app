import { UI_SET_CLOSE_MODAL, UI_SET_OPEN_MODAL } from '../types/uiType';

/**
 * Actions creators
 */

export const setOpenModal = () => {
  return {
    type: UI_SET_OPEN_MODAL
  };
};

export const setCloseModal = () => {
  return {
    type: UI_SET_CLOSE_MODAL
  };
};
