import styled, { injectGlobal } from "styled-components"
import { fromTheme } from "helper"

export const theme = {
  primary: '#41403e',
  secondary: '#0071de',
  success: '#86a361',
  danger: '#a7342d',
  warning: '#ddcd45',
  info: '#33b5e5',
  light: '#f4f4f4',
  dark: '#222',
  black: 'black',
  white: 'white'
}

export const Button = styled.button`
  font-size: 1rem;
  padding: 0.25rem 1rem;
  margin: 0 1 rem;
  height: 30px;
  background: transparent;
  color: ${fromTheme("primary")};
  border: 2px solid ${fromTheme("primary")};
  cursor: pointer;
  &:hover {
    background: ${fromTheme("dark")};
    color: ${fromTheme("white")};
  }
`
export const H3 = styled.h3`
  font-size: 1rem;
`

export const InfoText = styled.div`
  color: ${fromTheme("success")};
  margin-left: 0.4rem;
`

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    background: #f7f7f7;
  }

  h1 {
    font-family: Montserrat;
  }
`