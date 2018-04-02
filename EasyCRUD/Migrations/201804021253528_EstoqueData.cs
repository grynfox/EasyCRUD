namespace EasyCRUD.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class EstoqueData : DbMigration
    {
        public override void Up()
        {
            CreateIndex("dbo.Produtoes", "IdCat");
            AddForeignKey("dbo.Produtoes", "IdCat", "dbo.Categorias", "IdCat", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Produtoes", "IdCat", "dbo.Categorias");
            DropIndex("dbo.Produtoes", new[] { "IdCat" });
        }
    }
}
