namespace EasyCRUD.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Estoque : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Categorias",
                c => new
                    {
                        IdCat = c.Int(nullable: false, identity: true),
                        NomeCat = c.String(),
                    })
                .PrimaryKey(t => t.IdCat);
            
            CreateTable(
                "dbo.Produtoes",
                c => new
                    {
                        IdProd = c.Int(nullable: false, identity: true),
                        NomeProd = c.String(),
                        IdCat = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.IdProd);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Produtoes");
            DropTable("dbo.Categorias");
        }
    }
}
