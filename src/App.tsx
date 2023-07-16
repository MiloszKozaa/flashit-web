import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { PrivateRoute } from './components';
import { ColorPalette } from './model/colors';
import useVH from 'react-viewport-height';
import { privatePages, publicPages } from './services';
import { ToastContainer } from 'react-toastify';

function App() {
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
          {privatePages &&
            privatePages.map(({ url, component, isNavbarDisplayed }, key) => (
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
          {publicPages &&
            publicPages.map(({ url, component }, key) => (
              <Route key={key} path={`/${url}`} element={component} />
            ))}
        </Routes>
      </div>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  );
}

export default App;
