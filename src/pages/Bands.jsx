
import './Bands.css';

const bands = [
  { name: 'AC/DC', image: './public/acdc.jpg' },
  { name: 'Guns N Roses', image: './public/gunsnroses.jpg' },
  { name: 'Bon Jovi', image: './public/bonjovi.jpg' },
  { name: 'Aerosmith', image: './public/aerosmith.jpg' },
  { name: 'Whitesnake', image: './public/whitesnake.jpg' },
];

const Bands = () => {
  return (
    <div className="bands-container">
      {bands.map((band) => (
        <div className="band-card" key={band.name}>
          <img src={band.image} alt={band.name} className="band-image" />
          <h3>{band.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Bands;
