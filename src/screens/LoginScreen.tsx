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

interface LoginScreenProps {
  navigation: any;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      const success = await login(email, password);
      if (success) {
        // Navigation will happen automatically when isAuthenticated becomes true
        console.log('Login successful');
      } else {
        Alert.alert('Error', 'Invalid email or password');
      }
    } catch (error) {
      Alert.alert('Error', 'Login failed. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      
      
      {/* Top section with light pink background */}
      <View style={styles.topSection}>
        <Text style={styles.title}>Hello Again!</Text>
        <Text style={styles.subtitle}>Welcome back you've</Text>
        <Text style={styles.subtitle1}>been missed.</Text>
      </View>
      
      {/* Bottom section with very light pink background */}
      <View style={styles.bottomSection}>
        {/* Login form card */}
        <View style={styles.card}>
          <View style={styles.inputWrapper}>
            <Icon name="mail-outline" size={20} color="grey" style={styles.inputIcon} />
            <TextInput
              style={[styles.input, {paddingLeft: 25}]}
              placeholder="Enter your email Id"
              placeholderTextColor="grey"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
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
          
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot password</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
          
          <View style={styles.orRow}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>Or Continue With</Text>
            <View style={styles.orLine} />
          </View>
          
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.googleIcon}>G</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.appleIcon}>A</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.facebookIcon}>f</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Register link at bottom */}
        <View style={styles.registerRow}>
          <Text style={styles.registerText}>Not a Member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerNow}>Register Now</Text>
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
  header: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 10,
    backgroundColor: '#ffede8',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B84953',
    textAlign: 'center',
    flex: 1,
  },
  headerRight: {
    width: 40,
  },

  topSection: {
    flex: 0.30,
    backgroundColor: '#F1B0B0',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  bottomSection: {
    flex: 0.75,
    backgroundColor: '#ffede8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing:1,
    color: '#B84953',
    marginBottom: 8,
    textAlign: 'center',
    marginTop:10
    
  },
  subtitle: {
    fontSize: 26,
    color: '#AD7373',
    textAlign: 'center',
    letterSpacing:1,
    fontWeight: '500',
  },
  subtitle1: {
    fontSize: 26,
    color: '#AD7373',
    textAlign: 'center',
    letterSpacing:1,
    fontWeight: '500',
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
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#B84953',
    fontSize: 14,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#B84953',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
   
    shadowColor: '#B84953',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
  },
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    width: '100%',
    marginTop:30
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  orText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    marginHorizontal: 16,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 16,
  },
  socialButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E1CFC9',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  googleIcon: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4285F4',
  },
  appleIcon: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4285F4',
  },
  facebookIcon: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1877F2',
  },
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  registerText: {
    color: 'grey',
    fontSize: 16,
    fontWeight: '400',
  },
  registerNow: {
    color: '#B84953',
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
