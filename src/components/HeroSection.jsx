import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import kspynx from '../assets/kspynx.png';
import '../App.scss';  // Import your SCSS file

const style = {
  fontFamily: 'Orbitron, sans-serif',
};
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      {/* Background Image Section */}
      <div 
        className="bg-cover bg-center  w-full" 
      >
        {/* Content centered on top of the background */}
        <div className="flex justify-center items-center h-full text-white text-3xl text-center">
          <div className="flex">
            <img src={kspynx} width="100%" height="100%" alt="Logo" />
            <div className="flex items-center" style={style}>
            <span className="glitch" data-text="Cyberpunk Sphinx: The Meme Coin of Tomorrow, Powered by the Lightning-Fast Kaspa Network!">
                Cyberpunk Sphinx: The Meme Coin of Tomorrow, Powered by the Lightning-Fast Kaspa Network!
              </span>            
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
