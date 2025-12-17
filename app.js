let data = JSON.parse(localStorage.getItem("fees")) || [];

function add(){
  let name = nameInput().value;
  let total = +totalInput().value;
  let paid = +paidInput().value;

  if(!name || !total) return alert("Fill all");

  data.push({name,total,paid});
  localStorage.setItem("fees", JSON.stringify(data));
  show();
}

function show(){
  let html="";
  data.forEach(s=>{
    html+=`<p>${s.name} | Pending ₹${s.total - s.paid}</p>`;
  });
  list().innerHTML = html;
}

function nameInput(){return document.getElementById("name")}
function totalInput(){return document.getElementById("total")}
function paidInput(){return document.getElementById("paid")}
function list(){return document.getElementById("list")}

show();
