import { ReactElement, useState } from "react";
import classes from "../css_modules/InputModal.module.css";
import { useNavigate } from "react-router-dom";

type InputModalProps = {
  isOpen: boolean;
};
export default function InputModal({ isOpen }: InputModalProps): ReactElement {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onClick = () => {
    if (name.includes("魔矢") || name.includes("神上")) {
      navigate("/bsmy-route", { state: { name: name } });
    } else if (name.includes("もぶ") || name.includes("モブ")) {
      navigate("/mbbs-route", { state: { name: name } });
    } else {
      navigate("/nomal-route", { state: { name: name } });
    }
  };
  if (isOpen) {
    return (
      <div className={classes.div}>
        <div className={classes.box}>
          <text className={classes.text}>あなたの名前は？</text>
          <input onChange={onChange} />
          <button className={classes.button} onClick={onClick}>
            確定
          </button>
        </div>
      </div>
    );
  }

  return <></>;
}
