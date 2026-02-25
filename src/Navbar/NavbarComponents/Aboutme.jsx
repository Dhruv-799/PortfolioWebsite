import React from 'react'
import { Box, Typography } from '@mui/material'
import '../../assets/pfp.jpeg'
import Image from 'mui-image'
import pfp from '../../assets/pfp.jpeg'

const Aboutme = () => {
  return (
    <Box className='aboutSection'>
      <Image src={pfp} width='fit-content' height={300} showLoading  fit='contain'/>
        <Box>
          <Typography variant="h4">Summary</Typography>
          <Typography variant="body1">
            I am a highly motivated and dedicated individual with a strong passion for software development. I have a solid foundation in programming languages such as JavaScript, Python, and Java, and I am constantly seeking opportunities to expand my knowledge and skills in the field. I am a quick learner and thrive in collaborative environments, where I can contribute my ideas and work effectively with others to achieve common goals. With a keen eye for detail and a commitment to delivering high-quality work, I am confident in my ability to make a positive impact in any software development project.
          </Typography>

        </Box>
    </Box>
  )
}

export default Aboutme


