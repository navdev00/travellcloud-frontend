import {createReducer} from "@reduxjs/toolkit"

const initialState = {}

// export const addAdminPackageReducer = createReducer(initialState, {

//     addPackageRequest : (state) => {

//         state.loading =true;
    
//     },
//     addPackageSuccess : (state,action) => {

//         state.loading =false;
//         state.newPackage= action.payload;

//     },
//     addPackageFailure : (state,action) => {

//         state.loading =false;
//         state.error = action.payload;
//     }


// })


// export const likeReducer = createReducer(initialState, {

//     likeRequest: (state) => {

//         state.loading = true
//     },

//     likeSuccess: (state,action) => {
//         state.loading = false;
//         state.message = action.payload;
//     },
//     likeFailure: (state,action) => {
//         state.loading = false;
//         state.error = action.payload;
//     },

// })