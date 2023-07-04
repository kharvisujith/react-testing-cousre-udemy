// importing components from another files
import { ListComponents } from "./ListComponents";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";
import Card from "@mui/material/Card";
import { CardContent, Grid, Typography, Button, Box } from "@mui/material";
import { display } from "@mui/system";
function App() {
  const [list1, setList1] = useState([
    "Captain America",
    "Iron Man",
    "SpiderMan",
    "Thor",
    "Hulk",
    "Black Widow",
    "Loki",
    "Black Panther",
    "Deadpool",
    "Doctor Strange",
    "Ant Man",
    "Captain Marvel",
  ]);
  // List 2 consisting of all DC super heroes
  const [list2, setList2] = useState([
    "BatMan",
    "SuperMan",
    "Wonder Woman",
    "Flash",
    "Green Lantern",
    "AquaMan",
    "Robin",
    "Cyborg",
    "StarFire",
    "HawkGirl",
    "Shazam",
  ]);

  const deleteItem = (list, index) => {
    return list.splice(index, 1);
  };
  const onDragEnd = (result) => {
    // getting the source and destination object
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === "Marvel_drop_area") {
        let tempList = list1;
        const removed = deleteItem(tempList, source.index);
        tempList.splice(destination.index, 0, removed);
        setList1(tempList);
      } else {
        let tempList = list2;
        const removed = deleteItem(tempList, source.index);
        tempList.splice(destination.index, 0, removed);
        setList2(tempList);
      }
    } else {
      let tempList1 = list1;
      let tempList2 = list2;
      if (source.droppableId === "Marvel_drop_area") {
        const removed = deleteItem(tempList1, source.index);
        tempList2.splice(destination.index, 0, removed);
        setList1(tempList1);
        setList2(tempList2);
      } else {
        const removed = deleteItem(tempList2, source.index);
        tempList1.splice(destination.index, 0, removed);
        setList1(tempList1);
        setList2(tempList2);
      }
    }
  };
  return (
    //for responsive designs
    // <Grid container justifyContent="center">
    //   <Grid item xs={10}>
    //     <Card>
    //       <CardContent
    //       // sx={{ display: "flex", justifyContent: "space-between" }}
    //       >
    //         <Grid
    //           container
    //           sx={{ border: "2px solid red" }}
    //           justifyContent="center"
    //         >
    //           <Grid item xs={10} md={6} sx={{ border: "2px solid green" }}>
    //             <Typography>yes its working</Typography>
    //           </Grid>
    //           <Grid
    //             item
    //             md={6}
    //             sx={{
    //               border: "2px solid blue",
    //               display: { xs: "none", md: "flex" },
    //             }}
    //           >
    //             <Button>keeeek</Button>
    //             <Button>Peek</Button>
    //           </Grid>
    //         </Grid>

    //         {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>

    //         </Box> */}
    //       </CardContent>
    //     </Card>
    //   </Grid>
    //   <Grid item xs={10} sx={{ display: { md: "none" } }}>
    //     <Button>keeeek</Button>
    //     <Button>Peek</Button>
    //   </Grid>
    // </Grid>
    // <Grid container justifyContent="center" alignItems="center">
    //   <Grid item xs={10}>
    //     <Card>
    //       <CardContent>
    //         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
    //           <Typography>yes its working</Typography>
    //           <Button>keeeek</Button>
    //           <Button>Peek</Button>
    //         </Box>
    //       </CardContent>
    //     </Card>
    //   </Grid>
    // </Grid>

    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <header className="App-header">
          <h4>Hands on React-Beautiful-DND</h4>
          <ListComponents Marvel={list1} DC={list2} />
        </header>
      </div>
    </DragDropContext>
  );
}
export default App;
