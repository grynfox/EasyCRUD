using EasyCRUD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace EasyCRUD.API
{
    public class ReportsController : ApiController
    {
        private BancoContext banco;
        public ReportsController()
        {
            this.banco = new BancoContext();
        }

        [System.Web.Http.HttpGet]
        public List<Categoria> GetCategoria()
        {
            return this.banco.Categoria.ToList()
;
        }
        public IHttpActionResult ApagaCat(int IdCat)
        {
            var apagaCat = banco.Categoria.FirstOrDefault(linha => linha.IdCat == IdCat);
            banco.Categoria.Remove(apagaCat);
            banco.SaveChanges();
            return this.Ok("Deletado");
        }
        [System.Web.Http.HttpGet]
        public List<Produto> GetProdutos()
        {
            return this.banco.Produto.ToList()
;
        }
        [System.Web.Http.HttpDelete]
        public IHttpActionResult ApagaProd(int IdProd)
        {
            var apagaProd = banco.Produto.FirstOrDefault(linha => linha.IdProd == IdProd);
            banco.Produto.Remove(apagaProd);
            banco.SaveChanges();
            return this.Ok("Deletado");
        }

    }
}
