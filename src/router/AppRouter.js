import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginScreen from '../auth/LoginScreen';
import RegisterScreen from '../auth/RegisterScreen';
import CalendarApp from '../page/CalendarApp';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/' element={<CalendarApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
