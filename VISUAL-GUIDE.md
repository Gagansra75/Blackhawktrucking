# 📸 Visual Guide - New Features

## Home Page Layout

```
┌────────────────────────────────────────┐
│  🚚 Blackhawk  | Home Products Contact │ Cart (0)
├────────────────────────────────────────┤
│                                        │
│       Your One-Stop Shop for          │
│       Trucking Accessories             │
│                                        │
│       [Shop Now Button]                │
│                                        │
├────────────────────────────────────────┤
│     Featured Products (4)              │
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  │
│  │ LED │  │ CB  │  │Seat │  │Tool │  │
│  │Bar  │  │Radio│  │Covers│  │box  │  │
│  └─────┘  └─────┘  └─────┘  └─────┘  │
├────────────────────────────────────────┤
│  ╔════════════════════════════════╗  │
│  ║  View All Accessories          ║  │ ← RED BUTTON
│  ║  Browse our complete catalog   ║  │
│  ║  [Go to Products Page →]       ║  │
│  ╚════════════════════════════════╝  │
├────────────────────────────────────────┤
│     Customer Testimonials              │
│     Newsletter Signup                  │
│     Contact Information                │
└────────────────────────────────────────┘
```

---

## Products Page Layout

```
┌────────────────────────────────────────┐
│  🚚 Blackhawk  | Home Products Contact │ Cart (X)
├────────────────────────────────────────┤
│  ALL TRUCK ACCESSORIES HEADER          │ ← RED BACKGROUND
│  Browse our complete catalog           │
├────────────────────────────────────────┤
│  Search: [___________________]         │
│  Filter by Category:                   │
│  [All] [Lighting] [Electronics] ...    │ ← BUTTONS
│  [Interior] [Storage] [Exterior] ...   │
│  [Safety]                              │
│                                        │
│  Showing 6 of 25 products              │
├────────────────────────────────────────┤
│  PRODUCT GRID:                         │
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  │
│  │ 1   │  │ 2   │  │ 3   │  │ 4   │  │
│  ├─────┤  ├─────┤  ├─────┤  ├─────┤  │
│  │ 5   │  │ 6   │  │ 7   │  │ 8   │  │
│  └─────┘  └─────┘  └─────┘  └─────┘  │
│  ... (continues with all 25)           │
└────────────────────────────────────────┘
```

---

## Navigation Flow

### Scenario 1: Browsing Featured Products
```
User arrives at home page
        ↓
Sees 4 featured products
        ↓
Reads description of each
        ↓
Clicks "View All Accessories" red button
        ↓
Navigates to Products page
```

### Scenario 2: Searching for Products
```
User on Products page
        ↓
Types "LED" in search bar
        ↓
Page filters to show LED products only
        ↓
Sees LED Light Bar, LED Cabin Lights, etc.
        ↓
Clicks "Add to Cart" on LED Light Bar
```

### Scenario 3: Filtering by Category
```
User on Products page
        ↓
Clicks "Electronics" button
        ↓
Page filters to show 5 electronics
        ↓
Sees CB Radio, GPS, Dash Camera, etc.
        ↓
Can add items to cart
```

### Scenario 4: Combining Search + Filter
```
User on Products page
        ↓
Types "light" in search AND clicks "Lighting"
        ↓
Page shows products matching BOTH criteria
        ↓
Sees LED products only
```

---

## Button States

### Category Buttons

**Inactive (unselected):**
```
┌─────────────┐
│ Electronics │  ← White background
└─────────────┘
```

**Active (selected):**
```
┌─────────────┐
│ Electronics │  ← Red background, white text
└─────────────┘
```

**Hover:**
```
┌─────────────┐
│ Electronics │  ← Red text, red border
└─────────────┘
```

---

## Mobile View

### Home Page Mobile
```
┌─────────────────────┐
│ 🚚 | ☰              │ ← Hamburger menu
├─────────────────────┤
│     Hero Banner     │
│                     │
├─────────────────────┤
│  Featured Product   │
│  ┌───────────────┐  │
│  │   Product 1   │  │
│  │   $89.99      │  │
│  │  [Add to Cart]│  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │   Product 2   │  │ ← Single column
│  │   $129.99     │  │
│  │  [Add to Cart]│  │
│  └───────────────┘  │
├─────────────────────┤
│ [View All Accessories]
├─────────────────────┤
│  Testimonials       │
│  Newsletter         │
│  Contact            │
└─────────────────────┘
```

### Products Page Mobile
```
┌─────────────────────┐
│ 🚚 | ☰              │
├─────────────────────┤
│ ALL ACCESSORIES     │
├─────────────────────┤
│ [Search_______]     │
│ [All][Light]..►     │ ← Scrolls horizontally
│ Showing 6 of 25     │
├─────────────────────┤
│  ┌──────────────┐   │
│  │  Product 1   │   │
│  │  $99.99      │   │
│  │ [Add to Cart]│   │ ← Single column
│  └──────────────┘   │
│  ┌──────────────┐   │
│  │  Product 2   │   │
│  │  $129.99     │   │
│  │ [Add to Cart]│   │
│  └──────────────┘   │
│  ... (continues)    │
└─────────────────────┘
```

---

## Search & Filter Examples

### Search Results
```
Search: "LED"
Results showing: LED Light Bar, LED Work Lights, 
                 LED Tail Light Set, LED Cabin Lights
Count: Showing 4 of 25 products
```

### Category Filter
```
Filter: "Electronics"
Results showing: CB Radio, GPS Navigation, Dash Camera,
                 Backup Camera, Bluetooth Speaker
Count: Showing 5 of 25 products
```

### No Results
```
Search: "something weird"
Category: All Products

┌──────────────────────┐
│ No products found    │
│ matching criteria.   │
│                      │
│ [Clear Filters]      │
└──────────────────────┘
```

---

## Shopping Cart Notification

When user adds product:
```
┌─────────────────────────────┐
│ ✓ LED Light Bar added!      │ ← Green notification
│                             │    appears for 3 seconds
└─────────────────────────────┘
```

Appears in top right, auto-dismisses after 3 seconds.

---

## Header Cart Counter

**No items:**
```
Cart (0)
```

**With items:**
```
Cart (3)    ← Updates as items added
```

---

## Product Card Details

```
┌──────────────────────┐
│  [Product Image]     │
│  ┌────────────────┐  │
│  │  Product Name  │  │
│  │  $99.99        │  │ ← Price in red
│  │  Category      │  │ ← Gray text
│  │  [Add to Cart] │  │ ← Blue button
│  └────────────────┘  │
└──────────────────────┘

Hover effect: Card lifts up slightly
```

---

## Color Scheme

| Element | Color | Hex |
|---------|-------|-----|
| Header | Dark Gray | #111 |
| Primary Button | Red | #d32f2f |
| Secondary Button | Blue | #1e88e5 |
| Accent | Dark Gray | #111 |
| Background | Light Gray | #f5f5f5 |
| Text | Dark | #111 |
| Success | Green | #4CAF50 |

---

## Responsive Breakpoints

| Device | Width | Columns | Menu |
|--------|-------|---------|------|
| Desktop | > 768px | 4 | Horizontal |
| Tablet | 481-768px | 2 | Horizontal |
| Mobile | < 480px | 1 | Hamburger ☰ |

---

## User Journey Map

```
Landing Page
    ↓
[See 4 Featured Products]
    ↓
    ├─ Option 1: Add to Cart (stays on home)
    │   └─ Cart opens, item added
    │
    └─ Option 2: Click "View All Accessories"
        └─ Navigate to Products Page
            ↓
        [See all 25 products]
            ↓
        ├─ Option A: Search by name
        │   └─ Filter results
        │
        └─ Option B: Filter by category
            └─ Show category items
                ↓
            [Click Add to Cart]
                └─ Item added, cart updates
```

---

## Features at a Glance

| Feature | Home | Products |
|---------|------|----------|
| Featured products | ✓ (4) | - |
| All products | - | ✓ (25) |
| Search | - | ✓ |
| Category filter | - | ✓ |
| Add to cart | ✓ | ✓ |
| Cart button | ✓ | ✓ |
| Navigation | ✓ | ✓ |
| Testimonials | ✓ | - |
| Newsletter | ✓ | - |
| Contact | ✓ | - |

---

**Your complete Blackhawk Trucking website! 🚀**
