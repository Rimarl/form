import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Navbar from "./navbar"
import axios from "axios";
import './stock.css';
import { DataGrid } from "@mui/x-data-grid";
import DetailsListeProduit from "./detailproduct";
import { TextField } from "@mui/material";

//import { makeStyles } from '@mui/styles';


import { useDispatch, useSelector } from "react-redux";

import { useNavigate ,useParams} from "react-router-dom";
import {  GridToolbar, GridToolbarContainer,
  GridToolbarFilterButton,
  } from  "@mui/x-data-grid";
import { grey } from "@mui/material/colors";
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
      </GridToolbarContainer>
    );
  }

const Stock = () => {
 
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const [productscarte, setProductscarte] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedProductcarte, setSelectedProductcarte] = useState("");

  const [selectedProductDetails, setSelectedProductDetails] = useState([]);
  const [selectedProductcarteDetails, setSelectedProductcarteDetails] = useState([]);
  
  const [showDetail, setShowDetail] = useState(false);
  const theme = useTheme();
  const param=useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/produit');
        setProducts(response.data);
        
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProductscarte = async () => {
      try {
        const response = await axios.get('http://localhost:3001/produit/carterecharge');
        
        setProductscarte(response.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductscarte();
  }, []);




  const DetailPorduit = async (id) =>{
    const response = await fetch("http://localhost:3001/produit/detail/"+id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setSelectedProductDetails(data);
  
  
  }
  useEffect(() => {
    DetailPorduit();
  }, []); 
  
  const DetailPorduitcarte = async (id) =>{
    const response = await fetch("http://localhost:3001/produit/detailrecharge/"+id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setSelectedProductcarteDetails(data);
  
  
  }
  useEffect(() => {
    DetailPorduitcarte();
  }, []); 
 
const columns = [
  { field: 'id', headerName: 'id' , width : 300 , flex: 1, },
  { field: 'nomProduit', headerName: 'Nom' , width :300 , flex: 1,},
  { field: 'nomCategorie', headerName: 'Catgeorie' , width : 300, flex: 1,valueGetter: (params) => params.row.CategorieProduit.nomCategorie },
  
];
const handleRowClick = (params) => {
  setSelectedProduct(params.row.id)
  const idp = params.row.id
  const nomp = params.columns.nomProduit
  console.log(idp)
    navigate("/detail" ,{state :{idp } , nomp });


  };
  const filteredProducts = products.filter((product) =>
  product.nomProduit.toLowerCase().includes(searchValue.toLowerCase())
);
const handleSearchChange = (event) => {
  setSearchValue(event.target.value);
};


  return (
    <div > 
      <Navbar />
      {/* <div className="containerst" style={{ 
  }}>
     
     </div>
     */}
      <div className="container-stock " style={{ 
    
    backgroundColor: "#81c784"
    
    }}> 
     
        
         <div  className="tab" style={{  
  backgroundColor: "#81c784",
  height: "100vh",
  width: "90vw" }}> 
        <Box
            mb={2}
            ml="50px"
            height="75vh"
            flex="0.9"
           sx={{
            
            "& .MuiDataGrid-root": {
              border: "none",
            },
            
            "& .MuiDataGrid-cell": {
              borderBottom: "solid 1px #e6e6e6",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f2f2f2",
              color: " #333",
              borderBottom: "1px solid #e6e6e6",
              
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "#fff",
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: "#f2f2f2",
              color: "#333",
              borderTop: "solid 1px #e6e6e6",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color:  "#333 !important",
            },
          }}
        > 
 <Typography
      variant="h5"
      style={{
        marginTop: "20px",
        marginBottom: "10px",
        fontWeight: "bold",
        color: "#333333",
        textAlign: "center",
      }}
    >
      Produits disponibles
    </Typography>          
          <DataGrid
          components={{
            Toolbar: CustomToolbar,
           
          }}
          
            getRowId={(row) => row.id} 
            rows={products|| []}
            columns={columns}
            pageSize = {10}
            onRowClick={handleRowClick}
            disableSelectionOnClick
        
          />
        {showDetail && (
<DetailsListeProduit product={selectedProduct}/>
)}
        
        </Box>
        
        </div>
        {/* <div className="tab" style={{ width: "50%" }} > 
        <Box
           mr="50px"
          ml="50px"
          mb ={2}
         
          height="75vh"
          width="100vh"
        
          
          
          sx={{
            
            "& .MuiDataGrid-root": {
              border: "none",
            },
            
            "& .MuiDataGrid-cell": {
              borderBottom: "solid 1px #e6e6e6",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f2f2f2",
              color: " #333",
              borderBottom: "1px solid #e6e6e6",
              
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "#fff",
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: "#f2f2f2",
              color: "#333",
              borderTop: "solid 1px #e6e6e6",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color:  "#333 !important",
            },
          }}
        > 
      <Typography
      variant="h5"
      style={{
        marginTop: "20px",
        marginBottom: "10px",
        fontWeight: "bold",
        color: "#333333",
        textAlign: "center",
      }}
    >
      Carte SIM disponibles
    </Typography>
          <DataGrid
          components={{
            Toolbar: CustomToolbar,
           
          }}
          
            getRowId={(row) => row.id} 
            rows={productscarte|| []}
            columns={columns}
            pageSize = {10}
            onRowClick={handleRowClickcarte}
            disableSelectionOnClick
        
          />
        {showDetail && (
<DetailsListeProduit product={selectedProduct}/>
)}
        
        </Box>
        
        </div>  */}
       
        
        </div>
       
      </div>
    
  );
};

export default Stock;
