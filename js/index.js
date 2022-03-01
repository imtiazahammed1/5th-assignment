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
    else if (searchText.toLowerCase("apple") == searchText.toLowerCase("apple") || searchText.toLowerCase("iphone") == searchText.toLowerCase("iphone") || searchText.toLowerCase("samsung") == searchText.toLowerCase("samsung") || searchText.toLowerCase("oppo") == searchText.toLowerCase("oppo") || searchText.toLowerCase("huawei") == searchText.toLowerCase("huawei")) {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
            .then(response => response.json())
            .then(data => displayPhones(data.data))

        search.value = "";
        error.innerHTML = "";
    }
    else if (searchText == []) {
        error.innerHTML = "*oops! no match found with this phone name.";
        search.value = "";
    }
}

const displayPhones = (phones) => {
    console.log(phones);
    const phone = phones.slice(0, 20);
    console.log(phone);

}