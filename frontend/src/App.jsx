import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoleSelect from "./components/RoleSelect";
import UserFlow from "./pages/UserFlow";
import WorkerFlow from "./pages/WorkerFlow";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleSelect />} />
        <Route path="/user" element={<UserFlow />} />
        <Route path="/worker" element={<WorkerFlow />} />
      </Routes>
    </BrowserRouter>
  );
}
