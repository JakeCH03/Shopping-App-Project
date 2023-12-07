import { useEffect } from "react";
import getCategories from "../../../Utils/getCategories";


const GetCategories = ({categories, setCategories}) => {
    useEffect(() => {
        getCategories().then(res => {
            setCategories(res.categories)
        })
    })

    return;
}
 
export default GetCategories;