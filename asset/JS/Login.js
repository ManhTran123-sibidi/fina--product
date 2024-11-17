document.getElementById('LoginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var usernameLg = document.getElementById('username-lg').value;
    var passwordLg = document.getElementById('password-lg').value;

    fetch('https://671e2ffd1dfc42991981847e.mockapi.io/api/v1/user')
    .then(response => response.json())
    .then(users => {
        var user = users.find(user => user.username === usernameLg && user.password === passwordLg);
        if (user) {
            alert("Login successful.");
            // Xử lý sau khi đăng nhập thành công, ví dụ: chuyển hướng tới trang chủ
        window.location.href = "index.html";
        } else {
            alert("Invalid username or password.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Login failed.");
    });
});
