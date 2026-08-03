import {
  useEffect,
  useState
} from "react";

type User = {
  id: number;
  name: string;
};

function App() {

  const [user, setUser] =
    useState<User | null>(null);

  useEffect(() => {

    setTimeout(() => {

      setUser({
        id: 1,
        name: "Nikhil"
      });

    }, 1000);

  }, []);

  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <h1>
      Welcome {user.name}
    </h1>
  );
}

export default App;