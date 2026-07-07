import { Profile, Sidebar } from './Components';
import { User } from ".";

//after adding DashboardContext to index>> now we dont have to do anything to dashboard,
//because dashboard no longer need to have the job of 
//taking the user and passing it now to sidebar

//instead we will do is go to sidebar (Component.tsx) and do changes there.

interface DashboardProps {}//cleared of user prop here

export default function Dashboard({}: DashboardProps) { //this dashboard componnet take this prop but doesnt do anything with it, it only sends it to:     //cleared of user prop here
                                                              //<Sidebar/> and to <Profile/>
  return (
    <div>
      <Sidebar user={user} />
      <Profile user={user} />
    </div>
  );
}