import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import camsReducer from './reducerCameras'

const rootReducer = combineReducers({
	form: FormReducer,
	router: routerReducer,
	cams: camsReducer
});

export default rootReducer;
