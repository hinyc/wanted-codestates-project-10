const SET_SEARCH_LIST = 'searchList/SET_SEARCH_LIST';
const SET_SEARCH_VALUE = 'searchLis/SET_SEARCH_VALUE';
const RESET_SEARCH_VALUE = 'searchList/RESET_SEARCH_VALUE';
const SHOW_TRUE = 'searchList/SHOW_TRUE';
const SHOW_FALSE = 'searchList/SHOW_FALSE';
const LOADING_TRUE = 'searchList/LOADING_TRUE';
const LOADING_FALSE = 'searchList/LOADING_FALSE';

export const setSearchList = (data) => ({ type: SET_SEARCH_LIST, data });
export const setSearchValue = (value) => ({ type: SET_SEARCH_VALUE, value });
export const resetSearchValue = (value) => ({ type: SET_SEARCH_VALUE, value });
export const showTrue = () => ({ type: SHOW_TRUE });
export const showFalse = () => ({ type: SHOW_FALSE });
export const loadingTrue = () => ({ type: LOADING_TRUE });
export const loadingFalse = () => ({ type: LOADING_FALSE });

const initialState = {
  data: [],
  searchValue: undefined,
  showAutoComplete: false,
  isLoading: false,
};

export default function searchList(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_LIST:
      return { ...state, data: action.data };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.value,
      };
    case RESET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: undefined,
      };
    case SHOW_TRUE:
      return {
        ...state,
        showAutoComplete: true,
      };
    case SHOW_FALSE:
      return {
        ...state,
        showAutoComplete: false,
      };
    case LOADING_TRUE:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_FALSE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
