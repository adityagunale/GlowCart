# ✨ GlowCart - Beauty E-commerce App

<div align="center">

![React Native](https://img.shields.io/badge/React%20Native-0.80.2-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React Navigation](https://img.shields.io/badge/React%20Navigation-v6-61DAFB?style=for-the-badge&logo=react)
![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS-000000?style=for-the-badge&logo=react-native)

**Your Beauty, Delivered** 🛍️💄

A modern, feature-rich React Native beauty e-commerce application with stunning UI/UX design and comprehensive functionality.

[🚀 Live Demo](#) • [📱 Screenshots](#-screenshots) • [🛠️ Tech Stack](#-tech-stack) • [⚡ Quick Start](#-quick-start)

</div>

---

## 🌟 What Makes GlowCart Special?

<div align="center">

| ✨ **Beautiful Design** | 🛒 **Smart Shopping** | 🔐 **Secure Auth** | 📱 **Cross-Platform** |
|:----------------------:|:---------------------:|:------------------:|:---------------------:|
| Modern UI with smooth animations | Intelligent cart management | Email/password authentication | Works on Android & iOS |
| Responsive layouts | Real-time price calculations | Session management | Native performance |
| Eye-catching color scheme | Quantity controls | Protected routes | Optimized for mobile |

</div>

---

## 🚀 Core Features

### 🎯 **User Experience**
- **✨ Onboarding Flow** - Welcoming user experience with app introduction
- **🔐 Authentication System** - Secure login/register with email validation
- **👤 User Profiles** - Personal account management and preferences
- **🎨 Modern UI/UX** - Beautiful, intuitive interface with smooth animations

### 🛍️ **Shopping Experience**
- **🔍 Product Discovery** - Browse beauty products with advanced search
- **📱 Product Details** - Rich product information with high-quality images
- **🛒 Smart Cart** - Add/remove products with quantity management
- **💰 Price Management** - Real-time price calculations and discounts
- **📋 Wishlist** - Save favorite products for later

### 🔧 **Technical Excellence**
- **⚡ Performance Optimized** - Fast loading and smooth interactions
- **🔄 State Management** - Efficient data flow with Context API
- **🌐 API Integration** - Seamless connection with external services
- **📊 Error Handling** - Graceful error management and user feedback

---

## 📱 Screenshots

<div align="center">

### 🎨 **Onboarding & Authentication**
![Onboarding](<img width="460" height="973" alt="Screenshot 2025-08-13 000326" src="https://github.com/user-attachments/assets/43585433-39d5-4802-a52e-9f048c2c3a9e" />)

![Login](https://via.placeholder.com/300x600/61DAFB/FFFFFF?text=Login+Screen)
![Register](https://via.placeholder.com/300x600/FF6B9D/FFFFFF?text=Register+Screen)

### 🏠 **Main App Experience**
![Home](https://via.placeholder.com/300x600/61DAFB/FFFFFF?text=Home+Screen)
![Products](https://via.placeholder.com/300x600/FF6B9D/FFFFFF?text=Product+Grid)
![Details](https://via.placeholder.com/300x600/61DAFB/FFFFFF?text=Product+Details)

### 👤 **User Interface**
![Profile](https://via.placeholder.com/300x600/FF6B9D/FFFFFF?text=Profile+Screen)
![Cart](https://via.placeholder.com/300x600/61DAFB/FFFFFF?text=Shopping+Cart)

*Screenshots coming soon - Beautiful UI with modern design patterns*

</div>

---

## 🛠️ Tech Stack

<div align="center">

### **Frontend Framework**
![React Native](https://img.shields.io/badge/React%20Native-0.80.2-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-007ACC?style=flat-square&logo=typescript)

### **Navigation & State**
![React Navigation](https://img.shields.io/badge/React%20Navigation-v6-61DAFB?style=flat-square&logo=react)
![Context API](https://img.shields.io/badge/Context%20API-React-61DAFB?style=flat-square&logo=react)

### **API & Data**
![Axios](https://img.shields.io/badge/Axios-HTTP%20Client-5A29E4?style=flat-square&logo=axios)
![DummyJSON](https://img.shields.io/badge/DummyJSON-API-FF6B9D?style=flat-square)

### **Development Tools**
![ESLint](https://img.shields.io/badge/ESLint-Code%20Quality-4B32C3?style=flat-square&logo=eslint)
![Metro](https://img.shields.io/badge/Metro-Bundler-61DAFB?style=flat-square&logo=react)

</div>

### **Key Technologies**
- **React Native CLI** - Cross-platform mobile development
- **TypeScript** - Type-safe development experience
- **React Navigation v6** - Smooth screen transitions and tab navigation
- **Context API** - Efficient state management
- **Axios** - Reliable HTTP client for API calls
- **StyleSheet API** - Optimized styling system

---

## ⚡ Quick Start

### 📋 Prerequisites
- Node.js (v16 or higher)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### 🚀 Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/GlowCart.git
cd GlowCart

# 2. Install dependencies
npm install

# 3. Install iOS dependencies (macOS only)
cd ios && pod install && cd ..

# 4. Start Metro bundler
npx react-native start

# 5. Run the application
# For Android:
npx react-native run-android

# For iOS (macOS only):
npx react-native run-ios
```

### 📱 Available Scripts

```bash
npm start          # Start Metro bundler
npm run android    # Run on Android
npm run ios        # Run on iOS
npm test           # Run tests
npm run lint       # Run ESLint
```

---

## 🏗️ Project Architecture

```
GlowCart/
├── 📁 src/
│   ├── 🧩 components/          # Reusable UI components
│   │   ├── Button.tsx         # Custom button component
│   │   ├── Header.tsx         # App header component
│   │   ├── ProductCard.tsx    # Product display card
│   │   └── SearchBar.tsx      # Search functionality
│   ├── 🔄 context/            # State management
│   │   ├── AuthContext.tsx    # Authentication state
│   │   └── CartContext.tsx    # Shopping cart state
│   ├── 🧭 navigation/         # Navigation configuration
│   │   └── AppNavigator.tsx   # Main navigation setup
│   ├── 📱 screens/            # App screens
│   │   ├── HomeScreen.tsx     # Main product listing
│   │   ├── LoginScreen.tsx    # User authentication
│   │   ├── OnboardingScreen.tsx # Welcome experience
│   │   ├── ProductDetailsScreen.tsx # Product information
│   │   ├── ProfileScreen.tsx  # User profile
│   │   └── RegisterScreen.tsx # User registration
│   ├── 🛠️ utils/              # Utility functions
│   │   └── api.ts            # API integration
│   └── 🎨 assets/             # Images, fonts, etc.
├── 📁 android/                # Android-specific code
├── 📁 ios/                    # iOS-specific code
└── 📄 package.json           # Dependencies and scripts
```

---

## 🎨 Design System

### **Color Palette**
```css
Primary:     #FF6B9D (Pink)      /* Main brand color */
Secondary:   #F8F9FA (Light Gray) /* Background accents */
Text Dark:   #333333 (Dark Gray)  /* Primary text */
Text Light:  #666666 (Medium Gray) /* Secondary text */
Background:  #FFFFFF (White)      /* Main background */
```

### **Typography Scale**
- **Headings**: Bold, 24-32px
- **Body Text**: Regular, 14-16px
- **Captions**: Regular, 12-14px
- **Buttons**: Medium, 16px

### **Spacing System**
- **XS**: 4px
- **S**: 8px
- **M**: 16px
- **L**: 24px
- **XL**: 32px
- **XXL**: 48px

---

## 🔌 API Integration

### **DummyJSON Integration**
The app seamlessly integrates with [DummyJSON API](https://dummyjson.com/products) for realistic product data:

```typescript
// Example API endpoints
GET /products              // Fetch all products
GET /products/{id}         // Fetch specific product
GET /products/search?q={query} // Search products
```

### **Features**
- **🎯 Smart Filtering** - Automatically filters beauty/cosmetic products
- **🔍 Advanced Search** - Search by title, brand, or category
- **⚡ Fast Loading** - Optimized data fetching and caching
- **🛡️ Error Handling** - Graceful fallbacks and user feedback

---

## 🛒 Shopping Features

### **Cart Management**
- ✅ Add/remove products with ease
- 🔢 Quantity controls with real-time updates
- 💰 Automatic price calculations
- 🎯 Discount application
- 💾 Session persistence

### **Product Experience**
- 📸 High-quality product images
- 📝 Detailed descriptions and specifications
- ⭐ Product ratings and reviews
- 🏷️ Category and brand filtering
- 🔍 Advanced search functionality

---

## 🔐 Authentication System

### **Security Features**
- 🔒 Email/password authentication
- 🛡️ Session management
- 🚪 Protected route access
- 🔄 Secure logout functionality
- 📱 Cross-device session sync

### **User Experience**
- ✨ Smooth login/register flow
- 📧 Email validation
- 🔑 Password strength indicators
- 🚀 Quick authentication
- 💾 Remember me functionality

---

## 📱 Platform Support

<div align="center">

| Feature | Android | iOS |
|---------|:-------:|:---:|
| **Core Functionality** | ✅ | ✅ |
| **Authentication** | ✅ | ✅ |
| **Product Browsing** | ✅ | ✅ |
| **Shopping Cart** | ✅ | ✅ |
| **User Profile** | ✅ | ✅ |
| **Search & Filter** | ✅ | ✅ |
| **Responsive Design** | ✅ | ✅ |

</div>

---

## 🚀 Performance Optimizations

- **⚡ Fast Loading** - Optimized bundle size and lazy loading
- **🔄 Efficient Re-renders** - Smart component updates
- **📱 Native Performance** - Platform-specific optimizations
- **🌐 Network Optimization** - Efficient API calls and caching
- **💾 Memory Management** - Proper cleanup and resource management

---

## 🔮 Roadmap & Future Features

### **🔄 Coming Soon**
- [ ] 🔐 Social login (Google, Apple, Facebook)
- [ ] 🛒 Advanced cart with checkout
- [ ] ❤️ Wishlist functionality
- [ ] 🔔 Push notifications
- [ ] 🌙 Dark mode support

### **🚀 Planned Features**
- [ ] 💳 Real payment gateway integration
- [ ] ⭐ Product reviews and ratings
- [ ] 📍 Address management
- [ ] 📦 Order tracking
- [ ] 🎯 Personalized recommendations
- [ ] 📊 Analytics dashboard

---

## 🐛 Known Issues & Limitations

- ⚠️ Social login buttons are UI-only (functionality pending)
- ⚠️ Filter functionality shows "Coming Soon" message
- ⚠️ Cart screen navigation not fully implemented
- ⚠️ Some profile menu items show "Coming Soon" message

*These are being actively worked on and will be resolved in upcoming releases.*

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 **Fork** the repository
2. 🌿 **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 **Push** to the branch (`git push origin feature/AmazingFeature`)
5. 🔄 **Open** a Pull Request

### **Development Guidelines**
- 📝 Follow TypeScript best practices
- 🎨 Maintain consistent code style
- 🧪 Add tests for new features
- 📚 Update documentation as needed

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

<div align="center">

**Built with ❤️ using React Native**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourusername)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourusername)

</div>

---

<div align="center">

### ⭐ **Star this repository if you found it helpful!**

**GlowCart** - Where beauty meets technology ✨

*This is a demo application for educational purposes. Authentication is mock-based and products are fetched from a public API.*

</div>
