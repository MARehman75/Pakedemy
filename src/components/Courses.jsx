import { Button, Text, Container, HStack, Heading, Input, Stack, VStack, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Course = ({ views, title, imageSrc, id, addToPlaylist, creator, description, lectureCount }) => {
    return (
        <VStack className='course' alignItems={['center', 'flex-start']}>
            <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
            <Heading textAlign={['center', 'left']} maxW={'200px'} size={'md'} fontFamily={'sans-serif'} noOfLines={3}>
                {title}
            </Heading>
            <Text noOfLines={2}>{description}</Text>
            <HStack>
                <Text fontWeight={'bold'} textTransform={'uppercase'}>Creator</Text>
                <Text fontFamily={'body'} textTransform={'uppercase'}>{creator}</Text>
            </HStack>
            <Heading textAlign={'center'} size={'xs'} >{`Lectures - ${lectureCount}`}</Heading>
            <Heading textAlign={'center'} size={'xs'} >{`Views - ${views}`}</Heading>
            <Stack direction={['column', 'row']} alignItems={'center'}>
                <Link to={`/course/${id}`} >
                    <Button colorScheme='yellow'>Watch Now</Button>
                </Link>
                    <Button variant={'ghost'} colorScheme='yellow' onClick={()=>addToPlaylist(id)}>Add to playlist</Button>
            </Stack>
        </VStack>
    )
}

const Courses = () => {
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');
    const categories = [
        'Web Developement',
        "App Developement",
        "Game Developement",
        "Artificial Intelligence",
        "Data Science",
        "Data Structures and Algorithms"
    ]

    const addToPlaylist = () => {
        console.log('Added to playlist')
    }


    return (
        <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
            <Heading m={'8'}>All Courses</Heading>
            <Input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder='Search a Course...' type='text' focusBorderColor='yellow.500' />

            <HStack overflowX={'auto'} paddingY={'8'}>
                {
                    categories.map((item, index) => (
                        <Button minW={'60'} key={index} onClick={() => setCategory(item)} >
                            <Text>{item}</Text>
                        </Button>
                    ))
                }
            </HStack>
            <Stack direction={['column', 'row']} flexWrap={'wrap'} justifyContent={['flex-start', 'space-evenly']} alignItems={['center', 'flex-start']}>
                <Course views={23} title={'Sample'} description={'Sample'} id={'Sample'} imageSrc={'https://cdn.pixabay.com/photo/2012/04/26/14/14/internet-42583_1280.png'} creator={'Sample'} lectureCount={2} addToPlaylist={addToPlaylist} />
            </Stack>
        </Container>
    )
}

export default Courses
