import React from 'react';
import {getRecipe, getKind} from './recipeService';
import {Route, Link} from 'react-router-dom';
// import './Recipe.css';

export function Kind(props) {
    const kind = getKind(props.match.params.recipe_id);
    console.log(props)
    return (
        <div>
            <img src={kind.image} />
            <h1>{kind.name}</h1>
            <p>{kind.description}</p>
            <Link to='/recipe'>Back</Link>
            </div>

    )
}

function RecipeBook(props) {
    const kinds = getRecipe().map((kind, i) => (
        <div key={i}>
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
        <div>
            <h1>Recipes</h1>
            <RecipeBook />
            </div>
    )
}