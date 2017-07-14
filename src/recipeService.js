const recipe = [
    {
        id: 1,
        name: 'Koko Alaisa (Rice)',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BKLse0bSoKJwLdfu1TFfa_iwPGSkXZ1IfYqmFIGEG6YR7B4_',
        description: '1 Cup Calrose Rice, 4 Cups Water, 1 Can Coconut Milk, 5 Tablespoons Grated Koko Samoa, Granulated White Sugar'
    },
    {
        id: 2,
        name: 'Koko Samoa',
        image: 'http://www.kingkoko.com/images/koko.jpg',
        description: '2 cups (500ml) water, 4 tablespoons (24g) Koko Samoa, grated, 4 tablespoons (60g) sugar'
    }
]

export function getRecipe() {
    return recipe;
}

export function getKind(id) {
    return recipe.find(kind => kind.id == id);
}