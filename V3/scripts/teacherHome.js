
function addTeacherCode(){

    var addClassModal = document.getElementById("addClassModal");

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        addClassModal.style.display = "none";
    }

    addClassModal.style.display = "block";

}

function updateClasses() {

    const teacher = db.collection("teachers").doc(localStorage.getItem("teacherEmail"));

    var input = document.getElementById("code").value;

    var paragraph = document.getElementsByClassName("realCode")[0];


    var newSignUpCode = generateClassCode();
    paragraph.innerHTML = newSignUpCode;

    teacher.update({ 
        classCode: firebase.firestore.FieldValue.arrayUnion(newSignUpCode),
        className: firebase.firestore.FieldValue.arrayUnion(input),
        averageScore: 1
    });

}

function listClassCodes() {
    var list = document.getElementsByClassName("list")[0];

    db.collection("teachers").get().then((querySnapshot) => {
        querySnapshot.forEach((doc)=> {

            var name = doc.data().className;
            var code = doc.data().classCode;
            var level = doc.data().averageScore;

            if (doc.data().email == "nateTeacher@gmail.com"){
                for (var i = 0; i < name.length; i++){
                    list.innerHTML += 
                    `<ul>
                    <li>` + "Class: " + name[i] + `</li>
                    <li>` + "Code: " + code[i] + `</li>
                    <li>` + "AVG. Level: " +  level[i] + `</li>
                    </ul>`
                }

            }

        });
    }); 
}

listClassCodes();

var data=[1,2,3,4,5,6,7,8,9,10];
var values = [0,0,0,0,0,0,0,0,0,0];

db.collection("teachers").get().then((querySnapshot) => {
    querySnapshot.forEach((doc)=> {
  
        if (doc.data().email == "nateTeacher@gmail.com"){
            var temp = doc.data().averageScore;
            for (var i = 0; i < temp.length; i++) {
                values[temp[i]- 1] += 1;
            }
            setChart(values);
        }
  
    });
}); 

function setChart(value){
    console.log(value)
    console.log(data)
    for (var i= value.length; i <= 10;i++){
        value.push(0);
    }
    var trace0 = {
        x: data,
        y: value,
        type: 'bar',
        width: 1
    };

    var layout = {
        title: 'Average level of all classes',
        xaxis: {
            title: 'Average level of a class'
        },
        yaxis: {
          title: 'Number of class on that level',
        }
    };
    
    var data2 = [trace0]
    
    Plotly.newPlot('mid', data2, layout);

}


function myFunction() {
    var links = document.getElementsByClassName("link")[0];
    db.collection("teachers").get().then((querySnapshot) => {
        querySnapshot.forEach((doc)=> {
      
            var name = doc.data().className;
            if (doc.data().email == "nateTeacher@gmail.com"){
                for (var i = 1; i < name.length; i++){
                    links.innerHTML += 
                    `<a href="#home">` + name[i] + `</a>`
                }

            }
      
        });
    }); 
    document.getElementById("myDropdown").classList.toggle("show");
}
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
}
