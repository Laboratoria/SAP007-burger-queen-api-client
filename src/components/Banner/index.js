import banner from "../../Images/hamburguer-theme.jpeg";

function Banner({
    className}){
    return (
      <img
        src={banner}
        className={className}
        alt="banner"
      />
    );
  }
  
  export default Banner;