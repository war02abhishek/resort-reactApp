import React, { Component } from 'react'
import {useParams} from "react-router-dom"
import Hero from '../components/Hero'
import defaultBcg from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import { RoomContext } from '../context'
import useGlobalContext from '../context'

import StyledHero from '../components/StyledHero'

export default function SingleRoom (){
    const {slug} = useParams();
    const {getRoom} = useGlobalContext();
    const room = getRoom(slug);//according to slug whether room get found or not.. If found destruct its props
    console.log(slug);
    console.log(room);
    if(!room) {
        return <div className="error">
            <h3>No such room found</h3>
            <Link to ="/rooms" className="btn-primary">
                Back To Rooms
            </Link>
        </div>
    }

    //if room is their then destruct the properties  //all are in my room object
    const {name, description, capacity, maxSize, price,
    extras, breakfast, pets, images} = room;
    const [mainImg, ...defaultImg] = images; //we are doing array destructing
    //console.log(defaultImg)  //defaultIMg is array of rest of images except the mainImgae(mainBadewale)

    
    
    return (
      <>
        {/* by using styledHero our application get improved before styled hero we were using <Hero hro='roomsHero'> */}
        {/* using 'roomshero' class name we are adding imges link manuallly so ots not easy to operate 
        you are ruining your time like every time you want to change your data you have to run over your CSS file and that particular class
        But We have a Optimal  soln i.e Styled Components */}
        {/* Styled Components allow us to insert data dynamically */}

        {/* This Single room components will become very large without styled components as for every room we have seperate backgrnd images and seperate data */}

        {/* As in styledComponents we have use props name as'img' so we are using her img={mainimg} */}
        {/* <StyledHero img={images[0]}>*/}
        <StyledHero img={mainImg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back To Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((image, index) => {
              return <img key={index} src={image} alt="image" />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price : ${price}</h6>
              <h6>Size : ${maxSize}</h6>
              <h6>
                Max Capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>

              {/* //conditional rendering */}
              <h6>{pets ? "Pets allowed" : "No pets allowed"}</h6>
              <h6>{breakfast && "Free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>-{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
}
