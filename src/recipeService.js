const recipe = [
    {
        id: 1,
        name: 'Koko Alaisa (Rice)',
        image: 'https://i1.wp.com/www.desifiesta.com/wp-content/uploads/2014/09/westernsamoancuisine1-678x1024.jpg'
    },
    {
        id: 2,
        name: 'Koko Samoa',
        image: 'http://www.kingkoko.com/images/koko.jpg'
    }
]

export function getRecipe() {
    return recipe;
}

export function getKind(id) {
    return recipe.find(kind => kind.id == id);
}