import Provider from "../services/provider";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    Provider.getUserTasks().then((response) => {
      console.log(response);
    });
  }, []);
  return <p>Home Page</p>;
}

export default Home;
