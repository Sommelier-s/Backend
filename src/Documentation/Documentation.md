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
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            first_name: Pablo,
            last_name: Perez,
            email: pabloperez@gmail.com,
            password: pablo123perez,
            date_birth: 23/12/2000
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
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b, first_name: Pablo,
            last_name: Perez,
            email: pabloperez@gmail.com,
            password: pablo123perez,
            date_birth: 23/12/2001
        },
        {
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b, first_name: Pablo,
            last_name: Perez,
            email: pabloperez@gmail.com,
            password: pablo123perez,
            date_birth: 23/12/2002
        },
        {
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b, first_name: Pablo,
            last_name: Perez,
            email: pabloperez@gmail.com,
            password: pablo123perez,
            date_birth: 23/12/2003
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
  - variety (string)

##### Response:

- status: 201
- message: The product was successfully created
- data: (ejemplo)

        {
        name: Viña de Balbo,
        description: Es un vino de alta calidad,
        price: 45,
        stock: 6,
        picture: https://jumboargentina.vtexassets.com/arquivos/ids/624748/Vino-Tinto-Vi-as-De-Balbo-Borgo-a-1-125-Cc-1-40525.jpg?v=637510296796370000,
        variety: extensa
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
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: Viña de Balbo,
            description: Es un vino de alta calidad,
            price: 45,
            stock: 6,
            picture: https://jumboargentina.vtexassets.com/arquivos/ids/624748 Vino-Tinto-Vi-as-De-Balbo-Borgo-a-1-125-Cc-1-40525.jpg?v=637510296796370000,
            variety: extensa
        },
        {
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: Viña de Balbo,
            description: Es un vino de alta calidad,
            price: 45,
            stock: 6,
            picture: https://jumboargentina.vtexassets.com/arquivos/ids/624748 Vino-Tinto-Vi-as-De-Balbo-Borgo-a-1-125-Cc-1-40525.jpg?v=637510296796370000,
            variety: extensa
        },
        {
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: Viña de Balbo,
            description: Es un vino de alta calidad,
            price: 45,
            stock: 6,
            picture: https://jumboargentina.vtexassets.com/  arquivos/ids/624748   Vino-Tinto-Vi-as-De-Balbo-Borgo-a-1-125-Cc-1-40525.  jpg?v=637510296796370000,
            variety: extensa
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
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: Viña de Balbo,
            description: Es un vino de alta calidad,
            price: 45,
            stock: 6,
            picture: https://jumboargentina.vtexassets.com/arquivos/ids/624748 Vino-Tinto-Vi-as-De-Balbo-Borgo-a-1-125-Cc-1-40525.jpg?v=637510296796370000,
            variety: extensa
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
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: Viña de Balbo,
            description: Es un vino de alta calidad,
            price: 45,
            stock: 6,
            picture: https://jumboargentina.vtexassets.com/arquivos/ids/624748 Vino-Tinto-Vi-as-De-Balbo-Borgo-a-1-125-Cc-1-40525.jpg?v=637510296796370000,
            variety: extensa
        },
        {
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: Viñas de Balbo,
            description: Es un vino de alta calidad,
            price: 45,
            stock: 6,
            picture: https://jumboargentina.vtexassets.com/arquivos/ids/624748 Vino-Tinto-Vi-as-De-Balbo-Borgo-a-1-125-Cc-1-40525.jpg?v=637510296796370000,
            variety: extensa
        },
        {
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: Viña de Balbos Argentina,
            description: Es un vino de alta calidad,
            price: 45,
            stock: 6,
            picture: https://jumboargentina.vtexassets.com/  arquivos/ids/624748   Vino-Tinto-Vi-as-De-Balbo-Borgo-a-1-125-Cc-1-40525.  jpg?v=637510296796370000,
            variety: extensa
        }
        ]

##### PUT ( / )

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
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: Viña de Balbo,
            description: Es un vino de alta calidad,
            price: 45,
            stock: 6,
            picture: https://jumboargentina.vtexassets.com/arquivos/ids/624748/Vino-Tinto-Vi-as-De-Balbo-Borgo-a-1-125-Cc-1-40525.jpg?v=637510296796370000
        }

##### DELETE ( / )

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
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: Viña de Balbo,
            description: Es un vino de alta calidad,
            price: 45,
            stock: 6,
            picture: https://jumboargentina.vtexassets.com/arquivos/ids/624748/Vino-Tinto-Vi-as-De-Balbo-Borgo-a-1-125-Cc-1-40525.jpg?v=637510296796370000
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
  - variety (string)

##### Response:

- status: 201
- message: The product was successfully created!
- data: (ejemplo)

        {
          id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
          name: Red Laber,
          description: Es un licor de alta calidad,
          price: 45,
          stock: 6,
          picture: https://www.espaciovino.com.ar/media/default/0001/64/thumb_63197_default_big.jpeg,
          variety: extensa
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
          id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
          name: Red Laber,
          description: Es un licor de alta calidad,
          price: 45,
          stock: 6,
          picture: https://www.espaciovino.com.ar/media/default/0001/64/thumb_63197_default_big.jpeg,
          variety: extensa
        },
         {
          id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
          name: Red Laber,
          description: Es un licor de alta calidad,
          price: 45,
          stock: 6,
          picture: https://www.espaciovino.com.ar/media/default/0001/64/thumb_63197_default_big.jpeg,
          variety: extensa
        },
         {
          id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
          name: Red Laber,
          description: Es un licor de alta calidad,
          price: 45,
          stock: 6,
          picture: https://www.espaciovino.com.ar/media/default/0001/64/thumb_63197_default_big.jpeg,
          variety: extensa
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
          id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
          name: Red Laber,
          description: Es un licor de alta calidad,
          price: 45,
          stock: 6,
          picture: https://www.espaciovino.com.ar/media/default/0001/64/thumb_63197_default_big.jpeg,
          variety: extensa
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
          id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
          name: Red Laber,
          description: Es un licor de alta calidad,
          price: 45,
          stock: 6,
          picture: https://www.espaciovino.com.ar/media/default/0001/64/thumb_63197_default_big.jpeg,
          variety: extensa
        },
        {
          id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
          name: Red Laber otro,
          description: Es un licor de alta calidad,
          price: 45,
          stock: 6,
          picture: https://www.espaciovino.com.ar/media/default/0001/64/thumb_63197_default_big.jpeg,
          variety: extensa
        },
        {
          id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
          name: Red Laber one,
          description: Es un licor de alta calidad,
          price: 45,
          stock: 6,
          picture: https://www.espaciovino.com.ar/media/default/0001/64/thumb_63197_default_big.jpeg,
          variety: extensa
        }
        ]

<!-- ##### PUT ( / )

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
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: Viña de Balbo,
            description: Es un vino de alta calidad,
            price: 45,
            stock: 6,
            picture: https://jumboargentina.vtexassets.com/arquivos/ids/624748/Vino-Tinto-Vi-as-De-Balbo-Borgo-a-1-125-Cc-1-40525.jpg?v=637510296796370000
        } -->

##### DELETE ( / )

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
            id: 20a74137-24aa-436f-a1f8-bee1e0c4d14b,
            name: Red Laber one,
            description: Es un licor de alta calidad,
            price: 45,
            stock: 6,
            picture: https://www.espaciovino.com.ar/media/default/0001/64/thumb_63197_default_big.jpeg,
            variety: extensa
        }

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

##### DELETE ( / )

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

##### DELETE ( / )

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
