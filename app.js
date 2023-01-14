const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// click event for the toggleBtn
toggleBtn.addEventListener("click", function(){
    // console.log(sidebar.classList)
    if(sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar')
    }
    else{
        sidebar.classList.add('show-sidebar')
    }
});
// closebtn is to make sure that the show-sidebar isnt present when its clicked
closeBtn.addEventListener('click', function(){
    console.log(sidebar.classList)
    sidebar.classList.remove('show-sidebar')
})

// alternative method for both
// toggleBtn.addEventListener('click',()=>{
//     sidebar.classList.toggle('show-sidebar')
// })