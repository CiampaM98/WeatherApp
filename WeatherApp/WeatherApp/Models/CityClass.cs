using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WeatherApp.Models
{
    public class CityClass
    {
        public int CityTempMon { get; set; }
        public int CityTempTues { get; set; }
        public int CityTempWed { get; set; }
        public int CityTempThurs { get; set; }
        public int CityTempFri { get; set; }
        public int CityTempSat { get; set; }
        public int CityTempSun { get; set; }
        public string CityName { get; set; }
    }
}