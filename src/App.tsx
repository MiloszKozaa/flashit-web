import { Route, Routes } from 'react-router-dom';
import './App.css';
import { IPage } from './model/page';
import PrivateRoute from './components/PrivateRoute';
import { ColorPalette } from './model/colors';
import useVH from 'react-viewport-height';
import Navbar from './components/navbar/Navbar';
import { Fragment } from 'react';

interface IPages {
  privatePages: IPage[];
  publicPages: IPage[];
}

function App({ privatePages, publicPages }: IPages) {
  const vh = useVH();

  return (
    <div
      className='App-wrapper'
      style={{
        backgroundColor: ColorPalette.BACKGROUND,
        height: `${100 * vh}px`,
      }}>
      <div className='App'>
        <Routes>
          {privatePages.map(({ url, component, isNavbarDisplayed }, key) => (
            <Route
              key={key}
              path={`/${url}`}
              element={
                <PrivateRoute
                  PrivateComponent={component}
                  isNavbarDisplayed={!!isNavbarDisplayed}
                />
              }
            />
          ))}
          {publicPages.map(({ url, component }, key) => (
            <Route key={key} path={`/${url}`} element={component} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
