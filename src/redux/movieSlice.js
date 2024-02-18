import { createSlice } from "@reduxjs/toolkit";



const initialState={
    movieList:[{
        title: "dark",
        img: "https://fr.web.img2.acsta.net/pictures/19/06/11/09/59/0923348.jpg",
        genre: "horreur",
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain",
        rate: "8/10",
        video: "https://www.dailymotion.com/embed/video/x45jlpm?autoplay=1"
    },
    {
        title: "Barbie",
        img: "https://fr.shopping.rakuten.com/photo/2625701665.jpg",
        genre: "comedie",
         description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain",
        rate: "5/10",
        video: "https://www.dailymotion.com/embed/video/x45jlpm?autoplay=1"
    }
    ],
   
}

const originalList= initialState.movieList
export const movieSlice=createSlice({
    name:"movie",
    initialState:{
        ...initialState,
        originalList
    },
    reducers:{
        addMovie:(state,action)=>{
            state.movieList.push(action.payload)
            state.originalList.push(action.payload)
        },
        filterMovie:(state,action)=>{
            state.movieList=state.originalList.filter(e=>e.title.toUpperCase().includes(action.payload.toUpperCase()))
        }
    }   
})

export const {addMovie,filterMovie} = movieSlice.actions
export default movieSlice.reducer