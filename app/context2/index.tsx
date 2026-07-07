import { useState } from 'react';

import { DashboardContext } from './context';
import Dashboard from './Dashboard';

export interface User {
  isSubscribed: boolean;
  name: string;
}

/* 
export const DashboardContext = createContext<User | undefined>(undefined);           <<<which is in context.ts
its as if we are using createContext here cus we importing User in context.ts
 */

interface DemoProps {}//cleared of user prop here

export default function Demo({}: DemoProps) {//cleared of user prop here
  const [user] = useState<User>({
    isSubscribed: true,
    name: 'You',
  });

  return (
    <div>                                     {/* the .Provider will provide the context to a set of component */}
      <DashboardContext.Provider value={user}> {/* now here we get access to the same user that was before passed down through props */}
        <Dashboard></Dashboard>
      </DashboardContext.Provider> 
    </div>
  );
}

//The goal is to not have to pass the user as props, the goal is to have the user accesible anywhere  