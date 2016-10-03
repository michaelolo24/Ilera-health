// ================== SHARED ACTION TYPES ====================

//Authentication --> Sign up & Sign In

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

//Appointments

export const SET_APPOINTMENT_REQUEST = 'SET_APPOINTMENT_REQUEST';
export const SET_APPOINTMENT_SUCCESS = 'SET_APPOINTMENT_SUCCESS';
export const SET_APPOINTMENT_FAILURE = 'SET_APPOINTMENT_FAILURE';

export const ALL_PHYSICIAN_APPOINTMENTS_REQUEST = 'ALL_PHYSICIAN_APPOINTMENTS_REQUEST';
export const ALL_PHYSICIAN_APPOINTMENTS_SUCCESS = 'ALL_PHYSICIAN_APPOINTMENTS_SUCCESS';
export const ALL_PHYSICIAN_APPOINTMENTS_FAILURE = 'ALL_PHYSICIAN_APPOINTMENTS_FAILURE';

export const ALL_PATIENTS_APPOINTMENTS_REQUEST = 'ALL_PATIENTS_APPOINTMENTS_REQUEST';
export const ALL_PATIENTS_APPOINTMENTS_SUCCESS = 'ALL_PATIENTS_APPOINTMENTS_SUCCESS';
export const ALL_PATIENTS_APPOINTMENTS_FAILURE = 'ALL_PATIENTS_APPOINTMENTS_FAILURE';

export const FETCH_PHYSICIANS = 'FETCH_PHYSICIANS';


// Contact Info Post
export const CONTACT_POST_REQUEST = 'CONTACT_POST_REQUEST';
export const CONTACT_POST_SUCCESS = 'CONTACT_POST_SUCCESS';
export const CONTACT_POST_FAILURE = 'CONTACT_POST_FAILURE';

// Messages
export const MESSAGE_ADD_REQUEST = 'MESSAGE_ADD_REQUEST';
export const MESSAGE_ADD_SUCCESS = 'MESSAGE_ADD_SUCCESS';
export const MESSAGE_ADD_FAILURE = 'MESSAGE_ADD_FAILURE';

export const MESSAGE_FETCH_REQUEST = 'MESSAGE_FETCH_REQUEST';
export const MESSAGE_FETCH_SUCCESS = 'MESSAGE_FETCH_SUCCESS';
export const MESSAGE_FETCH_FAILURE = 'MESSAGE_FETCH_FAILURE';

export const PATIENT_FETCH_PHYSICIANS = 'PATIENT_FETCH_PHYSICIANS';
export const PATIENT_FETCH_PHYSICIANS_FAILURE = 'PATIENT_FETCH_PHYSICIANS_FAILURE';

export const PHYSICIAN_FETCH_PATIENTS = 'PHYSICIAN_FETCH_PATIENTS';
export const PHYSICIAN_FETCH_PATIENTS_FAILURE = 'PHYSICIAN_FETCH_PATIENTS_FAILURE';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const MESSAGE_TYPING = 'MESSAGE_TYPING';
export const MESSAGE_STOP_TYPING = 'MESSAGE_STOP_TYPING';


// Forms
export const FORM_SUBMIT_REQUEST = 'FORM_SUBMIT_REQUEST';
export const FORM_SUBMIT_SUCCESS = 'FORM_SUBMIT_SUCCESS';
export const FORM_SUBMIT_FAILURE = 'FORM_SUBMIT_FAILURE';



// =================== PATIENT ======================
// Health-Post - Patient
export const HEALTH_POST_REQUEST = 'HEALTH_POST_REQUEST';
export const HEALTH_POST_SUCCESS = 'HEALTH_POST_SUCCESS';
export const HEALTH_POST_FAILURE = 'HEALTH_POST_FAILURE';


// Emergency Contact - Patient
export const EMERGENCY_CONTACT_REQUEST = 'EMERGENCY_CONTACT_REQUEST';
export const EMERGENCY_CONTACT_SUCCESS = 'EMERGENCY_CONTACT_SUCCESS';
export const EMERGENCY_CONTACT_FAILURE = 'EMERGENCY_CONTACT_FAILURE';

// Insurance Post - Patient
export const INSURANCE_POST_REQUEST = 'INSURANCE_POST_REQUEST';
export const INSURANCE_POST_SUCCESS = 'INSURANCE_POST_SUCCESS';
export const INSURANCE_POST_FAILURE = 'INSURANCE_POST_FAILURE';

// =================== PHYSICIAN ======================


// ================== MEDICATION ======================

export const MEDS_FETCH_REQUEST = 'MEDS_FETCH_REQUEST';
export const MEDS_FETCH_SUCCESS = 'MEDS_FETCH_SUCCESS';
export const MEDS_FETCH_FAILURE = 'MEDS_FETCH_FAILURE';
