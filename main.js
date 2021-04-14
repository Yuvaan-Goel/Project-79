var students= [];
function submit() {
    var stud1= document.getElementById("name1").value;
    var stud2= document.getElementById("name2").value;
    var stud3= document.getElementById("name3").value;
    var stud4= document.getElementById("name4").value;
    var stud5= document.getElementById("name5").value;
    students.push(stud1);
    students.push(stud2);
    students.push(stud3);
    students.push(stud4);
    students.push(stud5);
    console.log(students);
    document.getElementById("display_name").innerHTML=students;
    document.getElementById("button_submit").style.display="none";
    document.getElementById("button_sort").style.display="inline-block";
}
function sorting() {
    students.sort();
    console.log(students);
    document.getElementById("display_name").innerHTML=students;
}