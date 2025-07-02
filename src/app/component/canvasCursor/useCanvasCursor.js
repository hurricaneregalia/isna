// src/app/component/canvasCursor/useCanvasCursor.js
"use client";

import { useEffect } from "react";

const useCanvasCursor = () => {
  function Oscillator(config) {
    this.init(config || {});
  }

  Oscillator.prototype = {
    init: function (e) {
      this.phase = e.phase || 0;
      this.offset = e.offset || 0;
      this.frequency = e.frequency || 0.001;
      this.amplitude = e.amplitude || 1;
    },
    update: function () {
      this.phase += this.frequency;
      return this.offset + Math.sin(this.phase) * this.amplitude;
    },
    value: function () {
      return this.offset + Math.sin(this.phase) * this.amplitude;
    },
  };

  function Node() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
  }

  function Line(config) {
    this.init(config || {});
  }

  Line.prototype = {
    init: function (e) {
      this.spring = e.spring + 0.1 * Math.random() - 0.02;
      this.friction = E.friction + 0.01 * Math.random() - 0.002;
      this.nodes = [];
      for (let n = 0; n < E.size; n++) {
        const t = new Node();
        t.x = pos.x;
        t.y = pos.y;
        this.nodes.push(t);
      }
    },
    update: function () {
      let spring = this.spring;
      let t = this.nodes[0];
      t.vx += (pos.x - t.x) * spring;
      t.vy += (pos.y - t.y) * spring;

      for (let i = 0; i < this.nodes.length; i++) {
        t = this.nodes[i];
        if (i > 0) {
          const prev = this.nodes[i - 1];
          t.vx += (prev.x - t.x) * spring;
          t.vy += (prev.y - t.y) * spring;
          t.vx += prev.vx * E.dampening;
          t.vy += prev.vy * E.dampening;
        }

        t.vx *= this.friction;
        t.vy *= this.friction;
        t.x += t.vx;
        t.y += t.vy;

        spring *= E.tension;
      }
    },
    draw: function () {
      if (!ctx) return;

      let e, t;
      let n = this.nodes[0].x;
      let i = this.nodes[0].y;
      ctx.beginPath();
      ctx.moveTo(n, i);

      for (let a = 1; a < this.nodes.length - 2; a++) {
        e = this.nodes[a];
        t = this.nodes[a + 1];
        n = 0.5 * (e.x + t.x);
        i = 0.5 * (e.y + t.y);
        ctx.quadraticCurveTo(e.x, e.y, n, i);
      }

      e = this.nodes[this.nodes.length - 2];
      t = this.nodes[this.nodes.length - 1];
      ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
      ctx.stroke();
      ctx.closePath();
    },
  };

  function onMousemove(e) {
    function createLines() {
      lines = [];
      for (let i = 0; i < E.trails; i++) {
        lines.push(new Line({ spring: 0.4 + (i / E.trails) * 0.025 }));
      }
    }

    function handleMove(e) {
      if (e.touches) {
        pos.x = e.touches[0].pageX;
        pos.y = e.touches[0].pageY;
      } else {
        pos.x = e.clientX;
        pos.y = e.clientY;
      }
      e.preventDefault();
    }

    function handleTouchStart(e) {
      if (e.touches.length === 1) {
        pos.x = e.touches[0].pageX;
        pos.y = e.touches[0].pageY;
      }
    }

    document.removeEventListener("mousemove", onMousemove);
    document.removeEventListener("touchstart", onMousemove);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("touchmove", handleMove);
    document.addEventListener("touchstart", handleTouchStart);

    handleMove(e);
    createLines();
    render();
  }

  function render() {
    if (!ctx || !ctx.running || !Array.isArray(lines) || lines.length === 0) return;

    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";

    ctx.strokeStyle = `hsla(${Math.round(f.update())}, 50%, 50%, 0.2)`;
    ctx.lineWidth = 1;

    for (let t = 0; t < E.trails; t++) {
      const line = lines[t];
      if (!line) continue;
      line.update();
      line.draw();
    }

    ctx.frame++;
    window.requestAnimationFrame(render);
  }

  function resizeCanvas() {
    if (!ctx || !ctx.canvas) return;
    ctx.canvas.width = window.innerWidth - 20;
    ctx.canvas.height = window.innerHeight;
  }

  let ctx, f;
  let pos = { x: 0, y: 0 };
  let lines = [];
  let E = {
    debug: true,
    friction: 0.5,
    trails: 20,
    size: 50,
    dampening: 0.25,
    tension: 0.98,
  };

  const renderCanvas = () => {
    const canvas = document.getElementById("canvas");
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    ctx.running = true;
    ctx.frame = 1;

    f = new Oscillator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });

    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("touchstart", onMousemove);
    document.body.addEventListener("orientationchange", resizeCanvas);
    window.addEventListener("resize", resizeCanvas);

    // ✅ Reset canvas dan lines saat kembali fokus
    window.addEventListener("focus", () => {
      if (!ctx.running) {
        ctx.running = true;
      }

      lines = [];
      for (let i = 0; i < E.trails; i++) {
        lines.push(new Line({ spring: 0.4 + (i / E.trails) * 0.025 }));
      }

      render();
    });

    resizeCanvas();
  };

  useEffect(() => {
    renderCanvas();

    return () => {
      ctx.running = false;
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("touchstart", onMousemove);
      document.body.removeEventListener("orientationchange", resizeCanvas);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
};

export default useCanvasCursor;
