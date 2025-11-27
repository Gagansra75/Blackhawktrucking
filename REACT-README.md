# Blackhawk Trucking - React E-commerce Store

A modern, responsive React-based e-commerce website for trucking accessories with shopping cart, product search, and customer testimonials.

## Features

✅ **React Components** - Modular, reusable components for better code organization
✅ **State Management** - React hooks for cart, search, and menu state
✅ **Product Search** - Real-time product filtering
✅ **Shopping Cart** - Add/remove items with price calculations
✅ **Responsive Design** - Mobile-first design that works on all devices
✅ **Modern UI** - Clean, professional design with smooth animations
✅ **Product Grid** - Auto-responsive grid layout
✅ **Customer Testimonials** - Social proof section
✅ **Newsletter Signup** - Email subscription functionality
✅ **Contact Information** - Complete contact details and hours

## Project Structure

```
/src
├── App.js                 # Main App component with state management
├── App.css               # Global styles
├── index.js              # React entry point
├── index.css             # Global CSS
└── /components
    ├── Header.js         # Navigation header with cart button
    ├── Hero.js           # Hero banner section
    ├── SearchBar.js      # Product search component
    ├── ProductGrid.js    # Product list container
    ├── ProductCard.js    # Individual product component
    ├── Testimonials.js   # Customer reviews section
    ├── Newsletter.js     # Newsletter signup form
    ├── Contact.js        # Contact information
    ├── Cart.js           # Shopping cart popup
    └── Footer.js         # Footer section

/public
└── index.html            # HTML template

/css/img
└── truck.png            # Background image asset
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Navigate to the project directory:
```bash
cd /Users/gagansra/Desktop/Trucking-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner.

## Key React Concepts Used

- **Functional Components** - All components are functional components with hooks
- **useState Hook** - Managing cart, search, and menu state
- **Props** - Passing data and callbacks between components
- **Conditional Rendering** - Showing/hiding cart and menu based on state
- **Event Handlers** - Click handlers for cart, search, and menu toggle
- **Array Methods** - Map for rendering lists, filter for search
- **CSS Classes** - Dynamic CSS classes based on component state

## Features Breakdown

### Cart Management
- Add items to cart with prices
- Remove items from cart
- Calculate total price
- Show/hide cart popup
- Display cart item count

### Product Search
- Real-time filtering as user types
- Search by product name or category
- Dynamic product grid updates

### Mobile Menu
- Hamburger menu on mobile devices
- Toggle menu open/close
- Auto-close menu when link clicked

### Responsive Design
- Desktop: 4-column product grid
- Tablet: 2-column product grid
- Mobile: 1-column product grid
- Flexible layouts for all sections

## Technologies Used

- **React 18** - UI framework
- **CSS3** - Styling with media queries for responsiveness
- **JavaScript ES6+** - Modern JavaScript features
- **React Hooks** - useState for state management

## Customization

### Adding New Products
Edit the `products` array in `App.js`:
```javascript
const products = [
  {
    id: 5,
    name: 'New Product',
    price: 99.99,
    category: 'Category',
    image: 'image-url',
    description: 'Product description'
  },
  // ... more products
];
```

### Styling
- Global styles: `src/App.css`
- Component-specific styles: Added to `App.css`
- Responsive breakpoints:
  - 768px for tablets
  - 480px for mobile phones

### Colors
- Primary Red: `#d32f2f`
- Dark Gray: `#111`
- Light Gray: `#f5f5f5`
- Blue: `#1e88e5`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations

- React.memo can be added to ProductCard to prevent unnecessary re-renders
- useCallback hook can optimize event handlers
- Consider implementing React Router for multi-page functionality
- Add code splitting for better bundle sizes

## Future Enhancements

- Add React Router for multi-page navigation
- Implement Redux or Context API for global state management
- Add user authentication
- Integrate payment gateway (Stripe, PayPal)
- Add product filtering by category
- Implement product reviews and ratings
- Add inventory management
- Create admin dashboard

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please contact: support@blackhawktrucking.com

---

Made with ❤️ by Blackhawk Trucking
