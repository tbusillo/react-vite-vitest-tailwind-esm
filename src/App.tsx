import logo from '@logo.svg';
import { LayoutProvider } from './layouts';
import { AppRoutes } from '@components';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' width='200' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <LayoutProvider>
          <AppRoutes />
        </LayoutProvider>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
