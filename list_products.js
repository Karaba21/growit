const fs = require('fs');
fetch('https://' + process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN + '/api/2024-01/graphql.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
  },
  body: JSON.stringify({
    query: `{
      products(first: 50) {
        edges {
          node {
            handle
            title
          }
        }
      }
    }`
  })
}).then(r => r.json()).then(r => {
  console.log(JSON.stringify(r.data.products.edges.map(e => ({handle: e.node.handle, title: e.node.title})), null, 2));
}).catch(console.error);
