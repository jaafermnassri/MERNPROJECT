import {
    ADD_FOYER_SUCCESS,
    DELETE_FOYER_FAIL,
    DETAIL_FOYER_FAIL,
    DETAIL_FOYER_SUCCESS,
    GET_ALL_FOYERS_FAIL,
    GET_ALL_FOYERS_LOADING,
    GET_ALL_FOYERS_SUCCESS,
    SEARCH_FOYERS_FAIL,
    SEARCH_FOYERS_LOADING,
    SEARCH_FOYERS_SUCCESS,
    SEARCHE_FOYERS_FAIL,
    SEARCHE_FOYERS_LOADING,
    SEARCHE_FOYERS_SUCCESS,
  } from "../consts/foyerConsts";
  
  const initialstate = {
    loading: false,
    searched : [],
    foyers: [],
    oneFoyer: {},
    errors: null,
  };
  export const foyerReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
      case GET_ALL_FOYERS_LOADING:
        return { ...state, loading: true };
  
      case GET_ALL_FOYERS_SUCCESS:
        return {
          ...state,
          foyers: payload,
          loading: false,
        };
      case GET_ALL_FOYERS_FAIL:
        return { ...state, errors: payload, loading: false };
      case DELETE_FOYER_FAIL:
        return { ...state, errors: payload, loading: false };
  
      case DETAIL_FOYER_SUCCESS:
        return { ...state, oneFoyer: payload, loading: false };
  
      case DETAIL_FOYER_FAIL:
        return { ...state, errors: payload, loading: false };
      case SEARCH_FOYERS_LOADING:
        return { ...state, loading: true };
      case SEARCH_FOYERS_SUCCESS:
        return { ...state,  foyers: payload, loading: false };
      case SEARCH_FOYERS_FAIL:
        return { ...state, errors: payload, loading: false };
        case SEARCHE_FOYERS_LOADING:
          return { ...state, loading: true };
        case SEARCHE_FOYERS_SUCCESS:
          return { ...state,  foyers: payload, loading: false };
        case SEARCHE_FOYERS_FAIL:
          return { ...state, errors: payload, loading: false };
  
      default:
        return state;
    }
  };
  