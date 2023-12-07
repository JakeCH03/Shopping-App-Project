import { useEffect } from "react";
import getCategories from "../../../Utils/getCategories";
import sortByCategory from "../../../Utils/sortByCategory";
import "./GetCategories.css"

const GetCategories = ({ setShopItems, category, setCategory }) => {
    useEffect(() => {
        getCategories().then(res => {
            setCategory(res.data.categories)
        })
    }, [])

    const handleCategorySort = (category) => {
        sortByCategory(category)
            .then(res => {
                // console.log(res, "res")
                setShopItems(res.data.items)
            })
    }
    return (
        <div className="dropdown">
            <button className="dropbtn">Categories</button>
            <ul className="dropdown-content">
                {category.map(category => {
                    return <li className="category" key={category.category_name} onClick={() => {
                        handleCategorySort(category.category_name)
                    }}>{category.category_name}</li>
                })}
            </ul>
        </div>
    );
}

export default GetCategories;