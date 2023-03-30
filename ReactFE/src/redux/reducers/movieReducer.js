import { ActionTypes } from "../constants/action-types"

const initialState = {
    movies:[],
    watchList:[],
}

export const movieReducer = (state=initialState, {type,payload})=> {
    switch(type){
        case ActionTypes.SET_MOVIES:
            return {...state, movies:payload};
       
        default:
            return state;   
    }
} 

export const selectedMovieReducer = (state={}, {type,payload})=> {
    switch(type){
        case ActionTypes.SELECTED_MOVIE:
            return {...state, ...payload};
       
        default:
            return state;   
    }

    
} 

export const movieCastReducer = (state=initialState, {type,payload})=> {
    switch(type){
        case ActionTypes.MOVIE_CAST:
            return {...state, movies:payload};
       
        default:
            return state;   
    }
} 

export const watchListReducer = (state=initialState, {type,payload}) => {
    switch (type) {
        case ActionTypes.ADD_MOVIE_TO_WATCHLIST:
            return {...state, watchList:payload};
        default:
            return state;
    }
}