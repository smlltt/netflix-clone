import React, { FC } from "react";
import cx from "classnames";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface PaginationButtonProps {
  handleClick: () => void;
  buttonType: "previous" | "next";
}

const PaginationButton: FC<PaginationButtonProps> = ({
  handleClick,
  buttonType,
}) => {
  return (
    <div
      className={cx(
        "absolute top-20 z-50 cursor-pointer text-white opacity-0 transition hover:opacity-100",
        buttonType === "next" ? "-right-12" : "-left-12"
      )}
      onClick={handleClick}
    >
      {buttonType === "next" ? (
        <BsChevronRight size={50} />
      ) : (
        <BsChevronLeft size={50} />
      )}
    </div>
  );
};

export default PaginationButton;
