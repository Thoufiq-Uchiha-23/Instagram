import { VStack, Input } from '@chakra-ui/react'
import React from 'react'

function AuthForm() {

    const [isLogin, setIsLogin] = useState(true);
    return (
        <>
            <Box border={"1px solid black"} borderRadius={4} padding={5}>

                <Image src="../public/logo.png" h={24} cursor={"pointer"} alt='Instagram'></Image>
            </Box>
        </>
    )
};


export default AuthForm; 
