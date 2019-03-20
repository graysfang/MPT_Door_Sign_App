/*
* app.js - controls for handling file read/write, sort, and update of the defaults list.
*
* */


function Event(dotw, title, start, end, room) {
    this.dotw = dotw;
    this.title = title;
    this.start = start;
    this.end = end;
    this.room = room;
}



/*GLOBALS*/
const jsonfile = require('jsonfile');
const file = 'app/assets/defaults.json';
let eventList;



/*ELECTRON WINDOW CONTROL*/
const remote = require('electron').remote;

document.getElementById("min-btn").addEventListener("click", function (e) {
    let window = remote.getCurrentWindow();
    window.minimize();
});

document.getElementById("close-btn").addEventListener("click", function (e) {
    let window = remote.getCurrentWindow();
    window.close();
});

//init
function init(){

    //gen list
    // let eventList = jsonfile.readFileSync(file);
    eventList = loadFile(file);
    console.log(eventList);

    //gen list
    // genHtmlEventList(eventList);

    // //test sort
    // sortListRoom(eventList);
    // sortListDotw(eventList);

    // let test = new Event(0,'Pre-K',['09','00'],['12','00'],0);
    // let testt = new Event(1,'Lil Leafs',['09','00'],['12','00'],1);
    //
    // eventList[0].push(test);
    // eventList[1].push(testt);
    //
    //
    //
    // jsonfile.writeFileSync(file, eventList);
    // console.log(eventList);

}

document.getElementById('dotw-panel').addEventListener('click', (e)=>{
    console.log(e.target.id);


    //reset list-panel in prep for new list
    document.getElementById('list-panel').innerHTML = "";

    // set bgc to day color
    document.getElementById('list-panel').style.backgroundColor = 'var(--'+(e.target.id).split('-')[0]+'-color)';

    //gen list based on dotw
    switch ((e.target.id).split('-')[0]) {
        case 'mon':
            genHtmlEventList(eventList[0]);
            break;
        case 'tue':
            genHtmlEventList(eventList[1]);

            break;
        case 'wed':

            break;
        case 'thu':

            break;
        case 'fri':

            break;
        case 'sat':

            break;
        case 'sun':

            break;
    }

});

//
// function sortListDotw(list) {
//     list.sort(function (a, b) {
//         return a.dotw - b.dotw;
//     });
// }
//
// function sortListRoom(list) {
//     list.sort(function (a, b) {
//         return a.room - b.room;
//     });
// }

function addNewEntry(eventObj) {

}

function addToEventList(toBeAdded) {

}


//will change later when
function loadFile(fileToLoad) {
    let multiArrayList = [[],[],[],[],[],[],[]];

    let fileList = jsonfile.readFileSync(fileToLoad);

    fileList.forEach((event)=>{
        switch (event.dotw) {
            case 0:
                multiArrayList[0].push(new Event(event.dotw, event.title,event.start, event.end, event.room));
                break;
            case 1:
                multiArrayList[1].push(new Event(event.dotw, event.title,event.start, event.end, event.room));
                break;
            case 2:
                multiArrayList[2].push(new Event(event.dotw, event.title,event.start, event.end, event.room));
                break;
            case 3:
                multiArrayList[3].push(new Event(event.dotw, event.title,event.start, event.end, event.room));
                break;
            case 4:
                multiArrayList[4].push(new Event(event.dotw, event.title,event.start, event.end, event.room));
                break;
            case 5:
                multiArrayList[5].push(new Event(event.dotw, event.title,event.start, event.end, event.room));
                break;
            case 6:
                multiArrayList[6].push(new Event(event.dotw, event.title,event.start, event.end, event.room));
                break;
        }
    });

    return multiArrayList;
}


function genHtmlEventList(list){
    list.forEach((event)=>{
        document.getElementById('list-panel').innerHTML = "";

        let div = document.createElement("div");
        let titleDiv = document.createElement("div");
        let roomDiv = document.createElement("div");
        let timeDiv = document.createElement("div");

        div.classList.add('row-style');
        titleDiv.classList.add('placeholder-color');
        roomDiv.classList.add('placeholder-color');
        timeDiv.classList.add('placeholder-color');

        titleDiv.innerHTML = event.title;
        timeDiv.innerHTML = event.start[0] + ':'+event.start[1]+ ' - '+ event.end[0] + ':'+event.end[1]
        roomDiv.innerHTML = event.room;

        div.appendChild(titleDiv);
        div.appendChild(timeDiv);
        div.appendChild(roomDiv);

        document.getElementById('list-panel').appendChild(div);
    })
}


init();





//read in file to global list




// //read in and gen list
// jsonfile.readFile(file, function (err, obj) {
//     if (err){
//         console.error(err);
//     }else{
//         obj.forEach((event)=>{
//             let div = document.createElement("div");
//             let dotwDiv = document.createElement("div");
//             let titleDiv = document.createElement("div");
//             let roomDiv = document.createElement("div");
//             let timeDiv = document.createElement("div");
//
//             div.classList.add('row-style');
//             dotwDiv.classList.add('placeholder-color');
//             titleDiv.classList.add('placeholder-color');
//             roomDiv.classList.add('placeholder-color');
//             timeDiv.classList.add('placeholder-color');
//
//             dotwDiv.innerHTML = event.dotw;
//             titleDiv.innerHTML = event.title;
//             timeDiv.innerHTML = event.start + ' - '+ event.end;
//             roomDiv.innerHTML = event.room;
//
//             div.appendChild(dotwDiv);
//             div.appendChild(titleDiv);
//             div.appendChild(timeDiv);
//
//             div.appendChild(roomDiv);
//
//             document.getElementById('list-panel').appendChild(div);
//         })
//     }
//
//     console.dir(obj);
// });


// document.getElementById('test-time').addEventListener('click', (e)=>{
//     let [h,m] = document.getElementById('start-time').value.split(":");
//     console.log((h%12+12*(h%12==0))+":"+m, h >= 12 ? 'PM' : 'AM');
// });

//save to json file



//create iframe for printing

//print