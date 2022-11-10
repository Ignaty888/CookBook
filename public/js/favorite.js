const likes = document.querySelectorAll('.like')
likes?.forEach((like)=>{
    like.addEventListener('click',async(event)=>{
        if (!like.classList.contains('like-on'))
        {
            const response = await fetch (`/dishes/${event.target.id}`,{
            method:"post",
            headers: {'Content-Type':"application/json"},
            body: JSON.stringify({key: event.target.id}) 
        })
        const data = await response.json()
        if(data.message==='success'){
            like.classList.toggle('like-on')

        }
        }else{
            const response = await fetch (`/dishes/${event.target.id}`,{
            method:"delete"
            })
            const data = await response.json()
            if(data.message==='dislike'){
                like.classList.toggle('like-on')
            }
        } 
     

    })
})