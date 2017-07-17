import React from 'react';
import {getRecipe, getKind} from './recipeService';
import {Route, Link} from 'react-router-dom';
// import './Recipe.css';

export function Kind(props) {
    const kind = getKind(props.match.params.recipe_id);

    const array = kind.description.split(", ");
    const description = array.map((ingredient, i) => (
        <p className="ingredients" key={i}>{ingredient}</p>
    ))
    

    console.log(props)
    return (
        <div className='recipe_list'>
            
            <img className="pic_box" src={kind.image} />
            <div className="box">
            <h1 className="name_recipe">{kind.name}</h1>
           {description}
           
            <Link to='/recipes'><button className="button_box">Back</button></Link>
            </div>
            </div>
            

    )
}

function RecipeBook(props) {
    const kinds = getRecipe().map((kind, i) => (
        <div className="recipe_links" key={i}>
            <Link to={`/recipes/${kind.id}`}>
                {kind.name}
                
                </Link>
                </div>
    ))

    return (
        <div>
        {kinds}
        </div>
    )
}

export default function Recipe(props) {
    console.log(props.match.isExact ? 'Is exact' : 'is not exact');

    return (
        <div className="recipe_page">
            <div className="motherbox_recipe">
            <h1 className="recipe_header">Recipes</h1>
            <RecipeBook />
            </div>
            </div>
    )
}
