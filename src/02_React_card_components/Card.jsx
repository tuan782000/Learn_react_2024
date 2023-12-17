import ProfilePicture from '../assets/profilePicture.png'

const styleCard = {
    border: "1px solid hsl(0, 0%, 80%)",
    borderRadius: "10px",
    boxShadow: "5px 5px 5px hsla(0, 0%, 0%, 0.1)",
    padding: "20px",
    margin: "10px",
    textAlign: "center",
    maxWidth: "250px",
    display: "inline-block",
}

const styleImg = {
    width: "100%",
    height: "150px",
    maxWidth: "60%",
    borderRadius: "50%",
    marginBottom: "10px",
    objectFit: "cover",
}

const styleTitle = {
    margin: "0px",
    color: "hsl(0,0%,20%)"
}

const styleText = {
    color: "hsl(0, 0%, 30%)"
}

const Card = () => {
    return (
        <div className="card" style={styleCard}>
            <img src={ProfilePicture} style={styleImg} alt="Profile picture" />
            <h2 style={styleTitle}>Tuan Nguyen</h2>
            <p style={styleText}>I make youtube video and play video games</p>
        </div>
    )
}

export default Card