import * as React from 'react';
import { useState, useEffect } from 'react';
import { View , FlatList, ActivityIndicator } from 'react-native';
import CharacterCard from './CharacterCard';
import apiParams from '../config.js';
import axios from 'axios';
import { Searchbar } from 'react-native-paper';

export default function Home() {
  const [search, setSearch] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;

  useEffect(() => {
    const consulta = `${baseURL}/v1/public/characters`;
    console.log(consulta,'ts',ts);
    axios.get(`${baseURL}/v1/public/characters`, {
      params: {
        ts,
        apikey,
        hash
      }
    })
      .then(response => setData(response.data.data.results))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function searchCharacter() {
    if(search) {
      setLoading(true);
      axios.get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
          nameStartsWith: search
        }
      })
        .then(response => setData(response.data.data.results))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }
  }
  
  return (
    <View>
    <Searchbar
      placeholder="Search for character..."
      onChangeText={value => setSearch(value)}
      value={search}
      onIconPress={searchCharacter}
      onSubmitEditing={searchCharacter}
    />
    {isLoading 
      ? <ActivityIndicator size="large" color="#00ff00" /> 
      : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <CharacterCard 
              id={item.id}
              image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`} 
              name={item.name} />
          )}
        />
      )
    }
  </View>
  );
}