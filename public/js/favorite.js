const likes = document.querySelectorAll('.like')
likes?.forEach((like)=>{
    like.addEventListener('click',()=>{
        like.classList.toggle('like-on')
    })
})