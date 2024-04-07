import { Container, VStack, Box, Image, Flex, Input, Button } from '@chakra-ui/react';
import React from 'react'
import AuthForm from './AuthForm';
const AuthPage = () => {
    return (
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
            <Container maxW={"container.md"} padding={0}>
                <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
                    {/* Left hand-side */}
                    <Box display={{ base: "none", md: "block" }}>
                        <Image src='/auth.png' h={650} alt='Phone img' />
                    </Box>

                    {/* Right hand-side */}
                    <VStack spacing={4} align={"stretch"}>

                        <Box border={"1px solid gray"} borderRadius={4} padding={5} alignContent={"center"}>

                            <Image src="/logo.png" />

                            <Input placeholder="Enter your Name" padding={2} margin={3}></Input>
                            <Input placeholder='Enter password' type='password' padding={2} margin={3}></Input>

                            <Button color={'white'} backgroundColor={'blue'} padding={2} margin={3}  > Log in</Button>

                            <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                                {/* <Box flex={2} h={"1px"} bg={"gray.400"} />
                                <Text mx={1} color={"white"}>
                                    OR
                                </Text>
                                <Box flex={2} h={"1px"} bg={"gray.400"} /> */}

                                <Box flex={2} h={"1px"} bg={"gray.400"}></Box>

                            </Flex>

                            <Box> GOogle authenticator</Box>
                            <Box border={"1px solid gray"} borderRadius={4} padding={5} alignContent={"center"}>

                                Don't have an account ?
                                <Button as={"a"} href="/register" color={'white'} padding={2} margin={4} background={'blue'}>Sign in </Button>
                            </Box>


                        </Box>

                    </VStack>



                </Flex>





                <VStack>

                    <Box textAlign={"center"}>Get the app.</Box>
                    <Flex gap={5} justifyContent={"center"}>
                        <Image src='/playstore.png' h={"10"} alt='Playstore logo' />
                        <Image src='/microsoft.png' h={"10"} alt='Microsoft logo' />
                    </Flex>
                </VStack>
            </Container >

        </Flex >


    );
};


export default AuthPage; 