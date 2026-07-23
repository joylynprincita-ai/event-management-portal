import React from "react";

const bookings = [
  {
    id: "BK1001",
    event: "Music Concert",
    date: "20 Aug 2026",
    venue: "Bangalore Palace",
    tickets: 2,
    amount: 1998,
    status: "Confirmed",
  },
  {
    id: "BK1002",
    event: "Tech Conference",
    date: "12 Sep 2026",
    venue: "Hyderabad Convention Center",
    tickets: 1,
    amount: 1499,
    status: "Confirmed",
  },
];

function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">User Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Total Bookings</h2>
            <p className="text-3xl font-bold mt-2">{bookings.length}</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Upcoming Events</h2>
            <p className="text-3xl font-bold mt-2">2</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Total Spent</h2>
            <p className="text-3xl font-bold mt-2">
              ₹{bookings.reduce((sum, b) => sum + b.amount, 0)}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">My Bookings</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 text-left">Booking ID</th>
                  <th className="p-3 text-left">Event</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Venue</th>
                  <th className="p-3 text-center">Tickets</th>
                  <th className="p-3 text-right">Amount</th>
                  <th className="p-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{booking.id}</td>
                    <td className="p-3">{booking.event}</td>
                    <td className="p-3">{booking.date}</td>
                    <td className="p-3">{booking.venue}</td>
                    <td className="p-3 text-center">{booking.tickets}</td>
                    <td className="p-3 text-right">₹{booking.amount}</td>
                    <td className="p-3 text-center">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-right">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              Download Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
