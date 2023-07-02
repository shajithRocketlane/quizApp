import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { QuizInfoProps, fetchSearchResults, selectSearchResults } from "../reducers/searchSlice"
import QuizCard from "../components/QuizCard"
import { BrowseStyle } from "../styles/BrowseStyle"
import { ThunkDispatch } from "@reduxjs/toolkit"

function BrowsePage() {
    const [search,setSearch] = useState<string>('')
    const dispatch = useDispatch<ThunkDispatch<any,any,any>>()
    const searchResults = useSelector(selectSearchResults)
    useEffect(()=>{
        dispatch(fetchSearchResults(''))
    },[])
    return (
        <BrowseStyle>
            <div>
                <input type="text" placeholder="Ex:Science Quiz" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                <button type="button" onClick={()=>dispatch(fetchSearchResults(search))}>Search</button>
            </div>
            <div className="results">
                {
                    searchResults.length>0
                    ?
                    searchResults.map((result:QuizInfoProps,index:number)=>(
                        <QuizCard key={index} quiz_id={result.quiz_id} quiz_name={result.quiz_name} difficulty={result.difficulty}/>
                    ))
                    :
                    <p>No Search Results</p>
                }
            </div>
        </BrowseStyle>
    )
}

export default BrowsePage