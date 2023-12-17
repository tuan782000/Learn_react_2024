import Picture from '../assets/profilePicture.png'
const ProfilePicture = () => {

  const picture = Picture;

  const handleClick = (e) => {
    e.target.style.display = 'none'
  }

  return (
    <div style={{ marginTop: '10px' }}>
      <img src={picture} alt="img" onClick={(e) => handleClick(e)} width={'100px'} />
      {/* or */}
      <img src={picture} alt="img" onClick={(e) => e.target.style.display = 'none'} width={'100px'} />

    </div>
  )
}

export default ProfilePicture