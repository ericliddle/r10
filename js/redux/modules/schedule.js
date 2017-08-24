import { formatSessionData } from '../../lib/dataFormatHelper';

// write actions
const LOAD_SCHEDULE_DATA = 'LOAD_SCHEDULE_DATA';


// constants
const initialState = {
  data: [],
  loading: true,
}

// action creator
export function loadScheduleData(schedule) {
  return {
    type: LOAD_SCHEDULE_DATA,
    payload: schedule
  }
}

// add to store
export function getScheduleData() {
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
export function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SCHEDULE_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}