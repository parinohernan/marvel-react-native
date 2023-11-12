import React from 'react';
import { View, Text } from 'react-native';

export default function Comics(props) {
    const {comics} = props;
    console.log(comics);
  return (
    <View>
      <Text>Comics Screen</Text>
      {/* Agrega cualquier contenido adicional que desees mostrar en esta pantalla */}
    </View>
  );
}