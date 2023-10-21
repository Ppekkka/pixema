import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { favFilmsActions } from "src/store/actions/favFilmsActions";
import { filmsActions } from "src/store/actions/filmsActions";
import { themeActions } from "src/store/actions/themeActions";
import { userActions } from "src/store/actions/userActions";
import { filterMenuActions } from "src/store/actions/filterMenuActions";
import { setFilmsAsync } from "src/store/thunks/setFilmsAsync";

export const useAction = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ...favFilmsActions,
      ...filmsActions,
      ...themeActions,
      ...userActions,
      ...filterMenuActions,
      setFilmsAsync,
    },
    dispatch
  );
};
