import { Route, Routes } from "react-router-dom";
import Resume from "../pages/Resume";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Resume />} />
    </Routes>
  );
};

export default Routing;
