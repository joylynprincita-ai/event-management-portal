import React from "react";

function EventCard({ event }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {event.category}
        </span>

        <h2 className="text-xl font-bold text-gray-800">
          {event.title}
        </h2>

        <p className="text-gray-600 mt-2">
          {event.description}
        </p>

        <div className="mt-4 space-y-2 text-gray-700">
          <p>📅 {event.date}</p>
          <p>⏰ {event.time}</p>
          <p>📍 {event.location}</p>
          <p>🎟️ Seats: {event.seats}</p>
        </div>

        <div className="flex justify-between items-center mt-5">
          <span className="text-2xl font-bold text-green-600">
            ₹{event.price}
          </span>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
