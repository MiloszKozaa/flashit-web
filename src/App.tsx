import { Route, Routes } from 'react-router-dom';
import './App.css';
import { IPage } from './model/page';
import PrivateRoute from './components/PrivateRoute';
import { ColorPalette } from './model/colors';

interface IPages {
  privatePages: IPage[];
  publicPages: IPage[];
}

function App({ privatePages, publicPages }: IPages) {
  return (
    <div
      className='App-wrapper'
      style={{ backgroundColor: ColorPalette.BACKGROUND }}>
      <div className='App'>
        <Routes>
          {privatePages.map(({ url, component }, key) => (
            <Route
              key={key}
              path={`/${url}`}
              element={<PrivateRoute PrivateComponent={component} />}
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
