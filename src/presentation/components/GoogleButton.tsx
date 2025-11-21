import React from 'react';
import { Pressable, Text, useColorScheme } from 'react-native';
import { appTheme } from '../../config/theme/app-theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { GoogleIcon } from '../components/index';

interface ButtonProps {
  label?: string;
  type: 'number' | 'operator' | 'function' | 'other';
  icon?: string;
  onPress?: () => void;
}

export const GoogleButton = ({ label, type, icon, onPress }: ButtonProps) => {
  const colorScheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const styles = appTheme(colorScheme);

  return (
    <Pressable
      onPress={() => onPress && onPress()}
      style={({ pressed }) => [
        styles.button,
        type === 'number' && styles.buttonAccent,
        type === 'operator' && styles.buttonOperator,
        type === 'function' && styles.buttonEqual,
        type === 'other' && styles.buttonOther,
        pressed && { opacity: 0.75 },
      ]}
    >
      <Text style={styles.buttonText}>
        {icon && <GoogleIcon icon={icon} size={30} />}
        {label}
      </Text>
    </Pressable>
  );
};
