import { StyleSheet } from 'react-native';

export const appTheme = (colorScheme: 'light' | 'dark') =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#1C1B1F' : '#FEF7FF',
      justifyContent: 'flex-end',
    },

    displayContainer: {
      paddingHorizontal: 24,
      paddingVertical: 48,
      backgroundColor: colorScheme === 'dark' ? '#1C1B1F' : '#FFFFFF',
      alignItems: 'flex-end',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: colorScheme === 'dark' ? '#49454F' : '#E6E0E9',
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
      fontSize: 64,
      color: colorScheme === 'dark' ? '#FFFFFF' : '#1C1B1F',
      fontWeight: '300',
    },

    keypad: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 12,
      justifyContent: 'space-between',
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

    buttonTextAccent: {
      color: '#FFFFFF',
      fontSize: 26,
      fontWeight: '600',
    },

    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });
