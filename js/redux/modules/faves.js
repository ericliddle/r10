import { formatSessionData } from '../../lib/dataFormatHelper';

import {
  queryFaves,
  createFave,
  deleteFave
} from '../../config/models';

const GET_FAVE_ID = "GET_FAVE_ID";
const GET_FAVE_DATA = "GET_FAVE_DATA";
const CREATE_FAVE = "CREATE_FAVE";
const DELETE_FAVE = "DELETE_FAVE";

const initialState = {
  fave_id: [],
  fave_data: [],
}

export function getFaveId() {
  const favesList = queryFaves();
  return {
    type: GET_FAVE_ID,
    payload: favesList
  }
}

export function createFaveItem(faveId) {
  const faveCreate = createFave(faveId);
  return {
    type: CREATE_FAVE,
    payload: faveCreate
  }
}

export function deleteFaveItem(faveId) {
  const faveDelete = deleteFave(faveId);
  return {
    type: DELETE_FAVE,
    payload: faveDelete
  }
}

export function loadFaveData(fave_data) {
  
  return {
    type: GET_FAVE_DATA,
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
    case GET_FAVE_ID:
      return {
        ...state,
        fave_id: queryFaves()
      }
    case CREATE_FAVE:
      return {
        ...state,
        fave_id: queryFaves()
      }
    case DELETE_FAVE:
      return {
        ...state,
        fave_id: queryFaves()
      }
    case GET_FAVE_DATA:
      return {
        ...state,
        fave_data: action.payload
      }
    default:
      return state;
  }
}