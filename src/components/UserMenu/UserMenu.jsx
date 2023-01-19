import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button type="button" onClick={() => dispatch(logOut())} color='inherit'>Logout</Button>
    </div>
  );
};