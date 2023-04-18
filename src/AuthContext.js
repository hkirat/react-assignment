import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  token: null,
  setAuthState: () => {}
});

export default AuthContext