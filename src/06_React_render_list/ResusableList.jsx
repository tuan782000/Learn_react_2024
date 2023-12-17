/* eslint-disable react/prop-types */
import styles from "./ResusableList.module.css";
import PropTypes from "prop-types";
const ResusableList = (props) => {
    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map((item) => (
        <li key={item.id}>
            Name: <b>{item.name}</b>, Calories: <b>{item.calories}</b>
        </li>
    ));

    return (
        <>
            <h3 className={styles.listCategories}>{category}</h3>
            <ul className={styles.listItems}>{listItems}</ul>
        </>
    );
};
ResusableList.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayof(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number,
        })
    ),
};
ResusableList.defaultProps = {
    category: "Category",
    items: [],
};

export default ResusableList;
