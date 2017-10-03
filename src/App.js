import { map } from 'lodash';
import React, { Component } from 'react';
import styled from 'styled-components';

import TogglableButton from './TogglableButton';

const Wrapper = styled.div``;
const RowOfButtons = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        {map(['#7fc97f', '#beaed4', '#fdc086', '#fb8072'], color => (
          <RowOfButtons key={color}>
            {map(['x', 'y', 'z'], irrelevantProp => (
              <TogglableButton
                key={irrelevantProp}
                color={color}
                irrelevantProp={irrelevantProp}
              />
            ))}
          </RowOfButtons>
        ))}
      </Wrapper>
    );
  }
}

export default App;
