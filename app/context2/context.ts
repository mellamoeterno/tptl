import {createContext} from "react";
import { User } from ".";
import {useContext} from "react";

//this is the file we're creating to create the stuff that fixes the use of prop drilling

export const DashboardContext = createContext<User | undefined>(undefined);

//now after finally doing the finishing creating the (user = useContext) that acts like a prop in Component.js (that step instead of making
//changes into dashboard)
//we will now create a hook because we need to figure a way of not using '?' in user, and get user to always
//be defined and handle that logic, and always return the user if really is there.

//this is to use this hook in all the components and get the functionality. 11:50
export function useUserContext(){
  const user = useContext(DashboardContext);

  if(user === undefined) {
    throw new Error('useUserContext must be used with a DashboardContext');
  }

  return user;
}
