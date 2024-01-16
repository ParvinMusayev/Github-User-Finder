import React from "react";
import { defaultUser } from "./types";
import { IGithubUser } from "./types/user";

const App: React.FC = () => {
  const [user, setUser] = React.useState<IGithubUser | null>(defaultUser);
  return <div>hello</div>;
};

export default App;
