import { Routes, Route, Navigate } from 'react-router-dom';
import { VacanciesPage } from './pages/VacanciesPage';
import { JobPage } from './pages/JobPage';
import { Layout } from './components/Layout';
import { AboutPage } from './pages/AboutPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/vacancies" replace />} />
        <Route path="vacancies" element={<VacanciesPage />} />
        <Route path="vacancies/:id" element={<JobPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/vacancies" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
