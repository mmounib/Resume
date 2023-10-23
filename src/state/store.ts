// store.ts
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Header {
  name: string;
  subName: string;
}
export interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface Education {
  date: string;
  institution: string;
  degree: string;
}

export interface Language {
  arabic: string;
  english: string;
  french: string;
}

export interface Skill {
  name: string;
}

export interface RootState {
  header: Header;
  projects: Project[];
  contact: Contact;
  education: Education[];
  languages: Language;
  skills: Skill[];
}

const initialState: RootState = {
  header: {
    name: "",
    subName: "",
  },
  projects: [],
  contact: {
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    portfolio: "",
  },
  education: [],
  languages: {
    arabic: "",
    english: "",
    french: "",
  },
  skills: [],
};

const headerSlice = createSlice({
  name: "header",
  initialState: initialState.header,
  reducers: {
    setHeader: (state, action: PayloadAction<Header>) => {
      return action.payload;
    },
  },
});

const projectsSlice = createSlice({
  name: "projects",
  initialState: initialState.projects,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      return action.payload;
    },
  },
});

const contactSlice = createSlice({
  name: "contact",
  initialState: initialState.contact,
  reducers: {
    setContact: (state, action: PayloadAction<Contact>) => {
      return action.payload;
    },
  },
});

const educationSlice = createSlice({
  name: "education",
  initialState: initialState.education,
  reducers: {
    setEducation: (state, action: PayloadAction<Education[]>) => {
      return action.payload;
    },
  },
});

const languagesSlice = createSlice({
  name: "languages",
  initialState: initialState.languages,
  reducers: {
    setLanguages: (state, action: PayloadAction<Language>) => {
      return action.payload;
    },
  },
});

const skillsSlice = createSlice({
  name: "skills",
  initialState: initialState.skills,
  reducers: {
    setSkills: (state, action: PayloadAction<Skill[]>) => {
      return action.payload;
    },
  },
});

const rootReducer = {
  header: headerSlice.reducer,
  projects: projectsSlice.reducer,
  contact: contactSlice.reducer,
  education: educationSlice.reducer,
  languages: languagesSlice.reducer,
  skills: skillsSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export const { setHeader } = headerSlice.actions;
export const { setProjects } = projectsSlice.actions;
export const { setContact } = contactSlice.actions;
export const { setEducation } = educationSlice.actions;
export const { setLanguages } = languagesSlice.actions;
export const { setSkills } = skillsSlice.actions;

export default store;
