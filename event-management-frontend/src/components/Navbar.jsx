import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{padding:20,display:"flex",justifyContent:"space-between",background:"#1e40af",color:"#fff"}}>
      <h2>🎉 Event Portal</h2>
      <div>
        <Link to="/" style={{color:"#fff",marginRight:16}}>Home</Link>
        <Link to="/events" style={{color:"#fff",marginRight:16}}>Events</Link>
        <Link to="/login" style={{color:"#fff",marginRight:16}}>Login</Link>
        <Link to="/register" style={{color:"#fff"}}>Register</Link>
      </div>
    </nav>
  );
}
