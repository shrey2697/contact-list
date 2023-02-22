import "./App.css";
import { ContactsList } from "./layout/ContactsList";
import { Header } from "./layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ContactsList />
    </div>
  );
}

export default App;
