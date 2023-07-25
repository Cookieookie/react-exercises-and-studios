export default function BookList() {
   let pageTitle = "Books I Read This Month";
   let book1 = "google.com";
   let book2 = "";
   let book3 = "";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={"https://upload.wikimedia.org/wikipedia/en/1/10/The_Cat_in_the_Hat.png"} alt="The Cat in The Hat" />
         <img src={"https://www.marxistbooks.com/cdn/shop/products/ManifestoforMBooks_e47fb769-8d30-45c9-8aae-123b8c305efa_large.png?v=1652363817"} alt="The Communist Manifesto" />
         <img src={"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554006152l/6._SX318_.jpg"} alt="Harry Potter and the Goblet of Fire" />
      </div>      
   );
}