import "./HeroSection.scss";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="partOne">
      <div className="rightSide">
        <h2>We are changing the way people shop</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <button onClick={() => navigate("/products")}>our products</button>
      </div>

      <div className="leftSide">
        <img src="/heroimg.png" alt="hero-sectionImg" />{" "}
      </div>
    </div>
  );
};

export default HeroSection;
