const apiUrl = "https://roomhisab.herokuapp.com/getpersonexp";

const addData = () => {
  document.getElementById("add-data-area").style.display = "flex";
};

const allData = () => {
  document.getElementById("add-data-area").style.display = "none";
  document.getElementById("all-data").style.display = "block";
  document.getElementById("aryansh").style.display = "none";
  document.getElementById("sushant").style.display = "none";
  document.getElementById("omy").style.display = "none";

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("all-data-tbl").innerHTML += data.map((item) => {
        return `
            <tr>
            <td>${item._id}</td>
            <td>${item.name}</td>
            <td>${item.reason}</td>
            <td>${item.money}</td>
            <td>${item.date}</td>
            </tr>>
            `;
      });
    });
};

const aryanshData = () => {
  document.getElementById("add-data-area").style.display = "none";
  document.getElementById("all-data").style.display = "none";
  document.getElementById("sushant").style.display = "none";
  document.getElementById("omy").style.display = "none";
  document.getElementById("aryansh").style.display = "block";

  fetch(`${apiUrl}?${"name"}=${"aryansh"}`)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("aryansh-table").innerHTML += data.map((item) => {
        return `
           <tr>
            <td>${item._id}</td>
            <td>${item.name}</td>
            <td>${item.reason}</td>
            <td>${item.money}</td>
            <td>${item.date}</td>
            </tr>>
            `;
      });
    });
};

const sushantData = () => {
  document.getElementById("add-data-area").style.display = "none";
  document.getElementById("all-data").style.display = "none";
  document.getElementById("sushant").style.display = "block";
  document.getElementById("omy").style.display = "none";
  document.getElementById("aryansh").style.display = "none";

  fetch(`${apiUrl}?${"name"}=${"sushant"}`)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("sushant-table").innerHTML += data.map((item) => {
        return `
           <tr>
            <td>${item._id}</td>
            <td>${item.name}</td>
            <td>${item.reason}</td>
            <td>${item.money}</td>
            <td>${item.date}</td>
            </tr>>
            `;
      });
    });
};
const omyData = () => {
  document.getElementById("add-data-area").style.display = "none";
  document.getElementById("all-data").style.display = "none";
  document.getElementById("sushant").style.display = "none";
  document.getElementById("omy").style.display = "block";
  document.getElementById("aryansh").style.display = "none";

  fetch(`${apiUrl}?${"name"}=${"omy"}`)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("omy-table").innerHTML += data.map((item) => {
        return `
            <tr>
            <td>${item._id}</td>
            <td>${item.name}</td>
            <td>${item.reason}</td>
            <td>${item.money}</td>
            <td>${item.date}</td>
            </tr>
            `;
      });
    });
};

const save = () => {
  const name = document.getElementById("select").value;
  const reason = document.getElementById("reason").value;
  const money = document.getElementById("money").value;
  const id = Math.floor(Math.random() * 10000);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;
  fetch("https://roomhisab.herokuapp.com/addpersonexp", {
    method: "POST",
    body: JSON.stringify({
      _id: id,
      name: name,
      reason: reason,
      money: money,
      date: today,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status) {
        document.getElementById("select").value='';
        document.getElementById("reason").value='';
        document.getElementById("money").value='';
        document.getElementById("msg").innerText='data saved successfully!!!';
        setTimeout(function(){  document.getElementById("msg").innerText=''; }, 3000);
       
        
      }
    });
};
