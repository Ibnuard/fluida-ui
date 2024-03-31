import { FluidaUIProvider } from 'fluida-ui';
import App from './src/App';

const MainApp = () => {
  return (
    <FluidaUIProvider>
      <App />
    </FluidaUIProvider>
  );
};

export default MainApp;
