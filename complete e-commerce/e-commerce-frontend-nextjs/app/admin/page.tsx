"use client";
import {
  Box,
  FormControl,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  FormLabel,
  Textarea,
  Select,
} from "@chakra-ui/react";
 import { getDownloadURL, getStorage, ref ,uploadBytes } from "firebase/storage";

import { useState } from "react";
import axios from "axios";
import storage from "../config/fbconfig";
export default function Admin() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<any>();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("");
  const [url,setUrl]=useState('')
  const imagesRef = ref(storage, 'productImages');
let url1=''

   const addProduct=async ()=>{
 try{
const productImageRef=  ref(storage,`productImage/${image.name}`)
console.log('productImageRef',productImageRef);

  const uploadedImage= await uploadBytes(productImageRef, image).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
  
  const urlForDownload= await getDownloadURL(ref(storage, productImageRef))
  .then((url) => {
    console.log('url',url);
    // setUrl(url)
    url1=url
    // setUrl(url)
  })
  // console.log('urlForDownload',urlForDownload);
  // console.log('url outside',url);
  console.log('url',url1);
  
  const addedProduct=axios.post('http://localhost:8020/',{
     title:title,
     description:description,
     image:url1,
     quantity:quantity,
     price:price,
     category:category,
 })

 }catch(e){

    console.log('adding product error',e);
    
 }
 


 }


 const log=()=>{
  console.log('image',image);
  
 }
// const spaceRef = ref(storage, 'images/space.jpg');
  return (
    <>
      <Box>
        <Heading>Admin Form</Heading>

        <FormControl w="500px">
          <FormLabel>Title</FormLabel>

          <Input
            type="text"
            placeholder="Enter Title of your product"
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl w="500px">
          <FormLabel>Description</FormLabel>

          <Textarea placeholder='Enter your product description' onChange={(e)=>setDescription(e.target.value)} />
        </FormControl>
        <FormControl w="500px">
          <FormLabel>Image</FormLabel>

          {/* <Input
            type="file"
            onChange={(e) => setImage(e.target
              .files)}
          /> */}
          <Input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
        </FormControl>
        <FormControl w="500px">
          <FormLabel>Category</FormLabel>

         <Select  onChange={(e)=>setCategory(e.target.value)}>
            <option disabled selected hidden value="Select Your product category">Select Your product category</option>
            <option value="BedSheet">BedSheet</option>
    
            <option value="mensClothing">mensClothing</option> 
            <option value="womensClothing">womensClothing</option> 

            <option value="homeDecor">homeDecor</option>
            <option value="jaiNamaz-prayer mat">jaiNamaz-prayer mat</option>
            <option value="tasbeeh">tasbeeh</option>
         </Select>
        </FormControl>
        
        
        <FormControl>
          <FormLabel>Quantity</FormLabel>
          <NumberInput w="500px" defaultValue={1} min={1}>
            <NumberInputField onChange={(e) => setQuantity(e.target.value)} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Price</FormLabel>
          <NumberInput w="500px" defaultValue={0.00} min={0}>
            <NumberInputField onChange={(e) => setPrice(e.target.value)} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Button onClick={()=>addProduct()} backgroundColor={' rgb(240, 175, 10)'} color="white">

        Add Product

        </Button>
        <Button onClick={()=>log()} backgroundColor={' rgb(240, 175, 10)'} color="white">

        Image log

        </Button>
      </Box>

    </>
  );
}
