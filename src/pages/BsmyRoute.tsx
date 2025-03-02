import { useLocation, useNavigate } from "react-router-dom";
import classes from "./css_modules/App.module.css";
import { useState } from "react";
import normal from "../img/normal.png";
import kime from "../img/kime.png";
import kinniku from "../img/kinniku.png";
import nikkori from "../img/nikkori.png";
import seisou from "../img/seisou.png";

export default function BsmyRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || "";
  const [serifIndex, setSerifIndex] = useState(0);
  const serif = [
    `ほう、${name}殿と申すか！\nなに、名を知らねば告白も出来ぬからな！`,
    `改めて、${name}殿！お主ほど愛らしく可憐な女子は初めて見た。\nどうか拙僧と婚姻の契りを交わしてほしいのである！`,
    "見よ、この筋肉を！いかなる敵が来ようとお主を守り通してみせるのである！",
    "…なんと！許してくれるのであるか！\nありがたい。生涯大切にし、愛し抜くと誓おうぞ！",
    "【おまけ】\n後日改めて求婚するぶっしー",
  ];
  const backgroundImage = [
    `url(${normal})`,
    `url(${kime})`,
    `url(${kinniku})`,
    `url(${nikkori})`,
    `url(${seisou})`,
  ];
  const onClick = () => {
    if (serifIndex < 4) {
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
