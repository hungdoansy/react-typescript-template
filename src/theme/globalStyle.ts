import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  #__next {
    width: 100%;
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .textTruncate {
    max-width: 100%;
    overflow: hidden !important;
    word-wrap: normal !important;
    white-space: nowrap !important;
    text-overflow: ellipsis !important;
  }

  button {
    background: none;
    border: none;
    outline: none;
    font-size: inherit;
    color: inherit;
    border-radius: 0;
  }

  button, input {
    margin: 0;
    padding: 0;
  }

  [role=button], a:hover, button {
    cursor: pointer;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  textarea:focus, input:focus{
    outline: none;
}
`

export default GlobalStyle
