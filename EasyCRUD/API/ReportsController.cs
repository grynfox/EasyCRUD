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

        public IEnumerable<Produto> GetProdCat(int IdCat)
        {
            var tmp = this.banco.Produto.Where(linha => linha.IdCat == IdCat).ToList();

            return tmp;
        }
    }
       
}
