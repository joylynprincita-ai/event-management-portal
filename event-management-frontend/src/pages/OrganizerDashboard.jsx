import React from "react";

const events = [
  {
    id: 1,
    title: "Music Concert",
    date: "20 Aug 2026",
    venue: "Bangalore Palace",
    bookings: 120,
    revenue: 119880,
    status: "Published",
  },
  {
    id: 2,
    title: "Tech Conference",
    date: "12 Sep 2026",
    venue: "Hyderabad Convention Center",
    bookings: 85,
    revenue: 127415,
    status: "Published",
  },
];

function OrganizerDashboard() {
  const totalRevenue = events.reduce((sum, e) => sum + e.revenue, 0);
  const totalBookings = events.reduce((sum, e) => sum + e.bookings, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Organizer Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Total Events</h2>
            <p className="text-3xl font-bold mt-2">{events.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Total Bookings</h2>
            <p className="text-3xl font-bold mt-2">{totalBookings}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Revenue</h2>
            <p className="text-3xl font-bold mt-2">₹{totalRevenue}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow flex items-center justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold">
              + Create Event
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">My Events</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 text-left">Event</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Venue</th>
                  <th className="p-3 text-center">Bookings</th>
                  <th className="p-3 text-right">Revenue</th>
                  <th className="p-3 text-center">Status</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{event.title}</td>
                    <td className="p-3">{event.date}</td>
                    <td className="p-3">{event.venue}</td>
                    <td className="p-3 text-center">{event.bookings}</td>
                    <td className="p-3 text-right">₹{event.revenue}</td>
                    <td className="p-3 text-center">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {event.status}
                      </span>
                    </td>
                    <td className="p-3 text-center space-x-2">
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded">
                        Edit
                      </button>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizerDashboard;
