using System.ComponentModel.DataAnnotations;

namespace APIClientes.Models
{
    public class Cliente
    {
        [Key] public int Id { get; set; }

        [Required] public string Nombres { get; set; }
        
        [Required] public string Apellidos { get; set; }
        
        [Required] public string Email { get; set; }

        [Required] public string Contrasena { get; set; }

    }

}
