import { useMemo, useState, createContext } from 'react';

export const LoginDataContext = createContext({})

function useUser() {
  const [loginData, setLoginData] = useState(null)

  const contextValue = useMemo(
    () => ({
      loginData,
      setLoginData,
    }),
    [loginData, setLoginData]
  )

  return {
    loginDataContextValue: contextValue
  }
}

export default useUser
