import React, { createContext, useContext, useState } from 'react';
import { useGetIn4 } from '../API/useGetIn4';
import { LoadingPage } from '../UI/LoadingPage';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const {user, isLoading: isLoadingUser} = useGetIn4();
    if(isLoadingUser) return <LoadingPage/>
    return (
        <UserContext.Provider value={{user, isLoadingUser}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);