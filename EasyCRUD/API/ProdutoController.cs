using EasyCRUD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace EasyCRUD.API
{
    public class ProdutoController : ApiController
    {
        private BancoContext banco;
        public ProdutoController()
        {
            this.banco = new BancoContext();
        }

        public void CadastraProduto([FromBody] Produto value)
        {
            Produto prod = new Produto();
            prod = value;
            banco.Produto.Add(prod);
            banco.SaveChanges();
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
            return this.Ok();
        }

    }
}
