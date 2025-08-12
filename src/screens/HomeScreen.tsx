import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CustomHeader } from '../components/CustomHeader';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../context/CartContext';
import { fetchProducts, searchProducts } from '../utils/api';

interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      handleSearch(searchQuery);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      console.log('HomeScreen: Starting to load products...');
      const fetchedProducts = await fetchProducts();
      console.log('HomeScreen: Products fetched:', fetchedProducts?.length || 0);
      console.log('HomeScreen: First product:', fetchedProducts[0]);
      
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
      console.log('HomeScreen: Products state updated');
    } catch (error) {
      console.error('HomeScreen: Error loading products:', error);
      Alert.alert('Error', 'Failed to load products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadProducts();
    setRefreshing(false);
  };

  const handleSearch = async (query: string) => {
    if (query.trim()) {
      try {
        const searchResults = await searchProducts(query);
        setFilteredProducts(searchResults);
      } catch (error) {
        console.error('Search error:', error);
        // Fallback to local filtering
        const localResults = products.filter(product =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.brand.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(localResults);
      }
    } else {
      setFilteredProducts(products);
    }
  };

  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetails', { product });
  };

  const handleFilterPress = () => {
    Alert.alert('Coming Soon', 'Filter functionality will be available soon!');
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCard product={item} onPress={handleProductPress} />
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <MaterialIcons name="shopping-bag" size={64} color="#CCCCCC" style={styles.emptyStateIcon} />
      <Text style={styles.emptyStateTitle}>
        {searchQuery ? 'No products found' : 'No products available'}
      </Text>
      <Text style={styles.emptyStateSubtitle}>
        {searchQuery 
          ? 'Try adjusting your search terms'
          : 'Check back later for new products'
        }
      </Text>
    </View>
  );

  const renderHeader = () => (
    <View >
    <View style={styles.headerContainer}>
      <CustomHeader
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
        onNotificationPress={() => Alert.alert('Notifications', 'Notifications coming soon!')}
        onCartPress={() => navigation.navigate('Cart')}
      />
      
    </View>
    <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>Best Products</Text>
          <Text style={styles.productCount}>{filteredProducts.length} products</Text>
        </View>
        <TouchableOpacity style={styles.filterButton} onPress={handleFilterPress}>
          <Text style={styles.filterText}>Apply Filter</Text>
          <MaterialIcons name="expand-more" size={16} color="#333333" />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <View style={styles.loadingContent}>
          <ActivityIndicator size="large" color="#FF6B9D" />
          <Text style={styles.loadingText}>Loading products...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.productRow}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmptyState}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffede8',

  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#ffede8',
  },
  loadingContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666666',
  },
  headerContainer: {
    backgroundColor: '#ffff',
    paddingBottom: 16,
    paddingHorizontal: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffede8',
    marginTop: 20,
    marginBottom: 16,
    
  },
  sectionTitleContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  productCount: {
    fontSize: 14,
    color: '#000000',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E1E5E9',
  },
  filterText: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
    marginRight: 4,
  },

  productList: {
    paddingBottom: 20,
  },
  
  productRow: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyStateIcon: {
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyStateSubtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});
