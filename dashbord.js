


    let thename = JSON.parse(localStorage.getItem("name"))

    console.log(thename);
    if (thename == null) {
        window.location.href = "login.html"
    }

    let inthisplace = document.getElementById("inthisplace")
    let allthepost = document.getElementById("allthepost")
    let headdd = document.getElementById("headdd")



    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    inthisplace.innerHTML = `<div class="inputdivs"> <input class="title" type="text" placeholder="TITLE" id="title">
        <textarea name=""  class="textarea" value="" placeholder="TEXT" id="textarea" cols="30" rows="10">
           
        </textarea></div>
        <div class="buttdiv"><button class="submit" onclick="submit()">submit</button>
        <button class="clear" onclick="clearinput()">clear</button></div>`




   

    let postarray = JSON.parse(localStorage.getItem("postarray"))
    console.log(postarray);
    if (postarray == null) {
        postarray = []
        headdd.innerHTML = `<span class="padding-bottom--15">welcome back<b class="nameit"> ${thename} </b></span>`

        function submit() {



            headdd.innerHTML = `<span class="padding-bottom--15">this are all your blogs</span>`
            if (document.getElementById("title").value == "" || document.getElementById("textarea").value == "") {
                alert("fill input space")
            } else {


                let onepostatatime = {
                    title: document.getElementById("title").value,
                    text: document.getElementById("textarea").value,
                    time: `${days[new Date().getDay()]} ${months[new Date().getMonth()]} ${new Date().getDate()} ${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                    Author: thename,
                    change: false
                }


                postarray.push(onepostatatime)
                console.log(onepostatatime);

                document.getElementById("inthisplace2").innerHTML = ""

                for (let index = 0; index < postarray.length; index++) {
                    const abdullahi = postarray[index];

                    
    
                

                    document.getElementById("inthisplace2").innerHTML += `
                    <button type="button" class="btn modalitt" onclick="modalit(${index})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <div class="divforpost"><h1 class="youandme"> ${abdullahi.title} </h1><p class="thepww">${abdullahi.text} </p>
                <p> Author:${abdullahi.Author}</p>
                    <p> ${abdullahi.time} </div></button>
                        <div class="buttondiv">
                <button class="likebut" id="${index}" onclick='like(${index})' >like</button>  <button class="deletebut" onclick="del(${index})">delete</button> </div>`

                    if (postarray[index].change == false) {
                        document.getElementById(index).style.background = "white"
                        document.getElementById(index).style.color = "black"
                        document.getElementById(index).innerHTML = "like"
                    } else {
                        document.getElementById(index).style.background = "blue"
                        document.getElementById(index).style.color = "white"
                        document.getElementById(index).innerHTML = "unlike"
                    }
                }





                document.getElementById("inthisplace").style.display = "none"
                document.getElementById("inthisplace2").style.display = "block"
                document.getElementById("likedblog").style.display = "none"


            }
            console.log(postarray);

            localStorage.setItem('postarray', JSON.stringify(postarray))

        }

    } 
    else {
   
         view()
         headdd.innerHTML += `<span class="padding-bottom--15">welcome back<b class="nameit"> ${thename} </b></span>`

        function submit() {
            headdd.innerHTML = `<span class="padding-bottom--15">this are all your blogs</span>`
            if (document.getElementById("title").value == "" || document.getElementById("textarea").value == "") {
                alert("fill input space")
            } else {

                let onepostatatime = {
                    title: document.getElementById("title").value,
                    text: document.getElementById("textarea").value,
                    time: `${days[new Date().getDay()]} ${months[new Date().getMonth()]} ${new Date().getDate()} ${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                    Author: thename,
                    change: false
                }

                postarray.push(onepostatatime)


                document.getElementById("inthisplace2").innerHTML = ""

                for (let index = 0; index < postarray.length; index++) {
                    const abdullahi = postarray[index];

                    document.getElementById("inthisplace2").innerHTML += `<button type="button" class="btn modalitt" onclick="modalit(${index})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <div class="divforpost"><h1 class="youandme"> ${abdullahi.title} </h1><p class="thepww">${abdullahi.text} </p>
                <p> Author:${abdullahi.Author}</p>
                    <p> ${abdullahi.time} </div></button>
                        <div class="buttondiv">
                <button class="likebut" id="${index}" onclick='like(${index})' >like</button>  <button class="deletebut" onclick="del(${index})">delete</button> </div>`

                    if (postarray[index].change == false) {
                        document.getElementById(index).style.background = "white"
                        document.getElementById(index).style.color = "black"
                        document.getElementById(index).innerHTML = "like"
                    } else {
                        document.getElementById(index).style.background = "blue"
                        document.getElementById(index).style.color = "white"
                        document.getElementById(index).innerHTML = "unlike"
                    }
                }





                document.getElementById("inthisplace").style.display = "none"
                document.getElementById("inthisplace2").style.display = "block"
                document.getElementById("likedblog").style.display = "none"
            }


            console.log(postarray);

            localStorage.setItem('postarray', JSON.stringify(postarray))

        }
  

    }
         
    function modalit(index) {
            document.getElementById("modalit").innerHTML=`
                        <div class="divforpost"><h1 class="youandme"> ${postarray[index].title} </h1><p class="thepww">${postarray[index].text} </p>
                <p> Author:${postarray[index].Author}</p>
                    <p> ${postarray[index].time} </div>`
        }
       
        function post() {

            headdd.innerHTML = `<span class="padding-bottom--15">Post your blog </span>`

            document.getElementById("inthisplace").style.display = "block"
            document.getElementById("inthisplace2").style.display = "none"
            document.getElementById("likedblog").style.display = "none"

            inthisplace.innerHTML = `<div class="inputdivs"> <input class="title" type="text" placeholder="TITLE" id="title">
<textarea name=""  class="textarea" value="" placeholder="TEXT" id="textarea" cols="30" rows="10">
   
</textarea></div>
<div class="buttdiv"><button class="submit" onclick="submit()">submit</button>
<button class="clear" onclick="clearinput()">clear</button></div>`

        }

        function clearinput() {
            document.getElementById("title").value = ""
            document.getElementById("textarea").value = ""
        }

        function view() {
            
            headdd.innerHTML = `<span class="padding-bottom--15">this are all your blogs</span>`

            document.getElementById("inthisplace2").innerHTML = ""

            for (let index = 0; index < postarray.length; index++) {
                const abdullahi = postarray[index];

                document.getElementById("inthisplace2").innerHTML += `<button type="button" class="btn modalitt" onclick="modalit(${index})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <div class="divforpost"><h1 class="youandme"> ${abdullahi.title} </h1><p class="thepww">${abdullahi.text} </p>
                <p> Author:${abdullahi.Author}</p>
                    <p> ${abdullahi.time} </div></button>
                        <div class="buttondiv">
                <button class="likebut" id="${index}" onclick='like(${index})' >like</button>  <button class="deletebut" onclick="del(${index})">delete</button> </div>`

                if (postarray[index].change == false) {
                    document.getElementById(index).style.background = "white"
                    document.getElementById(index).style.color = "black"
                    document.getElementById(index).innerHTML = "like"
                } else {
                    document.getElementById(index).style.background = "blue"
                    document.getElementById(index).style.color = "white"
                    document.getElementById(index).innerHTML = "unlike"
                }
            }




            document.getElementById("inthisplace").style.display = "none"
            document.getElementById("inthisplace2").style.display = "block"
            document.getElementById("likedblog").style.display = "none"
            console.log(postarray);

            localStorage.setItem('postarray', JSON.stringify(postarray))

        }

        function liked() {

            headdd.innerHTML = `<span class="padding-bottom--15">this are all your liked blogs</span>`
            document.getElementById("likedblog").innerHTML = ""

            for (let index = 0; index < postarray.length; index++) {
                const element = postarray[index];

                if (postarray[index].change == false) {

                    continue

                } else {
                    document.getElementById("likedblog").innerHTML += `<button type="button" class="btn modalitt" onclick="modalit(${index})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <div class="divforpost"><h1 class="youandme"> ${element.title} </h1><p class="thepww">${element.text} </p>
                <p> Author:${element.Author}</p>
                    <p> ${element.time} </div><button id="${index}" class="unlike" onclick="unlike(${index})">unlike</button> 
                        <div class="buttondiv">
               `

                }


            }

            document.getElementById("inthisplace").style.display = "none"
            document.getElementById("inthisplace2").style.display = "none"
            document.getElementById("likedblog").style.display = "block"
            console.log(postarray);

            localStorage.setItem('postarray', JSON.stringify(postarray))

        }

        function like(i) {

            if (postarray[i].change == true) {
                postarray[i].change = false
                document.getElementById(i).style.background = "white"
                document.getElementById(i).style.color = "black"
                document.getElementById(i).innerHTML = "like"
            } else {
                postarray[i].change = true
                document.getElementById(i).style.background = "blue"
                document.getElementById(i).style.color = "white"
                document.getElementById(i).innerHTML = "unlike"
            }

            console.log(postarray);

            localStorage.setItem('postarray', JSON.stringify(postarray))
        }

        function unlike(i) {
            if (postarray[i].change == true) {
                postarray[i].change = false
            } else {
                postarray[i].change = true
            }
            document.getElementById("likedblog").innerHTML = ""

            for (let index = 0; index < postarray.length; index++) {
                const element = postarray[index];

                if (postarray[index].change == false) {

                    continue

                } else {
                    document.getElementById("likedblog").innerHTML +=  `<button type="button" class="btn modalitt" onclick="modalit(${index})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <div class="divforpost"><h1 class="youandme"> ${element.title} </h1><p class="thepww">${element.text} </p>
                <p> Author:${element.Author}</p>
                    <p> ${element.time} </div></button>
                        <div class="buttondiv"> <button id="${index}" class="unlike" onclick="unlike(${index})">unlike</button>  </div> </div>`
                

                }


            }




            document.getElementById("inthisplace").style.display = "none";
            document.getElementById("inthisplace2").style.display = "none";
            document.getElementById("likedblog").style.display = "block";
            console.log(postarray);

            localStorage.setItem('postarray', JSON.stringify(postarray))
        }

        function del(i) {

            postarray.splice(i, 1)


            document.getElementById("inthisplace2").innerHTML = ""

            for (let index = 0; index < postarray.length; index++) {
                const abdullahi = postarray[index];

                document.getElementById("inthisplace2").innerHTML += `<button type="button" class="btn modalitt" onclick="modalit(${index})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <div class="divforpost"><h1 class="youandme"> ${abdullahi.title} </h1><p class="thepww">${abdullahi.text} </p>
                <p> Author:${abdullahi.Author}</p>
                    <p> ${abdullahi.time} </div></button>
                        <div class="buttondiv">
                <button class="likebut" id="${index}" onclick='like(${index})' >like</button>  <button class="deletebut" onclick="del(${index})">delete</button> </div>`

                if (postarray[index].change == false) {
                    document.getElementById(index).style.background = "white"
                    document.getElementById(index).style.color = "black"
                    document.getElementById(index).innerHTML = "like"
                } else {
                    document.getElementById(index).style.background = "blue"
                    document.getElementById(index).style.color = "white"
                    document.getElementById(index).innerHTML = "unlike"
                }
            }
            console.log(postarray);

            localStorage.setItem('postarray', JSON.stringify(postarray))

        }



    function logout() {
        window.location.href = "login.html"
        // let thename = JSON.parse(localStorage.getItem("name"))

        // console.log(thename);
        // if (thename == null) {
        //     window.location.href = "login.html"
        // }
        let out = null
        localStorage.setItem('name', JSON.stringify(out))
    }

