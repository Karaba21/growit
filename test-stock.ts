import { getProduct } from './src/lib/shopify';

async function test() {
  const p = await getProduct("grow-20-outdoor");
  console.log("availableForSale:", p?.availableForSale);
  console.log("variants:", p?.variants.map((v: any) => ({ title: v.title, available: v.availableForSale })));
}

test();
