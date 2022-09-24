using APIClientes.Data;
using APIClientes.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace APIClientes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ContactoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public ContactoController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Contacto
        [HttpGet]
        public async Task<IEnumerable<Contactos>> GetContactos()
        {
            return await _context.Contacto.ToListAsync();
        }

        //Ingresar datos
        //POST: api/Contacto/
        [HttpPost]
        public async Task<ActionResult<Contactos>> PostContactos(Contactos contacto)
        {
            _context.Contacto.Add(contacto);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetContactos", new { id = contacto.Id }, contacto);
        }

    }
}