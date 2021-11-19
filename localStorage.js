const names = document.getElementById("name");
const emails = document.getElementById("email");
const text = document.getElementById("texta");
const submit = document.getElementById("submit");

const userInfo = {
    Name: names,
    Email: emails,
    Message: text,
};

names.addEventListener("input", function(e) {
    e.preventDefault();

    userInfo.Name = names.value;

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
});
