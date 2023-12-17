/* eslint-disable react/jsx-key */
const List = () => {
    const fruits = ["apple", "banana", "orange", "coconut", "pineapple"];

    // Nếu muốn sắp xếp theo thứ tự chữ cái dùng hàm sort
    // fruits.sort()

    const listItems = fruits.map((fruit) => <li>{fruit}</li>);

    const fruitsArrayObject = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "banana", calories: 105 },
        { id: 3, name: "orange", calories: 45 },
        { id: 4, name: "coconut", calories: 159 },
        { id: 5, name: "pineapple", calories: 35 },
    ];

    // Một số các thuật toán sắp xếp

    // fruitsArrayObject.sort((a, b) => a.name.localeCompare(b.name)) // Alphabetical
    // fruitsArrayObject.sort((a,b) => b.name.localeCompare(a.name)) // Reverse alphabetical
    // fruitsArrayObject.sort((a,b) => (a.calories - b.calories)) // Numberic
    // fruitsArrayObject.sort((a,b) => (b.calories - a.calories)) // Reverse Numberic

    // filter()
    const lowCalFruits = fruitsArrayObject.filter(fruit => fruit.calories < 100)
    const highCalFruits = fruitsArrayObject.filter(fruit => fruit.calories >= 100)

    // Mỗi child đều phải có key
    const listItemsArrayObject = fruitsArrayObject.map((fruit) => (
        <li key={fruit.id}>
            {fruit.name}: &nbsp; <b>{fruit.calories}</b>
        </li>
    ));

    const listItemFilter = lowCalFruits.map((lowCalFruit) => (
        <li key={lowCalFruit.id}>
            {lowCalFruit.name}&nbsp; <b>{lowCalFruit.calories}</b>
        </li>
    ))

    const listItemFilterHigh = highCalFruits.map((highCalFruit) => (
        <li key={highCalFruit.id}>
            {highCalFruit.name}&nbsp; <b>{highCalFruit.calories}</b>
        </li>
    ))

    return (
        <>
            <h1>List of array</h1>
            <p>Unordered list</p>
            <ul>{listItems}</ul>

            <p>Ordered List</p>
            <ol>{listItems}</ol>

            <p>Array with Object</p>
            <ul>{listItemsArrayObject}</ul>

            <p>Filter Array Object has calories under 100</p>
            <ul>
                {listItemFilter}
            </ul>
            
            <p>Filter Array Object has calories over 100</p>
            <ul>
                {listItemFilterHigh}
            </ul>
        </>
    );
};

export default List;
