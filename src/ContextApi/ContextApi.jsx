import React, { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const DataContext= createContext();

const ContextApi = ({children}) => {

const [userData, setUserData] = useState(null);

const values = {
    userData, 
    setUserData,
}

    return (
        <div>
           <DataContext.Provider value = {values}>
            {children}
           </DataContext.Provider>
        </div>
    );
};

export default ContextApi;