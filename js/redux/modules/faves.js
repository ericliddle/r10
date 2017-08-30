import {
  queryFaves,
  createFave,
  deleteFave
} from '../../config/models';

//Actions
const FAVE_DATA = "FAVE_DATA";
const FAVE_CREATE = "FAVE_CREATE";
const FAVE_DELETE = "FAVE_DELETE";

const initialState = {
  faveData: [],
}

export function getFaveData() {
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

export function faveReducer(state = initialState, action) {
  switch (action.type) {
    case FAVE_DATA:
      return {
        faveData: action.payload,
      }
    case FAVE_CREATE:
      return {
        faveData: queryFaves()
      }
    case FAVE_DELETE:
      return {
        faveData: queryFaves()
      }
    default:
      return state;
  }
}