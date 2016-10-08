import { reduxForm } from 'redux-form';

export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE';

export const GET_USER_INSURANCE_REQUEST = 'GET_USER_INSURANCE_REQUEST';
export const GET_USER_INSURANCE_SUCCESS = 'GET_USER_INSURANCE_SUCCESS';
export const GET_USER_INSURANCE_FAILURE = 'GET_USER_INSURANCE_FAILURE';

export const GET_ALL_USER_REMINDERS_REQUEST = 'GET_ALL_USER_REMINDERS_REQUEST';
export const GET_ALL_USER_REMINDERS_SUCCESS = 'GET_ALL_USER_REMINDERS_SUCCESS';
export const GET_ALL_USER_REMINDERS_FAILURE = 'GET_ALL_USER_REMINDERS_FAILURE';

export const GET_USER_CONTACTS_REQUEST = 'GET_USER_CONTACTS_REQUEST';
export const GET_USER_CONTACTS_SUCCESS = 'GET_USER_CONTACTS_SUCCESS';
export const GET_USER_CONTACTS_FAILURE = 'GET_USER_CONTACTS_FAILURE';
export const DID_INIT = 'DID_INIT';

//=============================APPOINTMENTS=============================

export const SET_APPOINTMENT_REQUEST = 'SET_APPOINTMENT_REQUEST';
export const SET_APPOINTMENT_SUCCESS = 'SET_APPOINTMENT_SUCCESS';
export const SET_APPOINTMENT_FAILURE = 'SET_APPOINTMENT_FAILURE';

export const ALL_PHYSICIAN_APPOINTMENTS_REQUEST = 'ALL_PHYSICIAN_APPOINTMENTS_REQUEST';
export const ALL_PHYSICIAN_APPOINTMENTS_SUCCESS = 'ALL_PHYSICIAN_APPOINTMENTS_SUCCESS';
export const ALL_PHYSICIAN_APPOINTMENTS_FAILURE = 'ALL_PHYSICIAN_APPOINTMENTS_FAILURE';

export const ALL_PATIENTS_APPOINTMENTS_REQUEST = 'ALL_PATIENTS_APPOINTMENTS_REQUEST';
export const ALL_PATIENTS_APPOINTMENTS_SUCCESS = 'ALL_PATIENTS_APPOINTMENTS_SUCCESS';
export const ALL_PATIENTS_APPOINTMENTS_FAILURE = 'ALL_PATIENTS_APPOINTMENTS_FAILURE';

//==========================RELATIONSHIP MANAGEMENT========================

export const MAKE_MY_PHYSICIAN_REQUEST = 'MAKE_MY_PHYSICIAN_REQUEST';
export const MAKE_MY_PHYSICIAN_SUCCESS = 'MAKE_MY_PHYSICIAN_SUCCESS';
export const MAKE_MY_PHYSICIAN_FAILURE = 'MAKE_MY_PHYSICIAN_FAILURE';

export const REMOVE_RELATIONSHIP_REQUEST = 'REMOVE_RELATIONSHIP_REQUEST';
export const REMOVE_RELATIONSHIP_SUCCESS = 'REMOVE_RELATIONSHIP_SUCCESS';
export const REMOVE_RELATIONSHIP_FAILURE = 'REMOVE_RELATIONSHIP_FAILURE';

export const CHECK_MY_RELATIONSHIP_REQUEST = 'CHECK_MY_RELATIONSHIP_REQUEST';
export const CHECK_MY_RELATIONSHIP_SUCCESS = 'CHECK_MY_RELATIONSHIP_SUCCESS';
export const CHECK_MY_RELATIONSHIP_FAILURE = 'CHECK_MY_RELATIONSHIP_FAILURE';

export const PATIENT_FETCH_PHYSICIANS = 'PATIENT_FETCH_PHYSICIANS';
export const PATIENT_FETCH_PHYSICIANS_FAILURE = 'PATIENT_FETCH_PHYSICIANS_FAILURE';

export const PHYSICIAN_FETCH_PATIENTS = 'PHYSICIAN_FETCH_PATIENTS';
export const PHYSICIAN_FETCH_PATIENTS_FAILURE = 'PHYSICIAN_FETCH_PATIENTS_FAILURE';

//============================= CONTACT INFO POST===========================

export const CONTACT_POST_REQUEST = 'CONTACT_POST_REQUEST';
export const CONTACT_POST_SUCCESS = 'CONTACT_POST_SUCCESS';
export const CONTACT_POST_FAILURE = 'CONTACT_POST_FAILURE';

//================================== MESSAGES ==============================

export const MESSAGE_ADD_REQUEST = 'MESSAGE_ADD_REQUEST';
export const MESSAGE_ADD_SUCCESS = 'MESSAGE_ADD_SUCCESS';
export const MESSAGE_ADD_FAILURE = 'MESSAGE_ADD_FAILURE';

export const MESSAGE_FETCH_REQUEST = 'MESSAGE_FETCH_REQUEST';
export const MESSAGE_FETCH_SUCCESS = 'MESSAGE_FETCH_SUCCESS';
export const MESSAGE_FETCH_FAILURE = 'MESSAGE_FETCH_FAILURE';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const MESSAGE_TYPING = 'MESSAGE_TYPING';
export const MESSAGE_STOP_TYPING = 'MESSAGE_STOP_TYPING';


//================================== FORMS ==============================

export const FORM_SUBMIT_REQUEST = 'FORM_SUBMIT_REQUEST';
export const FORM_SUBMIT_SUCCESS = 'FORM_SUBMIT_SUCCESS';
export const FORM_SUBMIT_FAILURE = 'FORM_SUBMIT_FAILURE';

//================================== PROFILE ==============================

export const INITIALIZE = 'redux-form/INITIALIZE';
export const INITIALIZE_BASIC = 'INITIALIZE_BASIC';

//================================== MEDICATION ==============================

export const MEDS_FETCH_REQUEST = 'MEDS_FETCH_REQUEST';
export const MEDS_FETCH_SUCCESS = 'MEDS_FETCH_SUCCESS';
export const MEDS_FETCH_FAILURE = 'MEDS_FETCH_FAILURE';
// meds select
export const MED_CHOSEN = 'MED_CHOSEN';
