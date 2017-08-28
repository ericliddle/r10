import { formatSessionData } from '../../lib/dataFormatHelper';

// write actions
const SCHEDULE_DATA = "SCHEDULE_DATA";


// constants
const initialState = {
  scheduleData: [],
  loading: true,
}

// action creator
export function loadSchedule(schedule) {
  return {
    type: SCHEDULE_DATA,
    payload: schedule
  }
}

// add to store
export function getScheduleData() {
  return function (dispatch) {
    fetch('https://r10app-95fea.firebaseio.com/sessions.json')
      .then(response => response.json())
      .then(poop2 => {
        const newData = formatSessionData(poop2)
        dispatch(loadSchedule(newData));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }
}

// reducer
export function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case SCHEDULE_DATA:
      return {
        ...state,
        scheduleData: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}