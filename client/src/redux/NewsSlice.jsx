import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  register,
  login,
  getnews,
  updategenre,
  savenews,
  getsavednews,
} from "../Api";

export const userregister = createAsyncThunk(
  "/userregister",
  async ({ formData }) => {
    try {
      let res = await register(formData);
      if (res.data.val == 1) {
        toast.success("User registered successfully");
        return res;
      } else if (res.data.val == 2) {
        toast.warning("Email already exists");
      } else if (res.data.val == 3) {
        toast.error("Registration failed");
      }
    } catch (err) {
      console.log(err.message);
    }
  }
);
export const userlogin = createAsyncThunk(
  "/userlogin",
  async ({ formData, navigate }) => {
    try {
      const res = await login(formData);
      if (res.val == 1) {
        toast.error("Wrong Password");
        navigate('/login')
        return res;
      } else if (res.val == 2) {
        toast.error("Email does not exist");
        navigate('/login')
        return res;
      } else {
        toast.success("Logged in successfully");
        return res;
      }
    } catch (err) {
      console.log('s',err.message);
    }
  }
);

export const getNews = createAsyncThunk("/getnews", async (genre) => {
  try {
    let response = getnews(genre);
    return response;
  } catch (error) {
    console.log("Error from slice", err);
  }
});

export const updateGenre = createAsyncThunk(
  "/updategenre",
  async ({ formData, userId }) => {
    try {
      let response = updategenre(formData, userId);
      return response;
    } catch (error) {
      console.log("Error from slice", err);
    }
  }
);

export const saveNews = createAsyncThunk(
  "/savenews",
  async ({ obj, userId }) => {
    try {
      let response = savenews(obj, userId);
      return response;
    } catch (error) {
      console.log("Error from slice", err);
    }
  }
);

export const getSavedNews = createAsyncThunk(
  "/getsavednews",
  async (userId) => {
    try {
      console.log("from slice");
      let response = getsavednews(userId);
      return response;
    } catch (error) {
      console.log("Error from slice", err);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {},
  reducers: {},
});

export const newsReducer = newsSlice.reducer;
