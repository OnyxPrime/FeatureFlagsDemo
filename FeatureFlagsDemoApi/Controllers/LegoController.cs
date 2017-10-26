
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace FeatureFlagsDemoApi.Controllers
{
    [Route("api/[controller]")]
    public class LegoController : Controller
    {
        public LegoController(){

        }

        [HttpGet("ninjas")]
        public JsonResult GetNinjagoNinjas() => Json(new List<string>{
                "Colt",
                "Zane",
                "Jay",
                "Lloyd",
                "Kai",
                "Nya",
                "Master Wu",
                "Garmadon",
                "Misako",
                "Chen",
                "Morro"
            });

    }
}