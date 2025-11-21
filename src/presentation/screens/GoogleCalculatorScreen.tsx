import React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { appTheme } from '../../config/theme/app-theme';
import { useCalculator } from '../hooks/useCalculator';
import { GoogleButton, GoogleIcon } from '../components/index'

interface Props {
  colorScheme: 'light' | 'dark';
}

export const GoogleCalculatorScreen = ({ colorScheme }: Props) => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  console.log('isLandscape', isLandscape)
  const styles = appTheme(colorScheme, isLandscape);
  
  const {
    total,
    number,
    buildNumber,
    toggleSign,
    clean,
    deleteLastEntry,
    operation,
    calculate,
  } = useCalculator();

  const buttons: {
    label: string;
    type: 'number' | 'operator' | 'function';
    icon?: string;
    onPress?: () => void;
  }[] = [
    { label: 'C', type: 'function', onPress: () => clean() },
    { label: '+/-', type: 'function', onPress: () => toggleSign() },
    { label: '%', type: 'function' },
    { label: '÷', type: 'operator' },
    { label: '7', type: 'number', onPress: () => buildNumber('7') },
    { label: '8', type: 'number', onPress: () => buildNumber('8') },
    { label: '9', type: 'number', onPress: () => buildNumber('9') },
    { label: '×', type: 'operator', onPress: () => operation('*') },
    { label: '4', type: 'number', onPress: () => buildNumber('4') },
    { label: '5', type: 'number', onPress: () => buildNumber('5') },
    { label: '6', type: 'number', onPress: () => buildNumber('6') },
    { label: '-', type: 'operator' },
    { label: '1', type: 'number', onPress: () => buildNumber('1') },
    { label: '2', type: 'number', onPress: () => buildNumber('2') },
    { label: '3', type: 'number', onPress: () => buildNumber('3') },
    { label: '+', type: 'operator', onPress: () => operation('+') },
    { label: '0', type: 'number', onPress: () => buildNumber('0') },
    { label: '.', type: 'number', onPress: () => buildNumber('.') },
    {
      label: '',
      type: 'number',
      icon: 'backspace',
      onPress: () => deleteLastEntry(),
    },
    { label: '=', type: 'function', onPress: () => calculate() },
  ];

  return (
    <View style={styles.container}>

      <View style={styles.keypadUpper}>
        <GoogleButton type='other' icon='restore' />
        <GoogleButton type='other' icon='menu' />
      </View>

      {/* Pantalla */}
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{number}</Text>
        <Text style={styles.operationText}>{total}</Text>
      </View>

      {/* Teclado */}
      <View style={styles.keypad}>
        {buttons.map((item, i) => (
          <GoogleButton
            key={i}
            label={item.label}
            type={item.type}
            icon={item.icon}
            onPress={item.onPress}
            // {...item.type === 'number' ? { onPress: () => buildNumber(item.label) } : {}}
          />
        ))}
      </View>
    </View>
  );
};
