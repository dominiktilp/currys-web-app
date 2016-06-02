import Immutable from 'immutable';
import * as types from '../constants/ActionTypes';


const initialState = Immutable.fromJS({
  universeId: null,
  categoryId: null
});

export default (state = initialState, action) => {
  switch (action.type) {

    case types.SET_UNIVERSE_ID:
      return state.merge({
        universeId: action.universeId
      });

    case types.LOADING_UNIVERSE_INFO:
      return state.merge({
        loading: true
      });

    case types.LOADED_UNIVERSE_INFO:
      return state.merge({
        loading: false,
        universe: action.universe
      });

    default:
      return state;
  }
};
