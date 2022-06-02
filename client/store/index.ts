//podkluczit next-redux-wrapper - pozwolaet poluczit globalnyj state i dla servera i dla klients
import {createStore, AnyAction, Store} from 'redux';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import {reducer, State} from "./reducers";


//iz next-redux-wrapper
// create a makeStore function
const makeStore = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, {debug: true});