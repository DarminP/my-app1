//code used from Abdulghafour Mohammad lectures in course Fullstact Developer at University West!
import React from 'react';
import axios from 'axios';
class Wheather extends React.Component
{
    state={
        temperature:"",
        city:"",
        country:"",
        humidity:"",
        description:"",

    }
    getWheather=(e)=>
    {
        e.preventDefault();
        const city=e.target.elements.city.value
        const country=e.target.elements.country.value
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=61b971d7b3b7aa20fa4faa8f4624d632`).then(res=>{
            this.setState({
                temperature:res.data.main.temp,
                city:res.data.name,
                country:res.data.sys.country,
                humidity:res.data.main.humidity,
                description:res.data.weather[0].description

            })
        })
    }
    render()
    {
        return(
            <div>
                <h1 className="min-header">Wheather</h1>
                <form onSubmit={this.getWheather}>
                    <input type="text" name="city" placeholder="city"/>
                    <input type="text" name="country" placeholder="country"/>
                    <button type="submit">Get Wheather</button>
                </form>
                <div className="min-info">
                    <p>{this.state.temperature}</p>
                    <p>{this.state.city}</p>
                    <p>{this.state.country}</p>
                    <p>{this.state.humidity}</p>
                    <p>{this.state.description}</p>
                </div>
               
            </div>
        )
    }
}
export default Wheather;