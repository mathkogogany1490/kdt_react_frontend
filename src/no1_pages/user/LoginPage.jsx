import React from 'react'
import LoginForm from '../../no2_components/user/LoginForm'

const LoginPage = ({userTable, setLoginMode}) => {
  return (
    <LoginForm
        userTable={userTable}
        setLoginMode={setLoginMode}
    />
  )
}

export default LoginPage