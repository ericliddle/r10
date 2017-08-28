import { formatDataObject } from '../../lib/dataFormatHelper';

// write actions
const LOAD_SESSION = 'LOAD_SESSION';


// constants
const initialState = {
  sessionData: {},
  loading: true,
}

// action creator
export function loadSession(sessionData) {
  return {
    type: LOAD_SESSION,
    payload: sessionData
  }
}

// add to store
export function getSessionData(sessionId) {
  return function (dispatch) {
    let endpoint = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${sessionId}"`
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const Data = formatDataObject(data)
        dispatch(loadSession(Data));
        })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }
}

// reducer
export function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SESSION:
      return {
        ...state,
        sessionData: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}