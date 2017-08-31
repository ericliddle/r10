import {
  queryFaves,
  createFave,
  deleteFave
} from '../../config/models';

const FAVE_DATA = "FAVE_DATA";
const FAVE_CREATE = "FAVE_CREATE";
const FAVE_DELETE = "FAVE_DELETE";

const initialState = {
  fave_id: [],
}

export function getFaveId() {
  const favesList = queryFaves();
  return {
    type: FAVE_DATA,
    payload: favesList
  }
}

export function createFaveItem(faveId) {
  const faveCreate = createFave(faveId);
  return {
    type: FAVE_CREATE,
    payload: faveCreate
  }
}

export function deleteFaveItem(faveId) {
  const faveDelete = deleteFave(faveId);
  return {
    type: FAVE_DELETE,
    payload: faveDelete
  }
}

export function getFaveData() {
  return function (dispatch) {
    fetch('https://r10app-95fea.firebaseio.com/sessions.json')
      .then(response => response.json())
      .then(data => {
        const newData = formatSessionData(data)
        dispatch(loadSchedule(newData));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }
}

export function faveReducer(state = initialState, action) {
  switch (action.type) {
    case FAVE_DATA:
      return {
        fave_id: action.payload,
      }
    case FAVE_CREATE:
      return {
        fave_id: queryFaves()
      }
    case FAVE_DELETE:
      return {
        fave_id: queryFaves()
      }
    default:
      return state;
  }
}