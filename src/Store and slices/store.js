import { configureStore } from '@reduxjs/toolkit';
import PersonalInfo from './PersonalDSlice';
import about from './aboutSlice';
import education from './EducationSlice';
import work from './workexpSlice';
import interest from './interestSlice';
import language from './languageSlice';
import projects from './projectSlice';



export const store = configureStore({
  reducer: {
    PersonalInfo,
    about,
    education,
    work,
    interest,
    projects,
    language,

  },
})