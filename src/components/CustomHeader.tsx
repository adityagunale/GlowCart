import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface CustomHeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
  onNotificationPress?: () => void;
  onCartPress?: () => void;
}

export const CustomHeader: React.FC<CustomHeaderProps> = ({
  onSearch,
  searchQuery,
  onNotificationPress,
  onCartPress,
}) => {
  const [internalValue, setInternalValue] = useState('');
  const value = searchQuery !== undefined ? searchQuery : internalValue;

  const handleTextChange = (text: string) => {
    if (searchQuery === undefined) {
      setInternalValue(text);
    }
    onSearch(text);
  };

  const handleClear = () => {
    if (searchQuery === undefined) {
      setInternalValue('');
    }
    onSearch('');
  };

  return (
    <>
    <View style={styles.header}>
      {/* Brand Logo */}
      <View style={styles.brandContainer}>
        <Text style={styles.brandText}>Viorra</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
       
      </View>

      {/* Utility Icons */}
      <View style={styles.iconsContainer}>
        {/* Notification Icon */}
        <TouchableOpacity 
          style={styles.iconButton} 
          onPress={onNotificationPress}
        >
          <MaterialIcons name="notifications" size={28} color="grey" />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>

        {/* Cart Icon */}
        <TouchableOpacity 
          style={styles.iconButton} 
          onPress={onCartPress}
        >
          <MaterialIcons name="shopping-bag" size={28} color="grey" />
        </TouchableOpacity>
      </View>
      
    </View>
    <View style={styles.searchContainer1}>
    <View style={styles.searchInputContainer}>
          <MaterialIcons name="search" size={20} color="#999999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for all products"
            placeholderTextColor="#999999"
            value={value}
            onChangeText={handleTextChange}
            returnKeyType="search"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {value.length > 0 && (
            <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
              <MaterialIcons name="close" size={18} color="#999999" />
            </TouchableOpacity>
          )}
        </View>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: '#F5F5F5',
    marginTop:40,
    
  },
  brandContainer: {
    marginRight: 12,
    minWidth: 55,
  },
  brandText: {
    fontSize: 30,
    fontWeight: '400',
    color: '#B84953', // Maroon/brown color for Viorra brand
    fontFamily: 'serif',
  },
  searchContainer: {
    flex: 1,
    padding: 10,
  },
  searchContainer1: {
    flex: 1,
    marginHorizontal:21,
    marginTop:12,
   
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
 
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    padding: 0,
  },
  clearButton: {
    padding: 2,
    marginLeft: 4,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    minWidth: 70,
    justifyContent: 'flex-end',
  },
  iconButton: {
    padding: 6,
    marginLeft: 6,
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 6,
    height: 6,
    borderRadius: 15,
    backgroundColor: '#FF0000',
  },
});
