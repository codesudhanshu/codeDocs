import React, { useContext} from 'react'
import { DataContext } from '../context/DataProvider'
import {Box} from '@mui/material'


const Result = () => {
    const {html,css,javascript} = useContext(DataContext)
    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${javascript}</script>
        </html>
    `
  return (
    <Box height="41vh">
        <iframe srcDoc={srcCode} frameborder={0} title='output' sandbox='allow-scripts' height="100%" width="100%" />
    </Box>
  )
}

export default Result
