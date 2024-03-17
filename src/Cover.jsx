

const Cover = () => {
  return (
    <div className='container m-auto'>
     <div className="hero  h-screen object-cover rounded-2xl" style={{backgroundImage: 'url(../src/assets/images/cover.png)'}}>
  <div className=""></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="space-y-7">
      <h1 className='text-5xl font-bold text-white leading-normal'>Discover an exceptional cooking <br /> class tailored for you!</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary mr-4 rounded-3xl bg-[#0BE58A] text-black duration-300 hover:bg-neutral-50 hover:border-2 hover:border-white border-transparent">Explore Now</button>
      <button className="btn btn-primary rounded-3xl bg-transparent bg-white text-white duration-300 border border-[#FFFFFF] hover:bg-[#0BE58A]">Our Feedback</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Cover;