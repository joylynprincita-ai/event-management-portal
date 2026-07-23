import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div style={{padding:40,textAlign:"center"}}>
      <h1>Welcome to Event Management Portal</h1>
      <p>Discover and book amazing events.</p>
      <Link to="/events"><button>Explore Events</button></Link>
    </div>
  );
}
