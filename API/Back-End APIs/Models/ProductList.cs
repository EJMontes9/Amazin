using System.ComponentModel.DataAnnotations;
using System.Drawing;

namespace APIClientes.Models
{
    public class ProductList
    {
        [Required] public string NombreRopa { get; set; }

        [Required] public string Color { get; set; }

        [Required] public double Precio { get; set; }

        [Required] public string Imagen { get; set; }

    }
}
