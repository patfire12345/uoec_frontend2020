import {useFormik} from 'formik'
import React, {useState} from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data'
import './Search.css'

function Search() {

    const [search, setSearch] = useState("");

    const formik = useFormik({
        initialValues: {
        search: ""
        },

        onSubmit(values) {
            setSearch(values.search);
            console.log(search);
        }
    });
  
    return (
    // We bind "onSubmit" to "formik.handleSubmit"

    <div className='form'>
        The search is {search}
    
    <form className="baseForm" onSubmit={formik.handleSubmit} noValidate>
        <input
        type="search"
        name="search"
        id="search"
        className="search"
        value={formik.values.search} // We also bind our email value
        onChange={formik.handleChange} // And, we bind our "onChange" event.
        />
        <input
        type="submit"
        name="submit"
        id="submit"
        className="submit"
        value={formik.values.submit} // We also bind our email value
        onChange={formik.handleChange} // And, we bind our "onChange" event.
        />
    </form>

    </div>
  )
}

export default Search
