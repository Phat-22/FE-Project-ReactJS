const Banner = ({ src_img }) => {
  return (
    <section className="section--slider">
      <div className="slider__01">
        <img src={src_img} alt="banner 01" />
      </div>
    </section>
  );
};

export default Banner;
