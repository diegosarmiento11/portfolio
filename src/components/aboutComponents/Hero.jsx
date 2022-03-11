import axios from "axios";
import { useState, useEffect } from "react";

const baseUrl = "https://www.breakingbadapi.com/api";

const Hero = () => {
  const [post, setPost] = useState(null);
  console.log(post);

  useEffect(() => {
    axios.get(`${baseUrl}/characters`).then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return null;

  const mapingData = (data) => {
    return data.map((data) => <li key={data.id}>{data.name}</li>);
  };

  return (
    <>
      <div className="hero min-h-screen ">
        <div className="text-center hero-content">
          <div className="artboard phone-4 bg-white">
            <ul>{mapingData(post)}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
