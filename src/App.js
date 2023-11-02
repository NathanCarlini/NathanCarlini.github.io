import github from './assets/github.png'
import logo from './assets/logo.png'
import linkedin from './assets/linkedin.png'

function App() {
  return (
    <main className="flex flex-row">
      <nav className="flex h-screen flex-col items-center justify-between p-1 sm:max-w-[5vw] lg:min-w-16 bg-white">
        <img
          src={logo}
          alt="toto1"
          className="w-full mt-2 "
          width={1020}
          height={1046}
        />
        <div className="m-3">
          <a href="https://github.com/NathanCarlini">
            <img
              src={github}
              alt="toto"
              className=" aspect-square w-full"
              width={1059}
              height={1059}
            />{" "}
          </a>
          <a href="https://www.linkedin.com/in/nathan-carlini/">
            <img
              src={linkedin}
              alt="toto"
              className=" aspect-square w-full"
              width={1059}
              height={1059}
            />
          </a>
        </div>
      </nav>
      <div className="grow bg-black">
        <header className="flex flex-row items-center justify-between border-b-2 border-purp lg:h-[8%] font-semibold">
          <p className="p-4 pl-5 text-xl capitalize text-purp xl:text-5xl">
            Nathan CARLINI
          </p>
          <div className="flex h-full items-center bg-purp px-8 py-4 text-lg xl:text-2xl ">
            <p>Contact</p>
          </div>
        </header>


        <div className="p-2 lg:p-6">
          <div className="lg: flex flex-col justify-center gap-8 pt-16">
            <p className="ml-5 grow-0 text-2xl font-extrabold text-white sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl">
              Student
            </p>
            <p className="ml-5 font-sans text-6xl font-black text-purp  md:text-7xl lg:text-7xl xl:text-8xl">
              WEB & APP <br />
              &emsp; DEVELOPPER
            </p>
            <p className="ml-5 grow-0 text-xl text-white sm:text-4xl lg:text-4xl xl:text-5xl">
              Webdev and communication student based in Limoges, I specialize
              mainly in ReactJS and Next.
            </p>
          </div>
        </div>


      </div>
    </main>
  );
}

export default App;
