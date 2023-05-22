import { NativeBaseProvider, StatusBar, Center, Text, View } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { theme } from './src/styles/theme';
import { SignIn } from './src/screens/SignIn';
import { Loading } from './src/components/Loading';
import { AuthContextProvider } from './src/contexts/AuthContext';
import { New } from './src/screens/New';
import { Pools } from './src/screens/Pools';

export default function App() {

  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });

    return (
      <NativeBaseProvider theme={ theme }>
        <AuthContextProvider>
        <StatusBar 
          backgroundColor="transparent" 
          barStyle="light-content"
          translucent
        /> 

        {fontsLoaded ? <Pools /> : <Loading />}
        </AuthContextProvider>
      </NativeBaseProvider>
    );
}