import "../../styles/card.css";
const Card = ({ card, showData, cardforecast, loc }) => {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var date = day + "/" + month + "/" + year;

  var url = "";
  var iconUrl = "";
  var icon1 = "";
  var icon2 = "";
  var icon3 = "";
  var icon4 = "";
  var icon5 = "";
  var className = "";

  if (showData) {
    url = "https://openweathermap.org/img/wn/";
    iconUrl = url + card.weather[0].icon + "@2x.png";
    icon1 = url + cardforecast[6].weather[0].icon + "@2x.png";
    icon2 = url + cardforecast[15].weather[0].icon + "@2x.png";
    icon3 = url + cardforecast[24].weather[0].icon + "@2x.png";
    icon4 = url + cardforecast[32].weather[0].icon + "@2x.png";
    icon5 = url + cardforecast[39].weather[0].icon + "@2x.png";
    if (card.weather[0].description === "cielo claro") {
      className = "container-img sun";
    } else if (card.weather[0].main === "Rain") {
      className = "container-img rain";
    } else if (card.weather[0].description === "algo de nubes") {
      className = "container-img fewClouds";
    } else if (card.weather[0].description === "nubes") {
      className = "container-img clouds";
    } else if (card.weather[0].description === "muy nuboso") {
      className = "container-img clouds";
    } else if (card.weather[0].description === "nubes dispersas") {
      className = "container-img fewClouds";
    } else if (card.weather[0].main === "Drizzle") {
      className = "container-img rain";
    } else if (card.weather[0].main === "Thunderstorm") {
      className = "container-img thunderstorm";
    } else if (card.weather[0].main === "Haze") {
      className = "container-img haze";
    } else if (card.weather[0].main === "Snow") {
      className = "container-img snow";
    } else {
      className = "container-img noImg";
    }
    const date1 = cardforecast[9].dt_txt;
    const date2 = cardforecast[17].dt_txt;
    const date3 = cardforecast[25].dt_txt;
    const date4 = cardforecast[33].dt_txt;
    const date5 = cardforecast[39].dt_txt;
    const dias = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    var numberday1 = new Date(date1).getDay();
    var numberday2 = new Date(date2).getDay();
    var numberday3 = new Date(date3).getDay();
    var numberday4 = new Date(date4).getDay();
    var numberday5 = new Date(date5).getDay();
    var nameday1 = dias[numberday1];
    var nameday2 = dias[numberday2];
    var nameday3 = dias[numberday3];
    var nameday4 = dias[numberday4];
    var nameday5 = dias[numberday5];
  }

  return (
    <div>
      {showData === true ? (
        <div className="container-weather-primary">
          <div className="container-weather-today">
            <div className={className}>
              <div className="info-container">
                <div className="location">
                  <h2 className="city-name">
                    {" "}
                    {card.name}, {card.sys.country}{" "}
                  </h2>
                  <div className="date">
                    <p> {date} </p>
                  </div>
                </div>

                <div className="data-container">
                  <div className="icon">
                    <img src={iconUrl} alt="icon" />
                  </div>
                  <div className="data">
                    <div className="temp">
                      <h3> {(card.main.temp - 273.15).toFixed(1)}ºC </h3>
                    </div>
                    <div className="weather-data">
                      {" "}
                      {card.weather[0].description}{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-weather-future">
            <div className="container-day">
              <div className="icon-future">
                <img src={icon1} alt="icon" />
              </div>
              <div className="info-future">
                <p className="data-weather-future"> {cardforecast[9].weather[0].description} </p>
                <p className="week"> {nameday1} </p>
              </div>
            </div>
            <div className="container-day">
              <div className="icon-future">
                <img src={icon2} alt="icon" />
              </div>
              <div className="info-future">
                <p className="data-weather-future"> {cardforecast[17].weather[0].description} </p>
                <p className="week"> {nameday2} </p>
              </div>
            </div>
            <div className="container-day">
              <div className="icon-future">
                <img src={icon3} alt="icon" />
              </div>
              <div className="info-future">
                <p className="data-weather-future"> {cardforecast[25].weather[0].description} </p>
                <p className="week"> {nameday3} </p>
              </div>
            </div>
            <div className="container-day">
              <div className="icon-future">
                <img src={icon4} alt="icon" />
              </div>
              <div className="info-future">
                <p className="data-weather-future"> {cardforecast[33].weather[0].description} </p>
                <p className="week"> {nameday4} </p>
              </div>
            </div>
            <div className="container-day">
              <div className="icon-future">
                <img src={icon5} alt="icon" />
              </div>
              <div className="info-future">
                <p className="data-weather-future"> {cardforecast[39].weather[0].description} </p>
                <p className="week"> {nameday5} </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="no-data-container">
        <h2 className="no-data"> No hay datos</h2>
        </div>
        
      )}
    </div>
  );
};

export default Card;
