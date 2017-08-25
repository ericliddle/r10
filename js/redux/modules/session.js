import { formatSessionData } from '../../lib/dataFormatHelper';

// write actions
const LOAD_SESSION = 'LOAD_SESSION';


// constants
const initialState = {
  data: {},
  loading: true,
}

// action creator
export function loadSession(data) {
  return {
    type: LOAD_SESSION,
    payload: data
  }
}

// add to store
export function getSession(id) {
  return function (dispatch) {
    let endpoint = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${id}"`
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const newData = formatSessionData(data)
        dispatch(loadSession(newData));
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
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}