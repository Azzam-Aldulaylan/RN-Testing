import GalacticCounter from '@/components/GalacticCounter';
import { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

export default function TabOneScreen() {
  const [search, setSearch] = useState<string>('');

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://galaxies.dev/img/logos/logo--blue.png' }}
        style={styles.logo}
        accessibilityLabel="Galaxies logo"
      />
      <Text style={styles.title}>🌌 Galaxies Feed 🌌</Text>
      <View style={styles.separator} />
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search galaxies..."
          style={styles.searchInput}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => setSearch('')}
          accessible
          accessibilityLabel="Clear search"
        >
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>
      {search !== '' && <Text style={styles.searchText}>Searched for: "{search}"</Text>}
      <GalacticCounter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: 'center',
    backgroundColor: '#f4faff',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    backgroundColor: '#ddd',
    width: '80%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  clearButton: {
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#ff5c5c',
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  searchText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
});