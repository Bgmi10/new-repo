import {
    ALL_TEXT_REQUEST,
    ALL_TEXT_SUCCESS,
    ALL_TEXT_FAIL,
    NEW_MEETING_REQUEST,
    NEW_MEETING_SUCCESS,
    NEW_MEETING_FAIL,
    NEW_TEXT_REQUEST,
    NEW_TEXT_SUCCESS,
    NEW_TEXT_RESET,
    NEW_TEXT_FAIL,
    CLEAR_ERRORS
} from "../constants/homeConstant";

export const textReducer = (state = { texts: [] }, action) => {
    switch (action.type) {
      case ALL_TEXT_REQUEST:
        return {
          loading: true,
          texts: [],
        };
      case ALL_TEXT_SUCCESS:
        return {
          loading: false,
          texts: action.payload,
        };
  
      case ALL_TEXT_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };


  export const newMeetingReducer = (state = { meet: {} }, action) => {
    switch (action.type) {
      case NEW_MEETING_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_MEETING_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          product: action.payload.meet,
        };
      case NEW_MEETING_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };