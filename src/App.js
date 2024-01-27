import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type) => {
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null);
        }, 2000);
   }

   //to toggle

  // const toggleMode = ()=>{
  //   if(mode===`light`){
  //   setMode(`dark`);
  //   document.body.style.backgroundColor="#042743";
  //   showAlert(`Dark mode is enabled`,"sucess");
  //   document.title = 'Textutils - Darkmode';
    // setInterval(()=>{
    //  document.title = 'Textutils is Amazing mode';
    // },2000);
    // setInterval(()=>{
    //   document.title = 'Install Textutils';
    //  },1500);
//     }
//   else{
//     setMode(`light`);
//     document.body.style.backgroundColor="white";
//     showAlert(`Light mode is enabled`,"sucess");
//     document.title = 'Textutils - Lightmode';

//   }
// };

//to toggle yt
const toggleMode = () => {
  if (mode === `light`) {
    setMode(`dark`);
    document.body.style.backgroundColor = "#020334";
    showAlert(`Dark mode has been enabled`, "success");
    document.title = "TextUtils - Dark Mode";
  } else {
    setMode(`light`);
    document.body.style.backgroundColor = "white";
    showAlert(`Light mode has been enabled`, "success");
    document.title = "TextUtils - Light Mode";
  }
};

//   return (
//     <>
//     <BrowserRouter>
//     <Navbar title ="MY-APP" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
//     <Alert alert = {alert} />
//     <div className="container my-3" mode ={mode}>
//         <Routes>
//           <Route path="/about">
//             element={<About />}
//           </Route>
//           </Routes>
//           <Routes>
//           <Route path="/" element = {
//          <TextForm  showAlert={showAlert} heading ="Enter a text to analyze"  mode={mode}/>
//           }
//           />
//           </Routes>
//     </div>
//     </BrowserRouter>
//     </>
//   );
// }

// export default App;



  return (
    <>
      <BrowserRouter>
        <Navbar
          title="MY-APP"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;