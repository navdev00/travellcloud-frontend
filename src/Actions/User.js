import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    const { data } = await axios.post(
      "https://travellcloudbackend.onrender.com/auth/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "LoginSuccess",
      payload: data.user,
    });
    toast.success("Login Successfully!");
    localStorage.setItem("currentUser", JSON.stringify(data.user));
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });

    toast.error(error.response.data.message);
  }
};




export const registerUser = (fullname,email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "RegisterRequest",
    });

    const { data } = await axios.post(
      "https://travellcloudbackend.onrender.com/auth/register",
      { fullname,email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "RegisterSuccess",
      payload: data.user,
    });
    toast.success("Register Successfully!");
  } catch (error) {
    dispatch({
      type: "RegisterFailure",
      payload: error.response.data.message,
    });

    toast.error(error.response.data.message);
  }
};


export const logoutUser = () =>dispatch=>{
  localStorage.removeItem('currentUser')
  window.location.href = '/'
}






export const getPackages = () => async (dispatch) => {
  try {
    dispatch({
      type: "getPackageRequest",
    });

    const { data } = await axios.get("https://travellcloudbackend.onrender.com/tour/all/packages");

    dispatch({
      type: "getPackageSuccess",
      payload: data.packages,
    });


  } catch (error) {
    dispatch({
      type: "getPackageFailure",
      payload: error.response.data.message,
    });
  }

  
};


export const getAdminPackages = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAdminPackageRequest",
    });

    const { data } = await axios.get("https://travellcloudbackend.onrender.com/tour/admin/all/packages");

    dispatch({
      type: "getAdminPackageSuccess",
      payload: data.packages,
    });


  } catch (error) {
    dispatch({
      type: "getAdminPackageFailure",
      payload: error.response.data.message,
    });
  }

  
};
