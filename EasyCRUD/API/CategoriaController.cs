using EasyCRUD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace EasyCRUD.API
{
    public class CategoriaController : ApiController
    {

        private BancoContext banco;
        public CategoriaController()
        {
            this.banco = new BancoContext();
        }

        public void CadastraCategoria([FromBody] Categoria value)
        {
            Categoria cat = new Categoria();
            cat = value;
            banco.Categoria.Add(cat);
            banco.SaveChanges();
        }


        [System.Web.Http.HttpGet]
        public List<Categoria> GetCategoria()
        {
            return this.banco.Categoria.ToList();
        }
        public IHttpActionResult ApagaCat(int IdCat)
        {
            var apagaCat = banco.Categoria.FirstOrDefault(linha => linha.IdCat == IdCat);
            banco.Categoria.Remove(apagaCat);
            banco.SaveChanges();
            return this.Ok("Deletado");
        }
    }
}
