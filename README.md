# ZARVETON — Premium Glassware Website

A refined, Webflow-ready website for ZARVETON, a luxury glassware brand. This implementation follows strict brand guidelines emphasizing quiet luxury, editorial restraint, and curated aesthetics.

## 📋 Project Overview

**Brand:** ZARVETON  
**Contact:** Care@Zarveton.com  
**Platform:** Webflow-compatible HTML/CSS/JS  
**Design Philosophy:** Quietly expensive, modern, curated, minimal

## 🎨 Brand Guidelines

### Color Palette (Fixed)
- **Charcoal** (#1E1E1E) - Primary background, main text
- **Forest Green** (#1F3A2E) - Secondary surfaces, section backgrounds
- **Navy** (#0E1A2B) - Hero backgrounds, footer, deep contrast
- **Champagne Gold** (#D6C08D) - Accent only (max 5-7% of screen)

### Typography
- **Headlines:** Serif font (Cormorant Garamond / Playfair Display)
- **Body/UI:** Sans-serif (Montserrat / Inter)
- **Sizes:** Headings 36–56px, Body 15–17px

### Layout Principles
- Desktop-first, responsive design
- Strong whitespace and editorial pacing
- 12-column grid feel
- Minimal elements per section
- Large imagery, minimal text

## 📁 File Structure

```
zarveton-website/
├── index.html              # Homepage
├── collections.html        # Collections listing
├── collection-detail.html  # Individual collection template
├── about.html             # Brand story
├── care.html              # Care guide (premium signal)
├── contact.html           # Contact form
├── styles.css             # Main stylesheet
├── collections.css        # Collections-specific styles
├── collection-detail.css  # Detail page styles
├── about.css              # About page styles
├── care.css               # Care page styles
├── contact.css            # Contact page styles
├── script.js              # Main JavaScript
├── collections.js         # Collections filtering
├── contact.js             # Form handling
└── README.md              # This file
```

## 🏗️ Page Structure

### 1. Homepage (index.html)
**Sections:**
- Hero (full viewport, navy gradient)
- Brand Philosophy (2-4 lines, gold dividers)
- Featured Collections (3 tiles)
- The Moment / Use Case (lifestyle imagery)
- Craft & Assurance (4 trust points)
- Care Preview
- Footer

### 2. Collections (collections.html)
- Collections header
- Filter buttons (optional)
- Grid layout (2 columns desktop, 1 mobile)
- CTA section

### 3. Collection Detail (collection-detail.html)
- Full-width hero image
- Collection info with breadcrumb
- Key features list
- Image gallery (4-8 images)
- Care notes section
- Enquiry CTA
- Related collections

### 4. About (about.html)
- About hero
- Origin statement
- Philosophy grid (3 points)
- Feature image
- Who we serve section
- CTA

### 5. Care (care.html)
**Critical for premium signal**
- Care header
- Cleaning basics (hand wash, dishwasher)
- Storage and handling
- Avoiding scratches/clouding
- Damage guidance
- Support contact

### 6. Contact (contact.html)
- Contact header
- Email display
- Contact form (name, email, collection dropdown, message)
- What we can help with section

## 🎯 Design Principles (Non-negotiable)

### DO:
✓ Use restraint and whitespace  
✓ Keep copy declarative and short  
✓ Use Champagne Gold sparingly (max 5-7%)  
✓ Prioritize large imagery with moody lighting  
✓ Implement subtle scroll animations  
✓ Maintain editorial pacing  

### DON'T:
✗ Overuse Champagne Gold  
✗ Use script fonts or thin fonts on light backgrounds  
✗ Add "luxury" language or hype  
✗ Create crowded sections  
✗ Use bright colors or flashy gradients  
✗ Include discount/offer language  

## 💻 Technical Implementation

### Responsive Breakpoints
- Desktop: 1280px+ (primary)
- Tablet: 768px - 1279px
- Mobile: < 768px

### Animations
- Fade-in on page load (hero elements)
- Scroll-triggered animations (fade-in-scroll class)
- Subtle hover transitions
- Optional parallax on hero (very subtle)

### Forms
- Contact form with validation
- Collection dropdown (CMS-ready)
- Success message handling

### Performance
- CSS-only animations where possible
- Optimized for fast loading
- Compressed image placeholders
- Minimal JavaScript

## 🔧 Webflow Integration Notes

### CMS Collections Needed:
1. **Collections** (for collections.html and detail pages)
   - Title
   - Description
   - Category (stemware/bar/serveware/sets)
   - Hero Image
   - Gallery Images (multi-image)
   - Features (rich text)
   - Related Collections (reference)

2. **Journal** (optional, for content marketing)
   - Title
   - Date
   - Category
   - Content (rich text)
   - Featured Image

### Dynamic Elements:
- Collection tiles on collections.html
- Collection detail template
- Related collections section
- Filter buttons (category-based)

## 📱 Mobile Considerations

- Navigation collapses to mobile menu
- Single-column layouts
- Adjusted font sizes (clamp() function)
- Touch-friendly buttons (44px minimum)
- Reduced spacing on small screens

## 🎨 Typography Scale

```css
h1: clamp(36px, 5vw, 56px)
h2: clamp(32px, 4vw, 48px)
h3: clamp(24px, 3vw, 36px)
h4: 20px (uppercase, spaced)
h5: 14px (uppercase, heavy spaced)
Body: clamp(15px, 1.5vw, 17px)
```

## 🚀 Deployment Checklist

- [ ] Replace placeholder images with actual photography
- [ ] Update all collection names and descriptions
- [ ] Configure contact form backend (email service)
- [ ] Add Google Fonts links for Cormorant Garamond & Montserrat
- [ ] Test all responsive breakpoints
- [ ] Verify accessibility (contrast, focus states)
- [ ] Set up CMS collections in Webflow
- [ ] Connect domain and SSL
- [ ] Add analytics tracking (if needed)
- [ ] Test form submissions
- [ ] Verify all internal links

## 📸 Image Requirements

### Photography Style:
- Moody, controlled lighting
- Reflections and shadows
- Glass should look weighty and precise
- Avoid stock-photo smiles
- No overbright kitchens
- Minimal busy backgrounds

### Image Specs:
- Hero: 1920x1080px minimum
- Collection tiles: 800x1000px (3:4 ratio)
- Gallery: 1200x1500px
- Lifestyle: 1600x900px (16:9)
- Format: JPG or WebP, optimized

## 🔗 Navigation Structure

```
Home
├── Collections
│   ├── Stemware
│   ├── Bar
│   ├── Serveware
│   └── Sets
├── About
├── Care
└── Contact
```

## ✉️ Contact Information

**Primary Contact:** Care@Zarveton.com  
**Response Time:** 24-48 hours  
**Support Areas:**
- Product care and maintenance
- Availability and pricing
- Custom hospitality orders
- Gift recommendations
- Replacement inquiries

## 📝 Copy Guidelines

### Tone:
- Declarative, not dramatic
- Confident without shouting
- Editorial authority
- No hype or sales pressure

### Avoid Words:
- "Best"
- "Finest"
- "Luxury" (as a claim)
- "Premium" (as a claim)
- "World-class"

### Preferred Language:
- "Refined"
- "Balanced"
- "Clarity"
- "Intentional"
- "Curated"
- "Precision"

## 🛠️ Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 13+)
- Chrome Mobile (Android 9+)

## 📄 License & Credits

**Design:** Custom brand guidelines  
**Development:** HTML5, CSS3, Vanilla JavaScript  
**Fonts:** Google Fonts (Cormorant Garamond, Montserrat)  
**Platform:** Webflow-compatible static site

---

**Final Rule:** If something feels "impressive" but not necessary, remove it. ZARVETON must feel deliberate.

For questions or implementation support, contact: Care@Zarveton.com
