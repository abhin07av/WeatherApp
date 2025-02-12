import './App.css';
import Input from './components/Input';
import Card from './components/card';
import Button from './components/Button';
import { useWeather } from './context/Weathercontext';


function App() {
  const weather=useWeather();
 
  console.log(weather);
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input/>
      <Button onClick={weather.fetchdata} name="Search"/>
      <Card/>
      <Button onClick={()=>weather.setdata(null)} name="Refresh"/>
    </div>
  );
}
 
export default App;
