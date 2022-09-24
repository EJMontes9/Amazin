using System.ComponentModel.DataAnnotations;

namespace APIClientes.Models
{
    public class Contactos
    {
        [Key] public int Id { get; set; }

        [Required] public string Nombres { get; set; }

        [Required] public string Telefono { get; set; }

        [Required] public string Correo { get; set; }

        [Required] public string Mensaje { get; set; }

    }
}
