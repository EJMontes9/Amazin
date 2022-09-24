using APIClientes.Models;
using Microsoft.EntityFrameworkCore;

namespace APIClientes.Data
{
    public class ApplicationDbContext : DbContext
    {   
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Cliente> Clientes { get; set; }

        public DbSet<Usuarios> Usuario { get; set; }

        public DbSet<Contactos> Contacto { get; set; }

        public DbSet<Ropas> Ropa { get; set; }

    }
}
