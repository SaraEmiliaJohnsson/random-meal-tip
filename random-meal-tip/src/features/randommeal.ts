import { createAction, createReducer } from "@reduxjs/toolkit";


export enum MealTipStatus {
    NORMAL,
    FETCHING,
    SUCCESS,
    FAILURE
}

interface MealTip {
    fact: string | null;
    status: MealTipStatus;
}

const initialState: MealTip = {
    fact: null,
    status: MealTipStatus.NORMAL
}

const isfetching = createAction('is fetching meal fact');
const success = createAction<string>('success meal fact');
const failure = createAction('failure meal fact');

const fetchActions = { isfetching, success, failure }

const randomMealReducer = createReducer(initialState, builder => {
    builder
        .addCase(isfetching, (state, action) => ({
            status: MealTipStatus.FETCHING,
            fact: state.fact
        }))
        .addCase(success, (state, action) => ({
            status: MealTipStatus.SUCCESS,
            fact: action.payload
        }))
        .addCase(failure, (state) => ({
            status: MealTipStatus.FAILURE,
            fact: state.fact
        }));
})

export { fetchActions, randomMealReducer }