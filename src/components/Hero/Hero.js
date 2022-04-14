import "./Hero.css"

const Hero = ({imageUrl}) => {
  return (
    <div className="hero">
        <img 
          src={imageUrl} 
          alt="Travel"
          className="hero__image"
        />
        <h1 className="hero__title">Travel Made Simple.</h1>
        
    </div>
  )
}

export default Hero