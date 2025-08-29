import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // const Gallery = () => {
  // const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Generate images dynamically from /public/image/1.jpg to 202.jpg
  const galleryImages = Array.from({ length: 24 }, (_, i) => ({
    src: `/image/${i + 1}.jpg`, // will resolve to public/image/1.jpg ... 202.jpg
    alt: `Image ${i + 1}`,
    category: "", // or null if you want "none"
  }));

  return (
    <section
      id="gallery"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl sm:text-5xl font-heading font-bold gradient-text-primary mb-6">
          Gallery
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore moments from our workshops, competitions, and innovative
          projects.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl glass neon-border aspect-[4/3] cursor-pointer transition-all duration-500 transform hover:scale-105 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-heading font-semibold">{image.alt}</h3>
                <p className="text-sm text-muted-foreground capitalize">
                  {image.category}
                </p>
              </div>
              <div className="absolute top-4 right-4">
                <ZoomIn className="h-6 w-6 text-white" />
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-xl shadow-glow-primary"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
            >
              <X className="h-6 w-6 text-foreground" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
