using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WeatherApp.Models;

namespace WeatherApp.Controllers
{
    public class CityController : ApiController
    {
        [EnableCors("*", "*", "*")]
        public List<CityClass> GetCity() //adding the types of elements coming from my Models
        {
            List<CityClass> cc = new List<CityClass>
            {
                new CityClass{CityName="Niagara Falls", CityTempMon=4, CityTempTues=1, CityTempWed=1, CityTempThurs=-2, CityTempFri=0, CityTempSat=1, CityTempSun=5},
                new CityClass{CityName="Toronto", CityTempMon=6, CityTempTues=7, CityTempWed=5, CityTempThurs=8, CityTempFri=7, CityTempSat=7, CityTempSun=8},
                new CityClass{CityName="Ottawa", CityTempMon=7, CityTempTues=6, CityTempWed=6, CityTempThurs=5, CityTempFri=6, CityTempSat=5, CityTempSun=7},
                new CityClass{CityName="Cairo", CityTempMon=11, CityTempTues=12, CityTempWed=10, CityTempThurs=12, CityTempFri=11, CityTempSat=1, CityTempSun=12},
                new CityClass{CityName="New Delhi", CityTempMon=18, CityTempTues=17, CityTempWed=15, CityTempThurs=17, CityTempFri=19, CityTempSat=21, CityTempSun=20},
                new CityClass{CityName="Tokyo", CityTempMon=5, CityTempTues=6, CityTempWed=5, CityTempThurs=3, CityTempFri=6, CityTempSat=7, CityTempSun=10},
                new CityClass{CityName="Seoul", CityTempMon=1, CityTempTues=2, CityTempWed=1, CityTempThurs=-1, CityTempFri=-3, CityTempSat=0, CityTempSun=-1},
                new CityClass{CityName="London", CityTempMon=2, CityTempTues=-2, CityTempWed=-4, CityTempThurs=-6, CityTempFri=-10, CityTempSat=-11, CityTempSun=-8},
            };
            return cc;
        }
    }
}
