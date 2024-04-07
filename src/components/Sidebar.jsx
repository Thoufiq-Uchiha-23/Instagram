import React from 'react'

import { Box, Flex, Link } from 'framer-motion';
import { InstagramMobileLogo } from '../assets/constants';

const Sidebar = () => {
    return (


        <Box

            height={"100vh"}
            borderRight={"1px solid"}
            borderColor={"whiteAlpha.300"}

            py={8}
            position={"sticky"}
            top={0}
            left={0}
            px={{ base: 2, md: 4 }} >

            <Flex direction={"column"} gap={10} w="full" height={"full"}

            >

                <Link to={"/"}
                    as={RouterLink}
                    pl={2}
                    display={{ base: "none", md: "block" }}
                    cursor="pointer"
                    hover={{
                        bg: "whiteAlpha.200",
                    }}
                    w={10}>
                    <InstagramLogo />
                </Link>

                <Link to={"/"}
                    as={RouterLink}
                    pl={2}
                    display={{ base: "block", md: "none" }}
                    cursor="pointer"
                    hover={{
                        bg: "whiteAlpha.200",
                    }}
                    w={10}>
                    <InstagramMobileLogo />
                </Link>
            </Flex>
        </Box>
    )


};


export default Sidebar;
