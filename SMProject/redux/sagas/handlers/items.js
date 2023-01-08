import {call, put} from 'redux-saga/effects';
import { setItems } from '../../ducks/items';
import { requestItems } from '../requests/items';

export function* handleGetItems(action){
    try{
        const response = yield call(requestItems);
        const {data} = response;
        yield put(setItems(data));
    }catch(error){
        console.log(error);
    }
}