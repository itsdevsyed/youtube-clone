import React from "react";
import { Stack, Button, Box, useTheme } from "@mui/material";
import { categories } from "../api/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const theme = useTheme();

  return (
      <Stack
        direction="row"
        sx={{
          overflowY: "auto",
          height: { sx: "auto", md: "95%" },
          flexDirection: { md: "column" },
          p: 2,
          bgcolor: "black",
          borderRadius: '20px',
          transition: 'background-color 0.3s ease',
        }}
      >
        {categories.map((category) => (
          <Button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            variant="contained"
            startIcon={
              <Box
                component="span"
                sx={{ color: category.name === selectedCategory ? "white" : "red" }}
              >
                {category.icon}
              </Box>
            }
            sx={{
              mb: 1,
              justifyContent: "flex-start",
              backgroundColor: category.name === selectedCategory ? "#FC1503" : "black",
              color: category.name === selectedCategory ? "white" : "red",
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: "#FC1503",
                color: 'white',
                transform: 'translateY(-3px)',
                boxShadow: `0px 3px 5px ${theme.palette.primary.main}`,
              },
              transition: 'all 0.3s ease',
            }}
            fullWidth
          >
            <Box
              component="span"
              sx={{
                ml: 1,
                opacity: category.name === selectedCategory ? 1 : 0.8,
                color: 'inherit', // Set text color to inherit
              }}
            >
              {category.name}
            </Box>
          </Button>
        ))}
      </Stack>
  );
};

export default Categories;
