import {takeLatest} from 'redux-saga/effects';
import {GET_ITEMS} from '../ducks/items';
import { handleGetItems } from './handlers/items';

export function* watcherSaga(){
    yield takeLatest(GET_ITEMS, handleGetItems);
}