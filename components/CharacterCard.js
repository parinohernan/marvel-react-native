import * as React from 'react';
import { Text, View,  Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CharacterCard({image, name, id}) {
	const navigation = useNavigation();
    
  return (
    <TouchableOpacity 
			style={styles.container}
			onPress={() => navigation.navigate('Detail', { id })}
	>
			<Image 
				style={styles.image}
				source={image}
			/>
      <Text style={styles.font}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  font: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});