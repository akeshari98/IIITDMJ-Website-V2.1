import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ExternalLink,
  Calendar,
  MapPin,
  Clock,
  X,
  ChevronLeft,
  ChevronRight,
  Youtube
} from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import axiosInstance from "../../axios";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const isYouTubeUrl = (url) => {
  const youTubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
  return youTubeRegex.test(url);
};

const getYouTubeVideoId = (url) => {
  try {
    return new URL(url).searchParams.get('v');
  } catch (error) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }
};

const EventDetailPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [eventImages, setEventImages] = useState([]);
  const [eventVideos, setEventVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const fetchEventData = async () => {
    try {
      const response = await axiosInstance.get(`events/events/${eventId}`);
      setEvent(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching event data:", err);
      setError("Failed to fetch event details");
      setLoading(false);
    }
  };

  const fetchEventMedia = async () => {
    try {
      const response = await axiosInstance.get(
        `eventImages/eventImages/${eventId}`
      );
      // Separate videos and images
      const media = response.data;
      const videos = media.filter(item => isYouTubeUrl(item.image_path));
      const images = media.filter(item => !isYouTubeUrl(item.image_path));
      
      setEventVideos(videos);
      setEventImages(images);
    } catch (err) {
      console.error("Error fetching event media:", err);
      setError("Failed to fetch event media");
    }
  };

  useEffect(() => {
    fetchEventData();
  }, [eventId]);

  useEffect(() => {
    if (eventId && event) {
      fetchEventMedia();
    }
  }, [eventId, event]);

  const openCarousel = (index) => {
    setCurrentImageIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % eventImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + eventImages.length) % eventImages.length
    );
  };

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Existing header section */}
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
            {/* About section */}
            <motion.div
              variants={item}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold mb-4">About the Event</h2>
              <p className="text-gray-600 leading-relaxed">
                {event.description}
              </p>
            </motion.div>

            {/* Videos section */}
            {eventVideos.length > 0 && (
              <motion.div
                variants={item}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h2 className="text-2xl font-semibold mb-4">Event Videos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {eventVideos.map((video, index) => (
                    <div key={index} className="space-y-2">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${getYouTubeVideoId(video.image_path)}`}
                          title={`Event video ${index + 1}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full"
                        ></iframe>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Images section */}
            {eventImages.length > 0 && (
              <motion.div
                variants={item}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
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
                      className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => openCarousel(index)}
                    >
                      <img
                        src={image.image_path}
                        alt={`Event photo ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Existing carousel modal */}
      {isCarouselOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" onClick={closeCarousel}>
          <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity" />
          
          <div className="fixed inset-0 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeCarousel}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <div className="relative w-full max-w-4xl max-h-[80vh] flex items-center justify-center px-16">
              <img
                src={eventImages[currentImageIndex]?.image_path}
                alt={`Event photo ${currentImageIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
              {currentImageIndex + 1} / {eventImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetailPage;