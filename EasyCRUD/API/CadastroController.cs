using EasyCRUD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace EasyCRUD.API
{
    public class CadastroController : ApiController
    {

        private BancoContext banco;
        public CadastroController()
        {
            this.banco = new BancoContext();
        }

        [System.Web.Http.HttpPost]
        public void CadastraCategoria([FromBody] Categoria value)
        {
            Categoria cat = new Categoria();
            cat = value;
            banco.Categoria.Add(cat);
            banco.SaveChanges();
        }
        [System.Web.Http.HttpPost]
        public void CadastraProduto([FromBody] Produto value)
        {
            Produto prod = new Produto();
            prod = value;
            banco.Produto.Add(prod);
            banco.SaveChanges();
        }
    }
}
