import { useState } from "react";
import InputModal from "../components/InputModal";
import classes from "./css_modules/App.module.css";
import img from "../img/normal.png";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.div} style={{ backgroundImage: `url(${img})` }}>
      <button
        className={classes.button}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <div className={classes.serif}>
        <text
          className={classes.text}
        >{`カカカカ！拙僧は山伏国広と申す！\nお主が新たな主殿であるか。\n名を伺っても宜しいか？`}</text>
      </div>
      <InputModal isOpen={isOpen} />
    </div>
  );
}
