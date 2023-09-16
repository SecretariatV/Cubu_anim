import { useRef } from "react";
import { CSSProperties } from "react";
import animation from "./css/export.module.css";
import "./App.css";

function App() {
  const elecRef = useRef<HTMLDivElement>(null);

  interface MyCustomCSS extends CSSProperties {
    "--i": number;
  }

  const array = new Array(36).fill(null);

  return (
    <div
      className="min-h-screen w-screen bg-black relative perspective"
      ref={elecRef}
    >
      {array.map((key, id) => {
        return (
          <div
            className={`${animation.cube_anim} duration-[16s] absolute h-[800px] w-[800px] path top-0 left-0 mask`}
            style={{ "--i": id } as MyCustomCSS}
          />
        );
      })}
    </div>
  );
}

export default App;
