import './App.css';
import Blog from './components/Blog/Blog';
import Districts from './components/District/Districts';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
     {/* Component */}
     <Blog title="Amar boi1" author="ami1"></Blog>
     <Blog title="Amar boi2" author="ami2"></Blog>
     <Blog title="Amar boi3" author="ami3"></Blog>
     <Posts></Posts>
     <Districts name="Kurigram" speciality="District"></Districts>
     <Districts name="Rangpur" speciality="Division"></Districts>
     <Districts name="Dhaka" speciality="Capital"></Districts>
    </div>
  );
}

export default App;
