import { MAPBOX, PROPZY } from "./endpoint"
import { Data, Location } from './interface'

const fetcher = (url:string, options: RequestInit) => {
  return fetch(url, options)
}
export const getHtml = (url: string ): Promise<any> => {
  return fetcher(url, {
    method: 'GET'
  }).then(res => {
    return res.text()
  })
}

export const get = <T,>(url: string ): Promise<T> => {
  return fetcher(url, {
    method: 'GET'
  }).then(res => {
    return res.json()
  })
}

export const searchPlace = (place: string): Promise<Location> => {
  return get<Location>(MAPBOX(place))
}

export const getData = async (): Promise<Data[]> => {
  const page = ['/p1', '/p2', '/p3', '/p4',]
  
  const htmls = await Promise.all(page.map(p => getHtml(PROPZY(p))))
  const parser = new DOMParser();
  const data: Data[] = []

  for (let h = 0; h <= htmls.length; h ++) {
    const doc = parser.parseFromString(htmls[h], 'text/html');
    const list = doc.getElementById('view-as-grid');
    const childs = list?.children;
  
    if (childs && childs.length) {
      for(let i =0; i <= childs.length; i++) {
        const firstEle = childs.item(i)?.firstElementChild
        const address = firstEle?.getAttribute('data-address')
        const imgUrl = firstEle?.getAttribute('data-img')
        const price = firstEle?.getAttribute('data-price')
        if (address) {
          const location = await searchPlace(address)
          data.push({
            address,
            imgUrl: imgUrl || '',
            price: price || '',
            center: location.features[0]?.center,
          })
        }
      }
    }
  }
  
  
  console.log(data)
  return data;
}