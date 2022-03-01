const main = document.getElementById("main");

// Load the Data from api
const loadData = () => {
    const search = document.getElementById("search-text");
    const error = document.getElementById("error");
    const searchText = search.value;
    if (searchText == "") {
        error.innerHTML = "*search can't be empty. Please write any text with phone name.";
        main.innerHTML = "";
    }
    else if (searchText == 0) {
        error.innerHTML = "*zero(0) can't be a phone name. Please write any text with phone name.";
        search.value = "";
        main.innerHTML = "";
    }
    else if (searchText < 0 || searchText > 0) {
        error.innerHTML = "*phone name can't be a number. Please write any text with phone name.";
        search.value = "";
        main.innerHTML = "";
    }
    else if (isNaN(searchText)) {
        main.innerHTML = "";
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
            .then(response => response.json())
            .then(data => errorHandle(data))

        search.value = "";
        error.innerHTML = "";

    }
}
// Error Handling for unknown search text
const errorHandle = info => {
    if (info.status == true) {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${info}`)
            .then(response => response.json())
            .then(data => displayPhones(info.data))
    }
    else if (info.status == false) {
        error.innerHTML = "*oops! no match found with this phone name.";
        main.innerHTML = "";
    }
}
// Dispaly Phones in coloumn
const displayPhones = (mobiles) => {
    const phones = mobiles.slice(0, 20);
    for (const phone of phones) {
        console.log(phone);
        const div = document.createElement("div");
        div.classList.add("col-lg-4");
        div.classList.add("col-sm-6");
        div.classList.add("col-xs-12");
        div.classList.add("col-md-4");
        div.classList.add("my-3");
        div.innerHTML = `
        <div style= "margin-left: 70px; margin-bottom: 30px">
            <div class="card" style="width: 16rem; border: 5px solid gray; border-radius: 15px">
                    <img src="${phone.image}" class="card-img-top mt-3 px-3" alt=" ">
                <div class="card-body">
                    <h5 class="card-title">${phone.brand}</h5>
                    <p class="card-text">${phone.phone_name}</p>
                    <button onclick="displayDetails('${phone.slug}')" class="btn btn-primary rounded-pill">See Details</button>
                </div>
            </div>
        </div>
            `
        main.appendChild(div);


    }

}