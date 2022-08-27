import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  padding: ${(props) => props.padding || `15px 46px`};
  background: ${(props) =>
    props?.disabled ? "#eda0a4" : props.background || `#f16063`};
  cursor: ${(props) => (props?.disabled ? "not-allowed" : "pointer")};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : `pointer`)};
  color: ${(props) => props.color || `#ffffff`};
  border: ${(props) =>
    `${props.borderWidth || 1}px solid ${props.outline} !important ` ||
    `0 !important`};
`;

const Button = ({
  style,
  padding,
  outline,
  color,
  content,
  background,
  onClick,
  borderWidth,
  disabled,
}) => {
  return (
    <Wrapper
      background={background}
      color={color}
      style={style}
      padding={padding}
      outline={outline}
      onClick={disabled ? "" : onClick}
      borderWidth={borderWidth}
      disabled={disabled}
    >
      {content}
    </Wrapper>
  );
};

export default Button;
