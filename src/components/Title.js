import '../css/Title.css'

export default function Title(props) {
    //Variables
    //const heading = "Site is under going maintenace"
    //const subHeading = "Please remain patient"

    return (
        //Parent Element
        //Fragment
        <div className="title-block">
            <h1 className="title">{props.title}</h1>
                <br/>
            <h2 className="subtitle">{props.subtitle}</h2>
        </div>
    )
}