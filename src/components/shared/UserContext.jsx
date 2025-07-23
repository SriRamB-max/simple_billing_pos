import { createContext, useState } from 'react';


export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  
  return (
    <UserContext.Provider value={{ products, setProducts }}>
        {children}
    </UserContext.Provider>
  );
};
