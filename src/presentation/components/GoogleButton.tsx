import React from 'react';
import { Pressable, Text, useColorScheme } from 'react-native';
import { appTheme } from '../../config/theme/app-theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface ButtonProps {
  label: string;
  type: 'number' | 'operator' | 'function';
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
        pressed && { opacity: 0.75 },
      ]}
    >
      <Text style={styles.buttonText}>
        {icon && <MaterialIcons name={icon} size={30} />}
        {label}
      </Text>
    </Pressable>
  );
};
