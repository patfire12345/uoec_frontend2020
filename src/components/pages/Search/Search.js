import {useFormik} from 'formik'
import React, {useState} from 'react'
// import HeroSection from '../../HeroSection'
// import Pricing from '../../Pricing'
// import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data'
import './Search.css'

function Search() {

    const [search, setSearch] = useState("");
    const [website, setWebsite] = useState([]);

    const formik = useFormik({
        initialValues: {
        search: ""
        },

        async onSubmit(values) {
            setSearch(values.search);
            setWebsite([]);
            
            
            const response = await fetch("" + encodeURIComponent(values.search), 
                {
                    method: "GET", 
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                }
            );

            if(!response.ok) {
                throw new Error(response.messages)
            }
            
            const user = await response.json();

            user.items.map((item) => {
                setWebsite([{title: item.title, url: item.link, description: item.snippet},...website]);
            })

            if (website == []) {
                setSearch("No result");
            }

            // setWebsite(user.items.title)
        }
    });
  
    return (
    // We bind "onSubmit" to "formik.handleSubmit"

    <div>

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

        {website.map((item) => (
            <div className='results'>
                <h1>{item.title} </h1>
                <a href={item.url}>{item.url} </a>
                <div>{item.description} </div>
            </div>
        ))}

    </div>
  )
}

export default Search
