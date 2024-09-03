import { useState, useEffect } from "react";

function App() {
  // Retrieve the color from localStorage or default to 'olive'
  const [color, setColor] = useState(() => {
    return localStorage.getItem("backgroundColor") || "olive";
  });

  useEffect(() => {
    // Store the selected color in localStorage
    localStorage.setItem("backgroundColor", color);
  }, [color]);

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex justify-center bottom-12 inset-x-0 px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 shadow-lg bg-white p-2 md:p-3 rounded-2xl md:rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-3 py-1 md:px-4 md:py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-3 py-1 md:px-4 md:py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-3 py-1 md:px-4 md:py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              onClick={() => setColor("olive")}
              className="outline-none px-3 py-1 md:px-4 md:py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>

            <button
              onClick={() => setColor("gray")}
              className="outline-none px-3 py-1 md:px-4 md:py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "gray" }}
            >
              Gray
            </button>

            <button
              onClick={() => setColor("pink")}
              className="outline-none px-3 py-1 md:px-4 md:py-2 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>

            <button
              onClick={() => setColor("purple")}
              className="outline-none px-3 py-1 md:px-4 md:py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>

            <button
              onClick={() => setColor("lavender")}
              className="outline-none px-3 py-1 md:px-4 md:py-2 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "lavender" }}
            >
              Lavender
            </button>

            <button
              onClick={() => setColor("white")}
              className="outline-none px-3 py-1 md:px-4 md:py-2 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>

            <button
              onClick={() => setColor("black")}
              className="outline-none px-3 py-1 md:px-4 md:py-2 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
