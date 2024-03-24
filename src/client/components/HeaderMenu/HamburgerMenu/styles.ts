import styled from "styled-components";

interface IProps {
  $opened: boolean;
}

export const Wrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background-color: #7b61ff;
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const Line = styled.span<IProps>`
  display: flex;
  width: 16px;
  border-radius: 6px;
  background-color: white;
  transition: 0.3s;
  position: relative;
  padding: 1.25px 0;

  &::before,
  &::after {
    content: "";
    width: 16px;
    display: flex;
    background-color: white;
    margin: 4px auto;
    transition: 0.3s;
    position: absolute;
    border-radius: 6px;
    padding: 1.25px 0;
  }

  &::before {
    top: -10px;
  }

  &::after {
    top: 1.5px;
  }

  ${(props) =>
    props.$opened
      ? "background-color: #7b61ff; transition: 0.3s; &:before {background-color: white; transform: rotate(0.12turn); top: 0; transition: .3s; top: -3px;} &:after {background-color: white; transform: rotate(0.88turn); top: 0; transition: .3s; top: -3px;}"
      : ""}
`;
