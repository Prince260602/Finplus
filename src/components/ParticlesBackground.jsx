import React, { useEffect, useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const [particlesOptions, setParticlesOptions] = useState(null);

  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing tsParticles engine...");
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log("Particles loaded:", container);
  }, []);

  useEffect(() => {
    const loadParticlesConfig = async () => {
      try {
        const response = await fetch("/particles.json");
        if (!response.ok) {
          throw new Error("Failed to fetch particles.json");
        }
        const data = await response.json();
        setParticlesOptions(data);
      } catch (error) {
        console.error("Error loading particles.json:", error);
      }
    };

    loadParticlesConfig();
  }, []);

  if (!particlesOptions) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
