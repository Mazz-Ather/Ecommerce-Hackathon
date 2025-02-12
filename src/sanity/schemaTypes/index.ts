import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import shipment from './shipmentType';
import checkout from './order';
import order from './order';
// import featuredProduct from './allProducts'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products , shipment , order],
}
