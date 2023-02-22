import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Services } from './pages/Services';
import { Blog } from './pages/Blog';
import { Company } from './pages/Company';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={'projects'} element={<Projects />} />
          <Route path={'services'} element={<Services />} />
          <Route path={'blog'} element={<Blog />} />
          <Route path={'company'} element={<Company />} />
        </Route>
      </Routes>
    </>
  );
};
