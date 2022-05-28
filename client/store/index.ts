//podkluczit next-redux-wrapper - pozwolaet poluczit globalnyj state i dla servera i dla klients


import {Context, createWrapper} from "next-redux-wrapper";
import {createStore, Store} from "redux";
import {reducer, RootState} from "./reducers";


//iz next-redux-wrapper
const makeStore = (context: Context) => createStore(reducer);
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});