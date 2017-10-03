import React from 'react';
import { map, range } from 'lodash';
import { pure } from 'recompose';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 1px;
  overflow: hidden;
`;

const StyledComponent = styled.div`
  display: inline-block;
  width: ${p => p.value}px;
  height: 1px;
  ${'' /* border: 1px solid; */};
`;

const PileOfOtherStyles = () => (
  <Wrapper>
    {map(range(1000), value => <StyledComponent value={value} key={value} />)}
  </Wrapper>
);

export default PileOfOtherStyles;
