using System.ComponentModel.DataAnnotations;
using System.Drawing;

namespace APIClientes.Models
{
    public class Ropas
    {
        [Key] public int Id { get; set; }

        [Required] public string NombreRopa { get; set; }

        [Required] public string Color { get; set; }

        [Required] public double Precio { get; set; }

        [Required] public string Descripcion { get; set; }

        [Required] public string Detalles { get; set; }

        [Required] public int Cantidad { get; set; }

        [Required] public string Imagen { get; set; }
    }
}
