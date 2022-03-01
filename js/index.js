const loadData = () => {
    const search = document.getElementById("search-text");
    const searchText = search.value;
    if (searchText == "") {
        error.innerHTML = "*search can't be empty. Please write any text with phone name.";
    }
    else if (searchText == 0) {
        error.innerHTML = "*zero(0) can't be a phone name. Please write any text with phone name.";
        search.value = "";
    }
    else if (searchText < 0 || searchText > 0) {
        error.innerHTML = "*phone name can't be a number. Please write any text with phone name.";
        search.value = "";
    }
    else if (isNaN(searchText)) {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
            .then(response => response.json())
            .then(data => errorHandle(data))

        search.value = "";
        error.innerHTML = "";

    }
}
const errorHandle = info => {
    if (info.status == true) {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${info}`)
            .then(response => response.json())
            .then(data => displayPhones(info.data))
    }
    else if (info.status == false) {
        error.innerHTML = "*oops! no match found with this phone name.";
    }
}

const displayPhones = (phones) => {
    console.log(phones);
    const phone = phones.slice(0, 20);
    console.log(phone);

}