import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [people, setPeople] = useState([]);

  const baseURL = 'https://swapi.dev/api/people?populate=*'

  useEffect(function(){
      fetch(baseURL).then(data => data.json())
      .then(objeto =>{
        console.log(objeto);
        setPeople(objeto.data);})}, []);

  return (
    <View style={styles.container}>
      {people.length > 0 ? people.map(people => <Text style={styles.texto}>{people.name}</Text>):
      <Text style={styles.texto}>Carregando...</Text> }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: '20px',
    fontWeight: 'bold',
  },
});
