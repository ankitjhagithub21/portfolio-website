

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <section className="text-center p-10">
          <h1 className="text-4xl font-bold">Ankit Kumar Jha</h1>
          <p className="mt-4 text-2xl">Full Stack Developer | MERN</p>
          <p className="mt-2 mb-6 text-xl">
            I build scalable and user-friendly web applications.
          </p>
          <a href="/contact" className="cursor-pointer">
            <button className="btn btn-primary btn-lg">
              Hire Me
            </button>
          </a>
        </section>
      </div>
      
    </div>
  );
};

export default Home;
