import { useState } from 'react';

export default function StatusChange () {

   const [notes, setNote] =useState("");
   const [recipeStatus, setStatus] = useState(false);

   const handleChange = (event) => {
      setNote(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      setStatus(true);
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         <p>My Recipe Notes aren't here!</p>

         <p>I {recipeStatus ? "have" : "have not"} tried this recipe!</p>
      </div>
   );
}