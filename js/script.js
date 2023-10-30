// -------------------typed java script---------------

const typed = new Typed('.multiple-text',{
    strings:["Full stack developer","PHP with Laravel","Development."],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});
// ------------------- my skil java script--------------------

var  tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

 function opentab (tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};
// ------------------------goole shet------------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbx9KNQq31WxUgSPlyH-x765I0zLXIKhz8C4zJIDfOhUzKUzYoqoYRSYKPigNVF-7VhgoA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Thank you for your message"
        setTimeout(function(){
          msg.innerHTML= ""
        },5000)
        form.reset()

      })
      .catch(error => console.error('Error!', error.message))
})




// ---------------------swit alert---------------------


// swal({
   
//         title: "Good job!",
//         text: "Your message send successfully in stor at data.save.text page",
//         icon: "success",
// });




