import React from "react";
import Image from "../assets/bro.svg";
import "../styles/Section.css";

const Text = () => {
  return (
    <div className="container d-flex">
      <div>
        <div className="align-items-center">
          <h1>Manage your Tasks on</h1>
          <h1 className="main-heading">TaskDuty</h1>
        </div>
        <p className="text w-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit illo,
          quod odio necessitatibus architecto amet. Inventore, cupiditate
          doloribus debitis magnam iure assumenda consectetur velit optio cumque
          laborum aut totam enim.
        </p>
        <button type="button" className="btn btn-info">
          Go to My Task
        </button>
      </div>
      <div>
        <div className="d-flex">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Text;
