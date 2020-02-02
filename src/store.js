import { createStore } from 'redux';
import rootReducer from './reducer/rootReducer';

function configureStore(state = { progress: 1, nama: '',noTel: '', pickupDate:'', dropoffDate:'', Car:''}) {
    return createStore(rootReducer,state);
}

export default configureStore;