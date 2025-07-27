import { createSlice } from '@reduxjs/toolkit';
import img1 from '../assets/Ikigai.jpg';
import img2 from '../assets/Atomichabits.jpg';
import img3 from '../assets/Deepwork.jpg';
import img4 from '../assets/money.jpg';
import img5 from '../assets/monk.jpg';
import img6 from '../assets/alhemist.jpg';
const initialState = {
  books: {
    'atomic habits': {
      img: img2,
      title: 'Atomic Habits',
      author: 'James Clear',
      description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones.',
      price:980
    },
    'ikigai': {
      img:img1,
      title: 'Ikigai',
      author: 'Francesc Miralles',
      description: 'The Japanese Secret to a Long and Happy Life.',
      price: 480
    },
    'the alchemist': {
    img: img6,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    description: 'A journey of self-discovery and following your dreams.',
    price: 430
  },
    'deep work': {
    img: img3,
    title: 'Deep Work',
    author: 'Cal Newport',
    description: 'Rules for Focused Success in a Distracted World.',
    price: 650
  },
  'the psychology of money': {
    img: img4,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    description: 'Timeless lessons on wealth, greed, and happiness.',
    price: 720
  },
  'think like a monk': {
    img: img5,
    title: 'Think Like a Monk',
    author: 'Jay Shetty',
    description: 'Train your mind for peace and purpose every day.',
    price: 560
  },
  
},
  searchedBook: null,
  cart:[],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    searchBook: (state, action) => {
      const bookname = action.payload.toLowerCase();
      state.searchedBook = state.books[bookname] || null;
    },
     addToCart: (state, action) => {
      state.cart.push(action.payload);
  }
  }
});

export const { searchBook,addToCart } = bookSlice.actions;
export default bookSlice.reducer;
