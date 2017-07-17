const recipe = [
    {
        id: 1,
        name: 'Koko Alaisa (Rice)',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BKLse0bSoKJwLdfu1TFfa_iwPGSkXZ1IfYqmFIGEG6YR7B4_',
        description: '1 Cup Calrose Rice, 4 Cups Water, 1 Can Coconut Milk, 5 Tablespoons Grated Koko Samoa, Granulated White Sugar',
        summary: "Add rice and water in a sauce pan.  Bring the water to a boil.  After the water reaches a boil reduce the heat to low, cover, and let the rice cook for 20 min. (watch carefully as the water may boil over.)   After 20 min.  Turn off heat, add coconut milk, koko Samoa, and Sugar to taste (You'll probably need a lot of sugar.) then stir and serve hot with butter and bread or just by itself."
    },
    {
        id: 2,
        name: 'Koko Samoa',
        image: 'http://www.kingkoko.com/images/koko.jpg',
        description: '2 cups (500ml) water, 4 tablespoons (24g) grated Koko Samoa, 4 tablespoons (60g) sugar',
        summary: 'Bring your water to the boil, then add the Koko. Turn the heat down and simmer for 10-15 minutes to release the cocoa oils and flavour from the nibs. Turn off the heat, and sweeten with the sugar. Pour or ladle into drinking mugs.'
    }
]

export function getRecipe() {
    return recipe;
}

export function getKind(id) {
    return recipe.find(kind => kind.id == id);
}