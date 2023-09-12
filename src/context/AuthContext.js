import React,{ useState, useEffect } from 'react';
import publicApi from '../api/publicApi';

const AuthContext = React.createContext();

export const AuthProvider = ({children}) =>{
    const [isSignedIn, setIsSignedIn] = useState(false)
    // Register, Login and store the token in your async storage

    const register = async(registerData) =>{
        const { data } = await publicApi.post('/register',registerData);
        console.log(data)
    }

    // Generate a deep link that will be used in your reset password functionality

    return <AuthContext.Provider value={{isSignedIn, register}}>{children}</AuthContext.Provider>
}

export default AuthContext;