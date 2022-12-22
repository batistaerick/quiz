import Link from "next/link";
import styles from "../../styles/Button.module.css";

import { FC } from "react";

interface ButtonProps {
  href?: string;
  text: string;
  onClick?: (event: any) => void;
}

const Button: FC<ButtonProps> = ({ href, text, onClick }) => {
  const button = () => {
    return (
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
    );
  };
  return href ? <Link href={href}>{button()}</Link> : button();
};

export default Button;
