import React from 'react';
import { Carousel } from 'antd';


const testimonials = [
  {
    text: "This e-learning app has changed the way I study. It's engaging and interactive, making learning fun!",
    author: "Awa Fominyam",
    image: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
  },
  {
    text: "I love the variety of courses available. The quizzes and practice tests have really helped me prepare for exams.",
    author: "Blaise Mbah",
    image: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
  },
  {
    text: "The app's user interface is easy to navigate. I can access my courses anytime, anywhere!",
    author: "Claire Ndansi",
    image: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
  },
  {
    text: "The tutors are highly knowledgeable and always willing to help. This app has been a game-changer for me.",
    author: "Derrick Njoh",
    image: "https://cdn.dribbble.com/users/1572751/screenshots/19232173/media/f95f5676571b30e0b79d23e5d75b78d7.jpg?resize=400x300&vertical=center"
  },
  {
    text: "The personalized learning paths are fantastic. I can focus on my weak areas and improve quickly.",
    author: "Esther Ebai",
    image: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
  },
  {
    text: "Sidec has made learning so much easier and more accessible. I'm very grateful for this platform.",
    author: "Francois Biya",
    image: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
  },
];

const TestimonialCard = () => {
  return (
    <div className="testimonial-carousel w-full max-w-screen-lg mx-auto">
      <Carousel autoplay>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-card  p-8 text-center mx-4 md:mx-0">
              <img src={testimonial.image} alt={testimonial.author} className="testimonial-image w-24 h-24 rounded-full mx-auto mb-6 object-cover" />
              <p className="testimonial-text text-gray-700 italic mb-4">"{testimonial.text}"</p>
              <p className="testimonial-author text-[#404660] font-semibold">- {testimonial.author}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCard;
