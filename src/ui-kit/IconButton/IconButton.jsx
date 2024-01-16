import React, { memo, useMemo } from "react";
import styles from "./IconButton.module.css";

const IconButton = memo((props) => {
  const calculateClassNames = useMemo(() => {
    let newClassNames = [styles.button];
    if (props.isFilled) newClassNames.push(styles["iconFill"]);
    if (props.isNotFilled) newClassNames.push(styles["iconNoFill"]);
    return newClassNames.join(" ");
  }, [props.isFilled, props.isNotFilled]);

  return (
    <button className={calculateClassNames} onClick={props.onClick}>
      {props.icon}
    </button>
  );
});

export default IconButton;
