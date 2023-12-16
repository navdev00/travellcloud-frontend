import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated : false

};

export const userReducer = createReducer(initialState, {
  LoginRequest: (state) => {
    state.loading = true;
  },

  LoginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },

  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;

  },




  RegisterRequest: (state) => {
    state.loading = true;

  },
  RegisterSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;

  },
  RegisterFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;


  },



  LoadUserRequest: (state) => {
    state.loading = true;

  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  LoadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  

  clearErrors: (state) =>{
    state.error = null ;
  },

});


export const getPackageReducer = createReducer(initialState, {

  getPackageRequest:(state) => {

    state.loading = true;

  },


  getPackageSuccess:(state,action) => {

    state.loading = false;
    state.packages = action.payload;

  },

  getPackageFailure:(state,action) => {

    state.loading = false;
    state.error = action.payload;

  },
  clearErrors: (state) =>{
    state.error = null ;
  },


}) 



export const getAdminPackageReducer = createReducer(initialState, {

  getAdminPackageRequest:(state) => {

    state.loading = true;

  },


  getAdminPackageSuccess:(state,action) => {

    state.loading = false;
    state.adminpackages = action.payload;

  },

  getAdminPackageFailure:(state,action) => {

    state.loading = false;
    state.error = action.payload;

  },
  clearErrors: (state) =>{
    state.error = null ;
  },


}) 
