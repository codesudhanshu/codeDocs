import React, { useContext } from 'react'
import Editor from './Editor'
import { Box, styled } from '@mui/material'
import { DataContext } from '../context/DataProvider'

const Container = styled(Box)`
display:flex;
background-color: #060606`

const Code = () => {
    const {html,sethtml,css,setcss,javascript,setjavascript} = useContext(DataContext)
  return (
   <Container>
   <Editor heading="HTML" icon="/" background="red" value={html} onChange={sethtml}/>
   <Editor heading="CSS" icon="*" background="#0EBEFF" value={css} onChange={setcss}/>
   <Editor heading="Javascript" icon="()" background="#FCD000" value={javascript} onChange={setjavascript}/>
   </Container>
  )
}

export default Code
