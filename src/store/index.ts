import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, shallowEqual, TypedUseSelectorHook } from "react-redux";
import counterReducer from "./modules/counter";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const shallowEqualApp = shallowEqual

export default store;