'use client'

import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  background-color: black;
  color: white;
`;

const moving = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
`;

const Text = styled.span`
  display: inline-block;
  padding-right: 100%;
  font-size: 30px;
  animation: ${moving} 10s linear infinite;
`;

const NewsTicker = ({ text }: { text: string }) => (
  <Wrapper>
    <Text>{text}</Text>
    <Text>{text}</Text>
  </Wrapper>
);

export default NewsTicker;