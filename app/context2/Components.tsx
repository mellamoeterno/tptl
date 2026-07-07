import { DashboardContext } from "./context";
import { useContext } from "react";

//so now we can get the user directly from context using consumer
interface SidebarProps {};

export function Sidebar({}: SidebarProps) { 
  const user = useContext(DashboardContext); //with this we have acces to user without being passed to dashboard, its basically if it was a prop righ there called user (THIS GET REPLACED WITH useUserContext)

    return (
    <div>
      <div>{user.name}</div>
      <div>Subscription Status: {user.isSubscribed}</div>
    </div>
  );
}

interface ProfileProps {}; 

export function Profile({}: ProfileProps) { //cleared of user prop here
    const user = useContext(DashboardContext);//with this we have acces to user without being passed to dashboard, its basically if it was a prop righ there called user(THIS GET REPLACED WITH useUserContext)
    return <div>{user.name}</div>;
    
}