import github from "./assets/github.png";
import logo from "./assets/logo.png";
import linkedin from "./assets/linkedin.png";
import arrow from "./assets/arrow.png";
import moi from "./assets/moi.png";
import ghw from "./assets/ghw.png";
import ld from "./assets/ld.png";
import be from "./assets/be.png";
import { useEffect } from "react";
// import second from 'script.js'

function App() {
  useEffect(() => {
    var canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var stars = [], // Array that contains the stars
      FPS = 30, // Frames per second
      x = 70; // Number of stars

    // Push stars to array

    for (var i = 0; i < x; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
      });
    }

    // Draw the scene

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighter";

      for (var i = 0, x = stars.length; i < x; i++) {
        var s = stars[i];

        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.stroke();
      }

      ctx.beginPath();
      for (var i = 0, x = stars.length; i < x; i++) {
        var starI = stars[i];
        ctx.moveTo(starI.x, starI.y);
        for (var j = 0, x = stars.length; j < x; j++) {
          var starII = stars[j];
          if (distance(starI, starII) < 150) {
            //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
            ctx.lineTo(starII.x, starII.y);
          }
        }
      }
      ctx.lineWidth = 0.05;
      ctx.strokeStyle = "white";
      ctx.stroke();
    }

    function distance(point1, point2) {
      var xs = 0;
      var ys = 0;

      xs = point2.x - point1.x;
      xs = xs * xs;

      ys = point2.y - point1.y;
      ys = ys * ys;

      return Math.sqrt(xs + ys);
    }

    // Update star locations

    function update() {
      for (var i = 0, x = stars.length; i < x; i++) {
        var s = stars[i];

        s.x += s.vx / FPS;
        s.y += s.vy / FPS;

        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
      }
    }

    // Update and draw

    function tick() {
      draw();
      update();
      requestAnimationFrame(tick);
    }

    tick();
  }, []);

  return (
    <main className="flex flex-col scroll-smooth">
      <div className="flex flex-row">
        <nav className=" h-screen flex flex-col items-center justify-between p-1 sm:max-w-[5vw] lg:min-w-16 bg-white sticky top-0 z-20">
          <img
            src={logo}
            alt="toto1"
            className="w-full mt-2"
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
        <div className="relative">
          <div className="h-screen bg-black flex flex-col items-center">
            <canvas
              id="canvas"
              className="z-0 w-full h-screen bg-[#232323] absolute"
            ></canvas>
            <header className="flex flex-row items-center justify-between border-b-2 border-purp lg:h-[8%] font-semibold w-full z-20">
              <p className=" pl-5 text-xl capitalize text-purp xl:text-5xl h-fit">
                Nathan CARLINI
              </p>
              <a href="#contact">
                <div className="flex h-full items-center bg-purp px-8 py-4 text-lg xl:text-2xl ">
                  <p>Contact</p>
                </div>
              </a>
            </header>

            <div className="p-2 lg:p-6 items-center flex flex-col h-full justify-between z-20">
              <div className="flex flex-col justify-between gap-8  w-full h-fit pt-16">
                <p className="ml-5 grow-0 text-2xl font-extrabold text-white sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl z-20">
                  Student
                </p>
                <p className="ml-5 font-sans text-6xl font-black text-purp  md:text-7xl lg:text-7xl xl:text-8xl">
                  WEB & APP <br />
                  &emsp; DEVELOPPER
                </p>
                <p className="ml-5 grow-0 text-xl text-white sm:text-4xl lg:text-4xl xl:text-5xl">
                  Webdev and communication student based in Limoges, I
                  specialize mainly in ReactJS and Next.
                </p>
              </div>
            </div>
            <img src={arrow} className="w-7 aspect-square mb-3 z-20" />
          </div>
          <div className="bg-black h-screen flex flex-col w-full items-center">
            <p className="ml-5 font-sans text-6xl font-black text-white pt-8 md:text-6xl lg:text-6xl xl:text-7xl text-left">
              {" "}
              Projects
            </p>
            <div className="gap-6 flex flex-row space-evenly grow items-center pb-24">
              <a href="https://github.com/NathanCarlini/SAE301">
                <div className=" text-white text-center text-2xl font-black hover:">
                  <div className="box overflow-hidden aspect-video h-24 lg:h-56 xl:h-64 bg-cover bg-SAEcc hover:bg-SAEccc">
                    <div className="backdrop-blur-sm h-full w-full top-full hid-box relative transition ease-in-out delay-300 text-white leading-loose">
                      Langages : <br /> - HTML <br /> - JS <br /> - PHP &
                      Symphony
                    </div>
                  </div>
                  Création d'un Site <br /> E-commerce
                </div>
              </a>
              <a href="https://github.com/NathanCarlini/SAE303">
                <div className=" text-white text-center text-2xl font-black hover:">
                  <div className="box overflow-hidden aspect-video h-24 lg:h-56 xl:h-64 bg-cover bg-SAEdv hover:bg-SAEdvc">
                    <div className="backdrop-blur-sm h-full w-full top-full hid-box relative transition ease-out delay-300 text-white leading-loose">
                      Langages : <br /> - HTML <br /> - JS <br />
                    </div>
                  </div>
                  Data visualisation en JS
                </div>
              </a>
              <a href="https://github.com/NathanCarlini/OrionsHalosis">
                <div className=" text-white text-center text-2xl font-black hover:">
                  <div className="box overflow-hidden aspect-video h-24 lg:h-56 xl:h-64 bg-cover bg-SAEoh hover:bg-SAEohc">
                    <div className="backdrop-blur-sm h-full w-full top-full hid-box relative transition ease-out delay-300 text-white leading-loose">
                      Langages : <br /> - HTML <br />
                      <p> - JS (Express, Node) </p>
                      <br /> - NextJS
                    </div>
                  </div>
                  Jeu multijoueur tour par tour
                </div>
              </a>
            </div>
          </div>
          <div
            className="h-screen w-full bg-black flex flex-col items-center"
            id="contact"
          >
            <p className="ml-5 font-sans text-6xl font-black text-white pt-8 md:text-6xl lg:text-6xl xl:text-7xl text-left">
              {" "}
              Contact
            </p>
            <div className="flex flex-row">
              <img src={moi} className="" />
              <div className="flex flex-col items-center">
                <p className="mt-16 ml-5 text-2xl text-white leading-loose">
                  Je suis un étudiant en troisième année d'un Bachelor
                  Universitaire de Technologie en Métiers du Multimédia et de
                  l'Internet (BUT MMI). En cursus développement, je me concentre
                  principalement sur du web, du design de sites, de la mise en
                  place de CMS, et du dev front et back. Mais pas que ! La
                  création de motion designs, la gestion de projet ou encore la
                  mise en place de stratégies de communication font aussi partie
                  de mes compétences. <br />
                  <br />
                  J'ai effectué un stage de 2 mois en 2023 dans une
                  entreprise de développement web et d'application basée à
                  Clermont-Ferrand nomméee <a href="https://becoms.tech/" className="text-yellow-500">Becoms</a>. J'ai eu l'ocasion de
                  travailler sur un projet d'IoT de banc connecté avec de
                  multiples APIs, majoritairement en React, Express et Python.
                </p>
                <p className="text-4xl font-extrabold text-center mt-24 text-white">
                  Je suis présent sur :
                </p>
                <div className="flex flex-row gap-8 mt-12 w-full justify-center">
                  <a href="https://github.com/NathanCarlini/">
                    <img src={ghw} className="aspect-square w-16"></img>
                  </a>
                  <a href="https://fr.linkedin.com/in/nathan-carlini-116a55220">
                    <img src={ld} className="aspect-square w-16"></img>
                  </a>
                  <a href="https://www.behance.net/sgt339">
                    <img src={be} className=" w-24"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
