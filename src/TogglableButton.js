import { compose, withStateHandlers } from 'recompose';
import styled from 'styled-components';

const TogglableButton = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: ${p => (p.pressed ? 'white' : p.color)};
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
