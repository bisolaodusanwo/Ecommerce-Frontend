import './App.css'; // improting App.css into App.tsx    
import Footer from './FooterComponent'; //improting Footer into App.tsx
import Goods from './GoodsComponent';
import GoodsContent from './GoodsConent';
import Header from './HeaderComponent'; //improting Header into App.tsx

//A templatefor the app where call every Component
const App = () => {

  return (
    //The fragment that has all the component
    //The components are bellow, Typescript no allow me comment for the front...E mabinu
    <>
      <Header /> 
      <Goods />
      <GoodsContent />
      <Footer />
    </>
  )

}

//It export the default export and allows us to use it anywhere we  call it
export default App;
