const SET_SEARCH_LIST = 'searchList/SET_SEARCH_LIST';
const SET_SEARCH_VALUE = 'searchLis/SET_SEARCH_VALUE';
const RESET_SEARCH_VALUE = 'searchLis/RESET_SEARCH_VALUE';

export const setSearchList = (data) => ({ type: SET_SEARCH_LIST, data });
export const setSearchValue = (value) => ({ type: SET_SEARCH_VALUE, value });
export const resetSearchValue = () => ({ type: SET_SEARCH_VALUE });

const initialState = {
  data: [],
  searchValue: '',
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
        searchValue: '',
      };
    default:
      return state;
  }
}
