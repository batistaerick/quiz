import Link from "next/link";
import styles from "../../styles/Button.module.css";

import { FC } from "react";

interface ButtonProps {
  href?: string;
  text: string;
  onClick?: (event: any) => void;
}

const Button: FC<ButtonProps> = ({ href, text, onClick }) => {
  const renderButton = () => {
    return (
      <button className={styles.customButton} onClick={onClick}>
        {text}
      </button>
    );
  };
  return href ? <Link href={href}>{renderButton()}</Link> : renderButton();
};

export default Button;
