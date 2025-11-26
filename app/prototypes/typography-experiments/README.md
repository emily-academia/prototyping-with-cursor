# Typography Experiments

A prototype exploring unique CSS typography treatments including text wrapping around circles, 3D skewed text, and animated wavy text effects.

## Features

- **Interactive Text Input**: Type any sentence and watch it transform across three different typography experiments
- **Circle Wrapping**: Text wraps around a circular path using SVG `textPath`
- **3D Skewed Text**: Perspective transforms create a 3D effect with depth and shadows
- **Wavy Text**: Individual character animations create a flowing wave effect
- **Variable Font**: Uses Inter variable font with adjustable weight axis

## Technical Details

### CSS Techniques Used

1. **Circle Wrapping**: SVG `<textPath>` element with a circular path definition
2. **3D Effects**: CSS `perspective`, `rotateX`, `rotateY`, and `skew` transforms combined with `text-shadow` for depth
3. **Wavy Animation**: Individual character transforms with staggered animation delays
4. **Variable Fonts**: `font-variation-settings` to control the weight axis of Inter font

### Setup

No additional dependencies required. The prototype uses:
- React hooks (`useState`) for state management
- CSS Modules for styling
- Next.js font optimization for the Inter variable font

## How to Use

1. Navigate to the prototype page
2. Type or edit the text in the input field at the top
3. Watch as the text updates in real-time across all three typography experiments

## Learning Points

- SVG textPath for curved text layouts
- CSS 3D transforms and perspective
- Character-by-character animations
- Variable font implementation
- CSS-only effects (no JavaScript libraries)

