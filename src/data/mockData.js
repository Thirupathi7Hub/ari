export const galleryImages = [
  {
    id: 1,
    url: '/images/wedding-1.jpg',
    category: 'wedding',
    title: 'Royal Wedding Celebration',
    description: 'Grand wedding with golden theme and luxurious decorations at a premium venue'
  },
  {
    id: 2,
    url: '/images/corporate-1.jpg',
    category: 'corporate',
    title: 'Corporate Gala Night',
    description: 'Elegant corporate event setup with premium amenities and professional lighting'
  },
  {
    id: 3,
    url: '/images/birthday-1.jpg',
    category: 'birthday',
    title: 'Luxury Birthday Bash',
    description: 'Exclusive birthday party with stunning arrangements and thematic decorations'
  },
  {
    id: 4,
    url: '/images/wedding-2.jpg',
    category: 'wedding',
    title: 'Garden Wedding Bliss',
    description: 'Beautiful outdoor wedding ceremony with floral arrangements and natural elegance'
  },
  {
    id: 5,
    url: '/images/corporate-2.jpg',
    category: 'corporate',
    title: 'Award Ceremony Night',
    description: 'Prestigious corporate award night with custom stage design and lighting'
  },
  {
    id: 6,
    url: '/images/birthday-2.jpg',
    category: 'birthday',
    title: 'Golden Anniversary Celebration',
    description: 'Elegant anniversary event with golden theme and sophisticated decor'
  },
  {
    id: 7,
    url: '/images/wedding-1.jpg',
    category: 'wedding',
    title: 'Beachfront Wedding',
    description: 'Romantic beach wedding with sunset backdrop and elegant setup'
  },
  {
    id: 8,
    url: '/images/corporate-1.jpg',
    category: 'corporate',
    title: 'Product Launch Event',
    description: 'Innovative product launch with interactive displays and modern design'
  }
];

export const comboPackages = [
  {
    id: 1,
    name: 'Royal Wedding Package',
    price: 25000,
    originalPrice: 30000,
    description: 'The ultimate wedding experience with premium services and luxurious arrangements that create unforgettable memories',
    features: [
      'Premium Venue Decoration & Setup',
      'Luxury Catering for 200 Guests',
      'Professional Photography & Videography',
      'Bridal Makeup & Styling Services',
      'Live Band Performance & DJ Services',
      'Grand Fireworks Display',
      'Luxury Car Service & Transportation',
      'Dedicated Wedding Planner'
    ],
    image: '/images/wedding-package.jpg',
    category: 'wedding',
    popular: true,
    duration: 'Full Day',
    guests: 'Up to 200',
    icon: '💒'
  },
  {
    id: 2,
    name: 'Corporate Excellence',
    price: 15000,
    originalPrice: 18000,
    description: 'Professional corporate events with sophisticated arrangements that impress clients and stakeholders',
    features: [
      'Professional Conference Setup',
      'Gourmet Catering for 150 Guests',
      'High-Quality Audio-Visual Equipment',
      'Professional MC & Event Host',
      'Custom Branding & Marketing Materials',
      'Networking Session Management',
      'Premium Gift Bags & Souvenirs',
      'Dedicated Event Coordinator'
    ],
    image: '/images/corporate-1.jpg',
    category: 'corporate',
    popular: false,
    duration: '6-8 Hours',
    guests: 'Up to 150',
    icon: '💼'
  },
  {
    id: 3,
    name: 'Premium Birthday Bash',
    price: 8000,
    originalPrice: 10000,
    description: 'Make your special day unforgettable with our premium birthday package featuring exclusive services',
    features: [
      'Custom Theme Decoration',
      'Gourmet Catering for 50 Guests',
      'Professional Photography Service',
      'Entertainment & Games Setup',
      'Custom Designed Birthday Cake',
      'Party Favors & Return Gifts',
      'Premium Music System & DJ',
      'Professional Event Host'
    ],
    image: '/images/birthday-1.jpg',
    category: 'birthday',
    popular: true,
    duration: '4-6 Hours',
    guests: 'Up to 50',
    icon: '🎂'
  },
  {
    id: 4,
    name: 'Anniversary Special',
    price: 12000,
    originalPrice: 15000,
    description: 'Celebrate your love story with our exclusive anniversary package designed for romance and elegance',
    features: [
      'Romantic Venue Decoration',
      'Fine Dining for 80 Guests',
      'Candlelight Dinner Setup',
      'Live Musical Performance',
      'Professional Photography',
      'Custom Floral Arrangements',
      'Memory Lane Photo Display',
      'Anniversary Cake & Toast'
    ],
    image: '/images/wedding-2.jpg',
    category: 'anniversary',
    popular: false,
    duration: '5-7 Hours',
    guests: 'Up to 80',
    icon: '💝'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah & James Wilson',
    event: 'Wedding',
    text: 'Élégant Events made our dream wedding come true! Every detail was perfect and exceeded our expectations. The team was professional, creative, and made us feel so special throughout the entire process.',
    rating: 5,
    image: '/images/client-1.jpg',
    date: 'January 15, 2024'
  },
  {
    id: 2,
    name: 'TechCorp International',
    event: 'Corporate Gala',
    text: 'Outstanding service for our annual corporate event. The attention to detail and professional execution was remarkable. Our clients and stakeholders were thoroughly impressed with the seamless organization.',
    rating: 5,
    image: '/images/client-1.jpg',
    date: 'February 20, 2024'
  },
  {
    id: 3,
    name: 'Michael Roberts',
    event: 'Birthday Celebration',
    text: 'The best birthday party ever! From decoration to entertainment, everything was flawless. Highly recommended! The team understood our vision perfectly and delivered beyond expectations.',
    rating: 5,
    image: '/images/client-1.jpg',
    date: 'March 10, 2024'
  },
  {
    id: 4,
    name: 'Emily Chen',
    event: 'Anniversary',
    text: 'Our 25th anniversary was magical thanks to Élégant Events. They created a romantic and elegant atmosphere that our family and friends still talk about. Exceptional service from start to finish!',
    rating: 5,
    image: '/images/client-1.jpg',
    date: 'April 5, 2024'
  }
];

export const stats = [
  { number: '500+', label: 'Events Organized', suffix: '', icon: '🎉' },
  { number: '98', label: 'Client Satisfaction', suffix: '%', icon: '⭐' },
  { number: '50+', label: 'Awards Won', suffix: '', icon: '🏆' },
  { number: '15', label: 'Years Experience', suffix: '+', icon: '📅' }
];

export const services = [
  {
    icon: '💒',
    title: 'Wedding Planning',
    description: 'Complete wedding planning services from venue selection to execution'
  },
  {
    icon: '💼',
    title: 'Corporate Events',
    description: 'Professional corporate events, conferences, and product launches'
  },
  {
    icon: '🎂',
    title: 'Birthday Parties',
    description: 'Memorable birthday celebrations for all ages and themes'
  },
  {
    icon: '💝',
    title: 'Anniversaries',
    description: 'Romantic anniversary celebrations that rekindle memories'
  },
  {
    icon: '🎓',
    title: 'Graduations',
    description: 'Joyous graduation parties to celebrate academic achievements'
  },
  {
    icon: '👶',
    title: 'Baby Showers',
    description: 'Beautiful baby showers welcoming new beginnings'
  }
];

export const teamMembers = [
  {
    name: 'Emma Wilson',
    role: 'Creative Director',
    image: '/images/client-1.jpg',
    description: 'With over 12 years in event planning, Emma brings creativity and precision to every project.'
  },
  {
    name: 'James Rodriguez',
    role: 'Operations Manager',
    image: '/images/client-1.jpg',
    description: 'James ensures flawless execution and manages our talented team of professionals.'
  },
  {
    name: 'Sophia Chen',
    role: 'Client Relations',
    image: '/images/client-1.jpg',
    description: 'Sophia builds lasting relationships with our clients and understands their unique visions.'
  }
];