import { createBrowserRouter } from 'react-router';
import Root from './layout/Root';
import Home from './pages/Home';
import About from './pages/About';
import Curriculum from './pages/Curriculum';
import Admissions from './pages/Admissions';
import College from './pages/College';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'curriculum', Component: Curriculum },
      { path: 'admissions', Component: Admissions },
      { path: 'college', Component: College },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
