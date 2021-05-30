import { Store, createStore, combineReducers, applyMiddleware, compose } from "redux";
import bodyGameReducer from "./bodyGame-reducer";
import navbarReducer from "./navbar-reducer";



let rootReducer = combineReducers({
    bodyGame: bodyGameReducer,
    navbar: navbarReducer
});


export type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>

export type StoreType = Store<AppStateType>


//@ts-ignore

export let store: StoreType = createStore(rootReducer);