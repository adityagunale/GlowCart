import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import { Button } from '../components/Button';

// Figma dimensions
const FIGMA_WIDTH = 430;
const FIGMA_HEIGHT = 695;
const { width, height } = Dimensions.get('window');

// Scale factor to maintain proportions across different screen sizes
const scaleX = width / FIGMA_WIDTH;
const scaleY = height / FIGMA_HEIGHT;
const scale = Math.min(scaleX, scaleY);

interface OnboardingScreenProps {
  navigation: any;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#C9A7A2" />
      
      {/* Background Image */}
      <Image 
        source={require('../assets/onbording.png')} 
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
             {/* Overlay for better text readability - commented out to see original image */}
       {/* <View style={styles.overlay} /> */}
      
      {/* Top Section - Product Display Area */}
      <View style={styles.topSection}>
        <View style={styles.productDisplay}>
          {/* Product pedestals similar to Viorra design */}
          <View style={styles.pedestalContainer}>
            <View style={[styles.pedestal, styles.pedestal1]} />
            <View style={[styles.pedestal, styles.pedestal2]} />
            <View style={[styles.pedestal, styles.pedestal3]} />
            <View style={[styles.pedestal, styles.pedestal4]} />
          </View>
        </View>
      </View>
      
      {/* Bottom Section - Text and Button */}
      <View style={styles.bottomSection}>
        <View style={styles.textContainer}>
          <Text style={styles.brandName}>Viorra</Text>
          <Text style={styles.tagline}>Your Beauty, Delivered</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <Button
            title="Get Started"
            onPress={handleGetStarted}
            size="large"
            style={styles.getStartedButton}
            textStyle={styles.buttonText}
          />
        </View>
        
        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progressBarActive} />
            <View style={styles.progressBarInactive} />
            <View style={styles.progressBarInactive} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfc1bb',
    width: FIGMA_WIDTH * scale,
    height: FIGMA_HEIGHT * scale,
    opacity: 1,
    borderBottomRightRadius: 42 * scale,
    borderBottomLeftRadius: 42 * scale,
  },
  backgroundImage: {
    position: 'absolute',
    width: FIGMA_WIDTH * scale,
    height: FIGMA_HEIGHT * scale,
    borderBottomRightRadius: 42 * scale,
    borderBottomLeftRadius: 42 * scale,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 107, 157, 0.1)',
    borderBottomRightRadius: 42 * scale,
    borderBottomLeftRadius: 42 * scale,
  },
  topSection: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: height * 0.1,
  },
  productDisplay: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pedestalContainer: {
    width: width * 0.8,
    height: height * 0.4,
    position: 'relative',
  },
  pedestal: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  pedestal1: {
    top: '10%',
    left: '20%',
    width: width * 0.08,
    height: height * 0.15,
  },
  pedestal2: {
    bottom: '20%',
    left: '10%',
    width: width * 0.12,
    height: height * 0.08,
  },
  pedestal3: {
    top: '30%',
    right: '25%',
    width: width * 0.1,
    height: height * 0.12,
  },
  pedestal4: {
    bottom: '10%',
    right: '15%',
    width: width * 0.06,
    height: height * 0.18,
  },
  bottomSection: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.1,
    paddingBottom: height * 0.05,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: height * 0.04,
    marginTop:90
  },
  brandName: {
    fontSize: 60,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: height * 0.015,
    letterSpacing: -0.32,
    lineHeight: 70,
    fontFamily: 'Italiana',
    fontStyle: 'normal',
  },
  tagline: {
    fontSize: width * 0.04,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '400',
    letterSpacing: 0.5,
    opacity: 0.9,
    marginBottom: height * 0.04,
    marginTop:-7
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 16,
      },
      android: {
        elevation: 12,
      },
    }),
  },
  getStartedButton: {
    backgroundColor: '#b84953',
    borderRadius: width * 0.06,
    minHeight: height * 0.065,
    paddingHorizontal: width * 0.08,
    paddingVertical: height * 0.02,
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: width * 0.045,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.05,
    borderRadius:50,
   
   
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: width * 0.000,
    borderRadius:25
  },
  progressBarActive: {
    width: width * 0.08,
    height: 7,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
  progressBarInactive: {
    width: width * 0.08,
    height: 7,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 2,
  },
});
