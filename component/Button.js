import { Button } from '@mui/material'

import styled from '@emotion/styled'
 
export const RegularButton = styled(Button)({
      backgroundColor: "white",
      outline: 'none',
      border: '1px solid black',
      color: 'black',
      textTransform: 'initial',
      padding: '.5em 1em',
      height: '30px',
      fontWeight: '500 !important',
      // width: "10em",
      boxSizing:"border-box",
      
      '&:hover': {
            cursor: 'pointer',
            backgroundColor:'white-smoke'
            
      }


})