import { compose, withStateHandlers } from 'recompose';
import styled from 'styled-components';
import continents from './world-icon.svg';

const TogglableButton = styled.div`
  background-color: ${p => (p.pressed ? 'white' : p.color)};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 70px;
  background-image: url('${continents}');
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 40px;
  margin: 10px;
  border: 2px solid ${p => (p.pressed ? p.color : 'white')};
`;

export default compose(
  withStateHandlers(
    {
      pressed: false,
    },
    {
      onClick: ({ pressed }) => () => ({
        pressed: !pressed,
      }),
    }
  )
)(TogglableButton);
