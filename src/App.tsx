// App.tsx
import { StatusBar, useColorScheme, View } from 'react-native';
import { GoogleCalculatorScreen } from './presentation/screens/GoogleCalculatorScreen';
import { appTheme } from './config/theme/app-theme';

function App() {
  const colorScheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const styles = appTheme(colorScheme);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      <GoogleCalculatorScreen colorScheme={colorScheme} />
    </View>
  );
}

export default App;
