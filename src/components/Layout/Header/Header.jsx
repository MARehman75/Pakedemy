import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react'
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill, RiProfileFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'


const MenuLinks = ({ url, title, onClose }) => (
    <Link to={url} onClick={onClose}>
        <Button variant={'ghost'} >{title}</Button>
    </Link>
)

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isAuthenticated = true;
    const user = {
        role: 'admin'
    }

    const handleLogout = () => {
        console.log('Logout');
        onClose();
    }

    return (
        <>
            <ColorModeSwitcher />
            <Button
                onClick={onOpen}
                colorScheme='yellow'
                height={'12'}
                width={'12'}
                rounded={'full'}
                position={'fixed'}
                top={'6'}
                left={'6'}>

                <RiMenu5Fill />
            </Button>
            <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth={'1px'}>Pakedemy</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={'4'} alignItems={'flex-start'}>
                            <MenuLinks url='/' title='Home' onClose={onClose}/>
                            <MenuLinks url='/courses' title='Browse All Courses' onClose={onClose}/>
                            <MenuLinks url='/request' title='Request a Course' onClose={onClose}/>
                            <MenuLinks url='/contact' title='Contact Us' onClose={onClose}/>
                            <MenuLinks url='/about' title='About Us' onClose={onClose}/>

                            <HStack justifyContent={'space-evenly'} position={'absolute'} bottom={'2rem'} width={'80%'}>
                                {isAuthenticated ? (<>
                                    <VStack>
                                        <HStack>
                                            <Link to={'/profile'} onClick={onClose}>
                                                <Button variant={'ghost'} colorScheme='yellow'>
                                                    <RiProfileFill />
                                                    Profile
                                                </Button>
                                            </Link>
                                            <Button variant={'ghost'} onClick={handleLogout}>
                                                <RiLogoutBoxLine />
                                                Logout
                                            </Button>
                                        </HStack>
                                        {user && user.role === "admin" &&
                                            (<Link to={'/admin/dashboard'} onClick={onClose}>
                                                <Button colorScheme='purple' variant={'ghost'}>
                                                    <RiDashboardFill style={{ margin: '4px' }} />
                                                    Dashboard
                                                </Button>
                                            </Link>)}
                                    </VStack>
                                </>) : (<>
                                    <Link to={'/login'} onClick={onClose}>
                                        <Button colorScheme='yellow'>
                                            Login
                                        </Button>
                                    </Link>
                                    <p>OR</p>
                                    <Link to={'/register'} onClick={onClose}>
                                        <Button colorScheme='yellow'>
                                            Sign Up
                                        </Button>
                                    </Link>
                                </>)}
                            </HStack>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header
