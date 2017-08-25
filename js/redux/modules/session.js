import { formatSessionData } from '../../lib/dataFormatHelper';

// write actions
const LOAD_SESSION = 'LOAD_SESSION';


// constants
const initialState = {
  data: [],
  loading: true,
}

// action creator
export function loadSession(session) {
  return {
    type: LOAD_SESSION,
    payload: session
  }
}

// add to store
export function getSession(id) {
  console.log('id', id)
  return function (dispatch) {
    fetch('https://r10app-95fea.firebaseio.com/sessions.json')
      .then(response => response.json())
      .then(data => {
        const newData = formatSessionData(data)
        dispatch(loadScheduleData(newData));
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