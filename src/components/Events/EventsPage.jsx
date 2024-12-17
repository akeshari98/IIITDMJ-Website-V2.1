import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // You can also use fetch() if preferred
import { ExternalLink, Calendar, MapPin, Clock } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import axiosInstance from '../../axios'
const container = {
  hidden: { opacity: 0 }, // When hidden, the element has 0 opacity (not visible).
  show: {
    opacity: 1, // When shown, the element should have full opacity (be visible).
    transition: {
      staggerChildren: 0.1 // This ensures that the child elements appear with a 0.1-second delay between each.
    }
  }
};
const item = {
  hidden: { opacity: 0, y: 20 }, // Initially hidden with no opacity and slightly shifted down (y: 20).
  show: { opacity: 1, y: 0 } // When shown, the element will be fully visible with no shift (y: 0).
};

const EventDetailPage = () => {
  const { eventId } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null);
  const [eventImages, setEventImages] = useState([]); // Store event images
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch event data based on eventId
  const fetchEventData = async () => {
    try {
      const response = await axiosInstance.get(`events/events/${eventId}`);
      setEvent(response.data); // Set the event data
      setLoading(false); // Stop loading
    } catch (err) {
      console.error("Error fetching event data:", err);
      setError("Failed to fetch event details");
      setLoading(false);
    }
  };

  // Fetch event images based on eventId
  const fetchEventImages = async () => {
    try {
      const response = await axiosInstance.get(`eventImages/eventImages/${eventId}`);
      setEventImages(response.data); // Set the event images
    } catch (err) {
      console.error("Error fetching event images:", err);
      setError("Failed to fetch event images");
    }
  };

  useEffect(() => {
    fetchEventData(); // Fetch event details when the component mounts
  }, [eventId]);

  useEffect(() => {
    if (eventId && event) {
      fetchEventImages(); // Fetch event images after event details are fetched
    }
  }, [eventId, event]);

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[50vh] relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${event.cover_image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">{event.name}</h1>
            <div className="flex gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{format(new Date(event.date), "MMMM d, yyyy")}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2 space-y-6">
            <motion.div variants={item} className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">About the Event</h2>
              <p className="text-gray-600 leading-relaxed">{event.description}</p>
            </motion.div>

            <motion.div variants={item} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">Event Gallery</h2>
                {event.externalUrl && (
                  <a
                    href={event.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    Visit Event Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {eventImages.map((image, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="aspect-square rounded-lg overflow-hidden"
                  >
                    <img
                      src={`${image.image_path}`}
                      alt={`Event photo ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventDetailPage;
