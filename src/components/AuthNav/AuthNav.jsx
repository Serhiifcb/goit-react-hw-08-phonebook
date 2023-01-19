import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import css from "./AuthNav.module.css"

export const AuthNav = () => {
  const navigate = useNavigate();
  return (
    <div className={css.authNav}>
      <Button color="inherit" onClick={() => {navigate("/register")}} className={css.authButton}>Register</Button>
      <Button color="inherit" onClick={() => {navigate("/login")}} className={css.authButton}>Log in</Button>
    </div>
  );
};