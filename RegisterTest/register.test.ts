import { expect, test } from "@playwright/test";


let id:number;
//Creating an user api request
 test("Add a new user by giving proper information", async ({request, baseURL})=>{

  const _response =  await request.post(`${baseURL}/users`,{
        data:{
            email:'John@gmail.com',
            username:'johnd',
            password:'m38rmF$',
            name:{
                firstname:'John',
                lastname:'Doe'
            },
            address:{
                city:'kilcoole',
                street:'7835 new road',
                number:3,
                zipcode:'12926-3874',
                geolocation:{
                    lat:'-37.3159',
                    long:'81.1496'
                }
            },
            phone:'1-570-236-7033'
        },
        

    });
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
  
    // Extracting JSON response content
    const result = await _response.json();
    id = result.id;

   
  


 });

 //Update an user information by giving information
 test("Update user information by updating fields", async ({request, baseURL})=>{

  const _response =  await request.put(`${baseURL}/users/${id}`,{
        data:
        {
            email:'abid@gmail.com',
            username:'abid',
            password:'123456',
            name:{
                firstname:'Abid',
                lastname:'Bakhtiar'
            },
            address:{
                city:'Dhaka',
                street:'7835 new road',
                number:3,
                zipcode:'1212',
                geolocation:{
                    lat:'23.6850',
                    long:'90.3563'
                }
            },
            phone:'880-1764-893-90'
        },
        

    });
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
    expect(await _response.json()).toMatchObject({
        "email": "abid@gmail.com",
        "username": "abid",
        "password": "123456",
        "name": {
            "firstname": "Abid",
            "lastname": "Bakhtiar"
        },
        "address": {
            "city": "Dhaka",
            "street": "7835 new road",
            "number": 3,
            "zipcode": "1212",
            "geolocation": {
                "lat": "23.6850",
                "long": "90.3563"
            }
        },
        "phone": "880-1764-893-90"
    })
  
    // Extracting JSON response content
    const result = await _response.json();
   
    
 });




 test("Deleting a user", async ({request, baseURL})=>{

    const _response =  await request.delete(`${baseURL}/users/6`,{
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
      // Extracting JSON response content
      const result = await _response.json();
      console.log(result);
   });


 test("Delete a user if the user is not in the list", async ({request, baseURL})=>{

    const _response =  await request.delete(`${baseURL}/users/898989`,{
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
      // Extracting JSON response content
      expect(await _response.json()).toBe(null);
   });




   //Get all users

   test("Get All Users", async ({request, baseURL})=>{

    const _response =  await request.get(`${baseURL}/users`,{
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
    
      // Extracting JSON response content
      const result = await _response.json();
      console.log(result);
      
   });

   //get a single a user
   test("Get a single user", async ({request, baseURL})=>{

    const _response =  await request.get(`${baseURL}/users/${id}`,{
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
    
      // Extracting JSON response content
      const result = await _response.json();
      console.log(result);
      
   });

   test("Get a sort results", async ({request, baseURL})=>{

    const _response =  await request.get(`${baseURL}/users/${id}`,{
        params: {
            sort:"desc"
            
        }
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
    
      // Extracting JSON response content
      const result = await _response.json();
    //   expect(await Object.keys(result).length).toBe(8);
    
      
   });


   test("Get Limit Results", async ({request, baseURL})=>{

    const _response =  await request.get(`${baseURL}/users?limit=5`,{
        params: {
            sort:"desc"
            
        }
      });
      expect(_response.status()).toBe(200);
      expect(_response.ok()).toBeTruthy();
    
      // Extracting JSON response content
      const result = await _response.json();
      expect(await Object.keys(result).length).toBe(5);
    
      
   });