//Made by Treya Nash

const express = require('express')
const app = express()
const port = 8501

const http = require('http');
const server = http.createServer(app);
const Server = require("socket.io");
const io = new Server(server);


app.use(express.static('public'))

server.listen(port, () => {
    console.log("Hello World")
})


let idArray = [];
let mainDisplay;
let frogState = {
    section: "start"
}




io.on('connection', (socket) => {
   console.log(idArray.length)
    // socket.on('frogHover', (data) => {
    //     console.log(data)
    // })
    //console.log(socket.id)
    socket.on("fade_to_black", () => {
       // socket.broadcast.emit("end_piece", true);
        frogState.section = "ending";
        socket.broadcast.emit("set_section", frogState.section)

    })
    
    socket.on("make_show_button", () => {
    frogState.section = "duplicate";
    socket.broadcast.emit("frogVisible", true);
    })

    socket.on("make_hide_button", () => {
        socket.broadcast.emit('hide_button')
    })

    socket.on("restart_piece", () => {
        frogState.section = "restart";
        io.emit("set_section", frogState.section)
    })

    socket.on("trigger_ending", () => {
        socket.broadcast.emit('the_end', true)
        socket.emit('the_end', true)
        console.log("hello")
    })

    idArray.push(socket.id);
    
    socket.on("main_display", (data) => {
        mainDisplay = socket.id;
        socket.emit("hide_button, true")
        
    })
    
    socket.on("change_sound", (data) => {
        io.emit("set_sound_bank", true)
    })


    if (idArray.length <= 3) {

    socket.emit("room", 1)
    socket.join('room1')
    console.log("room1")

// } else if (idArray.length > 3 && idArray.length <= 200) {
//     socket.emit("room", 6)
//     socket.join('room6')
//     console.log("room6")
//     socket.to("room6").emit('new_frog6', true)
//     io.to(mainDisplay).emit('new_frog6', true)
// }


    }


else if (idArray.length > 3 && idArray.length <= 5) {
      socket.join('room2');
      console.log("room2");
      socket.emit("room", 2)
      socket.on("testing", () => {
      socket.to("room2").emit('new_frog2', true)
      io.to(mainDisplay).emit('new_frog2', true)

})

} else if (idArray.length > 5 && idArray.length < 8) {
      socket.join('room3');
      console.log("room3");
      socket.emit("room", 3)
      socket.on("testing", () => {
      socket.to("room3").emit('new_frog3', true)
      io.to(mainDisplay).emit('new_frog3', true)
    }
)

 
    } else if (idArray.length >= 8 && idArray.length < 11) {
        socket.join('room4');
        console.log("room4");
        socket.emit("room", 4)
        socket.on("testing", () => {
        socket.to("room4").emit('new_frog4', true)
        io.to(mainDisplay).emit('new_frog4', true)
      })
  
   
      } else if (idArray.length >= 11 && idArray.length < 15) {
        socket.join('room5');
        console.log("room5");
        socket.emit("room", 5)
        socket.on("testing", () => {
        socket.to("room5").emit('new_frog5', true)
        io.to(mainDisplay).emit('new_frog5', true)
      })
       
     } else if (idArray.length >= 15 && idArray.length < 18) {
        socket.join('room6');
        console.log("room6");
        socket.emit("room", 6)
        socket.on("testing", () => {
        socket.to("room6").emit('new_frog6', true)
        io.to(mainDisplay).emit('new_frog6', true)
      })
       
    } else if (idArray.length >= 18 && idArray.length < 21) {
        socket.join('room2');
          console.log("room2");
          socket.emit("room", 2)
          socket.on("testing", () => {
          socket.to("room2").emit('new_frog2', true)
          io.to(mainDisplay).emit('new_frog2', true)
    
    })
    
    } else if (idArray.length >= 21 && idArray.length < 24) {
          socket.join('room3');
          console.log("room3");
          socket.emit("room", 3)
          socket.on("testing", () => {
          socket.to("room3").emit('new_frog3', true)
          io.to(mainDisplay).emit('new_frog3', true)
        }
    )
    
     
        } else if (idArray.length >= 24 && idArray.length < 27) {
            socket.join('room4');
            console.log("room4");
            socket.emit("room", 4)
            socket.on("testing", () => {
            socket.to("room4").emit('new_frog4', true)
            io.to(mainDisplay).emit('new_frog4', true)
          })
      
       
          } else if (idArray.length >= 27 && idArray.length < 30) {
            socket.join('room5');
            console.log("room5");
            socket.emit("room", 5)
            socket.on("testing", () => {
            socket.to("room5").emit('new_frog5', true)
            io.to(mainDisplay).emit('new_frog5', true)
          })
           
         } else if (idArray.length >= 30 && idArray.length < 33) {
            socket.join('room6');
            console.log("room6");
            socket.emit("room", 6)
            socket.on("testing", () => {
            socket.to("room6").emit('new_frog6', true)
            io.to(mainDisplay).emit('new_frog6', true)
          })

        } else if (idArray.length >= 33 && idArray.length < 36) {
            socket.join('room2');
            console.log("room2");
            socket.emit("room", 2)
            socket.on("testing", () => {
            socket.to("room2").emit('new_frog2', true)
            io.to(mainDisplay).emit('new_frog2', true)
          })

        } else if (idArray.length >= 36 && idArray.length < 39) {
            socket.join('room3');
            console.log("room6=3");
            socket.emit("room", 3)
            socket.on("testing", () => {
            socket.to("room3").emit('new_frog3', true)
            io.to(mainDisplay).emit('new_frog3', true)
          })


        } else if (idArray.length >= 39 && idArray.length < 42) {
            socket.join('room4');
            console.log("room4");
            socket.emit("room", 4)
            socket.on("testing", () => {
            socket.to("room4").emit('new_frog4', true)
            io.to(mainDisplay).emit('new_frog4', true)
          })

        } else if (idArray.length >= 42 && idArray.length < 45) {
            socket.join('room5');
            console.log("room5");
            socket.emit("room", 5)
            socket.on("testing", () => {
            socket.to("room5").emit('new_frog5', true)
            io.to(mainDisplay).emit('new_frog5', true)
          })


        } else if (idArray.length >= 45 && idArray.length < 48) {
            socket.join('room6');
            console.log("room6");
            socket.emit("room", 6)
            socket.on("testing", () => {
            socket.to("room6").emit('new_frog6', true)
            io.to(mainDisplay).emit('new_frog6', true)
          })
           
        } else {
            socket.join('room5');
            console.log("room5");
            socket.emit("room", 5)
            socket.on("testing", () => {
            socket.to("room5").emit('new_frog5', true)
            io.to(mainDisplay).emit('new_frog5', true)
        })
        }        
socket.emit("set_section", frogState.section)

})

