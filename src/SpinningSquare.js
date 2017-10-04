import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const SpinningSquare = styled.span`
  height: 100px;
  width: 100px;  
  background:#ccc;
  display: inline-block;
  animation: ${rotate360} 2s infinite linear; 
}
`

export default SpinningSquare
