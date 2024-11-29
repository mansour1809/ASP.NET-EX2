using HW1.BL;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HW1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        // GET: api/<MoviesController>
        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            return Movie.ReadMovie();
        }

        // GET api/<MoviesController>/5
        [HttpGet("{id}")]
        public Movie Get(int id)
        {
            return Movie.ReadOneMovie(id);
        } 
        [HttpGet("Rating/{rating}")]
        public List<Movie> GetByRating(double rating)
        {
            return Movie.ReadByRating(rating);
        } 
        [HttpGet("Duration")]
        public List<Movie> GetByDuration(int duration)
        {
            return Movie.ReadByDuratiokn(duration);
        }

        // POST api/<MoviesController>
        [HttpPost]
        public bool Post([FromBody] Movie m)
        {
            try
            {
                return Movie.InsertMovie(m);
            }
            catch (Exception)
            {
                return false;
            }

        }

    }
}
