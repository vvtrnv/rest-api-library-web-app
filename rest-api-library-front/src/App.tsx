import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Header } from './component/Header'
import {AuthorPage} from "./component/author/AuthorPage";
import {BookPage} from "./component/book/BookPage";
import {PublisherPage} from "./component/publisher/PublisherPage";
import {ReaderPage} from "./component/reader/ReaderPage";
import {RubricPage} from "./component/rubric/RubricPage";
import {StockPage} from "./component/stock/StockPage";

export const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/author" element={<AuthorPage/>} />
          <Route path="/book" element={<BookPage/>} />
          <Route path="/publisher" element={<PublisherPage/>} />
          <Route path="/reader" element={<ReaderPage/>} />
          <Route path="/rubric" element={<RubricPage/>} />
          <Route path="/stock" element={<StockPage/>} />

        </Routes>
      </BrowserRouter>
  )
}



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
