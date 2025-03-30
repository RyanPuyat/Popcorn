import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { useState } from 'react';
import './index.css';
import App from './App.jsx';

// import StarRating from './components/StarRating';

// const Test = () => {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This Movie is {movieRating} stars</p>
//     </div>
//   );
// };

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* 
    <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating maxRating={5} color="red" size={24} defaultRating={2} />

    <Test /> */}
  </StrictMode>
);
