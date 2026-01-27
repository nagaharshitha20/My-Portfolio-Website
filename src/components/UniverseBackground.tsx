"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function UniverseBackground() {
  const init = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="universe-bg"
      init={init}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          // color: "#000000",
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: {
            value: 90,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#ff9800", "#ff4081", "#00eaff", "#a855f7"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.4,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.08,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
