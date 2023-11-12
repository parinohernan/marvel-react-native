import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Comic({ name, image }) {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container, expanded && styles.expandedContainer]}>
        <Image
          source={image}
          style={[styles.image, expanded && styles.expandedImage]}
        />
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  expandedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover', // Ajusta la forma en que la imagen se ajusta al tamaño de la vista
  },
  expandedImage: {
    width: 400, // Ocupa todo el ancho de la pantalla
    height: 400, // Ocupa toda la altura de la pantalla
  },
});
