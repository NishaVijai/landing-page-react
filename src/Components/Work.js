import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text:
        "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
    },
    {
      image: ChooseMeals,
      title: "Choose Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et "
    },
    {
      image: DeliveryMeals,
      title: "Delivery Meals",
      text:
        "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum"
    }
  ];
  return (
    <section className="work-section-wrapper">
      <section className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </section>
      <section className="work-section-bottom">
        {workInfoData.map((data) => (
          <section className="work-section-info">
            <section className="info-boxes-image-container">
              <img src={data.image} alt="" />
            </section>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Work;
