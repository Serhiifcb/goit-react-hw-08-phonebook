import { useAuth } from "hooks";
import { NavLink } from "react-router-dom";
import * as React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: 'rgb(116, 187, 201)',
  },
  notice: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
    color: 'rgb(116, 187, 201)',
  }
};

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Phonebook
      </h1>
      {!isLoggedIn ? (<p style={styles.notice}>Please <NavLink to="/register">register</NavLink> or <NavLink to="/login">login</NavLink> for using application</p>) : ('')}
    </div>
  );
}