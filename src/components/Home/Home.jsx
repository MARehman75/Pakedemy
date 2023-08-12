import { Heading, Text, Button, Stack, VStack, Image, Box, HStack } from '@chakra-ui/react'
import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import vg from '../../assets/images/bg.png'
import {CgGoogle, CgYoutube} from 'react-icons/cg'
import {SiCoursera, SiUdemy} from 'react-icons/si'
import {DiAws} from 'react-icons/di'
import introVideo from '../../assets/videos/intro.mp4'


const Home = () => {
  return (
    <section className='home'>
        <div className="container">
            <Stack direction={['column', 'row']}
            height={'100%'}
            justifyContent={['center', 'space-between']}
            alignItems={'center'}
            spacing={['16', '56']}>
                <VStack width={'full'} alignItems={['center', 'flex-end']} spacing={'6'}>
                    <Heading >LEARN FROM THE EXPERTS</Heading>
                    <Text fontFamily={'cursive'} textAlign={['center', 'left']}>Get training of market leading technologies at fare prices</Text>
                    <Link to='/courses'>
                        <Button size={'lg'} colorScheme='yellow'>Explore Now</Button>
                    </Link>
                </VStack>
                <Image className='vector-graphics' boxSize={'sm'} src={vg} objectFit={'contain'}/>
            </Stack>
        </div>
        <Box padding={'8'} bg={'blackAlpha.800'} >
            <Heading textAlign={'center'} fontFamily={'body'} color={'yellow.400'} >OUR PARTNERS</Heading>
            <HStack className='partnerBanner' justifyContent={'space-evenly'} marginTop={'4'}>
                <CgGoogle/>
                <CgYoutube/>
                <SiCoursera/>
                <SiUdemy/>
                <DiAws/>
            </HStack>
        </Box>
        <div className="container2">
            <video src={introVideo} 
            autoPlay={false} 
            controls 
            controlsList='nodownload noremotedplayback nofullscreen'
            disablePictureInPicture
            disableRemotePlayback></video>
        </div>
    </section>
  )
}

export default Home
