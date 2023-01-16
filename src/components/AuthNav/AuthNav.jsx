import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  &.active {
    color: rgb(116, 187, 201);
    
  }
  &:hover {
    color: rgb(116, 187, 201);
    scale: 1.1;
  }
`

export const AuthNav = () => {
  return (
    <div>
      <StyledLink className={css.link} to="/register">
        Register
      </StyledLink>
      <StyledLink className={css.link} to="/login">
        Log In
      </StyledLink>
    </div>
  );
};