let elements = []

function Ingredient({name, amount, index}){
    return (
        <div class="flex justify-between w-full">
            {name? <input class="bg-gray-800" type="text" value={name} onChange={value => elements[index].name = value}/> : <input class="bg-gray-800" type="text" onChange={value => elements[index].name = value}/>}
            <input class="bg-gray-800" type="number" value={amount} onChange={value => elements[index].amount = value}></input>
            <button class="bg-red-500" onClick={() => elements.splice(index)}>x</button>
        </div>
    )
}

export default function IngredientsSection() {
    return (
        <div>
            <button class="bg-red-500" onClick={() => elements.push({name: null, amount: 1})}>Add ingredient</button>
            {
                elements.map((value, index) => <Ingredient name={value.name} amount={value.amount} index={index}></Ingredient>)
            }
        </div>
    )
}