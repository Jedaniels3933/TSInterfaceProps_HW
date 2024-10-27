import UserInfo from './components/User';
import Card from './components/Card';
import './App.css';


function App() {
  const user = {
    name: "Jeremiah Daniels",
    email: "jedaniels@gmail.com",
    age: 45
  };

  return (
    <div>
     
      <Card>
        
        <h1>Hello World </h1>
        <p>this information is being passed by a child component</p>
         <UserInfo {...user} />  
     </Card>
    
    
    </div>
  );
}

export default App;
