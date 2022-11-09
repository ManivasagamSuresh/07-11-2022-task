const express = require("express")
const app = express();
app.use(express.json())

let rooms = [];
let bookedRooms = [];
app.post("/createRoom",(req,res)=>{
    console.log(req.body);
    req.body.id = rooms.length+1;
    rooms.push(req.body);
    res.json({message:"created"})
})
app.get("/rooms",(req,res)=>{
    res.json(rooms);
})

app.post("/bookRoom",(req,res)=>{
    console.log(req.body);
    req.body.id = bookedRooms.length+1;
    bookedRooms.push(req.body);
    res.json({message:"created"})
})

app.get("/roomsBooked",(req,res)=>{
   bookedRooms.map((a) =>{
    let roomIndex = rooms.findIndex((i)=>i.id==a.roomId)
    res.json({
        "Room": `${rooms[roomIndex].name}`,
        "Booked": `yes`,
        "CustomerName" : `${a.Cname}`,
        "Date": `${a.date}`,
        "starttime" : `${a.start}`,
        "endtime" : `${a.end}`,
});})
})






app.listen(process.env.PORT || 3006);