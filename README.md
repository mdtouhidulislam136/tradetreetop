# In this project we are going to make a full stack ecommerce web Application

## About application

Build a full stack e-commerce website with Rect, Redux, Express, MongoDB, chakra UI

### Deployment

https://tradetreetop-6z1n.vercel.app/

### Backend and Frontend connection

npm i concurrently
fix the script
"scripts": {
"client": "npm run start --prefix client",
"server": "node server/index.js",
"app": "concurrently npm \"npm run server\" \"npm run client\""
},

