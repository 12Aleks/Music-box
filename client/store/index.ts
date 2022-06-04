//podkluczit next-redux-wrapper - pozwolaet poluczit globalnyj state i dla servera i dla klients
import {createStore, AnyAction, Store, applyMiddleware} from 'redux';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import {reducer, State} from "./reducers";
import thunk from 'redux-thunk'
import {ThunkDispatch} from "redux-thunk/es/types";


//iz next-redux-wrapper
// create a makeStore function
const makeStore = (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<State, void, AnyAction>