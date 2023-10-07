import Select from "react-select";
import styled from "styled-components";

export const StyledSelect = styled(Select)`
  .react-select__control {
    background-color: ${(props) => props.theme.palette.primary.grey};
    width: 438px;
    border-radius: 10px;
    font-family: "Exo 2", sans-serif;
    padding: 9px 20px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    &:focus: {
      border: 2px solid #7b61ff;
    }
  }

  #react-select-2-listbox , #react-select-3-listbox {
    border: none !important;
    box-shadow: none !important;
  }

  .react-select__option + .css-10wo9uf-option, .css-10wo9uf-option {
    color: white !important;
    width: 438px !important;
    height: 56px;
    padding: 16px 20px !important;
    border-top: 1px solid #242426;
    background-color: ${(props) => props.theme.palette.primary.grey} !important;
    cursor: pointer !important;
    border-radius: inherit !important;
  }

  #react-select-2-option-0 , #react-select-3-option-0 {
    border: 0;
  }

  .react-select__indicator-separator , .css-1u9des2-indicatorSeparator {
    display: none !important; 
  }

  .react-select__indicator , .react-select__dropdown-indicator , .css-1xc3v61-indicatorContainer {
    color: ${(props) => props.theme.palette.primary.text} !important;
  }

   .react-select__option--is-selected  {
      color: white !important;
      width: 438px !important;
      height: 56px;
      padding: 16px 20px !important;
      border-top: 1px solid #242426;
      background-color: ${(props) => props.theme.palette.primary.grey} !important;
      cursor: pointer !important;

      &:hover {
        color: #7B61FF !important;
      }
  }

  .css-d7l1ni-option {
    color: #7B61FF !important;
    width: 438px !important;
    height: 56px;
    padding: 16px 20px !important;
    border-top: 1px solid #242426;
    background-color: ${(props) => props.theme.palette.primary.grey} !important;
    cursor: pointer !important;
  }

  .css-t3ipsp-control:hover , .css-t3ipsp-control {
    border: 2px solid #7b61ff;
  }

`;
