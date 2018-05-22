import React from "react"
import styled from "styled-components"
import { InfoText } from "theme/globalStyle"

const Wrapper = styled.div`
  /* text-align: start; */
  display: flex;
  flex-direction: row;
  /* flex-wrap */
  /* justify-content: start; */
`

const TextWrapper = styled.div`
  display: flex;
  /* justify-content: center; */

`

const BlockDetail = ({ timestamp, producer }) => (
  <Wrapper>
    <TextWrapper>
      produced by
      <InfoText>{producer}</InfoText>
    </TextWrapper>
    <TextWrapper>
      at
      <InfoText>{timestamp}</InfoText>
    </TextWrapper>
  </Wrapper>
)

export default BlockDetail