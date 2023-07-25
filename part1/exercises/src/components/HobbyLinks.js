export default function HobbyLinks () {
        let hobbyLinks = ["https://en.wikipedia.org/wiki/Hiking", "https://en.wikipedia.org/wiki/Painting"];
        return (
            <div>
                <h3>Links to My Hobbies!</h3>
                <a href = {hobbyLinks[0]}>Hiking</a> 
                <br></br>
                <a href = {hobbyLinks[1]}>Painting</a>
            </div>
        );
    }