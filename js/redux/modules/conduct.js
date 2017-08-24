// write actions
const LOAD_CONDUCT_DATA = 'LOAD_CONDUCT_DATA';


// constants
const initialState = {
  data: [],
  loading: true,
}

// action creator
export function loadConductData(conduct) {
  return {
    type: LOAD_CONDUCT_DATA,
    payload: conduct
  }
}

// add to store
export function getConductData() {
  return function (dispatch) {
    fetch('https://r10app-95fea.firebaseio.com/code_of_conduct.json')
      .then(response => response.json())
      .then(data => {
        dispatch(loadConductData(data));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }
}

// reducer
export function conductReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CONDUCT_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}