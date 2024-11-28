import { Navigate, Route } from "react-router";
import { BrowserRouter, Routes } from "react-router-dom";
import MainLayout from "../components/layouts/mainLayout/MainLayout";
import Home from "../pages/home/Home";
import Repositories from "../pages/repositories/Repositories";
import RepoIssues from "../pages/repoIssues/RepoIssues";
import PageNotFound from "../pages/error/PageNotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/repositories/issues/:userName/:repoName"
            element={<RepoIssues />}
          />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;
