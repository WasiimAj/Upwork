import "./style.css";

const index = (props) => {

    let myLinks = props.links;

    return (
        <div class="dropdown">
            <span> {props.title} 
                {
                    props.withArrow ? 
                    <img
                        src="https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Expand_menu-512.png" 
                        alt="accordian arrow"
                    /> : ""
                }
            </span>
            
            <div class="dropdown-content">
                {myLinks.map((link) => {
                    return <a href={`#${link}`} key={link}> {link} </a>
                })}
            </div>
        </div>
    )
}

export default index