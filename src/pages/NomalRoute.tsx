import { useLocation, useNavigate } from "react-router-dom";
import classes from "./css_modules/App.module.css";
import { useState } from "react";
import img from "../img/normal.png";
import logo from "../img/logo.png";

export default function NomalRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || "";
  const [serifIndex, setSerifIndex] = useState(0);
  const serif = [
    `ほう、${name}殿と申すか。良き名であるな！\n改めて、これからよろしく頼むのである！`,
  ];
  const backgroundImage = [`url(${img})`, `url(${logo})`];
  const onClick = () => {
    if (serifIndex < 1) {
      setSerifIndex(serifIndex + 1);
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className={classes.div}
      style={{ backgroundImage: backgroundImage[serifIndex] }}
    >
      <button className={classes.button} onClick={onClick} />
      {serifIndex < 1 && (
        <div className={classes.serif}>
          <text className={classes.text}>{serif[serifIndex]}</text>
        </div>
      )}
    </div>
  );
}
