function loginUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Multiple predefined users
    const users = [
        { username: "ramya", password: "1234" },
        { username: "admin", password: "5678" },
        { username: "user1", password: "abcd" }
    ];

    // Check if any user matches
    let found = users.find(u => u.username === username && u.password === password);

    if (found) {
        window.location.href = "homepage.html";
    } else {
        alert("Incorrect username or password!");
    }
}
