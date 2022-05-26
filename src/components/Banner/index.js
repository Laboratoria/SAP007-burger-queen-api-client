import banner from "../../Images/hamburguer-theme.jpeg";
import "./styles.css"

function Banner(){
    return (
      <img
        src={banner}
        className="banner"
        alt="banner"
      />
    );
  }
  
  export default Banner;