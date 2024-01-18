import React from "react";
import { defaultUser } from "./types";
import { IGithubUser } from "./types/user";
import { Container, Header, Search } from "./components";


const App: React.FC = () => {
  const [user, setUser] = React.useState<IGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {};

  return (
    <Container>
      <Header />
      <Search />
    </Container>
  );
};

export default App;
