import { StyleSheet } from 'react-native';

export const appTheme = (colorScheme: 'light' | 'dark', isLandscape: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      // flexDirection: isLandscape ? 'row' : 'column',
      backgroundColor: colorScheme === 'dark' ? '#1C1B1F' : '#FFFFFF',
      justifyContent: isLandscape ? 'space-between' : 'flex-end',
    },

    displayContainer: {
      paddingHorizontal: 24,
      paddingVertical: isLandscape ? 10 : 48,
      backgroundColor: colorScheme === 'dark' ? '#1C1B1F' : '#FFFFFF',
      alignItems: 'flex-end',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: colorScheme === 'dark' ? '#49454F' : '#FFFFFF',
      flex: isLandscape ? 0.3 : 0.9,
    },

    historyText: {
      fontSize: 20,
      color: colorScheme === 'dark' ? '#CAC4D0' : '#49454F',
      marginBottom: 12,
    },

    operationText: {
      fontSize: 30,
      color: colorScheme === 'dark' ? '#CAC4D0' : '#49454F',
      marginBottom: 12,
    },

    displayText: {
      fontSize: isLandscape ? 48 : 64,
      color: colorScheme === 'dark' ? '#FFFFFF' : '#1C1B1F',
      fontWeight: '300',
    },

    keypadUpper: {
      marginTop: isLandscape ? 0 : 'auto',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 12,
      justifyContent: 'space-between',
      alignItems: 'flex-start', 
    },

    keypad: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 12,
      justifyContent: 'space-between',
      alignItems: 'flex-end', 
    },

    button: {
      width: '22%',
      aspectRatio: 1,
      marginVertical: 8,
      marginHorizontal: 5,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colorScheme === 'dark' ? '#49454F' : '#E6E0E9',
      elevation: 2,
    },

    buttonText: {
      fontSize: 26,
      color: colorScheme === 'dark' ? '#FFFFFF' : '#1C1B1F',
      fontWeight: '500',
    },

    buttonOperator: {
      backgroundColor: colorScheme === 'dark' ? '#4F378B' : '#D0BCFF',
    },

    buttonAccent: {
      backgroundColor: colorScheme === 'dark' ? '#625B71' : '#EADDFF',
    },

    buttonEqual: {
      backgroundColor: colorScheme === 'dark' ? '#D0BCFF' : '#6750A4',
    },

    buttonOther: {
      width: '8%',
      backgroundColor: colorScheme === 'dark' ? '#212121' : '#FFFFFF',
      borderRadius: 100,
      borderWidth: 0,
      elevation: 0, 
    },

    buttonTextAccent: {
      color: '#FFFFFF',
      fontSize: 26,
      fontWeight: '600',
    },

    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: isLandscape ? 5 : 10,
      paddingHorizontal: 10,
    },
  });
