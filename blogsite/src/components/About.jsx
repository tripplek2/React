function About ({ image, about}) {
    return (
        <aside>
            <img src={image} alt="blog logo" width= "500" height= "350" />
            <p>{about}</p>
        </aside>
    );
}

export default About;