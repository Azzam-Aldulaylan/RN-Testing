import React, { useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Product, getProducts } from '@/utils/api';

const TabTwoScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Failed to load products:', error);
    }
  };

  const ProductItem: React.FC<{ item: Product }> = ({ item }) => (
    <TouchableOpacity style={styles.productItem} testID="product-item">
      <Image style={styles.productImage} source={{ uri: item.image }} />
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Button title="Load Products" onPress={loadProducts} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  productItem: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    marginTop: 4,
    fontSize: 14,
    color: '#666',
  },
});

export default TabTwoScreen;