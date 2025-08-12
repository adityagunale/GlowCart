import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../context/AuthContext';

const { width, height } = Dimensions.get('window');

interface RegisterScreenProps {
  navigation: any;
}

export const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();

  const handleRegister = async () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    try {
      const success = await register(fullName, email, password);
      if (success) {
        Alert.alert('Success', 'Account created successfully!', [
          {
            text: 'OK',
            onPress: () => navigation.replace('MainTabs'),
          },
        ]);
      } else {
        Alert.alert('Error', 'Registration failed. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Top section with light pink background */}
      <View style={styles.topSection}>
        <Text style={styles.title}>Join The Glow!</Text>
      </View>
      
      {/* Bottom section with very light pink background */}
      <View style={styles.bottomSection}>
        {/* Register form card */}
        <View style={styles.card}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input, {paddingLeft: 16}]}
              placeholder="Full Name"
              placeholderTextColor="grey"
              value={fullName}
              onChangeText={setFullName}
              autoCapitalize="words"
              autoCorrect={false}
            />
          </View>
          
          <View style={styles.inputWrapper}>
            <Icon name="mail-outline" size={20} color="grey" style={styles.inputIcon} />
            <TextInput
              style={[styles.input, {paddingLeft: 25}]}
              placeholder="Email Address"
              placeholderTextColor="grey"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input, {paddingLeft: 25}]}
              placeholder="Password"
              placeholderTextColor="grey"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Icon 
                name={showPassword ? 'eye-off-outline' : 'eye-outline'} 
                size={20} 
                color="grey" 
              />
            </TouchableOpacity>
          </View>
          
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input, {paddingLeft: 25}]}
              placeholder="Confirm Password"
              placeholderTextColor="grey"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Icon 
                name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'} 
                size={20} 
                color="grey" 
              />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity 
            style={styles.registerButton} 
            onPress={handleRegister}
            disabled={loading}
          >
            <Text style={styles.registerButtonText}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </Text>
          </TouchableOpacity>
        </View>
        
        {/* Login link at bottom */}
        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Already a Member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginNow}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffede8',
  },
  topSection: {
    flex: 0.23,
    backgroundColor: '#F1B0B0',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  bottomSection: {
    flex: 0.65,
    backgroundColor: '#ffede8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#B84953',
    marginBottom: 8,
    textAlign: 'center',
    marginTop: 35
  },
  card: {
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: -20,
  },
  inputWrapper: {
    marginBottom: 20,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  inputIcon: {
    position: 'absolute',
    right: 20,
    zIndex: 1,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E1CFC9',
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    padding: 5,
  },
  registerButton: {
    width: '100%',
    backgroundColor: '#B84953',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 30,
    shadowColor: '#B84953',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  loginText: {
    color: 'grey',
    fontSize: 16,
    fontWeight: '400',
  },
  loginNow: {
    color: '#B84953',
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

