import { Header, Footer, BannerSwiper } from './components';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import bgImg from './assets/Images/bgBanner.jpg'
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import LogIn from './pages/Login';
import Signup from './pages/Signup';
const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout());
        }
      }).catch(() => {

      }).finally(() => {
        setLoading(false);
      })
  }, [dispatch]);
  return !loading ? (
    <>
      <div className='relative h-screen max-w-full'>
        <div className='sticky z-50 top-0 left-0 h-fit w-full p-5'>
          <Header />
        </div>
        <div className="w-full flex items-end h-[80vh] -mt-28" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover' }}>
          <BannerSwiper />
        </div>
        <LogIn />
        <Signup />
        <Footer />
      </div>
    </>
  ) : null;
}

export default App