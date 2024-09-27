import Image, { StaticImageData } from 'next/image';
import { FaStar } from "react-icons/fa";
import bookImg from '../images/bookImg.png';

interface BookCardProps {
  image: StaticImageData;     
  title: string;       
  description: string;  
  rating: number;       
}

const BookCard: React.FC<BookCardProps> = ({ image, title, description, rating }) => {
  const stars = Array(5).fill(0);

  return (
    <div className="bg-white border rounded-lg w-[260px] h-[480px] flex flex-col relative">
      <div className="relative">
        <Image src={image} alt={title} className="h-60 w-full object-cover rounded-t-lg" />
        <div className="absolute top-[92%] left-2 flex items-center rounded-full border border-white shadow-lg bg-white p-1 ml-2">
          {stars.map((_, index) => (
            <FaStar
              key={index}
              className={`${rating > index ? "text-yellow-400" : "text-gray-300"} h-5 w-5`}
            />
          ))}
        </div>
      </div>

      <h3 className="text-xl font-bold mt-4 pl-5 pr-5" style={{fontSize: '16px'}}>{title}</h3>
      <p className="text-gray-700 mt-2 pl-5 pr-5 flex-grow" style={{fontSize: '16px'}}>{description}</p>

      <div className="flex justify-center mb-4">
        <button className="px-5 py-2 w-[220px] bg-[#FFFFFF] text-[#FA5E55] rounded-full font-bold cursor-pointer border border-dashed border-[#FA5E55]">
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
      rating: 4, 
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
      rating: 5,
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
      <section>
        <div className="flex flex-wrap justify-center gap-4 mt-16 mb-16">
          <button className="px-5 py-2 w-40 bg-[#37008E] text-[#BE9BF5] rounded-full font-bold cursor-pointer">
            Show All
          </button>
          <button className="px-5 py-2 w-[109px] bg-[#FFFFFF] text-[#4C4C4C] rounded-full font-bold cursor-pointer border border-dashed border-[#4C4C4C]">
            Sports
          </button>
          <button className="px-5 py-2 w-[109px] bg-[#FFFFFF] text-[#4C4C4C] rounded-full font-bold cursor-pointer border border-dashed border-[#4C4C4C]">
            Dance
          </button>
          <button className="px-5 py-2 w-[109px] bg-[#FFFFFF] text-[#4C4C4C] rounded-full font-bold cursor-pointer border border-dashed border-[#4C4C4C]">
            Music
          </button>
          <button className="px-5 py-2 w-[109px] bg-[#FFFFFF] text-[#4C4C4C] rounded-full font-bold cursor-pointer border border-dashed border-[#4C4C4C]">
            Indoor
          </button>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-[110px]">
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

      <section className="bg-white py-10">
        <div className="flex flex-wrap justify-center mt-4 mb-4">
        <button className="px-5 py-2 w[147px] bg-[#FA5E55] text-[#FFFFFF] rounded-full font-bold cursor-pointer">
            View All
          </button>
        </div>
      </section>
    </>
  );
}
