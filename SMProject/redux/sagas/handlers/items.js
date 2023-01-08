import {call, put} from 'redux-saga/effects';
import { setItems } from '../../ducks/items';
import { requestItems } from '../requests/items';

export function* handleGetItems(action){
    try{
        const response = yield call(requestItems);
        const {data} = response;
        // console.log("in handleGetItems:", data)
        yield put(setItems(data.results));
    }catch(error){
        console.log(error);
    }
}