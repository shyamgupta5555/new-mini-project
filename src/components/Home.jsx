import React from "react";
import vg from "../assects/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

export function Home() {
  return (
    <>
      <div className="home" id ="home">
        <main>
          <h1>shyam tecky</h1>
          <p>Solution to all your problem</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            we are your one and only solution to the the tech problem you face
            every day . we are leading tech company whose aim is to increase the
            problem solving ability in children
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1> who w are ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            aliquid debitis adipisci excepturi repudiandae aperiam pariatur,
            modi sequi libero ipsam. Quasi est nostrum at eaque dicta numquam
            incidunt soluta necessitatibus! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptatum, ducimus molestias quos,
            error vitae vel distinctio sit reiciendis, culpa molestiae assumenda
            totam eos esse! Voluptatibus sequi quis impedit ullam odit.
          </p>
        </div>
      </div>


      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillFacebook />
              <p>FaceBook</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>

     
    </>
  );
}
