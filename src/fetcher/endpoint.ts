export const PROPZY = (page: string) => `https://propzy.vn/thue/bat-dong-san/hcm${page ? `/${page}`: ''}`

export const MAPBOX = (place: string) => `https://api.mapbox.com/geocoding/v5/mapbox.places/${decodeURI(place)}.json?access_token=${process.env.MAP_API_PUBLIC_KEY}`