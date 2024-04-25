import { sectionsEnum } from "src/types/globalTypes";
import { sectionsActionsEnum } from "src/store/actions/sectionsActions";

const defaultState = {
  section: sectionsEnum.HOME,
};

interface ISectionsAction {
  type: sectionsActionsEnum;
  payload: sectionsEnum;
}

export const sectionsReducer = (state = defaultState, action: ISectionsAction) => {
  switch (action.type) {
    case sectionsActionsEnum.CHANGE_SECTION: {
      return { ...state, section: action.payload };
    }

    default:
      return state;
  }
};
