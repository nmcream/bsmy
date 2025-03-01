import { useLocation, useNavigate } from "react-router-dom";
import classes from "./css_modules/App.module.css";
import { useState } from "react";

export default function MbbsRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || "";
  const [serifIndex, setSerifIndex] = useState(0);
  const serif = [
    `…${name}？他の拙僧から聞き覚えがあるのである。\nあまり良いうわさではなかったが………`,
    "主殿！拙僧と共に山籠もりをしようぞ！\n山で修業をすればお主の煩悩も消え失せよう！",
  ];
  const onClick = () => {
    if (serifIndex < 2) {
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
