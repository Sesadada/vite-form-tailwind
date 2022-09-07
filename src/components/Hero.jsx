import bg from '../assets/photo1.jpg';

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <img src={bg} alt="background" className="w-full h-full object-cover " />
    </div>
  );
};

export default Hero;
