import { NativeBaseProvider, StatusBar, Center, Text, View } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { theme } from './src/styles/theme';
import { Pools } from './src/screens/Pools';
import { Loading } from './src/components/Loading';
import { AuthContextProvider } from './src/contexts/AuthContext';

export default function App() {

  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });

    return (
      <NativeBaseProvider theme = { theme }>
        <AuthContextProvider>
        <StatusBar 
          backgroundColor="transparent" 
          barStyle="light-content"
          translucent
        /> 
        {fontsLoaded ? < Pools /> : <Loading />}
        </AuthContextProvider>
      </NativeBaseProvider>
    );
}
// Altera onde está o SignIn, na linha abaixo com uma das telas de screens, "./src/screens"