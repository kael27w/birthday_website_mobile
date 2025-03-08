# Birthday Website Mobile Components Documentation

## Component Flow
1. Home → 2. Pictures → 3. Card → 4. Cake → 5. Present → 6. End

## Components Breakdown

### 1. Home Component (`Home.jsx`)
- **Purpose**: Landing page with animated text greeting
- **Key Features**:
  - GSAP animations for text reveal
  - Two-stage message display
  - Click interaction to progress
- **Navigation**: Leads to Pictures component
- **State Management**:
  - Uses `useState` for controlling visible text
  - Uses `useRef` for animation targeting

### 2. Picture Component (`Picture.jsx`)
- **Purpose**: Interactive photo gallery
- **Key Features**:
  - Draggable photo stack
  - Loading state management
  - Rotated text overlay
- **Images**:
  - Handles multiple image formats
  - Loading state indicator
  - Drag interactions with Framer Motion
- **Navigation**: Leads to Card component

### 3. Card Component (`Card.jsx`)
- **Purpose**: Interactive birthday card
- **Key Features**:
  - Animated card opening/closing
  - Custom CSS animations
  - Conditional button reveal
- **States**:
  - Tracks card open/close state
  - Controls Next Page button visibility
- **Navigation**: Leads to Cake component

### 4. Cake Component (`Cake.jsx`)
- **Purpose**: Interactive cake with blowable candle
- **Key Features**:
  - Microphone integration for blow detection
  - Animated candle flame
  - Confetti animation on success
- **Technical Implementation**:
  - Uses Web Audio API
  - Frequency analysis for blow detection
  - SVG animations
- **Navigation**: Leads to Present component

### 5. Present Component (`Present.jsx`)
- **Purpose**: Interactive gift box with surprises
- **Key Features**:
  - Animated gift box opening
  - Ticket animations
  - Fixed position navigation
- **Recent Modifications**:
  - Button positioning adjusted to fixed bottom
  - Improved visibility and accessibility
- **Navigation**: Leads to End component

### 6. End Component (`End.jsx`)
- **Purpose**: Final message display
- **Key Features**:
  - GSAP text animations
  - Multi-stage message reveal
  - Spanish language messages
- **Animations**:
  - Character-by-character reveal
  - Opacity and scale transitions

## Common Features Across Components
- **Routing**: React Router for navigation
- **Animations**: Mix of GSAP and Framer Motion
- **Styling**: Tailwind CSS with custom CSS
- **Layout**: Mobile-first responsive design
- **Navigation**: Consistent Next Page button pattern

## Recent Updates
1. Fixed button positioning in Present component
2. Improved navigation button visibility
3. Enhanced mobile responsiveness
4. Optimized animations for performance
5. Added loading states for better UX

## Technical Dependencies
- Framer Motion for drag interactions
- GSAP for text animations
- React Router for navigation
- Tailwind CSS for styling
- Web Audio API for blow detection 