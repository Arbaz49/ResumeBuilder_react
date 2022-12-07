import { configureStore } from '@reduxjs/toolkit';
import PersonalInfo from './PersonalDSlice';
import about from './aboutSlice';
import education from './EducationSlice';
import work from './workexpSlice';
import interest from './interestSlice';
import projects from './projectSlice';
import AlertSlice from './AlertSlice';
import language from './languageSlice';
import UserSlice from "./UserSlice"



export const store = configureStore({
  reducer: {
    PersonalInfo,
    about,
    education,
    work,
    interest,
    projects,
    language,
    AlertSlice,
    UserSlice,
  },
})