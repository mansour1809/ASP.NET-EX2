using HW1.BL;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HW1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CastsController : ControllerBase
    {
        // GET: api/<CastsController>
        [HttpGet]
        public IEnumerable<Cast> Get()
        {
            return Cast.ReadCast();
        }

        // GET api/<CastsController>/5
        [HttpGet("{id}")]
        public Cast Get(string id)
        {
            return Cast.ReadOneCast(id);
        }

        // POST api/<CastsController>
        [HttpPost]
        public bool Post([FromBody] Cast m)
        {
            try
            {
                Console.WriteLine($"Received date: {m.DateOfBirth}");
                return Cast.InsertCast(m);
            }
            catch (Exception)
            {
                return false;
            }
        }

    }
}
