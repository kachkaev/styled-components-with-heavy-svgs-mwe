import { compose, withStateHandlers } from 'recompose';
import styled from 'styled-components';

const TogglableButton = styled.div`
  transform: translate3d(0, 0, 0);
  background-color: ${p => (p.pressed ? 'white' : p.color)};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 70px;
  ${p => p.backgroundImage ? `background-image: url('${p.backgroundImage }');`: ''}
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
