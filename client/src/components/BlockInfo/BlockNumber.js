import React from "react"
import styled from "styled-components"
import { fromTheme } from "helper"

const Wrapper = styled.div`
  background: ${fromTheme("primary")};
  color: ${fromTheme("white")};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5em;
  width: 10em;
`

const BlockNumber = ({ blockNumber }) => (
  <Wrapper>
    Block {blockNumber}
  </Wrapper>
)

export default BlockNumber