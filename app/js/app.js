// document.getElementById('test-time').addEventListener('click', (e)=>{
//     let [h,m] = document.getElementById('start-time').value.split(":");
//     console.log((h%12+12*(h%12==0))+":"+m, h >= 12 ? 'PM' : 'AM');
// });

function Event(id,dotw, title, start, end, room) {
    this.id = id;
    this.dotw = dotw;
    this.title = title;
    this.start = start;
    this.end = end;
    this.room = room;
}

// let list = [];
//
// list[0] = new Event(101.0,'MON', 'Preschool', '09:00 AM','12:00 PM', "TT");
//
// let div = document.createElement("div");
// let dotwDiv = document.createElement("div");
// let titleDiv = document.createElement("div");
// let roomDiv = document.createElement("div");
// let timeDiv = document.createElement("div");
//
// div.classList.add('row-style');
// dotwDiv.classList.add('placeholder-color');
// titleDiv.classList.add('placeholder-color');
// roomDiv.classList.add('placeholder-color');
// timeDiv.classList.add('placeholder-color');
//
// dotwDiv.innerHTML = list[0].dotw;
// titleDiv.innerHTML = list[0].title;
// timeDiv.innerHTML = list[0].start + ' - '+ list[0].end;
// roomDiv.innerHTML = list[0].room;
//
//
// div.appendChild(dotwDiv);
// div.appendChild(titleDiv);
// div.appendChild(timeDiv);
//
// div.appendChild(roomDiv);
//
//
// document.getElementById('list-panel').appendChild(div);
//
//
// console.log(list);

//ui
const remote = require('electron').remote;

document.getElementById("min-btn").addEventListener("click", function (e) {
    let window = remote.getCurrentWindow();
    window.minimize();
});

document.getElementById("close-btn").addEventListener("click", function (e) {
    let window = remote.getCurrentWindow();
    window.close();
});

/*JSON FILE READ/WRITE*/
const jsonfile = require('jsonfile');
const file = 'app/assets/defaults.json';

//read in and gen list
jsonfile.readFile(file, function (err, obj) {
    if (err){
        console.error(err);
    }else{
        obj.forEach((event)=>{
            let div = document.createElement("div");
            let dotwDiv = document.createElement("div");
            let titleDiv = document.createElement("div");
            let roomDiv = document.createElement("div");
            let timeDiv = document.createElement("div");

            div.classList.add('row-style');
            dotwDiv.classList.add('placeholder-color');
            titleDiv.classList.add('placeholder-color');
            roomDiv.classList.add('placeholder-color');
            timeDiv.classList.add('placeholder-color');

            dotwDiv.innerHTML = event.dotw;
            titleDiv.innerHTML = event.title;
            timeDiv.innerHTML = event.start + ' - '+ event.end;
            roomDiv.innerHTML = event.room;

            div.appendChild(dotwDiv);
            div.appendChild(titleDiv);
            div.appendChild(timeDiv);

            div.appendChild(roomDiv);

            document.getElementById('list-panel').appendChild(div);
        })
    }

    console.dir(obj);
});


//save to json file



//create iframe for printing

//print