// Application constants and configuration
export const APP_CONFIG = {
  COMPANY: {
    NAME: 'Élégant Events',
    LEGAL_NAME: 'Élégant Events LLC',
    EMAIL: 'hello@elegantevents.com',
    PHONE: '+1 (555) 123-4567',
    PHONE_FORMATTED: '(555) 123-4567',
    ADDRESS: {
      STREET: '123 Luxury Avenue',
      CITY: 'Premium City',
      STATE: 'PC',
      ZIP: '10001',
      COUNTRY: 'United States'
    },
    SOCIAL: {
      INSTAGRAM: 'https://instagram.com/elegantevents',
      FACEBOOK: 'https://facebook.com/elegantevents',
      PINTEREST: 'https://pinterest.com/elegantevents',
      LINKEDIN: 'https://linkedin.com/company/elegantevents'
    }
  },
  BUSINESS: {
    HOURS: {
      WEEKDAYS: '8:00 AM - 6:00 PM',
      WEEKENDS: '9:00 AM - 5:00 PM',
      TIMEZONE: 'EST'
    },
    FOUNDED: 2008,
    TEAM_SIZE: 25,
    SERVICE_AREAS: ['National', 'International']
  }
};

// Form validation constants
export const VALIDATION = {
  EMAIL: {
    REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    MESSAGE: 'Please enter a valid email address'
  },
  PHONE: {
    REGEX: /^\+?[\d\s-()]{10,}$/,
    MESSAGE: 'Please enter a valid phone number'
  },
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50,
    MESSAGE: 'Name must be between 2 and 50 characters'
  },
  MESSAGE: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 1000,
    MESSAGE: 'Message must be between 10 and 1000 characters'
  },
  GUESTS: {
    MIN: 1,
    MAX: 1000,
    MESSAGE: 'Number of guests must be between 1 and 1000'
  }
};

// Animation constants
export const ANIMATION = {
  DURATION: {
    FAST: 0.3,
    NORMAL: 0.5,
    SLOW: 0.8,
    PAGE_TRANSITION: 0.4
  },
  EASING: {
    DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
    BOUNCE: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    SMOOTH: 'cubic-bezier(0.4, 0, 0.2, 1)'
  },
  STAGGER: {
    CHILDREN: 0.1,
    ITEMS: 0.05
  }
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  XS: 320,
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536
};

// Event types and categories
export const EVENT_TYPES = [
  {
    value: 'wedding',
    label: 'Wedding',
    icon: '💒',
    description: 'Elegant wedding ceremonies and receptions'
  },
  {
    value: 'corporate',
    label: 'Corporate Event',
    icon: '💼',
    description: 'Professional corporate gatherings and conferences'
  },
  {
    value: 'birthday',
    label: 'Birthday Party',
    icon: '🎂',
    description: 'Memorable birthday celebrations'
  },
  {
    value: 'anniversary',
    label: 'Anniversary',
    icon: '💝',
    description: 'Romantic anniversary celebrations'
  },
  {
    value: 'graduation',
    label: 'Graduation',
    icon: '🎓',
    description: 'Academic achievement celebrations'
  },
  {
    value: 'baby-shower',
    label: 'Baby Shower',
    icon: '👶',
    description: 'Joyful baby welcoming parties'
  },
  {
    value: 'engagement',
    label: 'Engagement Party',
    icon: '💍',
    description: 'Engagement celebrations'
  },
  {
    value: 'other',
    label: 'Other Celebration',
    icon: '✨',
    description: 'Other special occasions'
  }
];

// Budget ranges
export const BUDGET_RANGES = [
  { value: '5000-10000', label: '$5,000 - $10,000', min: 5000, max: 10000 },
  { value: '10000-25000', label: '$10,000 - $25,000', min: 10000, max: 25000 },
  { value: '25000-50000', label: '$25,000 - $50,000', min: 25000, max: 50000 },
  { value: '50000-100000', label: '$50,000 - $100,000', min: 50000, max: 100000 },
  { value: '100000+', label: '$100,000+', min: 100000, max: null }
];

// Guest count ranges
export const GUEST_RANGES = [
  { value: '1-50', label: '1-50 Guests' },
  { value: '51-100', label: '51-100 Guests' },
  { value: '101-200', label: '101-200 Guests' },
  { value: '201-500', label: '201-500 Guests' },
  { value: '500+', label: '500+ Guests' }
];

// Service categories
export const SERVICE_CATEGORIES = [
  {
    id: 'planning',
    name: 'Event Planning',
    description: 'Complete event planning and coordination',
    icon: '📋'
  },
  {
    id: 'design',
    name: 'Event Design',
    description: 'Creative design and theming',
    icon: '🎨'
  },
  {
    id: 'venue',
    name: 'Venue Selection',
    description: 'Premium venue sourcing and booking',
    icon: '🏛️'
  },
  {
    id: 'catering',
    name: 'Catering',
    description: 'Gourmet food and beverage services',
    icon: '🍽️'
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    description: 'Music, performers, and entertainment',
    icon: '🎭'
  },
  {
    id: 'decor',
    name: 'Decor & Florals',
    description: 'Stunning decorations and floral arrangements',
    icon: '💐'
  }
];

// Color scheme
export const COLORS = {
  PRIMARY: {
    GOLD: '#D4AF37',
    DARK_GOLD: '#B8860B',
    LIGHT_GOLD: '#F4D03F',
    CREAM: '#fefaf0',
    CHARCOAL: '#1a1a1a',
    OFF_WHITE: '#f8f8f8'
  },
  SECONDARY: {
    BURGUNDY: '#800020',
    NAVY: '#003366',
    FOREST: '#228B22',
    DUSTY_ROSE: '#DCB4AD'
  },
  NEUTRAL: {
    WHITE: '#ffffff',
    BLACK: '#000000',
    GRAY_100: '#f7f7f7',
    GRAY_200: '#e5e5e5',
    GRAY_300: '#d4d4d4',
    GRAY_400: '#a3a3a3',
    GRAY_500: '#737373',
    GRAY_600: '#525252',
    GRAY_700: '#404040',
    GRAY_800: '#262626',
    GRAY_900: '#171717'
  }
};

// API endpoints (for future backend integration)
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  BOOKING: '/api/booking',
  GALLERY: '/api/gallery',
  PACKAGES: '/api/packages',
  TESTIMONIALS: '/api/testimonials'
};

// Local storage keys
export const STORAGE_KEYS = {
  THEME_PREFERENCE: 'elegant-events-theme',
  USER_PREFERENCES: 'elegant-events-preferences',
  RECENT_VIEWS: 'elegant-events-recent-views'
};

// Error messages
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  FORM_SUBMISSION: 'Failed to submit form. Please try again.',
  REQUIRED_FIELD: 'This field is required.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  INVALID_PHONE: 'Please enter a valid phone number.'
};

// Success messages
export const SUCCESS_MESSAGES = {
  FORM_SUBMISSION: 'Thank you! Your message has been sent successfully.',
  BOOKING_REQUEST: 'Booking request submitted! We\'ll contact you within 24 hours.',
  CONTACT_FORM: 'Message sent! We\'ll get back to you soon.'
};

// Date and time formats
export const DATE_FORMATS = {
  DISPLAY: 'MMMM DD, YYYY',
  FORM: 'YYYY-MM-DD',
  TIME: 'h:mm A',
  DATETIME: 'MMMM DD, YYYY [at] h:mm A'
};

// File upload constraints
export const UPLOAD_CONSTRAINTS = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  MAX_FILES: 10
};

export default {
  APP_CONFIG,
  VALIDATION,
  ANIMATION,
  BREAKPOINTS,
  EVENT_TYPES,
  BUDGET_RANGES,
  GUEST_RANGES,
  SERVICE_CATEGORIES,
  COLORS,
  API_ENDPOINTS,
  STORAGE_KEYS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  DATE_FORMATS,
  UPLOAD_CONSTRAINTS
};