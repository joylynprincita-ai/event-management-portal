import { useState } from "react";

function Booking() {
  const ticketPrice = 999;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState(1);

  const total = ticketPrice * tickets;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed!\n\nName: ${name}\nTickets: ${tickets}\nTotal: ₹${total}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Book Your Tickets</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium mb-2">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Number of Tickets</label>
            <input
              type="number"
              min="1"
              max="10"
              value={tickets}
              onChange={(e)=>setTickets(Number(e.target.value))}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <p><strong>Price per Ticket:</strong> ₹{ticketPrice}</p>
            <p><strong>Total Amount:</strong> ₹{total}</p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
