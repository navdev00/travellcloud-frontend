import {configureStore} from "@reduxjs/toolkit"
// import { addAdminPackageReducer } from "./Reducers/Package";
// import { packageDetailReducer } from "./Reducers/Package";
// import { likeReducer } from "./Reducers/Package";
import { getAdminPackageReducer, getPackageReducer, userReducer } from "./Reducers/User";


const store = configureStore({
    reducer:{
        user:userReducer,
        packages:getPackageReducer,
        adminpackages:getAdminPackageReducer
        // newPackage:addAdminPackageReducer

        // packageDetails:packageDetailReducer
        // like:likeReducer
    }
});

export default store;

