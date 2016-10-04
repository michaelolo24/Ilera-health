import {
  PATIENT_FETCH_PHYSICIANS, PATIENT_FETCH_PHYSICIANS_FAILURE,
  PHYSICIAN_FETCH_PATIENTS, PHYSICIAN_FETCH_PATIENTS_FAILURE,
  MAKE_MY_PHYSICIAN_REQUEST, MAKE_MY_PHYSICIAN_SUCCESS, MAKE_MY_PHYSICIAN_FAILURE,
  REMOVE_RELATIONSHIP_REQUEST, REMOVE_RELATIONSHIP_SUCCESS, REMOVE_RELATIONSHIP_FAILURE
} from '../../patients/actions/action-constants.js';


const initialState = {
  isFetching: false,
  loaded: false,
  contacts: [],
  fetchHistory: [],
  relationMade: false,
  relationRemoved: false
};

export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    
    case PATIENT_FETCH_PHYSICIANS:
        console.log("PATIENT_FETCH_PHYSICIANS");
        return { ...state, loaded: true, contacts: action.payload }
    case PATIENT_FETCH_PHYSICIANS_FAILURE:
        console.log("PATIENT_FETCH_PHYSICIANS_FAILURE");
        return { ...state, loaded: false }
    case PHYSICIAN_FETCH_PATIENTS:
        console.log("PHYSICIAN_FETCH_PATIENTS");
        return { ...state, loaded: true, contacts: action.payload }
    case PHYSICIAN_FETCH_PATIENTS_FAILURE:
        console.log("PHYSICIAN_FETCH_PATIENTS_FAILURE");
        return { ...state, loaded: false }

    case MAKE_MY_PHYSICIAN_REQUEST:
        console.log("MAKE_MY_PHYSICIAN_REQUEST");
        return { ...state, relationMade: action.relation }
    case MAKE_MY_PHYSICIAN_SUCCESS:
        console.log("MAKE_MY_PHYSICIAN_SUCCESS");
        return { ...state, relationMade: action.relation }
    case MAKE_MY_PHYSICIAN_FAILURE:
        console.log("MAKE_MY_PHYSICIAN_FAILURE");
        return { ...state, relationMade: action.relation }
    
    case REMOVE_RELATIONSHIP_REQUEST:
        console.log("REMOVE_RELATIONSHIP_REQUEST");
        return { ...state, relationRemoved: action.relation }
    case REMOVE_RELATIONSHIP_SUCCESS:
        console.log("REMOVE_RELATIONSHIP_SUCCESS");
        return { ...state, relationRemoved: action.relation }
    case REMOVE_RELATIONSHIP_FAILURE:
        console.log("REMOVE_RELATIONSHIP_FAILURE");
        return { ...state, relationRemoved: action.relation }

    default:
      return state;
  }
};