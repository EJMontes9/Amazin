using System.ComponentModel.DataAnnotations;

namespace APIClientes.Models
{
    public class DatosClientes
    {
        [Required] public string Nombres { get; set; }
        [Required] public string Apellidos { get; set; }
        [Required] public string Email { get; set; }
        [Required] public string Contrasena { get; set; }

    }

}
