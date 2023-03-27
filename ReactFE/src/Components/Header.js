import { SearchField } from "./SearchField"

export function Header({setQuery}) {
    return (
    
    <div className="headerImage">
        <p className="headerTitle"><h2>Welcome.</h2>
        Millions of movies, TV shows and people to discover. Explore now.</p><br/>
        <SearchField setQuery={setQuery}/>
    </div>

    )
}