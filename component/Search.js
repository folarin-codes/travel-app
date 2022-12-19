import { Box } from '@mui/material'

import styled from '@emotion/styled'



export const SearchBox = styled(Box)({
      background: 'linear-gradient(135deg,#ff690f 0%,#e8381b 100%)',
      borderRadius: '5px',
      display: 'flex',
      justifyItems: 'center',
      padding: '.5em',
      
      '&:hover': {
            cursor:'pointer'
      }
      

})