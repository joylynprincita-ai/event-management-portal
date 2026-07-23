import { useParams } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Music Concert",
    category: "Music",
    description:
      "Experience an unforgettable live concert featuring top artists and amazing performances.",
    date: "20 Aug 2026",
    time: "7:00 PM",
    venue: "Bangalore Palace",
    price: 999,
    seats: 150,
    image: "https://picsum.photos/900/500?random=1",
  },
  {
    id: 2,
    title: "Tech Conference",
    category: "Technology",
    description:
      "Join developers, startups, and industry experts to explore the latest technologies.",
    date: "12 Sep 2026",
    time: "10:00 AM",
    venue: "Hyderabad Convention Center",
    price: 1499,
    seats: 300,
    image: "https://picsum.photos/900/500?random=2",
  },
  {
    id: 3,
    title: "Food Festival",
    category: "Food",
    description:
      "Enjoy delicious cuisines from around the world with live cooking shows.",
    date: "28 Sep 2026",
    time: "11:00 AM",
    venue: "Mumbai Exhibition Ground",
    price: 499,
    seats: 500,
    image: "https://picsum.photos/900/500?random=3",
  },
];

function EventDetails() {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold text-red-600">Event Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-[450px] object-cover rounded-xl shadow-lg"
      />

      <div className="mt-8">
        <span className="bg-blue-600 text-white px-4 py-2 rounded-full">
          {event.category}
        </span>

        <h1 className="text-4xl font-bold mt-4">{event.title}</h1>

        <p className="text-gray-600 mt-4 text-lg">{event.description}</p>

        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-semibold">📅 Date</h3>
            <p>{event.date}</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-semibold">⏰ Time</h3>
            <p>{event.time}</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-semibold">📍 Venue</h3>
            <p>{event.venue}</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-semibold">🎟 Available Seats</h3>
            <p>{event.seats}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10">
          <h2 className="text-4xl font-bold text-green-600">₹{event.price}</h2>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
