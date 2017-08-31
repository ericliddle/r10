import { formatSessionData } from '../../lib/dataFormatHelper';

import {
  queryFaves,
  createFave,
  deleteFave
} from '../../config/models';

const FAVE_ID = "FAVE_ID";
const FAVE_DATA = "FAVE_DATA";
const FAVE_CREATE = "FAVE_CREATE";
const FAVE_DELETE = "FAVE_DELETE";

const initialState = {
  fave_id: [],
  fave_data: [],
}

export function getFaveId() {
  const favesList = queryFaves();
  return {
    type: FAVE_ID,
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

export function loadFaveData(fave_data) {
  
  return {
    type: FAVE_DATA,
    payload: fave_data
  }
}

export function getFaveData() {
  return function (dispatch) {
    fetch('https://r10app-95fea.firebaseio.com/sessions.json')
      .then(response => response.json())
      .then(data => {
        const fave_data = queryFaves();
        const filterFaveData = data.filter((faveItem) => {
          return fave_data.find(faveId => {
            return faveItem.session_id === faveId.id
          })
        });
        const faveDataTest = formatSessionData(filterFaveData);
        dispatch(loadFaveData(faveDataTest));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }
}

export function faveReducer(state = initialState, action) {
  switch (action.type) {
    case FAVE_ID:
      return {
        ...state,
        fave_id: queryFaves()
      }
    case FAVE_CREATE:
      return {
        ...state,
        fave_id: queryFaves()
      }
    case FAVE_DELETE:
      return {
        ...state,
        fave_id: queryFaves()
      }
    case FAVE_DATA:
      return {
        ...state,
        fave_data: action.payload
      }
    default:
      return state;
  }
}