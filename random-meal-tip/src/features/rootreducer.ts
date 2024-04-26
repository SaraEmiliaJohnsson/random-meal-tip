import { combineReducers } from "@reduxjs/toolkit";
import { randomMealReducer } from "./randommeal";


const rootReducer = combineReducers({
    RandomMeal: randomMealReducer,
});

export { rootReducer }