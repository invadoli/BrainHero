import bookImg from '../images/bookImg.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface BookCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  rating: number;
}

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} className="text-yellow-400 h-4 w-4" />);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 h-4 w-4" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-300 h-4 w-4" />);
    }
  }
  return stars;
};

const BookCard: React.FC<BookCardProps> = ({ image, title, description, rating }) => {
  return (
    <div className="bg-white border rounded-lg w-[240px] h-[460px] flex flex-col relative transition-shadow duration-300">
      <div className="relative">
        <Image src={image} alt={title} className="h-60 w-full object-cover rounded-t-lg" />
        <div className="absolute top-[230px] left-[10px] flex items-center rounded-full bg-white p-1 shadow-md">
          {renderStars(rating)}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-[#2D292A] font-bold mb-1 h-[40px]">{title}</h3>
        <p className="text-[#4C4C4C] text-sm h-[80px] overflow-hidden">{description}</p>
      </div>

      <div className="flex justify-center mb-4">
        <button className="px-5 py-2 w-[80%] bg-[#FFFFFF] text-[#FA5E55] rounded-full font-bold border border-dashed border-[#FA5E55] transition-colors duration-300 hover:bg-[#FA5E55] hover:text-white">
          Start Reading
        </button>
      </div>
    </div>
  );
};

export default function BookCards() {
  const books = [
    {
      image: bookImg, 
      title: "Troy's Sweet Surprise",
      description: "Troy saves the day when a beautiful girl's ice cream falls to the ground.",
      rating: 4.5, 
    },
    {
      image: bookImg,
      title: "The Cosmic Quest",
      description: "In this thrilling adventure, Bora and friends living in space must find a way to send back the aliens who have invaded their home.",
      rating: 5,
    },
    {
      image: bookImg,
      title: "The Magical Adventure of Etan in Pristina",
      description: "Join Etan on an exciting adventure in Pristina, Kosovo, as he navigates through challenges.",
      rating: 4.5,
    },
    {
      image: bookImg,
      title: "The Secret of RioVerde",
      description: "In the heart of the Amazon rainforest, 11-year-old Sophia uncovers an ancient artifact that holds the key...",
      rating: 4,
    },
  ];

  return (
    <>
    <section className="bg-white py-10">
      <div className=" mx-auto ml-[170px] mr-[170px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
          {books.map((book, index) => (
            <BookCard
              key={index}
              image={book.image}
              title={book.title}
              description={book.description}
              rating={book.rating}
            />
          ))}
        </div>
      </div>
    </section>
    <section>
      <Link href="/login">
        <div className='flex items-center justify-center mb-16'>
          <button  className="px-5 py-2 w-[126px] bg-[#FA5E55] text-white rounded-full font-bold cursor-pointer border-none">
            View All
          </button>
        </div>
      </Link>
    </section>
    </>
  );
}
