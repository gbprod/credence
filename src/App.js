import { useState } from "react";
import "./App.css";
import { Motif } from "./Motif";

function App() {
  const colors = ["#B7CDC1", "#96B788", "#66CCDB"];
  const [predef, setPredef] = useState(true);
  const [color1, setColor1] = useState("#66CCDB");
  const [color14, setColor14] = useState("#66CCDB");

  const [color2, setColor2] = useState("#96B788");
  const [color5, setColor5] = useState("#96B788");
  const [color6, setColor6] = useState("#96B788");
  const [color7, setColor7] = useState("#96B788");
  const [color8, setColor8] = useState("#96B788");
  const [color9, setColor9] = useState("#96B788");
  const [color10, setColor10] = useState("#96B788");
  const [color12, setColor12] = useState("#96B788");
  const [color15, setColor15] = useState("#96B788");

  const [color3, setColor3] = useState("#B7CDC1");
  const [color11, setColor11] = useState("#B7CDC1");

  const [color4, setColor4] = useState("#66CCDB");
  const [color13, setColor13] = useState("#66CCDB");

  return (
    <div className="App">
      <div>
        <div onChange={(e) => setPredef(e.target.value === "true")}>
          <input
            type="radio"
            value={true}
            name="predef"
            defaultChecked={true}
          />
          Prédefinies
          <input type="radio" value={false} name="predef" /> Libre
        </div>
      </div>
      <div>
        Ronds{" "}
        <Picker
          predef={predef}
          onChange={(event) => {
            setColor1(event.target.value);
            setColor14(event.target.value);
          }}
          defaultValue={color1}
        />
        Fond
        <Picker
          predef={predef}
          onChange={(event) => {
            setColor8(event.target.value);
            setColor15(event.target.value);
            setColor10(event.target.value);
            setColor2(event.target.value);
            setColor12(event.target.value);
            setColor6(event.target.value);
            setColor5(event.target.value);
            setColor7(event.target.value);
            setColor9(event.target.value);
          }}
          defaultValue={color8}
        />
        Carré
        <Picker
          predef={predef}
          onChange={(event) => {
            setColor3(event.target.value);
            setColor11(event.target.value);
          }}
          defaultValue={color3}
        />
        Arabesque
        <Picker
          predef={predef}
          onChange={(event) => {
            setColor4(event.target.value);
            setColor13(event.target.value);
          }}
          defaultValue={color4}
        />
      </div>

      <div style={{ whiteSpace: "nowrap" }}>
        {Array.from(Array(20).keys()).map((val) => (
          <Motif
            rotate={val % 2 ? "90" : "0"}
            color1={color1}
            color2={color2}
            color3={color3}
            color4={color4}
            color5={color5}
            color6={color6}
            color7={color7}
            color8={color8}
            color9={color9}
            color10={color10}
            color11={color11}
            color12={color12}
            color13={color13}
            color14={color14}
            color15={color15}
          ></Motif>
        ))}
      </div>

      <div style={{ whiteSpace: "nowrap" }}>
        {Array.from(Array(20).keys()).map((val) => (
          <Motif
            rotate={val % 2 ? "180" : "270"}
            color1={color1}
            color2={color2}
            color3={color3}
            color4={color4}
            color5={color5}
            color6={color6}
            color7={color7}
            color8={color8}
            color9={color9}
            color10={color10}
            color11={color11}
            color12={color12}
            color13={color13}
            color14={color14}
            color15={color15}
          ></Motif>
        ))}
      </div>

      <div style={{ marginTop: "40px" }}>
        <Motif
          rotate={0}
          color1={color1}
          color2={color2}
          color3={color3}
          color4={color4}
          color5={color5}
          color6={color6}
          color7={color7}
          color8={color8}
          color9={color9}
          color10={color10}
          color11={color11}
          color12={color12}
          color13={color13}
          color14={color14}
          color15={color15}
        ></Motif>
      </div>
    </div>
  );
}

const Picker = ({ onChange, predef, defaultValue }) => {
  if (predef)
    return (
      <select onChange={(event) => onChange(event)} defaultValue={defaultValue}>
        <option value="#B7CDC1">Gris</option>
        <option value="#96B788">Vert</option>
        <option value="#66CCDB">Turquoise</option>
      </select>
    );

  return (
    <input
      type="color"
      onChange={(event) => onChange(event)}
      defaultValue={defaultValue}
    />
  );
};
export default App;
