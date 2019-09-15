import React from "react";
import classNames from "classnames";
import { IButton, IButtonGroup } from "./Button.interfaces";
import styles from "./Button.module.scss";

const Button = (props: IButton) => {
  const {
    caption,
    className,
    disabled = false,
    loading = false,
    form,
    onClick,
    alt = caption,
    type = "button"
  } = props;

  const isClickable = !disabled && !loading;

  const onClickHandler = () => {
    if (isClickable) {
      onClick();
    }
  };

  return (
    <button
      className={classNames(
        styles.btn,
        caption && styles.btn__hasCaption,
        loading && styles.btn__isLoading,
        disabled && styles.btn__disabled,
        className
      )}
      type={type}
      aria-label={alt}
      form={form}
      onClick={onClick && onClickHandler}
      disabled={!isClickable}
    >
      {caption}
      {/* {loading && <Spinner className={styles.btn_spinner} />} */}
    </button>
  );
};

const ButtonGroup = ({ children, className }: IButtonGroup) => (
  <div className={classNames(styles.btnGroup, className)}>{children}</div>
);

// Button.Group = ButtonGroup;

export { Button };
