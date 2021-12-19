

export interface Features {
  center: [lng: number, lat: number]
}

export interface Location {
  attribution: string;
  query: string[];
  type: string;
  features: Features[]
}
export interface Data {
  address: string;
  imgUrl: string;
  price: string;
  center: Features['center']
}