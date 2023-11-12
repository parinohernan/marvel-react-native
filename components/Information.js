import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CharacterCard({ image, name, id, description }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Detail', { id })}
    >
      <Image
        style={styles.image}
        source={image}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'silver',  // Color de fondo plateado
  },
  image: {
    width: '100%',  // Ancho de la pantalla
    height: '50%',  // Alto de la pantalla
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    // alignItems: 'center',
},
title: {
    fontSize: 24,  // Tamaño de la fuente más representativa del universo Marvel
    fontWeight: 'bold',
    color: 'black',  // Color del texto
    marginBottom: 8,  // Espaciado inferior
},
descriptionContainer: {
    backgroundColor: 'rgba(255, 223, 0, 0.7)', // Fondo amarillo con opacidad
    borderWidth: 8,  // Borde dorado de 4px
    borderColor: 'gold',
    borderRadius: 8,  // Bordes redondeados
    paddingHorizontal: 16,  // Relleno horizontal para enmarcar la descripción
    paddingVertical: 12,  // Relleno vertical para enmarcar la descripción
    marginHorizontal: 16,
    marginBottom: 16,
    
  },
  description: {
    fontSize: 16,
    color: 'black',
  },

});
