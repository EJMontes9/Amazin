﻿using System.ComponentModel.DataAnnotations;

namespace APIClientes.Models
{
    public class Usuarios
    {
        [Key] public int Id { get; set; }
        [Required] public string Email { get; set; }        
        [Required] public string Password { get; set; }

    }
}
