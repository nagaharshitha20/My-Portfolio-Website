"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";

export default function UniverseBackground() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  if (init) {
    return (
      <Particles
        id="universe-bg"
        particlesLoaded={particlesLoaded}
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
              resize: {
                enable: true,
              },
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
                width: 800,
                height: 800,
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

  return <></>;
}
