import Header from "./Header/Header";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Languages from "./Languages/Languages";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { RootState } from "../state/store";
import { useEffect } from "react";
import { fetchData } from "../state/actions";
import useLoading from "../Hooks/useLoading";
import "../styles/Loading.scss";
import Navbar from "./Navbar/Navbar";

const Resume = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const dispatch = useDispatch();
  const { header, projects, contact, education, languages, skills } =
    useSelector((state: RootState) => state);

  useEffect(() => {
    startLoading();
    setTimeout(async () => {
      dispatch(fetchData());
      stopLoading();
    }, 1500);
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <>
          <Navbar />
          <Header header={header} contact={contact} />
          <Projects projects={projects} />
          <Education education={education} />
          <Skills skills={skills} />
          <Languages languages={languages} />
        </>
      )}
    </>
  );
};

export default Resume;
