import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


// Define button props
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  style?: object;
  iconName?: string;
  iconColor?: string;
}

const ControlButton: React.FC<ButtonProps> = ({ label, onClick, disabled = false, style, iconName="play-arrow", iconColor="grey" }) => {
  return (
    <TouchableOpacity
      onPress={onClick} 
      disabled={disabled}
    >
      <Icon name={iconName} size={30} color={iconColor} />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

// Define styles for the button
const styles = StyleSheet.create({
  disabled: {
    backgroundColor: '#D3D3D3', // Light gray when disabled
  },
});

export default ControlButton;
