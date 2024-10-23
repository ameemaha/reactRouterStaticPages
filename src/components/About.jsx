import React from "react";
import { FaPeopleGroup  } from "react-icons/fa6";
import { FaIndustry } from "react-icons/fa6";
import { FaBuildingShield } from "react-icons/fa6";

const About = () => {
  return <div className="container mt-5">
  <h1>About Innomatics Research Labs</h1>
  <p>Innomatics Research Labs is a pioneer in “Transforming Career and Lives” of individuals in the Digital Space by catering advanced training on NASSCOM FutureSkills Prime Certified Data Science, Machine Learning, Artificial Intelligence (AI), Full Stack Development, Amazon Web Services (AWS), DevOps, Microsoft Azure, Big data Analytics, and Digital Marketing. We are passionate about bridging the gap between learning and real-time implementation, so empowering individuals to be industry-ready and help firms in reaping huge benefits is our primary goal.</p>
  <div className="row">
    <div className="col-lg-3 col-md-3 col-sm-6">
      <FaPeopleGroup style={{color:"red",fontSize:"30px"}}  />
      <h1>5000+</h1>
      <h5>Trainees</h5>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-6">
      <FaPeopleGroup style={{color:"red",fontSize:"30px"}}  />
      <h1>400+</h1>
      <h5>Students</h5>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-6">
      <FaBuildingShield  style={{color:"red",fontSize:"30px"}}  />
      <h1>300+</h1>
      <h5>Partnered Companies</h5>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-6">
      <FaIndustry  style={{color:"red",fontSize:"30px"}}  />
      <h1>500+</h1>
      <h5>Industry Connections</h5>
    </div>
  </div>
</div>;
};

export default About;
