import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import $ from "jquery";

const MatterAttractor = () => {
  const canvasRef = useRef(null);
  let engine, runner, render, attractiveBody;

  useEffect(() => {
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    Matter.use("matter-attractors");
    Matter.use("matter-wrap");

    engine = Matter.Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;

    render = Matter.Render.create({
      element: canvasRef.current,
      engine: engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
      },
    });

    runner = Matter.Runner.create();
    const world = engine.world;
    world.gravity.scale = 0;

    attractiveBody = Matter.Bodies.circle(
      render.options.width / 2,
      render.options.height / 2,
      Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
      {
        isStatic: true,
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6,
              };
            },
          ],
        },
      }
    );

    Matter.World.add(world, attractiveBody);

    for (let i = 0; i < 60; i++) {
      let x = Matter.Common.random(0, render.options.width);
      let y = Matter.Common.random(0, render.options.height);
      let s = Matter.Common.random(4, 60);
      let polygonNumber = Matter.Common.random(3, 6);

      let body = Matter.Bodies.polygon(x, y, polygonNumber, s, {
        mass: s / 20,
        friction: 0,
        frictionAir: 0.02,
        render: { fillStyle: "#222222" },
      });

      Matter.World.add(world, body);
    }

    const mouse = Matter.Mouse.create(render.canvas);
    Matter.Events.on(engine, "afterUpdate", () => {
      if (!mouse.position.x) return;
      Matter.Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(engine.world);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={canvasRef} className="absolute inset-0" />;
};

export default MatterAttractor;
