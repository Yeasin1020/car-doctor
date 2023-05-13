import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
// import img5 from '../../../assets/images/banner/5.jpg'
// import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full rounded-lg " />
        <div
          className="absolute rounded-lg flex justify-between w-full h-full  p-8 bottom-0
		 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]"
        >
          <div className="text-white space-y-7 mt-20">
            <h2 className="text-6xl font-bold">
              Affordable <br></br> Price For Car <br></br> Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-outline btn-primary mr-5">
                Discover more
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest project
              </button>
            </div>
          </div>
          <div className=" mt-[500px] mb-4">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle ml-5 bg-orange-700">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-lg " />
        <div
          className="absolute rounded-lg flex justify-between w-full h-full  p-8 bottom-0
		 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]"
        >
          <div className="text-white space-y-7 mt-20">
            <h2 className="text-6xl font-bold">
              Affordable <br></br> Price For Car <br></br> Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-outline btn-primary mr-5">
                Discover more
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest project
              </button>
            </div>
          </div>
          <div className=" mt-[500px] mb-4">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle ml-5 bg-orange-700">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-lg " />
        <div
          className="absolute rounded-lg flex justify-between w-full h-full  p-8 bottom-0
		 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]"
        >
          <div className="text-white space-y-7 mt-20">
            <h2 className="text-6xl font-bold">
              Affordable <br></br> Price For Car <br></br> Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-outline btn-primary mr-5">
                Discover more
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest project
              </button>
            </div>
          </div>
          <div className=" mt-[500px] mb-4">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle ml-5 bg-orange-700">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-lg " />
        <div
          className="absolute rounded-lg flex justify-between w-full h-full  p-8 bottom-0
		 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]"
        >
          <div className="text-white space-y-7 mt-20">
            <h2 className="text-6xl font-bold">
              Affordable <br></br> Price For Car <br></br> Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-outline btn-primary mr-5">
                Discover more
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest project
              </button>
            </div>
          </div>
          <div className=" mt-[500px] mb-4">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle ml-5 bg-orange-700">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
