import { Button }
from "./components/Button";

function App() {

  return (
    <Button
      label="Submit"
      onClick={() =>
        console.log("Clicked")
      }
    />
  );
}

export default App;