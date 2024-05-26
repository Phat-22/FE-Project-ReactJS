import React from "react";

const AboutUs = () => {
    return (
      <main>
        <section>
          <div className="about__banner">
            <img src="./assets/images/banner-about.jpg" alt="banner" />
            <div className="about__intro container">
              <div className="img_heading">
                <h1>CarDealer</h1>
              </div>
            </div>
          </div>
          <div className="about--info">
            <div className="info__left">
              <div className="img_banner">
                <img src="./assets/images/banner-about1.webp" alt="banner" />
              </div>
              <div className="info__p">
                <h1>CarDealer</h1>
  
                <p>
                  CarDealer is the world expert in producing exceptional junior
                  cars in partnership with the most elite car manufacturers. This
                  unique partnership guarantees that every vehicle is an official
                  licensed product of the brand. We expertly hand-build each car
                  in the UK, and it is this level of care and attention that
                  delivers the stunning quality for which we are famed. Our brand
                  philosophy is to produce beautiful cars that allow our clients
                  to share the love of driving across generations, and encourage
                  every driver to create memorable experiences today and for years
                  to come. Behind the scenes, our production team brings together
                  a culmination of exceptional engineering expertise from a range
                  of testing environments. Their attention to detail and eye for
                  quality are matched only by their inventive spirit, meaning
                  every vehicle that rolls out of the manufacturing facility
                  features that little bit of engineering magic, befitting of the
                  marques they are representing. Meanwhile, the client services
                  team is on hand to ensure we deliver a personalised customer
                  experience that is second-to-none. We believe in building a
                  community amongst little car owners, and that is why every
                  client receives a lifetime membership to CarDealer Club.
                </p>
              </div>
            </div>
          </div>
  
          <div className="container about--info__mobile hidden">
            <div className="img_banner--mobile">
              <img src="./assets/images/banner-about1.webp" alt="banner" />
            </div>
            <div className="info__p--mobile">
              <h1>CarDealer</h1>
  
              <p>
                CarDealer is the world expert in producing exceptional junior cars
                in partnership with the most elite car manufacturers. This unique
                partnership guarantees that every vehicle is an official licensed
                product of the brand. We expertly hand-build each car in the UK,
                and it is this level of care and attention that delivers the
                stunning quality for which we are famed. Our brand philosophy is
                to produce beautiful cars that allow our clients to share the love
                of driving across generations, and encourage every driver to
                create memorable experiences today and for years to come. Behind
                the scenes, our production team brings together a culmination of
                exceptional engineering expertise from a range of testing
                environments. Their attention to detail and eye for quality are
                matched only by their inventive spirit, meaning every vehicle that
                rolls out of the manufacturing facility features that little bit
                of engineering magic, befitting of the marques they are
                representing. Meanwhile, the client services team is on hand to
                ensure we deliver a personalised customer experience that is
                second-to-none. We believe in building a community amongst little
                car owners, and that is why every client receives a lifetime
                membership to CarDealer Club.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  };
  export default AboutUs;