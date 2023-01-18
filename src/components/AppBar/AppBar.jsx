import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import css from './AppBar.module.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  
  return (
    <header className={css.header}>
      <Navigation />
      <ToastContainer autoClose={4000}/>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};