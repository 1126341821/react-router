import { createStore } from 'redux';
import rootReducer from './reducer';

export default function configureStore(initialState) {
    // 创建store
    const store = createStore(rootReducer, initialState);
    return store;
}

