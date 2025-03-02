import { useLocation, useNavigate } from "react-router-dom";
import classes from "./css_modules/App.module.css";
import { useState } from "react";
import bikkuri from "../img/bikkuri.png";
import syugyo from "../img/syugyo.png";
import omake from "../img/omake.png";

export default function MbbsRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || "";
  const stuttering = name.slice(0, 1);
  const [serifIndex, setSerifIndex] = useState(0);
  const serif = [
    `…${stuttering}、${name}？他の拙僧から聞き覚えがあるのである。\nまさか拙僧に何かするつもりではあるまいな………`,
    "…コホン！\n主殿！拙僧と共に山籠もりをしようぞ！\n山で修業をすればお主の煩悩も消え失せよう！",
    "【おまけ】\n変態主の主命にドン引きするぶっしー",
  ];
  const backgroundImage = [
    `url(${bikkuri})`,
    `url(${syugyo})`,
    `url(${omake})`,
  ];
  const onClick = () => {
    if (serifIndex < 2) {
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
      <div className={classes.serif}>
        <text className={classes.text}>{serif[serifIndex]}</text>
      </div>
    </div>
  );
}
