import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>User: {user.email}</p>
      <button type="button" onClick={() => dispatch(logOut())} className={css.logOutButton}>
        Logout
      </button>
    </div>
  );
};