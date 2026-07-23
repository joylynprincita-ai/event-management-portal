import React from "react";

const stats = {
  users: 1250,
  organizers: 48,
  events: 96,
  bookings: 5420,
  revenue: 2489750,
};

const recentEvents = [
  {
    id: 1,
    title: "Music Concert",
    organizer: "ABC Events",
    date: "20 Aug 2026",
    status: "Active",
  },
  {
    id: 2,
    title: "Tech Conference",
    organizer: "TechWorld",
    date: "12 Sep 2026",
    status: "Active",
  },
  {
    id: 3,
    title: "Food Festival",
    organizer: "Foodies Club",
    date: "28 Sep 2026",
    status: "Pending",
  },
];

function Card({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          <Card title="Users" value={stats.users} />
          <Card title="Organizers" value={stats.organizers} />
          <Card title="Events" value={stats.events} />
          <Card title="Bookings" value={stats.bookings} />
          <Card title="Revenue" value={`₹${stats.revenue.toLocaleString()}`} />
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-semibold">Recent Events</h2>

            <div className="space-x-2">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                Add Event
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                Manage Users
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 text-left">Event</th>
                  <th className="p-3 text-left">Organizer</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-center">Status</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentEvents.map((event) => (
                  <tr key={event.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{event.title}</td>
                    <td className="p-3">{event.organizer}</td>
                    <td className="p-3">{event.date}</td>
                    <td className="p-3 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        event.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
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

export default AdminDashboard;
