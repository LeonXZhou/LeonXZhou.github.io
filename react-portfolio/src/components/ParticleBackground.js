import Particles from "react-tsparticles";

export default function ParticleBackground(props) {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
      <Particles
        id="tsparticles"
        // init={particlesInit}
        // loaded={particlesLoaded}
        options={{
          // background: {
          //   color: {
          //     value: "#0d47a1",
          //   },
          // },
          fpsLimit: 60,
          interactivity: {
            modes: {
              repulse: {
                distance: 100,
                duration: .4,
              },
            },
          },
          particles: {
            color: {
              value: "#0F0F0F",
            },
            links: {
              color: "#0F0F0F",
              distance: 250,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 30,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
          style:{
            'z-index':-1,
            'height': '100vh',
            'position':'absolute',
          }
        }} />
  );
};