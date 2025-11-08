export interface Office {
  id: string
  name: string
  city: string
  country: string
  lat: number // percentage: 0-100
  lng: number // percentage: 0-100
  badge: "Headquarters" | "Regional"
  partners: number
  volume: string
  growth: string
  description: string
  region: string
}

export const offices: Office[] = [
  {
    id: "hq-ny",
    name: "Headquarters",
    city: "New York",
    country: "USA",
    lat: 25,
    lng: 28,
    badge: "Headquarters",
    partners: 847,
    volume: "$12.5M",
    growth: "+18% YoY",
    description: "Central hub driving global strategy and innovation",
    region: "North America",
  },
  {
    id: "london",
    name: "Europe Hub",
    city: "London",
    country: "UK",
    lat: 20,
    lng: 50,
    badge: "Regional",
    partners: 523,
    volume: "$8.2M",
    growth: "+22% YoY",
    description: "European operations and market expansion",
    region: "Europe",
  },
  {
    id: "tokyo",
    name: "Asia Pacific",
    city: "Tokyo",
    country: "Japan",
    lat: 35,
    lng: 82,
    badge: "Regional",
    partners: 612,
    volume: "$9.7M",
    growth: "+31% YoY",
    description: "Fastest-growing region with strong partnerships",
    region: "Asia Pacific",
  },
  {
    id: "sydney",
    name: "APAC South",
    city: "Sydney",
    country: "Australia",
    lat: 70,
    lng: 88,
    badge: "Regional",
    partners: 298,
    volume: "$4.1M",
    growth: "+15% YoY",
    description: "Southern hemisphere operations and partnerships",
    region: "Asia Pacific",
  },
  {
    id: "toronto",
    name: "North America",
    city: "Toronto",
    country: "Canada",
    lat: 18,
    lng: 32,
    badge: "Regional",
    partners: 356,
    volume: "$5.3M",
    growth: "+12% YoY",
    description: "Canadian and North American market expansion",
    region: "North America",
  },
  {
    id: "dubai",
    name: "Middle East",
    city: "Dubai",
    country: "UAE",
    lat: 35,
    lng: 60,
    badge: "Regional",
    partners: 189,
    volume: "$2.8M",
    growth: "+28% YoY",
    description: "Emerging market with high growth potential",
    region: "Middle East & Africa",
  },
]
