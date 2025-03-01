import { useLocation, useNavigate } from "react-router-dom";
import classes from "./css_modules/App.module.css";
import { useState } from "react";

export default function BsmyRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || "";
  const [serifIndex, setSerifIndex] = useState(0);
  const serif = [
    `ほう、${name}殿と申すか！\nなに、名を知らねば告白も出来ぬからな！`,
    `改めて、${name}殿！お主ほど愛らしく可憐な女子は初めて見た。\nどうか拙僧と婚姻の契りを交わしてほしいのである！`,
    "…なんと！許してくれるのであるか！\nありがたい、生涯大切にし、愛し抜くと誓おうぞ！",
  ];
  const onClick = () => {
    if (serifIndex < 3) {
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
