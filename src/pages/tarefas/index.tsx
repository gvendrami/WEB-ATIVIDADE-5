import {
    Flex,
    Box,
    FormControl,
    Input,
    HStack,
    Stack,
    Button,
    useColorModeValue,
    Checkbox,
} from '@chakra-ui/react'
import Layout from '../../components/Layout'

export default function Tarefas() {

    return (
        <Layout>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <HStack>
                                <Box>
                                    <FormControl id="novatarefa" isRequired>
                                        Insira sua tarefa:
                                        <br></br>
                                        <Input type="text" placeholder='Digite o título da task' width={'215px'} />
                                    </FormControl>
                                    <Checkbox>Realizada?</Checkbox>
                                </Box>
                                <Box>
                                    <Button
                                        loadingText="Submitting"
                                        width={'70px'}
                                        fontSize={'17px'}
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}>
                                            Inserir
                                    </Button>
                                </Box>
                            </HStack>
                            <HStack>
                             <hr></hr>   
                            </HStack>                   
                            <HStack 
                            alignContent={'center'}
                            >
                                <Box>
                                    Tarefa 1
                                </Box>
                                <Box>
                                    
                                    <Button
                                        position={'relative'}
                                        left={'110%'}
                                        loadingText="Submitting"
                                        alignContent={'right'}
                                        width={'70px'}
                                        fontSize={'15px'}
                                        bg={'blue.400'}
                                        color={'white'}
                                        backgroundColor={'red'}
                                        _hover={{
                                            bg: 'red.500',
                                        }}>
                                        Pendente
                                    </Button>
                                </Box>
                                <Box>
                                    <Button
                                        position={'relative'}
                                        left={'120%'}
                                        loadingText="Submitting"
                                        width={'70px'}
                                        fontSize={'15px'}
                                        bg={'blue.400'}
                                        color={'white'}
                                        backgroundColor={'red'}
                                        _hover={{
                                            bg: 'red.500',
                                        }}>
                                        Excluir
                                    </Button>
                                </Box>
                            </HStack>
                            <HStack align={'center'}>
                                <Box>
                                    Tarefa 2
                                </Box>
                                <Box>
                                    
                                    <Button
                                        position={'relative'}
                                        left={'110%'}
                                        loadingText="Submitting"
                                        width={'70px'}
                                        fontSize={'15px'}
                                        bg={'blue.400'}
                                        color={'white'}
                                        backgroundColor={'red'}
                                        _hover={{
                                            bg: 'red.500',
                                        }}>
                                        Pendente
                                    </Button>
                                    
                                </Box>
                                <Box>
                                    <Button
                                        position={'relative'}
                                        left={'120%'}
                                        loadingText="Submitting"
                                        width={'70px'}
                                        fontSize={'15px'}
                                        bg={'blue.400'}
                                        color={'white'}
                                        backgroundColor={'red'}
                                        _hover={{
                                            bg: 'red.500',
                                        }}>
                                        Excluir
                                    </Button>
                                </Box>
                            </HStack>
                            <HStack>
                                <Box>
                                    Tarefa 3
                                </Box>
                                <Box>
                                    <Button
                                        position={'relative'}
                                        left={'110%'}
                                        loadingText="Submitting"
                                        width={'70px'}
                                        fontSize={'15px'}
                                        bg={'blue.400'}
                                        color={'white'}
                                        backgroundColor={'red'}
                                        _hover={{
                                            bg: 'red.500',
                                        }}>
                                        Pendente
                                    </Button>
                                </Box>
                                <Box>
                                    <Button
                                        position={'relative'}
                                        left={'120%'}
                                        loadingText="Submitting"
                                        width={'70px'}
                                        fontSize={'15px'}
                                        bg={'blue.400'}
                                        color={'white'}
                                        backgroundColor={'red'}
                                        _hover={{
                                            bg: 'red.500',
                                        }}>
                                        Excluir
                                    </Button>
                                </Box>
                            </HStack>


                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </Layout>
    )
}