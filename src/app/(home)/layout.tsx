// Add sidebar here 
// reply: NO!

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="bg-white">
    {children}
  </div>
}