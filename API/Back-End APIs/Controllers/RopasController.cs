using APIClientes.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace APIClientes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RopasController : ControllerBase
    {
        public readonly ApplicationDbContext _context;

        public RopasController(ApplicationDbContext context)
        {
            _context = context;
        }

        //GET: api/ProductList
        [HttpGet]
        public async Task<IActionResult> GetRopas()
        {
            return Ok(await _context.Ropa.ToListAsync());
        }

        private bool RopaExists(int id)
        {
            return _context.Ropa.Any(e => e.Id == id);
        }
    }
}
