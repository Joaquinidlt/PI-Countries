import {ALL_COUNTRIES,GET_COUNTRIES,GET_COUNTRIES_DETAIL,ADD_ACTIVITY,GET_ACTIVITYS,ACTIVITY_FILTER ,ORDER,DIFFICULTY, SEASON } from './actions';

const initialState = {
    countriesAll: [],
    countryDetail: [],
    countryFilter: [],
    activityCreate: [],
    countryShowed: [],
    activitiesAll: [],
    activityAll: [],
    activitysAll: [],
};

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case ALL_COUNTRIES:
            return {
                ...state,
                countriesAll: action.payload,
            };
        case GET_COUNTRIES:
            return {
                ...state,
                countriesAll: action.payload,
            };
        case GET_COUNTRIES_DETAIL:
            return {
                ...state,
                countryDetail: action.payload,
            }
        case ADD_ACTIVITY: 
        return {
            ...state,
            activityCreate: action.payload,
        }
        case GET_ACTIVITYS: 
        return {
            ...state,
            activityAll: action.payload,
            activitysAll: action.payload,
            activitiesAll: action.payload,
        }
        case ORDER:
            const orderName = action.payload === 'Asc' ? 
            state.activitiesAll.sort((a, b) => {
                if(a.name > b.name) {
                    return 1;
                }
                if(b.name > a.name) {
                    return -1;
                }
                return 0;
            }) :
            state.activitiesAll.sort(function(a, b) {
                if(a.name > b.name) {
                    return -1;
                }
                if(b.name > a.name) {
                    return 1;
                }
                return 0;
            });
            return {
                ...state,
                activitiesAll: orderName
            }
        case DIFFICULTY:
            const activityAll = state.activityAll;
            const difficultyFilter = action.payload === '___' ? activityAll :
            activityAll.filter(i => i.difficulty === action.payload)
            return {
                ...state,
                activitiesAll: difficultyFilter
            }
        case SEASON:
            const activitysAll = state.activitysAll;
            const seasonFilter = action.payload === '___' ? activitysAll :
            activitysAll.filter(i => i.season === action.payload)
            return {
                ...state,
                activitiesAll: seasonFilter
            }
        case ACTIVITY_FILTER: 
            return {
                ...state,
                countryShowed: action.payload
            }

        default: return state;
    }
};