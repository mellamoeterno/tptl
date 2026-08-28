import { useState } from 'react';

import { DashboardContext } from './context';
import Dashboard from './Dashboard';

export interface User {
  isSubscribed: boolean;
  name: string;
}

interface DemoProps {}

export default function Demo({}: DemoProps) {
  const [user] = useState<User>({
    isSubscribed: true,
    name: 'You',
  });

  return (
    <div>
      <Dashboard user={user} />
    </div>
  );
}


/* The <> in useState<User> is a generic type argument. 
It tells TypeScript: “When I call useState, 
the state value I’m storing should be of type User.” */