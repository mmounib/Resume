// actions.ts
import { ThunkAction } from "redux-thunk";
import {
  RootState,
  setContact,
  setEducation,
  setHeader,
  setLanguages,
  setProjects,
  setSkills,
} from "./store"; // Import the RootState from your store file

export const fetchData = (): ThunkAction<void, RootState, unknown, any> => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/resume/");
      const data = await response.json();

      dispatch(setHeader(data.header));
      dispatch(setProjects(data.projects));
      dispatch(setContact(data.contact));
      dispatch(setEducation(data.education));
      dispatch(setLanguages(data.languages));
      dispatch(setSkills(data.skills));
    } catch (error) {
      // dispatch(setError(error)); // You can define an error action
    }
  };
};
