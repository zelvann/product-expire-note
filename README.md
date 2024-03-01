# Product Expire Note Rest API

This is an implementation of API for a Product Expire Note Application using `Next.js`,`Prisma` as an ORM, and `PostgreSQL` as the database

## How to Use

### 1. Clone this repository

```
git clone https://github.com/zelvann/product-expire-note-api.git
```

### 2. Install dependencies
```
cd product-expire-note-api
npm install
```

### 3. Create the environment variables
To run this project, Please make .env file inside the root of folder
```env
// .env.example
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
```

### 4. Push the prisma schema state to the database
```
npx prisma db push
```

This is an ERD for the database
#### CDM
![CDM](public/product_expire_cdm.png)

#### PDM
![PDM](public/product_expire_pdm.png)

### 5. Insert the data to database (optional)
You can use this [Dummy Data](https://itsacid-my.sharepoint.com/:x:/g/personal/5025221125_student_its_ac_id/EWl1P9VgizRFuTQZGdKunIEBoCWY3_7OZWw-64BvG4XQlg?rtime=bPwpOBs53Eg) for inserting data to database

### 6. Start the app
```
npm run dev
```
The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) and redirect to [`http://localhost:3000/api/list`](http://localhost:3000/api/list)

## Using the REST API

You can also access the REST API via `postman` or `curl` or via client browser directly.

### `GET`

- `/api/list/product/detail/[product.id]` : Get information about product by ID
- `/api/list/product/filter` : Filter product based on expire_date order by ascending
- `/api/list` : Get all product detail including spot, menu, and variant

```
// example of product which ID is P001
curl --location 'http://localhost:3000/api/list/product/detail/P001'

curl --location 'http://localhost:3000/api/list/product/filter'

curl --location 'http://localhost:3000/api/list'
```

### `POST`

- `/api/list/product/create` : Add new product uses new ID and spot_menu_id which is existed at spot table

```
// dummy data
curl --location 'http://localhost:3000/api/list/product/create' \
--header 'Content-Type: application/json' \
--data '{
    "id": "P017",
    "brand": "chitato",
    "expired_at": "2024-06-10",
    "spot_menu_id": "SM002"
}'
```

### `PUT`

- `/api/list/product/update/[product.id]` : Update product attribute by ID

```
// dummy data
curl --location --request PUT 'http://localhost:3000/api/list/product/update/P017' \
--header 'Content-Type: application/json' \
--data '{
    "id":"P017",
    "brand": "chitato",
    "restocked_at": "2024-02-29",
    "expired_at": "2024-12-29",
    "spot_menu_id": "SM001"
}
```

### `DELETE`

- `/api/list/product/delete/[product.id]` : Delete product by ID

```
curl --location --request DELETE 'http://localhost:3000/api/list/product/delete/P017'
```

Please read this [API Docs](https://its.id/m/apidoc) for more detail about this API via `postman` with example of request and response
