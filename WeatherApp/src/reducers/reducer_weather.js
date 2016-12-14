import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // concat returns a new array, it does not mutate the existing state
            // return state.concat([action.payload.data]);
            // in es6 syntax:
            return [ action.payload.data, ...state ];
            // the ... means take all the elements
    }
    return state;
}