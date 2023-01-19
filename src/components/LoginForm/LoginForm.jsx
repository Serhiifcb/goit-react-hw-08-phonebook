import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <Typography variant="h5" gutterBottom={true} className={css.loginTitle}>Login</Typography>
      <TextField id="outlined-basic" label="Email" variant="outlined" size="small" type="email" name="email" className={css.loginInput}/>
      <br />
      <TextField id="outlined-basic" label="Password" variant="outlined" size="small" type="password" name="password" className={css.loginInput}/>
      <br />
      <Button size='small' type="submit" variant='contained' className={css.loginButton}>Log In</Button>
    </form>
  );
};