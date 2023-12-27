import profileImage from "Images/home/Profile.jpg";

export const About = () => {
  const title = 'About';
  const description = 'こんにちは';
  return (
    <div className="container text-center">
      <h1>{title}</h1>
      <img src={profileImage} className="profileImage" alt="profileImage" />
    </div>
  );
};
