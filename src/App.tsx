import Education from "./pages/Education/Education";
import Header from "./pages/Header/Header";
import Languages from "./pages/Languages/Languages";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import "./styles/App.scss";

function App() {
  return (
    <div className="main">
      <Header />
      <Education />
      <Projects />
      <Skills />
      <Languages />
    </div>
  );
}

export default App;
