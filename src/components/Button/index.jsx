import './styles.css';

import { Component } from "react";

export const Button = ({ text, onClick, disabled }) => (
  <button
    className='button'
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);