import { useLocation, useNavigate } from "react-router-dom";
import classes from "./css_modules/App.module.css";
import { useState } from "react";

export default function NomalRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || "";
  const [serifIndex, setSerifIndex] = useState(0);
  const serif = [
    `ほう、${name}殿と申すか。良き名であるな！\n改めて、これからよろしく頼むのである！`,
  ];
  const onClick = () => {
    if (serifIndex < 1) {
      setSerifIndex(serifIndex + 1);
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <button className={classes.button} onClick={onClick} />
      <div className={classes.serif}>
        <text className={classes.text}>{serif[serifIndex]}</text>
      </div>
    </div>
  );
}
