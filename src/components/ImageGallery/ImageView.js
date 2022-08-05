import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wrapper, ImageBox, Btn, BtnBack, Order } from "./styles";

export default function ImageView({
  image,
  setSelectedImageNull,
  previous,
  next,
  length,
  index,
}) {
  return (
    <Wrapper>
      <BtnBack onClick={() => setSelectedImageNull()}>
        <FontAwesomeIcon icon="xmark" />
      </BtnBack>
      <ImageBox>
        <Btn invisible={!(index > 0)} onClick={() => previous()}>
          <FontAwesomeIcon icon="angle-left" />
        </Btn>
        {/* eslint-disable-next-line */}
        <img src={image.urls.regular} />
        <Btn invisible={!(index < length - 1)} onClick={() => next()}>
          <FontAwesomeIcon icon="angle-right" />
        </Btn>
      </ImageBox>
      <Order>
        {index + 1}/{length}
      </Order>
    </Wrapper>
  );
}
