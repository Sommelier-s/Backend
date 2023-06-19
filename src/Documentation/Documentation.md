# Documentación V1.0.0 de Sommelier's API

---

#### Desarrollado por <a href="https://portfolio-miguel-fernandez.netlify.app/" target="_blank">Miguel Fernandez</a>

---

# Rutas

---

### **_User ( /auth )_**

##### POST ( /create )

##### Request:

- params
  - none
- query
  - none
- Body
  - first_name (string)
  - last_name (string)
  - email (string)
  - password (string)
  - date_birth (date)

##### Response:

- status: 201
- message: Usuario creado correctamente
- data: (ejemplo)

        {
            id: b5be230d-3640-46af-8010-bc2c01c23744
            profile_picture: "https://ionicframework.com/docs/img/demos/avatar.svg",
            is_Admin: true,
            isActive: true,
            about_me: "Your description here...",
            createGoogle: false,
            accountConfirmed: false,
            first_name: "Gonza",
            last_name: "Suarez",
            email: "gonza@gmail.com",
            password: "Gonza1234",
            date_birth: "1999-12-03",
            updatedAt: "2023-06-19T14:16:34.222Z",
            createdAt: "2023-06-19T14:16:34.222Z",
            token: null,
            customer_id: null
        }

##### GET ( /user ) (allUser)

##### Request:

- params
  - none
- query
  - none
- Body
  - none

##### Response:

- status: 200
- message: Usuarios encontrados
- data: (ejemplo)

        [
          {
              id: b5be230d-3640-46af-8010-bc2c01c23744
              profile_picture: "https://ionicframework.com/docs/img/demos/avatar.svg",
              is_Admin: true,
              isActive: true,
              about_me: "Your description here...",
              createGoogle: false,
              accountConfirmed: false,
              first_name: "Gonza",
              last_name: "Suarez",
              email: "gonza@gmail.com",
              password: "Gonza1234",
              date_birth: "1999-12-03",
              updatedAt: "2023-06-19T14:16:34.222Z",
              createdAt: "2023-06-19T14:16:34.222Z",
              token: null,
              customer_id: null
          },
          {
              id: b5be230d-3640-46af-8010-bc2c01c23744
              profile_picture: "https://ionicframework.com/docs/img/demos/avatar.svg",
              is_Admin: true,
              isActive: true,
              about_me: "Your description here...",
              createGoogle: false,
              accountConfirmed: false,
              first_name: "Gonza",
              last_name: "Suarez",
              email: "gonza@gmail.com",
              password: "Gonza1234",
              date_birth: "1999-12-03",
              updatedAt: "2023-06-19T14:16:34.222Z",
              createdAt: "2023-06-19T14:16:34.222Z",
              token: null,
              customer_id: null
          }
          {
              id: b5be230d-3640-46af-8010-bc2c01c23744
              profile_picture: "https://ionicframework.com/docs/img/demos/avatar.svg",
              is_Admin: true,
              isActive: true,
              about_me: "Your description here...",
              createGoogle: false,
              accountConfirmed: false,
              first_name: "Gonza",
              last_name: "Suarez",
              email: "gonza@gmail.com",
              password: "Gonza1234",
              date_birth: "1999-12-03",
              updatedAt: "2023-06-19T14:16:34.222Z",
              createdAt: "2023-06-19T14:16:34.222Z",
              token: null,
              customer_id: null
          }
        ]

---

### **_Wine ( /wine )_**

##### POST ( / )

##### Request:

- params
  - none
- query
  - id (UUID user)
- Body
  - name (string)
  - description (string)
  - price (float)
  - stock (int)
  - picture (string)
  - wineCategoryId (UUID)

##### Response:

- status: 201
- message: The product was successfully created
- data: (ejemplo)

        {
          id: "8b79968e-b110-48d1-8497-5305fe8a65bf",
          isActive: true,
          name: "Vino Toro viejo 1l",
          description: "Un vino de alta calidad",
          price: 50,
          stock: 20,
          picture: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3062960_f.jpg",
          Wine_categoryId: "f43effa4-872b-4a6a-8ac4-e0f117d4c6c9",
          updatedAt: "2023-06-19T17:53:57.176Z",
          createdAt: "2023-06-19T17:53:57.176Z",
        }

##### GET ( / ) (allWine)

##### Request:

- params
  - none
- query
  - none
- Body
  - none

##### Response:

- status: 200
- message: The product was found
- data: (ejemplo)

        [
          {
            id: "8b79968e-b110-48d1-8497-5305fe8a65bf",
            isActive: true,
            name: "Vino Toro viejo 1l",
            description: "Un vino de alta calidad",
            price: 50,
            stock: 20,
            picture: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3062960_f.jpg",
            Wine_categoryId: "f43effa4-872b-4a6a-8ac4-e0f117d4c6c9",
            updatedAt: "2023-06-19T17:53:57.176Z",
            createdAt: "2023-06-19T17:53:57.176Z",
          },
          {
            id: "8b79968e-b110-48d1-8497-5305fe8a65bf",
            isActive: true,
            name: "Vino Toro viejo 1l",
            description: "Un vino de alta calidad",
            price: 50,
            stock: 20,
            picture: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3062960_f.jpg",
            Wine_categoryId: "f43effa4-872b-4a6a-8ac4-e0f117d4c6c9",
            updatedAt: "2023-06-19T17:53:57.176Z",
            createdAt: "2023-06-19T17:53:57.176Z",
          }
          {
            id: "8b79968e-b110-48d1-8497-5305fe8a65bf",
            isActive: true,
            name: "Vino Toro viejo 1l",
            description: "Un vino de alta calidad",
            price: 50,
            stock: 20,
            picture: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3062960_f.jpg",
            Wine_categoryId: "f43effa4-872b-4a6a-8ac4-e0f117d4c6c9",
            updatedAt: "2023-06-19T17:53:57.176Z",
            createdAt: "2023-06-19T17:53:57.176Z",
          }
        ]

##### GET ( /:id ) (wineById)

##### Request:

- params
  - id (UUID Wine)
- query
  - none
- Body
  - none

##### Response:

- status: 200
- message: The product was found
- data: (ejemplo)

        {
            id: "8b79968e-b110-48d1-8497-5305fe8a65bf",
            isActive: true,
            name: "Vino Toro viejo 1l",
            description: "Un vino de alta calidad",
            price: 50,
            stock: 20,
            picture: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3062960_f.jpg",
            Wine_categoryId: "f43effa4-872b-4a6a-8ac4-e0f117d4c6c9",
            updatedAt: "2023-06-19T17:53:57.176Z",
            createdAt: "2023-06-19T17:53:57.176Z",
        }

##### GET ( /name ) (wineByName)

##### Request:

- params
  - none
- query
  - name (nombre a buscar)
- Body
  - none

##### Response:

- status: 200
- message: The product was found
- data: (ejemplo)

        [
        {
            id: "8b79968e-b110-48d1-8497-5305fe8a65bf",
            isActive: true,
            name: "Vino Toro viejo 1l",
            description: "Un vino de alta calidad",
            price: 50,
            stock: 20,
            picture: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3062960_f.jpg",
            Wine_categoryId: "f43effa4-872b-4a6a-8ac4-e0f117d4c6c9",
            updatedAt: "2023-06-19T17:53:57.176Z",
            createdAt: "2023-06-19T17:53:57.176Z",
          },
          {
            id: "8b79968e-b110-48d1-8497-5305fe8a65bf",
            isActive: true,
            name: "Vino Toro viejo 75ml",
            description: "Un vino de alta calidad",
            price: 50,
            stock: 20,
            picture: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3062960_f.jpg",
            Wine_categoryId: "f43effa4-872b-4a6a-8ac4-e0f117d4c6c9",
            updatedAt: "2023-06-19T17:53:57.176Z",
            createdAt: "2023-06-19T17:53:57.176Z",
          },
          {
            id: "8b79968e-b110-48d1-8497-5305fe8a65bf",
            isActive: true,
            name: "Vino Toro Nuevo 1l",
            description: "Un vino de alta calidad",
            price: 50,
            stock: 20,
            picture: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3062960_f.jpg",
            Wine_categoryId: "f43effa4-872b-4a6a-8ac4-e0f117d4c6c9",
            updatedAt: "2023-06-19T17:53:57.176Z",
            createdAt: "2023-06-19T17:53:57.176Z",
          }
        ]

##### PUT ( /:id )

##### Request:

- params
  - id (UUID wine)
- query
  - userId (UUID User)
- Body
  - name (string)
  - description (string)
  - price (float)
  - stock (int)
  - picture (string)

##### Response:

- status: 201
- message: The product was successfully modified
- data: (ejemplo)

        {
            id: "8b79968e-b110-48d1-8497-5305fe8a65bf",
            isActive: falso,
            name: "Vino Miguel Nuevo 1l",
            description: "Un vino de alta calidad",
            price: 50,
            stock: 20,
            picture: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3062960_f.jpg",
            Wine_categoryId: "f43effa4-872b-4a6a-8ac4-e0f117d4c6c9",
            updatedAt: "2023-06-19T17:53:57.176Z",
            createdAt: "2023-06-19T17:53:57.176Z",
          }

##### DELETE ( /:id )

##### Request:

- params
  - id (UUID wine)
- query
  - userId (UUID User)
- Body
  - none

##### Response:

- status: 200
- message: The product was been deleted
- data: (ejemplo)

        {
            id: "8b79968e-b110-48d1-8497-5305fe8a65bf",
            isActive: true,
            name: "Vino Toro Nuevo 1l",
            description: "Un vino de alta calidad",
            price: 50,
            stock: 20,
            picture: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3062960_f.jpg",
            Wine_categoryId: "f43effa4-872b-4a6a-8ac4-e0f117d4c6c9",
            updatedAt: "2023-06-19T17:53:57.176Z",
            createdAt: "2023-06-19T17:53:57.176Z",
          }

---

### **_Liquor ( /liquor )_**

##### POST ( / )

##### Request:

- params
  - none
- query
  - id (UUID user)
- Body
  - name (string)
  - description (string)
  - price (float)
  - stock (int)
  - picture (string)
  - graduation (int)
  - liquorCategoryId (UUID)

##### Response:

- status: 201
- message: The product was successfully created!
- data: (ejemplo)

        {
          id: "ddf0a380-2db0-4cf5-b0bd-ce9ee6e5ede8",
          name: "Licor vicente",
          description: "Un licor de alta calidad",
          price: 30,
          stock: 14,
          picture: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlxdW9yfGVufDB8fDB8fHww&w=1000&q=80",
          graduation: "40",
          Liquor_categoryId: "787e78fc-736d-4341-9b1d-a81631ead5e3",
          isActive: true,
          updatedAt: "2023-06-19T16:34:01.332Z",
          createdAt: "2023-06-19T16:34:01.332Z"
        }

##### GET ( / ) (allLiquor)

##### Request:

- params
  - none
- query
  - none
- Body
  - none

##### Response:

- status: 200
- message: The product was found
- data: (ejemplo)

        [
          {
            id: "ddf0a380-2db0-4cf5-b0bd-ce9ee6e5ede8",
            name: "Licor vicente",
            description: "Un licor de alta calidad",
            price: 30,
            stock: 14,
            picture: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlxdW9yfGVufDB8fDB8fHww&w=1000&q=80",
            graduation: "40",
            Liquor_categoryId: "787e78fc-736d-4341-9b1d-a81631ead5e3",
            isActive: true,
            updatedAt: "2023-06-19T16:34:01.332Z",
            createdAt: "2023-06-19T16:34:01.332Z"
          },
          {
            id: "ddf0a380-2db0-4cf5-b0bd-ce9ee6e5ede8",
            name: "Licor vicente",
            description: "Un licor de alta calidad",
            price: 30,
            stock: 14,
            picture: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlxdW9yfGVufDB8fDB8fHww&w=1000&q=80",
            graduation: "40",
            Liquor_categoryId: "787e78fc-736d-4341-9b1d-a81631ead5e3",
            isActive: true,
            updatedAt: "2023-06-19T16:34:01.332Z",
            createdAt: "2023-06-19T16:34:01.332Z"
          },
          {
            id: "ddf0a380-2db0-4cf5-b0bd-ce9ee6e5ede8",
            name: "Licor vicente",
            description: "Un licor de alta calidad",
            price: 30,
            stock: 14,
            picture: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlxdW9yfGVufDB8fDB8fHww&w=1000&q=80",
            graduation: "40",
            Liquor_categoryId: "787e78fc-736d-4341-9b1d-a81631ead5e3",
            isActive: true,
            updatedAt: "2023-06-19T16:34:01.332Z",
            createdAt: "2023-06-19T16:34:01.332Z"
          }

        ]

##### GET ( /:id ) (liquorById)

##### Request:

- params
  - id (UUID liquor)
- query
  - none
- Body
  - none

##### Response:

- status: 202
- message: The product was found
- data: (ejemplo)

        {
          id: "ddf0a380-2db0-4cf5-b0bd-ce9ee6e5ede8",
          name: "Licor vicente",
          description: "Un licor de alta calidad",
          price: 30,
          stock: 14,
          picture: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlxdW9yfGVufDB8fDB8fHww&w=1000&q=80",
          graduation: "40",
          Liquor_categoryId: "787e78fc-736d-4341-9b1d-a81631ead5e3",
          isActive: true,
          updatedAt: "2023-06-19T16:34:01.332Z",
          createdAt: "2023-06-19T16:34:01.332Z"
        }

##### GET ( /name ) (wineByName)

##### Request:

- params
  - none
- query
  - name (nombre a buscar)
- Body
  - none

##### Response:

- status: 200
- message: The product was found
- data: (ejemplo)

        [
          {
            id: "ddf0a380-2db0-4cf5-b0bd-ce9ee6e5ede8",
            name: "Licor vicente",
            description: "Un licor de alta calidad",
            price: 30,
            stock: 14,
            picture: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlxdW9yfGVufDB8fDB8fHww&w=1000&q=80",
            graduation: "40",
            Liquor_categoryId: "787e78fc-736d-4341-9b1d-a81631ead5e3",
            isActive: true,
            updatedAt: "2023-06-19T16:34:01.332Z",
            createdAt: "2023-06-19T16:34:01.332Z"
          },
          {
            id: "ddf0a380-2db0-4cf5-b0bd-ce9ee6e5ede8",
            name: "Licor vicentino",
            description: "Un licor de alta calidad",
            price: 30,
            stock: 14,
            picture: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlxdW9yfGVufDB8fDB8fHww&w=1000&q=80",
            graduation: "40",
            Liquor_categoryId: "787e78fc-736d-4341-9b1d-a81631ead5e3",
            isActive: true,
            updatedAt: "2023-06-19T16:34:01.332Z",
            createdAt: "2023-06-19T16:34:01.332Z"
          },
          {
            id: "ddf0a380-2db0-4cf5-b0bd-ce9ee6e5ede8",
            name: "Licor vicentenario",
            description: "Un licor de alta calidad",
            price: 30,
            stock: 14,
            picture: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlxdW9yfGVufDB8fDB8fHww&w=1000&q=80",
            graduation: "40",
            Liquor_categoryId: "787e78fc-736d-4341-9b1d-a81631ead5e3",
            isActive: true,
            updatedAt: "2023-06-19T16:34:01.332Z",
            createdAt: "2023-06-19T16:34:01.332Z"
          }

        ]

##### PUT ( /:id )

##### Request:

- params
  - id (UUID liquor)
- query
  - userId (UUID User)
- Body
  - name (string)
  - description (string)
  - price (float)
  - stock (int)
  - picture (string)
  - graduation (int)
  - isActive (boolean)

##### Response:

- status: 201
- message: The product was successfully modified
- data: (ejemplo)

        {
          id: "ddf0a380-2db0-4cf5-b0bd-ce9ee6e5ede8",
          name: "Licor argentino puro",
          description: "Un licor de alta calidad",
          price: 30,
          stock: 14,
          picture: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlxdW9yfGVufDB8fDB8fHww&w=1000&q=80",
          graduation: "40",
          Liquor_categoryId: "787e78fc-736d-4341-9b1d-a81631ead5e3",
          isActive: true,
          updatedAt: "2023-06-19T16:34:01.332Z",
          createdAt: "2023-06-19T16:34:01.332Z"
        }

##### DELETE ( /:id )

##### Request:

- params
  - id (UUID liquor)
- query
  - userId (UUID User)
- Body
  - none

##### Response:

- status: 200
- message: The product was been deleted
- data: (ejemplo)

         {
          id: "ddf0a380-2db0-4cf5-b0bd-ce9ee6e5ede8",
          name: "Licor argentino puro",
          description: "Un licor de alta calidad",
          price: 30,
          stock: 14,
          picture: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlxdW9yfGVufDB8fDB8fHww&w=1000&q=80",
          graduation: "40",
          Liquor_categoryId: "787e78fc-736d-4341-9b1d-a81631ead5e3",
          isActive: false,
          updatedAt: "2023-06-19T16:34:01.332Z",
          createdAt: "2023-06-19T16:34:01.332Z"
        }

---

### **_AllDrinks ( /both_drinks )_**

##### GET ( / ) (drinksById)

##### Request:

- params
  - none
- query
  - id (UUID liquor)
- Body
  - none

##### Response:

- status: 202
- message: The product was found
- data: (ejemplo)

        {
          id: "ddf0a380-2db0-4cf5-b0bd-ce9ee6e5ede8",
          name: "Licor vicente",
          description: "Un licor de alta calidad",
          price: 30,
          stock: 14,
          picture: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlxdW9yfGVufDB8fDB8fHww&w=1000&q=80",
          graduation: "40",
          Liquor_categoryId: "787e78fc-736d-4341-9b1d-a81631ead5e3",
          isActive: true,
          updatedAt: "2023-06-19T16:34:01.332Z",
          createdAt: "2023-06-19T16:34:01.332Z"
        }

##### GET ( /name ) (allDrinksByName)

##### Request:

- params
  - none
- query
  - name (nombre a buscar)
- Body
  - none

##### Response:

- status: 200
- message: The product was found
- data: (ejemplo)

        [
          {
            id: "ddf0a380-2db0-4cf5-b0bd-ce9ee6e5ede8",
            name: "Licor vicente",
            description: "Un licor de alta calidad",
            price: 30,
            stock: 14,
            picture: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlxdW9yfGVufDB8fDB8fHww&w=1000&q=80",
            graduation: "40",
            Liquor_categoryId: "787e78fc-736d-4341-9b1d-a81631ead5e3",
            isActive: true,
            updatedAt: "2023-06-19T16:34:01.332Z",
            createdAt: "2023-06-19T16:34:01.332Z"
          },
          {
            id: "ddf0a380-2db0-4cf5-b0bd-ce9ee6e5ede8",
            name: "Vino vicentino",
            description: "Un licor de alta calidad",
            price: 30,
            stock: 14,
            picture: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlxdW9yfGVufDB8fDB8fHww&w=1000&q=80",
            graduation: "40",
            Liquor_categoryId: "787e78fc-736d-4341-9b1d-a81631ead5e3",
            isActive: true,
            updatedAt: "2023-06-19T16:34:01.332Z",
            createdAt: "2023-06-19T16:34:01.332Z"
          },
          {
            id: "ddf0a380-2db0-4cf5-b0bd-ce9ee6e5ede8",
            name: "Vino vicentenario",
            description: "Un licor de alta calidad",
            price: 30,
            stock: 14,
            picture: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlxdW9yfGVufDB8fDB8fHww&w=1000&q=80",
            graduation: "40",
            Liquor_categoryId: "787e78fc-736d-4341-9b1d-a81631ead5e3",
            isActive: true,
            updatedAt: "2023-06-19T16:34:01.332Z",
            createdAt: "2023-06-19T16:34:01.332Z"
          }

        ]

---

### **_Wine_category ( /category_wine )_**

##### POST ( / )

##### Request:

- params
  - none
- query
  - id (UUID user)
- Body
  - name (string)

##### Response:

- status: 201
- message: The Wine category was successfully created!
- data: (ejemplo)

        {
          id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
          name: vino tinto,
        }

##### GET ( / ) (allWine)

##### Request:

- params
  - none
- query
  - none
- Body
  - none

##### Response:

- status: 200
- message: The Categries was found
- data: (ejemplo)

        [
          {
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: vino tinto,
          },
          {
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: vino blanco,
          },
          {
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: vino rosado,
          }
        ]

##### DELETE ( /:id )

##### Request:

- params
  - id (UUID wine)
- query
  - userId (UUID User)
- Body
  - none

##### Response:

- status: 200
- message: The category was been deleted
- data: (ejemplo)

        {
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: vino tinto,
        }

---

### **_Liquor_category ( /category_liquor )_**

##### POST ( / )

##### Request:

- params
  - none
- query
  - id (UUID user)
- Body
  - name (string)

##### Response:

- status: 201
- message: The Liquor category was successfully created!
- data: (ejemplo)

        {
          id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
          name: Licores destilados,
        }

##### GET ( / ) (allLiquor)

##### Request:

- params
  - none
- query
  - none
- Body
  - none

##### Response:

- status: 200
- message: The Categories was found
- data: (ejemplo)

        [
          {
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: Licores destilados,
          },
          {
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: Licores de hierbas y amargos,
          },
          {
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: Licores cremosos,
          }
        ]

##### DELETE ( /:id )

##### Request:

- params
  - id (UUID liquor)
- query
  - userId (UUID User)
- Body
  - none

##### Response:

- status: 200
- message: The category was been deleted
- data: (ejemplo)

        {
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: Licores cremosos,
        }

---
