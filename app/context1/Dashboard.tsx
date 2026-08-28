import { Profile, Sidebar } from './Components';
import { User } from ".";

interface DashboardProps {
    user: User;
}

export default function Dashboard({ user }: DashboardProps) { //this dashboard componnet take this prop but doesnt do anything with it, it only sends it to:
                                                              //<Sidebar/> and to <Profile/>
  return (
    <div>
      <Sidebar user={user} />
      <Profile user={user} />
    </div>
  );
}