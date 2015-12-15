using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace SercureWeb.API.Controllers
{
    [RoutePrefix("api/Test")]
    public class TestController : ApiController
    {
        [Authorize]
        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok("You have been authorized!!");
        }
    }
}