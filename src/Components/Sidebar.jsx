import {
  Box,
  Button,
  Checkbox,
  Divider,
  Heading,
  Select,
  Stack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = ({order,setSort}) => {
    const[searchParams,setSearchParams]=useSearchParams()
    const [brand,setBrands]=useState(searchParams.getAll("brand")||[]);
    const [material,setMaterial]=useState(searchParams.get("material")||"")
    const [color,setColor]=useState(searchParams.get("color")||"");
    const [category,setCategory]=useState(searchParams.getAll("category")||[]);
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
  };
  const handleCat = (e) => {
    const { value } = e.target;
    let newcategory = [...category];
    if (newcategory.includes(value)) {
      newcategory = newcategory.filter((el) => el !== value);
    } else {
      newcategory.push(value);
    }
    setCategory(newcategory);
  };
  useEffect(() => {
    let params = {
      brand: brand,
    };
    category && (params.category = category);
    color && (params.color = color);
    order && (params.order = order);
    material && (params.material = material);
    setSearchParams(params);
  }, [brand, category, color, order, material]);
  const handleReset = () => {
    setBrands([]);
    setMaterial("");
    setColor("");
    setCategory([]);
    setSort("");
    searchParams("");
  };
  return (

    <Box py={8} mt={5} mb={10} pt={8}  borderRight={".2px solid whitesmoke"} w={["30%","35%","40%"]} position="sticky" // Use absolute positioning
    top="0"             // Stick it to the top
    zIndex={"1"}>
<Heading as="h6" fontSize={["sm","md",'xl']} ml={8} mb={5} >Filter By Brands</Heading>
<Box ml={8} mb={5}>
        <Stack spacing={[1, 5]} direction={['column',"column", 'row']} >
    <Checkbox value='H&M' checked={brand.includes("H&M")} onChange={handleChange}>H&M</Checkbox>
    <Checkbox value="Levi's" checked={brand.includes("Levi's")} onChange={handleChange}>LEVI'S</Checkbox>
    <Checkbox value='Old Navy'checked={brand.includes("Old Navy")} onChange={handleChange}>Old Navy</Checkbox>
    
  </Stack>
  <Stack spacing={[1, 5]} direction={['column',"column", 'row']} >
  <Checkbox value='Gap'checked={brand.includes("gap")} onChange={handleChange}>GAP</Checkbox>
    <Checkbox value="Calvin Klein" checked={brand.includes("Calvin Klein")} onChange={handleChange}>Calvin Klein</Checkbox>
    <Checkbox value="Zara" checked={brand.includes("Zara")} onChange={handleChange}>Zara</Checkbox>
  </Stack>
  <Stack spacing={[1, 5]} direction={['column','column', 'row']} onChange={(e)=>setBrands(e.target.value)}>
  <Checkbox value='Adidas'checked={brand.includes("Adidas")} onChange={handleChange}>ADDIDAS</Checkbox>
    <Checkbox value='Forever 21'checked={brand.includes("Forever 21")} onChange={handleChange}>Forever 21</Checkbox>
    <Checkbox value="Lacoste" checked={brand.includes("Lacoste")} onChange={handleChange}>Lacoste</Checkbox>
      </Stack>
        </Box>
        <Divider/>

      <Heading as="h6" mt={5} fontSize={["sm", "md", "xl"]} ml={8}>
        Filter By Material
      </Heading>
      <Box ml={8} mt={5} mb={5}>
        <Select
          placeholder="Select Category"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        >
          <option value="Cotton">Cotton</option>
          <option value="Silk">Silk</option>
          <option value="Denim">Denim</option>
          <option value="Cahmere">Cashmere</option>
          <option value="Cotton Blend">Cotton Blend</option>
          <option value="Polyester">Polyester</option>
          <option value="Olive">Olive</option>
          <option value="Flannel">Flannel</option>
        </Select>
      </Box>
      <Divider />

      <Heading as="h6" mt={5} fontSize={["sm", "md", "xl"]} ml={8}>
        Filter By Color
      </Heading>
      <Box ml={8} mt={5} mb={5}>
        <Select
          placeholder="Select Color"
          variant="filled"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="Blue" style={{ backgroundColor: "blue" }}>
            Blue
          </option>
          <option value="Black" style={{ backgroundColor: "black" }}>
            Black
          </option>
          <option value="Mustard" style={{ backgroundColor: "#F1EDA7" }}>
            Mustard
          </option>
          <option value="Maroon" style={{ backgroundColor: "	#800000" }}>
            Maroon
          </option>
          <option value="Light Blue" style={{ backgroundColor: "lightblue" }}>
            Light Blue
          </option>
          <option value="Pink" style={{ backgroundColor: "pink" }}>
            Pink
          </option>
          <option value="Olive" style={{ backgroundColor: "olive" }}>
            Olive
          </option>
          <option value="Red" style={{ backgroundColor: "red" }}>
            Red
          </option>
        </Select>
      </Box>
      <Divider />
      <Heading as="h6" fontSize={["sm", "md", "xl"]} ml={8} mb={5}>
        Filter By Category
      </Heading>
      <Box ml={8} mb={5}>
        <Stack
          spacing={[1, 5]}
          direction={["column", "column", "column", "column", "row"]}
        >
          <Checkbox
            value="Topwear"
            checked={category.includes("Topwear")}
            onChange={handleCat}
          >
            Top Wear
          </Checkbox>
          <Checkbox
            value="Bottomwear"
            checked={category.includes("Bottomwear")}
            onChange={handleCat}
          >
            Bottom Wear
          </Checkbox>
        </Stack>
      </Box>
      <Divider />

      <Button
        ml={["10px", "20px", "40px", "60px"]}
        size={["sm", "md"]}
        onClick={handleReset}
      >
        Reset Filters
      </Button>
    </Box>
  );
};

export default Sidebar;
