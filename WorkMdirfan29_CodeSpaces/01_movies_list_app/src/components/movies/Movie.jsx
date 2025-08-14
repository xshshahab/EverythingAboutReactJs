import { useState } from 'react';
import md from "../../data/movie_list.json";
import Card from '../card/Card';
import Button from '../button/Button';

const Movie = () => {
  const [movieData, setMovieData] = useState(md);
  const handleUpdate=()=>{
    setMovieData(movieData.map((mv )=> mv.title === "Interstellar"? {...mv, title: "I N T E R S T E A L L A R"}:mv));

  }
  const handleDelete=()=>{
    setMovieData(movieData.filter((mv)=>mv.title !=="The Shawshank Redemption"))
  }

  return (
    <div className="p-8 container mx-auto max-w-7xl bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Movie List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movieData.map(({ id, title, image, description, rating, name }) => (
          <Card
            key={id}
            desc={description}
            rating={rating}
            title ={title}
            name={name}
            img={image}
          />
          
        ))}
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Button onClick={handleUpdate}>Update</Button>
      <Button className='destructive' onClick={handleDelete}>Delete</Button>
      </div>
    </div>
  );
};

export default Movie;
