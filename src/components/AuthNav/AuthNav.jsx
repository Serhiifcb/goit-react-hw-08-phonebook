import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export const AuthNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button color="inherit" onClick={() => {navigate("/register")}}>Register</Button>
      <Button color="inherit" onClick={() => {navigate("/login")}}>Log In</Button>
    </div>
  );
};