import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  icon: string;
  size?: number;
  color?: string;
}

export const GoogleIcon = ({ icon, size = 30, color }: Props) => {
  return <MaterialIcons name={icon} size={size} color={color} />;
};
