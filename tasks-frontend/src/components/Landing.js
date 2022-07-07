function Landing() {
  return (
    <div className="p-3">
      <div className="flex flex-col justify-center sm:flex-row ">
        <img
          className="sm:w-96 sm:h-96 sm:justify-start"
          src="\businessman-holding-todo-list.png"
          alt="work"
        />
        <div className="m-auto">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl pb-3">
            Ruffled By Your Tasks??
          </h1>
          <p className="text-lg lg:text-4xl ">
            This is the tool for you. <br /> Easily manage and plan your tasks.
            <br /> With the <i className="font-bold">Tasks</i> WebApp
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
