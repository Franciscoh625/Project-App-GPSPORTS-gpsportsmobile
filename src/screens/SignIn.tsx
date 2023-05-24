import React from 'react';
import { Center, Text, Icon } from 'native-base';
import { Fontisto } from '@expo/vector-icons'
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import Logo from '../assets/logo.svg';

export function SignIn(){

  const { signIn } = useAuth();
    return(
        <Center flex={1} bgColor="gray.900" p={7}>

        <Text color="purple.500" fontSize={45} fontFamily="heading">
          GPSPORTS
        </Text>

        <Button
        title = "ENTRAR COM GOOGLE"
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        type = "SECUNDARY"
        mt={8}
        onPress={signIn}
        />
        
        <Text color="white" textAlign="center" mt={4}>
          Faça login com sua conta do Google.
        </Text>

      </Center>
    );
}