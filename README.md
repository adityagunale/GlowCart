# GlowCart - Beauty E-commerce App

A complete React Native CLI beauty e-commerce application with modern UI/UX design and full functionality.

## 🚀 Features

### Core Features
- **User Authentication**: Login/Register with email and password
- **Product Browsing**: Browse beauty products with search and filtering
- **Product Details**: Detailed product information with images and descriptions
- **Shopping Cart**: Add products to cart with quantity management
- **User Profile**: Manage account settings and preferences
- **Responsive Design**: Beautiful UI that works on all screen sizes

### Technical Features
- **React Navigation**: Smooth screen transitions and tab navigation
- **Context API**: State management for authentication and cart
- **Axios**: API integration with dummyjson.com
- **TypeScript**: Full type safety and better development experience
- **Modular Architecture**: Reusable components and clean code structure

## 📱 Screenshots

### Onboarding Screen
- Welcome screen with app branding
- "Your Beauty, Delivered" tagline
- Get Started button

### Authentication Screens
- **Login Screen**: Email/password fields with social login options
- **Register Screen**: Full name, email, password, and confirm password

### Main App Screens
- **Home Screen**: Product grid with search and filter functionality
- **Product Details**: Large product images, descriptions, and add to cart
- **Profile Screen**: User information and settings menu

## 🛠️ Tech Stack

- **React Native CLI** (0.80.2)
- **TypeScript**
- **React Navigation v6**
- **Axios** for API calls
- **Context API** for state management
- **StyleSheet API** for styling

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd GlowCart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install iOS dependencies** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Run the application**

   **For Android:**
   ```bash
   npx react-native run-android
   ```

   **For iOS:**
   ```bash
   npx react-native run-ios
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Header.tsx
│   ├── ProductCard.tsx
│   └── SearchBar.tsx
├── context/            # State management
│   ├── AuthContext.tsx
│   └── CartContext.tsx
├── navigation/         # Navigation configuration
│   └── AppNavigator.tsx
├── screens/           # App screens
│   ├── HomeScreen.tsx
│   ├── LoginScreen.tsx
│   ├── OnboardingScreen.tsx
│   ├── ProductDetailsScreen.tsx
│   ├── ProfileScreen.tsx
│   └── RegisterScreen.tsx
├── utils/             # Utility functions
│   └── api.ts
└── assets/            # Images, fonts, etc.
```

## 🔧 Configuration

### API Configuration
The app uses the [DummyJSON API](https://dummyjson.com/products) for product data. The API utility automatically filters products to show only beauty/cosmetic related items.

### Environment Setup
No additional environment variables are required for basic functionality.

## 🎨 Design System

### Colors
- **Primary**: #FF6B9D (Pink)
- **Secondary**: #F8F9FA (Light Gray)
- **Text Primary**: #333333 (Dark Gray)
- **Text Secondary**: #666666 (Medium Gray)
- **Background**: #FFFFFF (White)

### Typography
- **Headings**: Bold, 24-32px
- **Body Text**: Regular, 14-16px
- **Captions**: Regular, 12-14px

## 🚀 Getting Started

1. **Start the Metro bundler**
   ```bash
   npx react-native start
   ```

2. **Run on Android**
   ```bash
   npx react-native run-android
   ```

3. **Run on iOS** (macOS only)
   ```bash
   npx react-native run-ios
   ```

## 📋 Available Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## 🔍 API Integration

The app integrates with the DummyJSON API to fetch product data. The API utility includes:

- **Product Filtering**: Automatically filters beauty/cosmetic products
- **Search Functionality**: Search products by title, brand, or category
- **Error Handling**: Graceful error handling with fallback options

### API Endpoints Used
- `GET /products` - Fetch all products
- `GET /products/{id}` - Fetch specific product
- `GET /products/search?q={query}` - Search products

## 🛒 Shopping Cart Features

- Add/remove products
- Quantity management
- Price calculations with discounts
- Cart persistence (in-memory)

## 🔐 Authentication

- Email/password authentication
- User session management
- Protected routes
- Logout functionality

## 📱 Navigation Flow

1. **Onboarding** → Welcome screen
2. **Login/Register** → Authentication
3. **Main Tabs** → Home and Profile
4. **Product Details** → Individual product view

## 🐛 Known Issues

- Social login buttons are UI-only (functionality not implemented)
- Filter functionality shows "Coming Soon" message
- Cart screen navigation not implemented
- Some profile menu items show "Coming Soon" message

## 🔮 Future Enhancements

- [ ] Implement social login (Google, Apple, Facebook)
- [ ] Add advanced filtering and sorting
- [ ] Implement cart screen with checkout
- [ ] Add wishlist functionality
- [ ] Implement push notifications
- [ ] Add dark mode support
- [ ] Implement real payment gateway
- [ ] Add product reviews and ratings
- [ ] Implement address management
- [ ] Add order tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

Built with ❤️ using React Native

---

**Note**: This is a demo application for educational purposes. The authentication is mock-based and products are fetched from a public API.
