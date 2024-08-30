const cardContainer = document.getElementById('card-container');
const baseURL = 'https://fakestoreapi.com/products/';

axios.get(baseURL)
    .then(response=>{
        const data = response.data;
        // elementImg.src = data[0].image;
        data.map((item, index)=>{
            const imgContainer = document.createElement('div');
            const img = document.createElement('img');
            const titles = document.createElement('p');

            
            img.src = item.image;
            titles.textContent = item.title;

            imgContainer.className = 'h-[30vw] w-[20vw] bg-red-500 p-2 rounded-md gap-4 mb-5 hover:scale-105 transition ease-out delay-75';
            img.className = 'h-[80%] w-full rounded-md';
            titles.className = 'text-center text-2xl'

            imgContainer.appendChild(img);
            imgContainer.appendChild(titles)
            cardContainer.appendChild(imgContainer);
        })
        // console.log(data[0]);
        
    })
    .catch(error => {
        console.log("Error : ", error);
        
    })