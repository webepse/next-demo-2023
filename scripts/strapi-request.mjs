import { writeFileSync } from 'node:fs'
import qs from 'qs'

// const url = "http://localhost:1337/api/reviews" + '?populate=*'
const url = "http://localhost:1337/api/reviews" + '?' + qs.stringify({
    filters: {slug: { $eq: 'diablo-4'}},
    fields: ['slug', 'title', 'subtitle', 'publishedAt','body'],
    populate: { image: {fields: ['url']}},
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 1, withCount: false}
},{encodeValuesOnly : true})
const response = await fetch(url)
const body = await response.json()
console.log(body)
console.log(JSON.stringify(body,null,2))
const formatted = JSON.stringify(body,null,2)
const file = 'scripts/strapi-response.json'

writeFileSync(file, formatted, 'utf8')

