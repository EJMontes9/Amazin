using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using APIClientes.Data;
using APIClientes.Models;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json;

namespace APIClientes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;
        public UsuarioController(ApplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("Login")]
        public async Task<ActionResult> PostCliente(DatosUsuarioConectar user)
        {
            Console.WriteLine(user.Email);
            Console.WriteLine(user.Password);
            
            var userTemp = await _context.Usuario.FirstOrDefaultAsync //primero busca el usuario
                (x => x.Email.ToLower().Equals(user.Email)); //si no lo encuentra devuelve null
            if (userTemp == null)
            { //si no encuentra el usuario
                return BadRequest("UserNotFound"); //retorna un 400
            }
            else if (userTemp.Password.Equals(user.Password))
            {
                //return Ok("UserFound");
                return Ok(JsonConvert.SerializeObject(CrearToken(userTemp))); //devuelve el token
            }
            else
            {
                return BadRequest("keyError"); //clave incorrecta
            }
        }

        private string CrearToken(Usuarios user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = System.DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler(); //esto es para crear el token
            var token = tokenHandler.CreateToken(tokenDescriptor); //esta linea crea el token

            return tokenHandler.WriteToken(token);
        }
    }
}