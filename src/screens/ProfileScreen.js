import { useState } from "react";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import { ScreenContainer } from "./ProfileScreen.styled";

function ProfileScreen() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");

  // const handleChange = (event, setState) => {
  //   setState(event.target.value);
  // };

  const clearInputs = (event) => {
    event.target.name.value = ""; // limpando o input
    event.target.bio.value = "";
    event.target.imageUrl.value = "";
    // setName("")  => limpando o estado
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.name);

    setName(event.target.name.value);
    setBio(event.target.bio.value);
    setImage(event.target.imageUrl.value);
    clearInputs(event);
  };

  return (
    <ScreenContainer>
      <ProfileMenu name={name} bio={bio} image={image} />

      <ProfileForm
        // name={name}
        // setName={setName}
        // bio={bio}
        // setBio={setBio}
        // image={image}
        // setImage={setImage}
        // handleChange={handleChange}
        // clearInputs={clearInputs}
        submit={submit}
      />
    </ScreenContainer>
  );
}

export default ProfileScreen;