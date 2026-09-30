function CarteRecette({titre, temps, ingredients}) {
    return ( 
    <div style={{border: '1px solid gray', padding: '10px', borderRadius: '10px'}}>
        <h2>Recette: {titre}</h2>
        <p>Temps : {temps}</p>
        <p>Ingrédients: {ingredients} ...</p>
    </div>
    
)}

export default CarteRecette