using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EasyCRUD.Models
{
    public class Produto
    {
        [Key]
        public int IdProd { get; set; }
        public string NomeProd { get; set; }

        public virtual int IdCat { get; set; }
    }
}