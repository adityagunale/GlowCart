import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useCart } from '../context/CartContext';
import { Product } from '../context/CartContext';

const { width } = Dimensions.get('window');

interface ProductDetailsScreenProps {
  navigation: any;
  route: {
    params: {
      product: Product;
    };
  };
}

export const ProductDetailsScreen: React.FC<ProductDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const { product } = route.params;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    Alert.alert('Success', 'Product added to cart!');
  };

  const discountedPrice = product.price * (1 - product.discountPercentage / 100);

  // Function to render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <MaterialIcons
          key={i}
          name={i <= rating ? "star" : "star-border"}
          size={16}
          color="#000000"
        />
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Product Image with Header Buttons */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.thumbnail }} style={styles.image} />
          
          {/* Header Buttons */}
          <View style={styles.headerButtons}>
            <TouchableOpacity 
              style={styles.headerButton} 
              onPress={() => navigation.goBack()}
            >
              <MaterialIcons name="arrow-back" size={25} color="#000000" />
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.headerButton}
              onPress={() => navigation.navigate('Cart')}
            >
              <MaterialIcons name="shopping-bag" size={25} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.content}>
          {/* View Similar and Share */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.viewSimilarButton}>
              <Text style={styles.viewSimilarText}>View Similar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <MaterialIcons name="share" size={25} color="#000000" />
            </TouchableOpacity>
          </View>

          {/* Product Title */}
          <Text style={styles.title}>{product.title}</Text>
          
          {/* Product Description */}
          <Text style={styles.description}>{product.description}</Text>
          
          {/* Rating */}
          <View style={styles.ratingContainer}>
            <View style={styles.starsContainer}>
              {renderStars(Math.floor(product.rating))}
            </View>
            <Text style={styles.ratingText}> {product.rating}/5</Text>
          </View>
          
          {/* Sold By */}
          <Text style={styles.soldBy}>Sold by : {product.brand}</Text>

          {/* Pricing and Add to Bag */}
          <View style={styles.priceActionContainer}>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>${discountedPrice.toFixed(2)}</Text>
              {product.discountPercentage > 0 && (
                <Text style={styles.originalPrice}>${product.price.toFixed(2)}</Text>
              )}
            </View>
            
            <TouchableOpacity 
              style={styles.addToBagButton}
              onPress={handleAddToCart}
              disabled={product.stock === 0}
            >
              <Text style={styles.addToBagText}>Add to Bag</Text>
            </TouchableOpacity>
          </View>

          {/* Highlights Section */}
          <View style={styles.highlights}>
            <Text style={styles.highlightsTitle}>Highlights</Text>
            <View style={styles.highlightsGrid}>
              <View style={styles.highlightColumn}>
                <View style={styles.highlightItem}>
                  <Text style={styles.highlightLabel}>Width</Text>
                  <Text style={styles.highlightValue}>15.14</Text>
                </View>
                <View style={styles.highlightItem}>
                  <Text style={styles.highlightLabel}>Warranty</Text>
                  <Text style={styles.highlightValue}>1 week</Text>
                </View>
              </View>
              
              <View style={styles.verticalDivider} />
              
              <View style={styles.highlightColumn}>
                <View style={styles.highlightItem}>
                  <Text style={styles.highlightLabel}>Height</Text>
                  <Text style={styles.highlightValue}>13.08</Text>
                </View>
                <View style={styles.highlightItem}>
                  <Text style={styles.highlightLabel}>Shipping</Text>
                  <Text style={styles.highlightValue}>In 3-5 business days</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Ratings & Reviews Section */}
          <View style={styles.reviewsSection}>
            <Text style={styles.reviewsTitle}>Ratings & Reviews</Text>
            
            <View style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewerInfo}>
                  <View style={styles.reviewerAvatar}>
                    <Text style={styles.avatarText}>EC</Text>
                  </View>
                  <View style={styles.reviewerDetails}>
                    <Text style={styles.reviewerName}>Eleanor Collins</Text>
                    <Text style={styles.reviewerEmail}>eleanor.collins@gmail.com</Text>
                  </View>
                </View>
                <View style={styles.starsContainer}>
                  {renderStars(3)}
                </View>
              </View>
              <Text style={styles.reviewText}>Would not recommend...</Text>
            </View>
            
            <View style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewerInfo}>
                  <View style={styles.reviewerAvatar}>
                    <Text style={styles.avatarText}>LG</Text>
                  </View>
                  <View style={styles.reviewerDetails}>
                    <Text style={styles.reviewerName}>Lucas Gordon</Text>
                    <Text style={styles.reviewerEmail}>lucas.gordon@gmail.com</Text>
                  </View>
                </View>
                <View style={styles.starsContainer}>
                  {renderStars(3)}
                </View>
              </View>
              <Text style={styles.reviewText}>Very satisfied!</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffede8', // Light beige background
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: width,
    height: width * 0.8,
    resizeMode: 'cover',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  headerButtons: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    padding: 20,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  viewSimilarButton: {
    borderWidth: 1,
    borderColor: '#FF0000',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  viewSimilarText: {
    color: '#FF0000',
    fontSize: 12,
    fontWeight: '500',
  },
  shareButton: {
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#000000',
    lineHeight: 24,
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    color: '#000000',
    marginLeft: 4,
  },
  soldBy: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 20,
  },
  priceActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  priceContainer: {
    flexDirection: 'column',
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  originalPrice: {
    fontSize: 20,
    color: '#999999',
    textDecorationLine: 'line-through',
  },
  addToBagButton: {
    backgroundColor: '#B84953', // Reddish-brown
    borderRadius: 16,
    width:230,
    height:56,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  addToBagText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign:'center'
  },
  highlights: {
    marginBottom: 24,
  },
  highlightsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 12,
  },
  highlightsGrid: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 16,
  },
  highlightColumn: {
    flex: 1,
  },
  highlightItem: {
    marginBottom: 12,
  },
  highlightLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  highlightValue: {
    fontSize: 14,
    color: '#000000',
  },
  verticalDivider: {
    width: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 16,
  },
  reviewsSection: {
    marginBottom: 100,
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 12,
  },
  reviewCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  reviewerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  reviewerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666666',
  },
  reviewerDetails: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 2,
  },
  reviewerEmail: {
    fontSize: 12,
    color: '#666666',
  },
  reviewText: {
    fontSize: 14,
    color: '#000000',
    lineHeight: 20,
  },
});
