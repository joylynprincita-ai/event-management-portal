const events=[{id:1,title:"Music Concert",date:"20 Aug 2026",location:"Bangalore"}];
export default function Events(){
return <div style={{padding:40}}><h2>Events</h2>{events.map(e=><div key={e.id}><h3>{e.title}</h3><p>{e.date}</p><p>{e.location}</p><button>Book Now</button></div>)}</div>
}
