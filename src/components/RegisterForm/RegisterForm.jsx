import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import css from './RegisterForm.module.css';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <Typography variant="h5" gutterBottom={true} className={css.registerTitle}>Register</Typography>
      <TextField id="outlined-basic" label="Username" variant="outlined" size="small" type="text" name="name" className={css.registerInput}/>
      <br />
      <TextField id="outlined-basic" label="Email" variant="outlined" size="small" type="email" name="email" className={css.registerInput}/>
      <br />
      <TextField id="outlined-basic" label="Password" variant="outlined" size="small" type="password" name="password" className={css.registerInput}/>
      <br />
      <Button size='small' type="submit" variant='contained' className={css.registerButton}>Register</Button>
    </form>
  );
};