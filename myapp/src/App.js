import { WeatherProvider } from './components/WeatherContext';
import WeatherPage from './components/WeatherPage';
import { useState } from 'react';
import "./App.css"
function App() {
  const [cities, setCities] = useState(["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elâzığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"])
  const [city, setCity] = useState("Adana")
  return(
  <div className='App'>
    <div className='category-city'>
      <select
      onChange={(e) => setCity(e.target.value)}
      value={city}
      className='select'
      >
        {
          
          cities.map((item, index) =><option key={index} value={item}>{item}</option>)
        }
      </select>
    </div>
    {
      console.log(city)
    }
    <WeatherProvider city={city}>
      <WeatherPage/>
    </WeatherProvider>
    </div>
 )
}

export default App;