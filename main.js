let button = document.getElementById("kenshie").addEventListener('click', function(){
  let user = document.getElementById("user").value.toLowerCase();
  if(user != "dharyn" && user != "amy"){
    let box = document.getElementById("box");
    box.style.display = "flex";
    let remove = document.getElementById("remove").addEventListener('click', function(){
      let box = document.getElementById("box");
    box.style.display = "none";
    })
  }
  else if(user == "dharyn" || user == "amy"){
    alert(`Hi, ${user} please wait`);
    setTimeout( () => {
      window.location.href = "dharyn.html";
    }, 2000);
  }
  else{
    alert("Insert something");
  }
})