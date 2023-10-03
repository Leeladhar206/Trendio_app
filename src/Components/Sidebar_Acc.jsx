import { Box, Button, Checkbox, Divider, Heading, Select, Stack } from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';

const Sidebar_Acc = ({order,setSort}) => {
    const[searchParams,setSearchParams]=useSearchParams()
    const [brand,setBrands]=useState(searchParams.getAll("brand")||[]);
    const [material,setMaterial]=useState(searchParams.get("material")||"")
    const [category,setCategory]=useState(searchParams.getAll("category")||[]);
    const [gender,setGender]=useState(searchParams.get("gender")|| "")
    //console.log(order)
    const handleChange=(e)=>{
const {value}=e.target
let newbrands=[...brand]
if(newbrands.includes(value)){
   newbrands= newbrands.filter(el=>el!==value)
}else{
    newbrands.push(value)
}
setBrands(newbrands)

    }
    const handleCat=(e)=>{
        const {value}=e.target
        let newcategory=[...category];
if(newcategory.includes(value)){
    newcategory=newcategory.filter(el=>el!==value)
}else{
    newcategory.push(value)
}
setCategory(newcategory)
    }
    useEffect(()=>{
        let params={
            brand:brand 
        }
        category && (params.category=category)
        gender && (params.gender=gender)
        order && (params.order=order)
        material &&(params.material=material)
setSearchParams(params)
    },[brand,category,gender,order,material])
    const handleReset=()=>{
      setBrands([])
      setMaterial("")
      setCategory([])
      setGender("")
      setSort("")
        searchParams("")
    }
  return (
    <Box py={8} mt={5} mb={10} pt={8}  borderRight={".2px solid whitesmoke"} w={["30%","35%","40%"]} position="sticky" // Use absolute positioning
    top="0"             // Stick it to the top
    zIndex={"1"}>
<Heading as="h6" fontSize={["sm","md",'xl']} ml={8} mb={5} >Filter By Brands</Heading>
<Box ml={8} mb={5}>
        <Stack spacing={[1, 5]} direction={['column',"column", 'row']} >
    <Checkbox value='Ray-Ban' checked={brand.includes("Ray-Ban")} onChange={handleChange}>Ray-Ban</Checkbox>
    <Checkbox value="Tommy Hilfiger" checked={brand.includes("Tommy Hilfiger")} onChange={handleChange}>Tommy Hilfiger</Checkbox>
    <Checkbox value='Burberry'checked={brand.includes("Burberry")} onChange={handleChange}>Burberry</Checkbox>
    
  </Stack>
  <Stack spacing={[1, 5]} direction={['column',"column", 'row']} >
  <Checkbox value='Puma'checked={brand.includes("Puma")} onChange={handleChange}>Puma</Checkbox>
    <Checkbox value="Calvin Klein" checked={brand.includes("Calvin Klein")} onChange={handleChange}>Calvin Klein</Checkbox>
  </Stack>
  <Stack spacing={[1, 5]} direction={['column','column', 'row']} onChange={(e)=>setBrands(e.target.value)}>
  <Checkbox value='Hugo Boss'checked={brand.includes("Hugo Boss")} onChange={handleChange}>Hugo Boss</Checkbox>
    <Checkbox value='Gucci'checked={brand.includes("Gucci")} onChange={handleChange}>Gucci</Checkbox>
      </Stack>
        </Box>
        <Divider/>


        <Heading as="h6" mt={5}fontSize={["sm","md",'xl']}  ml={8}>Filter By Material</Heading>
        <Box ml={8} mt={5} mb={5}>
        <Select placeholder='Select Category' value={material} onChange={(e)=>setMaterial(e.target.value)}>
  <option value='Metal'>Metal</option>
  <option value='Leather'>Leather</option>
  <option value='Glass Bottle'>Glass Bottle</option>
  <option value='Cotton'>Cotton</option>
  <option value='Acetate'>Acetate</option>
</Select>
        </Box>
        <Divider/>

        <Heading as="h6" mt={5}fontSize={["sm","md",'xl']} ml={8}>Filter By Gender</Heading>
        <Box ml={8} mt={5} mb={5}>
        <Select placeholder='Select Gender' variant='filled' value={gender} onChange={(e)=>setGender(e.target.value)}>
  <option value='men' >Men</option>
  <option value='women' >Women</option>
  
</Select>
        </Box>
        <Divider/>
        <Heading as="h6" fontSize={["sm","md",'xl']} ml={8} mb={5} >Filter By Category</Heading>
        <Box ml={8} mb={5}>
        <Stack spacing={[1, 5]} direction={['column',"column","column","column",'row']} >
    <Checkbox value='Perfume' checked={category.includes("Perfume")} onChange={handleCat}>Perfume</Checkbox>
    <Checkbox value="Belts" checked={category.includes("Belts")} onChange={handleCat}>Belts</Checkbox>
    <Checkbox value="Wallets" checked={category.includes("Wallets")} onChange={handleCat}>Wallets</Checkbox>
    </Stack>
    <Stack spacing={[1, 5]} direction={['column',"column","column","column",'row']} >
    <Checkbox value="Socks" checked={category.includes("Socks")} onChange={handleCat}>Socks</Checkbox>
    <Checkbox value="Bags" checked={category.includes("Bags")} onChange={handleCat}>Bags</Checkbox>
    <Checkbox value="Caps" checked={category.includes("Caps")} onChange={handleCat}>Caps</Checkbox>
    <Checkbox value="Sunglasses" checked={category.includes("Sunglasses")} onChange={handleCat}>Sunglasses</Checkbox>
    </Stack>
  </Box>
  <Divider/>
       

  <Button ml={["10px","20px","40px","60px"]} size={['sm', 'md']} onClick={handleReset}>Reset Filters</Button>
    </Box>
  )
}

export default Sidebar_Acc