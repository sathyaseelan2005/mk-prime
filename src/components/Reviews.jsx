import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const reviews = [
  {
    name: 'Karthik',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    rating: 5,
    text: 'Excellent work! Very professional team. They completed the work on time with perfect finish.',
  },
  {
    name: 'Suresh Babu',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
    text: 'Good quality work and very reasonable price. Highly recommended.',
  },
  {
    name: 'Prem Kumar',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    rating: 5,
    text: 'Very satisfied with their service. Team was very good and friendly.',
  },
  {
    name: 'Ramesh K',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80',
    rating: 5,
    text: 'Outstanding service! The team was polite, arrived on time, and did an amazing job with the texture painting.',
  },
  {
    name: 'Anita',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 4,
    text: 'Really happy with the waterproofing work. They explained the process clearly and the finish is excellent.',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-10 md:py-16 bg-blue-50">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">Customer Reviews</h2>
          </motion.div>

          {/* Overall Rating Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <div className="w-28 h-28 bg-primary text-white rounded-full flex flex-col items-center justify-center shadow-lg">
              <span className="text-4xl font-bold mb-1">4.8</span>
              <span className="text-xs opacity-80">Out of 5</span>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-secondary fill-secondary" />
                ))}
              </div>
              <span className="text-text/70 font-medium text-lg">Based on 120+ Reviews</span>
            </div>
          </motion.div>

          {/* Swiper Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              speed={4000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-secondary/30 !w-3 !h-3',
                bulletActiveClass: '!bg-secondary !w-8 !rounded-full',
              }}
              navigation={false}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="pb-16 continuous-slider"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div className="bg-primary border border-gray-800 shadow-md rounded-2xl p-8 h-full flex flex-col text-white transition-all duration-300 hover:shadow-xl">
                    {/* Author */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white text-2xl font-bold uppercase shrink-0">
                        {review.name.charAt(0)}
                      </div>
                      <div className="font-bold text-white text-lg">{review.name}</div>
                    </div>

                    {/* Review Text */}
                    <p className="text-white/80 leading-relaxed mb-6 flex-grow">
                      {review.text}
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1 mt-auto">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
