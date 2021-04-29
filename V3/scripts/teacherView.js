var paragraph = document.getElementsByClassName("students")[0];

function printStudents() {
  db.collection("studentInfo").get().then((querySnapshot) => {
    querySnapshot.forEach((doc)=> {
        paragraph.innerHTML += 
        `<ul>
        <li>` + "Name: " + doc.data().name + `</li>
        <li>` + "Level: " + doc.data().level + `</li>
        <li>` + "Score: " + doc.data().score + `</li>
        </ul>`
        // GOES BEFORE LEVEL
        // <li>` + doc.data().email + `</li>
        // <li>` + doc.data().studentId + `</li>

    });
  }); 
}

printStudents();

var data=[1,2,3,4,5,6,7,8,9,10];

var count=[0,0,0,0,0,0,0,0,0,0]

db.collection("studentInfo").get().then((querySnapshot) => {
  querySnapshot.forEach((doc)=> {

      count[doc.data().level-1] += 1;
      // data.push(doc.data().level);

      setChart();

  });
}); 

function setChart(){

  var trace = {
      x: data,
      y: count,
      type: 'bar',
      width: 1
    };
  var data1 = [trace];
  var layout = {
    title: 'Current level students are on',
    xaxis: {
        title: 'Level number'
    },
    yaxis: {
      title: 'How many students are on this level',
    }
  };
  Plotly.newPlot('chart_div', data1, layout);
}