// src/Components/SearchItem.js
import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { Search as SearchIcon } from "@mui/icons-material";
import { fetchProductsByKeyword } from "../../Actions/homeProductActions";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    "& fieldset": {
      border: "none",
      borderRadius: "20px",
    },
    "&:hover fieldset": {
      border: "none",
    },
  },
});

const SearchItem = () => {
  const [keyword, setKeyword] = useState("");

  const handleSearchChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const products = await fetchProductsByKeyword(keyword);
      navigateToProductMain(keyword);
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };

  const navigateToProductMain = (keyword) => {
    window.location.href = `/product?keyword=${encodeURIComponent(keyword)}`;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <Box
        sx={{
          width: { lg: "320px", md: "280px", sm: "260px", xs: "240px" },
          display: "flex",
          borderRadius: "20px",
          padding: "0px",
          margin: 0,
          position: "relative",
          bgcolor: "#ebeced",
          transition: "background-color 0.4s ease-in",
          "&:hover": {
            bgcolor: "#c7c8c9",
          },
        }}
      >
        <StyledTextField
          label="Search Products"
          size="small"
          value={keyword}
          onChange={handleSearchChange}
          fullWidth
          sx={{
            border: "1px solid",
            borderColor: "#667085",
            borderRadius: "20px",
          }}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleSearch} edge="end">
                <SearchIcon />
              </IconButton>
            ),
          }}
          onKeyPress={handleKeyPress}
        />
      </Box>
    </Box>
  );
};

export default SearchItem;
