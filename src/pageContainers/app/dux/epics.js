import {combineEpics} from 'redux-observable';
import { Observable, ignoreElements } from 'rxjs';

import {showcaseNumbers} from './actions';
import types from './types';

const exampleEpic = action$ => {
    return action$.ofType(types.EXAMPLE_TYPE)
        .map(action => Observable.of(action.exampleResponse()))
}


export default combineEpics(
    exampleEpic
)