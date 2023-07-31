import {  Accordion, AccordionDetails, AccordionSummary, Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CompAcc() {

  const [data, setData] = useState({
    header: '',
    details: ''
  })

  // console.log(data);
  const [formData, setFormData] = useState([])

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData([...formData, data])
    setData({
      header: '',
      details: ''
    })
  }

  console.log(formData);

  return (
    <>
      <div className='row'>
        <div className='col-md-6'>
          <form onSubmit={handleSubmit} >
            <Box sx={{ border: '1px solid gray', margin: '20px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '20px', color: 'primary' }}>Add Section</Typography>
              <Typography>Section Header</Typography>
              <TextField sx={{ margin: '10px 0' }} name='header' onChange={handleChange} value={data.header}></TextField>
              <Typography>Section Details</Typography>
              <TextField sx={{ margin: '10px 0' }} multiline rows={4} name='details' onChange={handleChange} value={data.details} />
              <Button type='submit' variant='contained'>Add</Button>
            </Box>
          </form>
        </div>


        <div className='col-md-6'>
          {formData?.map((d, i) => {
            return <><Accordion key={i} sx={{ margin: '20px', padding: '20px' }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>{d.header}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {d.details}
                      </AccordionDetails>
                    </Accordion>
                    </> 
            
          })}
        </div>
      </div>
    </>
  )
}

export default CompAcc