import { takeLatest, call, put } from 'redux-saga/effects';
import { getDataToppingFail, getDataToppingSuccess } from '../../reducers/slices/toppingSlice';

function* handleFetchToppings() {
    try {
        const response = yield call(()=> instance.get('api/topping/lay-tat-ca-topping'));
        if(response.data != null){
            yield put(getDataToppingSuccess(response.data));
        }else{
            yield put(getDataToppingFail(response.data));
        }
    
    } catch (error) {
        yield put(getDataToppingFail(error.message));
    }
}

export default function* toppingSaga() {
    yield takeLatest('', handleFetchToppings);
}
