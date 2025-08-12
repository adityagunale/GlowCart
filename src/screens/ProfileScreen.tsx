import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useAuth } from '../context/AuthContext';

interface ProfileScreenProps {
  navigation: any;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            logout();
            navigation.replace('Onboarding');
          },
        },
      ]
    );
  };

  const handleMenuPress = (title: string) => {
    Alert.alert('Coming Soon', `${title} functionality will be available soon!`);
  };

  const renderMenuItem = (iconName: string, title: string, subtitle?: string, iconType: 'material' | 'community' = 'material') => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => handleMenuPress(title)}
    >
      <View style={styles.menuItemLeft}>
        {iconType === 'material' ? (
          <Icon name={iconName} size={24} color="#666666" style={styles.menuIcon} />
        ) : (
          <MaterialCommunityIcons name={iconName} size={22} color="#666666" style={styles.menuIcon} />
        )}
        <View style={styles.menuTextContainer}>
          <Text style={styles.menuTitle}>{title}</Text>
          {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
        </View>
      </View>
      <Icon name="chevron-right" size={20} color="#CCCCCC" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity 
          style={styles.headerMenuButton}
          onPress={() => handleMenuPress('More Options')}
        >
          <Icon name="more-vert" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Information Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileInfo}>
            <View style={styles.profileImageContainer}>
              <Icon name="person" size={30} color="#FF6B9D" />
            </View>
            <View style={styles.profileTextContainer}>
              <Text style={styles.profileName}>{user?.name || 'Olivia'}</Text>
              <Text style={styles.profileEmail}>{user?.email || 'Oliva@gmail.com'}</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => handleMenuPress('Edit Profile')}
          >
            <Icon name="edit" size={25} color="#666666" />
          </TouchableOpacity>
        </View>

        {/* Account Settings Card */}
        <View style={styles.card}>
          {renderMenuItem('location-on', 'Address', 'Manage your saved address')}
          {renderMenuItem('shopping-bag', 'Order History', 'View your past orders')}
          {renderMenuItem('language', 'Language')}
          {renderMenuItem('notifications', 'Notifications')}
        </View>

        {/* Support & Legal Card */}
        <View style={styles.card}>
          {renderMenuItem('contact-support', 'Contact Us')}
          {renderMenuItem('help', 'Get Help')}
          {renderMenuItem('security', 'Privacy Policy')}
          {renderMenuItem('settings', 'Terms and Conditions')}
          
          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutItem} onPress={handleLogout}>
            <View style={styles.menuItemLeft}>
              <Icon name="logout" size={24} color="#FF3B30" style={styles.menuIcon} />
              <Text style={styles.logoutText}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffede8', // Light pink background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffede8',
    marginTop:40
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000000',
  },
  headerMenuButton: {
    width: 44,
    height: 43,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFE4E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 400,
    color: '#000000',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666666',
  },
  editButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    marginRight: 16,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 14,
    color: '#666666',
  },
  logoutItem: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  logoutText: {
    fontSize: 16,
    color: '#FF3B30',
    fontWeight: '600',
  },
});

