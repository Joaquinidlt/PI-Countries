import axios from "axios";
import { BASE_URL } from '../constants';

export const ALL_COUNTRIES = 'ALL_COUNTRIES';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_DETAIL = 'GET_COUNTRIES_DETAIL';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const GET_ACTIVITYS = 'GET_ACTIVITYS';
export const ACTIVITY_FILTER = 'ACTIVITY_FILTER';
export const ORDER = 'ORDER';
export const DIFFICULTY = 'DIFFICULTY';
export const SEASON = 'SEASON';

export const allCountries = () => {
    return async (dispatch) => {
        const res = await axios.get( BASE_URL )
        dispatch({ type: ALL_COUNTRIES, payload: res.data })
    };
};

export const getCountries = (name) => {
    return async (dispatch) => {
        const res = await axios.get( `http://localhost:3001/countries?name=${name}` )
        
        dispatch({ type: ALL_COUNTRIES, payload: res.data })
    };
};

export function getDetail(id) {
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3001/countries/${id}`);
        dispatch({ type: GET_COUNTRIES_DETAIL, payload: res.data });
    };
}

export const addActivity = (dataAct) => {
    return async (dispatch) => {
        return await axios
        .post(`http://localhost:3001/activity`, dataAct)
        .then( res => {
            dispatch({ type: ADD_ACTIVITY, payload: res.data });
        });
    };
};


export function getAllActivity() {
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3001/activity/`);
        dispatch({ type: GET_ACTIVITYS, payload: res.data });
    };
}

export function getActivity(id) {
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3001/activity/${id}`);
        dispatch({ type: GET_COUNTRIES_DETAIL, payload: res.data });
    };
}
export const activityFilter = (countries, filt) => {
    let filtered = [];
    if(countries[0].Activities) {
    filtered = countries.filter(
        (e) => {
            for(let i = 0; i < e.Activities.length; i++) {
                if (e.Activities[i].name === filt) {
                    return true;
                }
            }
    }
    )};
    return {
        type: ACTIVITY_FILTER,
        payload: filtered
    };
};

export function byOrder(payload) {
    return {
        type: ORDER, 
        payload
    };
};
export function byDifficulty(payload) {
    return {
        type: DIFFICULTY,
        payload
    };
};

export function bySeason(payload) {
    return {
        type: SEASON,
        payload
    };
};