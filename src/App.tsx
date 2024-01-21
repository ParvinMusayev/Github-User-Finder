import React from "react";
import { defaultUser } from "./types";
import { IGithubUser } from "./types/user";
import { Container, Header, Search, UserCard } from "./components";

const BASE_URL = "https://api.github.com/users"

const App: React.FC = () => {
  const [user, setUser] = React.useState<IGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username

    const res = await fetch(url)

    const user = (await res.json()) as IGithubUser;

   
  };

  return (
    <Container>
      <Header />
      <Search onSubmit={fetchUser} />
      {user && <UserCard {...user}/>}
    </Container>
  );
};

export default App;
