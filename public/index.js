window.onload = async () => {
  try {
    let resp = await axios.post("http://localhost:3000/result/add");

    let data = await axios.get("http://localhost:3000/result/get");
    data = data.data.result;
    data.forEach((element) => {
      printOnScreen(element);
    });
  } catch (error) {
    alert("something wrong happened");
    console.log(error);
  }
};

function printOnScreen(data) {
  let cont = document.querySelector(".mainResult");
  let div = document.createElement("div");
  div.setAttribute("class", "table_header row");

  let div_id = document.createElement("div");
  div_id.setAttribute("class", "col_id");
  //   div_id.style.width = "200px";
  div_id.innerHTML = data.id;

  let div_name = document.createElement("div");
  div_name.setAttribute("class", "col");
  div_name.innerHTML = data.name;

  let div_last = document.createElement("div");
  div_last.setAttribute("class", "col");
  div_last.innerHTML = `₹ ${data.last}`;

  let div_b_s = document.createElement("div");
  div_b_s.setAttribute("class", "col");
  //   div_b_s.style.marginLeft = "70px";
  div_b_s.innerHTML = `₹ ${data.buy} / ₹ ${data.sell}`;

  let div_volume = document.createElement("div");
  div_volume.setAttribute("class", "col");
  //   div_b_s.style.marginLeft = "90px";
  div_volume.innerHTML = data.volume;

  let div_base = document.createElement("div");
  div_base.setAttribute("class", "col");
  div_base.innerHTML = data.base_unit;

  div.append(div_id, div_name, div_last, div_b_s, div_volume, div_base);
  //   div.appendChild(div_id);
  //   div.appendChild(div_name);
  //   div.appendChild(div_last);
  //   div.appendChild(div_b_s);
  //   div.appendChild(div_volume);
  //   div.appendChild(div_base);
  cont.appendChild(div);
}
