# React Setup Guide

## 🚀 Quick Start

Your Blackhawk Trucking website now has a React version! Here's how to set it up:

### Step 1: Install Dependencies
```bash
cd /Users/gagansra/Desktop/Trucking-website
npm install
```

This will install:
- React 18.2.0
- React DOM 18.2.0
- React Scripts 5.0.1

### Step 2: Start Development Server
```bash
npm start
```

Your app will open at `http://localhost:3000`

### Step 3: Build for Production
```bash
npm build
```

This creates an optimized production build in the `build/` folder.

---

## 📁 Project Layout

### Original Files (Still Available)
- `/index.html` - Original HTML version
- `/script.js` - Original vanilla JavaScript
- `/css/styles.css` - Original styles

### New React Files
```
/src/
  ├── App.js (Main component with state management)
  ├── App.css (Global styles)
  ├── index.js (React entry point)
  ├── index.css (Global CSS)
  └── /components/
      ├── Header.js (Navigation + Cart button)
      ├── Hero.js (Banner section)
      ├── SearchBar.js (Product search)
      ├── ProductGrid.js (Products list)
      ├── ProductCard.js (Single product)
      ├── Testimonials.js (Reviews)
      ├── Newsletter.js (Email signup)
      ├── Contact.js (Contact info)
      ├── Cart.js (Shopping cart popup)
      └── Footer.js (Footer)

/public/
  └── index.html (HTML template)
```

---

## 🎯 Key React Features

### 1. **Component-Based Architecture**
Each section is a separate React component:
- `Header` - Navigation and cart button
- `ProductGrid` - Displays all products
- `Cart` - Shopping cart functionality
- `Newsletter` - Email subscription

### 2. **State Management with Hooks**
Uses `useState` hook for:
- Cart items
- Search term
- Mobile menu toggle
- Cart visibility

### 3. **Product Data**
Products are defined in `App.js` and passed to child components:
```javascript
const products = [
  {
    id: 1,
    name: 'LED Light Bar',
    price: 89.99,
    category: 'Lighting',
    image: 'url...',
    description: 'High-quality LED lighting'
  }
];
```

### 4. **Event Handling**
- `addToCart()` - Adds item to cart
- `removeFromCart()` - Removes item from cart
- `setSearchTerm()` - Updates search filter
- `setIsMenuOpen()` - Toggles mobile menu

---

## 💡 How It Works

### Cart Flow
1. User clicks "Add to Cart" button on a product
2. `addToCart(product)` function is called
3. Product is added to `cart` state
4. Cart component re-renders with new item
5. Cart count updates in header

### Search Flow
1. User types in search bar
2. `setSearchTerm()` updates state
3. Products are filtered in real-time
4. `ProductGrid` shows filtered results

### Menu Toggle (Mobile)
1. User clicks hamburger menu
2. `setIsMenuOpen()` toggles state
3. Navigation menu slides open/closed
4. Menu closes automatically on link click

---

## 🎨 Customization

### Add a New Product
Edit `/src/App.js`:
```javascript
const products = [
  // ... existing products
  {
    id: 5,
    name: 'New Product',
    price: 199.99,
    category: 'New Category',
    image: 'your-image-url',
    description: 'Product description'
  }
];
```

### Change Colors
Edit `/src/App.css`:
```css
/* Primary colors */
--primary: #d32f2f;    /* Red */
--dark: #111;          /* Dark gray */
--light: #f5f5f5;      /* Light gray */
```

### Modify Product Grid
Edit the CSS in `App.css`:
```css
.product-grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  /* Change minmax(250px, 1fr) to adjust product card size */
}
```

---

## 🔧 Development Tips

### Hot Reload
React Script automatically reloads when you save files - no manual refresh needed!

### Browser DevTools
- Install React Developer Tools extension
- Inspect components and their state
- Check component hierarchy

### Console Errors
Check the terminal and browser console for helpful error messages.

### Debugging
Add console.log to track state changes:
```javascript
console.log('Cart items:', cart);
console.log('Search term:', searchTerm);
```

---

## 📱 Responsive Breakpoints

- **Desktop**: All products visible in grid
- **Tablet (768px)**: Responsive menu + 2-column grid
- **Mobile (480px)**: Hamburger menu + 1-column grid

---

## 🚀 Deployment

### Build for Production
```bash
npm build
```

This creates optimized files in the `build/` folder ready for deployment.

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
Connect your GitHub repo and it auto-deploys on push.

---

## 📚 Learning Resources

- [React Official Documentation](https://react.dev)
- [React Hooks Guide](https://react.dev/reference/react/hooks)
- [Create React App Docs](https://create-react-app.dev)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/web/javascript/guide)

---

## ✅ Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start dev server: `npm start`
3. ✅ Open browser: `http://localhost:3000`
4. ✅ Start building!

---

## 🎉 You're Ready!

Your React version is set up and ready to use. Happy coding! 🚀

Need help? Check `REACT-README.md` for more detailed documentation.
