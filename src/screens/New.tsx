import { Heading, Center, Text, VStack, useToast } from "native-base";
import { Select as NativeBaseSelect } from "native-base"; 

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function New() {   
    return (
        <VStack flex={1} bgColor="gray.900">
            <Header title="Criar novo evento esportivo" showBackButton/>

            <VStack mt={8} mx={5} alignItems="center">
                <Heading fontFamily="heading" color="purple.500" fontSize="30" my={5} textAlign="center">
                    GPSPORTS
                </Heading>
            </VStack>

            <VStack>

                <Heading fontFamily="heading" color="white" fontSize="22" textAlign="center" my={8}>
                    Crie o seu evento esportivo{'\n'} e compartilhe entre amigos
                </Heading>
            
                <Input
                mb={2} fontSize="14"
                placeholder='Qual nome do seu evento esportivo?'
                />

                <Button 
                title="CRIAR MEU EVENTO" 
            
                />
            
                <Text color="gray.200" fontSize="sm" textAlign="center" px={10} mt={4}>
                Após criar seu evento, você receberá um código único que poderá usar para convidar outras pessoas.
                </Text>
            
            </VStack>
        </VStack>      
    );
}