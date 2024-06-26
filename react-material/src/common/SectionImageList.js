import React from "react";
import { Link as LinkRouter } from "react-router-dom";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const SectionImageList = ({ data }) => (
   <Box display='flex' flexWrap='wrap' justifyContent='center' maxWidth={800} marginX='auto' marginY={2}>
      {data.map((item, i) => {
         return (
            <Box marginTop={2} marginX={2} key={i}>
               <Link to={item.url} component={LinkRouter}>
                  <Box component='img' height='50px' src={"https://fakeimg.pl/50x50?text=Image+here"} alt={item.title} />
               </Link>
            </Box>
         );
      })}
   </Box>
);

export default SectionImageList;
