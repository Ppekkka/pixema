import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { favFilmsActions } from "src/store/actions/favFilmsActions";
import { filmsActions } from "src/store/actions/filmsActions";
import { themeActions } from "src/store/actions/themeActions";
import { userActions } from "src/store/actions/userActions";
import { filterMenuActions } from "src/store/actions/filterMenuActions";
import { setFilmsAsync } from "src/store/thunks/filmsThunks/setFilmsAsync";
import { sectionsActions } from "src/store/actions/sectionsActions";
import { filtersACtions } from "src/store/actions/filtersActions";
import { setFilteredFilmsAsync } from "src/store/thunks/filmsThunks/setFilteredFilmsAsync";
import { setSearchedFilmsAsync } from "src/store/thunks/filmsThunks/setSearchedFilmsAsync";
import { fullFilmActions } from "src/store/actions/fullFilmActions";
import { setFullFilmAsync } from "src/store/thunks/filmsThunks/setFullFilmAsync";
import { signUpAsync } from "src/store/thunks/userThunks/signUpAsync";
import { signInAsync } from "src/store/thunks/userThunks/signInAsync";
import { activateAccountAsync } from "src/store/thunks/userThunks/activateAccountAsync";
import { logOutAsync } from "src/store/thunks/userThunks/logOut";
import { autoAuthAsync } from "src/store/thunks/userThunks/autoAuthAsync";

export const useAction = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ...favFilmsActions,
      ...filmsActions,
      ...themeActions,
      ...userActions,
      ...filterMenuActions,
      ...sectionsActions,
      ...filtersACtions,
      ...fullFilmActions,
      setFilmsAsync,
      setFilteredFilmsAsync,
      setSearchedFilmsAsync,
      setFullFilmAsync,
      signUpAsync,
      signInAsync,
      activateAccountAsync,
      logOutAsync,
      autoAuthAsync
    },
    dispatch
  );
};
