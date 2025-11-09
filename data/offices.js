// The King Group Office Locations
// Coordinates are stored as percentages (0-100) relative to the map image
// Formula: lng% = (longitude + 180) / 360 * 100
//          lat% = (90 - latitude) / 180 * 100

export const offices = [
  {
    id: "hq-gujarat",
    name: "Headquarters",
    city: "Gujarat",
    country: "India",
    lat: 41.5, // ~23°N latitude
    lng: 62.5, // ~72°E longitude
    badge: "Headquarters",
    partners: 260,
    volume: "50,000+ MT",
    growth: "+25% YoY",
    description:
      "Central hub for global operations and strategic partnerships across agri-commodities",
    region: "South Asia",
  },
  {
    id: "vietnam-hcmc",
    name: "Vietnam Office",
    city: "Ho Chi Minh City",
    country: "Vietnam",
    lat: 49, // ~11°N latitude
    lng: 73, // ~107°E longitude
    badge: "Regional",
    partners: 145,
    volume: "15,000+ MT",
    growth: "+31% YoY",
    description:
      "Strategic hub for rice, cashew, and spice sourcing in Southeast Asia",
    region: "SouthEast Asia",
  },
  {
    id: "uae-dubai",
    name: "UAE Office",
    city: "Dubai",
    country: "UAE",
    lat: 44.8, // ~25°N latitude
    lng: 57, // ~55°E longitude
    badge: "Regional",
    partners: 89,
    volume: "8,000+ MT",
    growth: "+28% YoY",
    description:
      "Middle East operations hub serving Gulf countries and emerging markets",
    region: "Middle East",
  },
  {
    id: "ghana-accra",
    name: "Ghana Office",
    city: "Accra",
    country: "Ghana",
    lat: 49.7, // ~6°N latitude
    lng: 40.3, // ~0°E longitude
    badge: "Regional",
    partners: 112,
    volume: "12,000+ MT",
    growth: "+22% YoY",
    description:
      "West Africa sourcing center for cashew, cotton, and agricultural commodities",
    region: "West Africa",
  },
  {
    id: "tanzania-dar",
    name: "Tanzania Office",
    city: "Dar es Salaam",
    country: "Tanzania",
    lat: 66, // ~7°S latitude
    lng: 52, // ~39°E longitude
    badge: "Regional",
    partners: 78,
    volume: "6,500+ MT",
    growth: "+18% YoY",
    description: "East Africa operations for cashew and agricultural exports",
    region: "West Africa",
  },
  {
    id: "australia-sydney",
    name: "Australia Office",
    city: "Sydney",
    country: "Australia",
    lat: 77, // ~34°S latitude
    lng: 85, // ~151°E longitude
    badge: "Regional",
    partners: 45,
    volume: "3,500+ MT",
    growth: "+15% YoY",
    description: "Pacific region partnerships and market expansion",
    region: "Asia Pacific",
  },
];
