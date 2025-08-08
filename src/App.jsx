import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import UserCard from "./components/UserCard";

// Map, ForEach, Filter

function App() {
  return (
    <div>
      <NavBar />
      <Container className="mt-4">
        <h1>Welcome to My App</h1>
        <div className="d-flex flex-wrap gap-3">
          <UserCard title="Car" desc="abc" img="" />
          <UserCard title="Book" desc="abc" img="" />
          <UserCard title="Bike" desc="abc" img="" />
          <UserCard title="Car" desc="abc" img="" />
          <UserCard title="Car" desc="abc" img="" />
          <UserCard title="Car" desc="abc" img="" />
          <UserCard title="Car" desc="abc" img="" />
        </div>
      </Container>
    </div>
  );
}

export default App;
