// Centralized color system for FOG İstanbul
// All colors are standardized here to ensure consistency

export const colors = {
  // Primary Colors
  primary: '#ed6d8f',        // Standard Pink - Used everywhere
  primaryDark: '#c25975',   // Darker shade of primary
  primaryLight: '#f5a3b8',  // Lighter shade of primary
  
  // Secondary Colors
  secondary: '#cf1414',     // Standard Red - Used for accents
  secondaryDark: '#a01010', // Darker shade of secondary
  
  // Background Colors
  background: '#0a0a0a',    // Main background
  bgDark: '#0a0a12',        // Dark background variant
  bgDarker: '#050510',      // Darkest background
  
  // Surface Colors
  surfaceDark: '#12121a',   // Dark surface
  surfaceDarker: '#0f0f15', // Darker surface
  
  // Border Colors
  borderDark: '#1e1e2e',    // Dark border
  borderLight: 'rgba(255, 255, 255, 0.1)', // Light border with opacity
  
  // Text Colors
  text: '#ffffff',          // Primary text
  textLight: '#e5e7eb',     // Light text
  textGray: '#9ca3af',      // Gray text
  textMuted: '#6b7280',     // Muted text
  
  // Semantic Colors
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
} as const;

// Helper function to convert hex to rgba
export const hexToRgba = (hex: string, alpha: number = 1): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Pre-computed rgba values for common use cases
export const rgbaColors = {
  primary10: hexToRgba(colors.primary, 0.1),
  primary20: hexToRgba(colors.primary, 0.2),
  primary30: hexToRgba(colors.primary, 0.3),
  primary40: hexToRgba(colors.primary, 0.4),
  primary50: hexToRgba(colors.primary, 0.5),
  secondary10: hexToRgba(colors.secondary, 0.1),
  secondary20: hexToRgba(colors.secondary, 0.2),
  secondary30: hexToRgba(colors.secondary, 0.3),
  secondary40: hexToRgba(colors.secondary, 0.4),
} as const;
