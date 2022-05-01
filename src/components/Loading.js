import React from 'react'
import styled, { keyframes } from 'styled-components'

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Spinner = styled.div`
  height: 3rem;
  width: 3rem;
  padding: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  box-sizing: border-box;
`

const anima1 = keyframes`
  0%   { transform: rotateZ(20deg) rotateY(0deg); }
  100% { transform: rotateZ(100deg) rotateY(360deg); }
`
const anima2 = keyframes`
  0%   { transform: rotateZ(100deg) rotateX(0deg); }
  100% { transform: rotateZ(0deg) rotateX(360deg); }
`
const anima3 = keyframes`
  0%   { transform: rotateZ(100deg) rotateX(-360deg); }
  100% { transform: rotateZ(-360deg) rotateX(360deg); }
`

const Circle = styled.div`
  position: absolute;
  display: block;
  border-radius: 50%;
  border-width: 3px;
  border-style: solid;
  opacity: 1;
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  border-color: var(--border);

  &:nth-child(1) {
    height: 3rem;
    width: 3rem;
    animation-name: ${anima1};
    border-width: 3px;
  }
  &:nth-child(2) {
    height: calc(3rem * 0.65);
    width: calc(3rem * 0.65);
    animation-name: ${anima2};
    border-width: 2px;
  }
  &:nth-child(3) {
    height: calc(3rem * 0.1);
    width: calc(3rem * 0.1);
    animation-name: ${anima3};
    border-width: 1px;
  }
`

export default function Loading() {
  return (
    <SpinnerWrapper>
      <Spinner>
        <Circle />
        <Circle />
        <Circle />
      </Spinner>
    </SpinnerWrapper>
  )
}
