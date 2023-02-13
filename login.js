
    localStorage.setItem('name', JSON.stringify(null))

    let email2 = document.getElementById("email2")
    let password2 = document.getElementById("password2")

    let infor = JSON.parse(localStorage.getItem("userinfo"))
    console.log(infor);


    function checkpass() {
        if (document.getElementById("password2").type == "password") {
            document.getElementById("password2").type = "text"
            document.getElementById("Passwordbut").innerHTML = `<span class="material-symbols-outlined">
visibility
</span>`
        } else {
            document.getElementById("password2").type = "password"
            document.getElementById("Passwordbut").innerHTML = `<span class="material-symbols-outlined">
visibility_off
</span>`
        }
    }

    function login() {

        if (email2.value == "" || password2.value == "") {
            alert("enter details")
        } else {


            let found = infor.find((current) => current.email == email2.value && current.password == password2.value);



            if (found) {
                console.log(found.name)
                localStorage.setItem('name', JSON.stringify(found.name))


                window.location.href = "dashbord.html"
                alert("Login Successful")
            } else {
                alert("User not found")
            }


        }
        email2.value = ""
        password2.value = ""
    }
    function gotoit() {
        window.location.href = "index.html"
    }

