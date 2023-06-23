import { Button, Form, FormWrapper, Input, InputWrapper, Label } from "./ProfileForm.styled";

const ProfileForm = (props) => {
  const {
    //name,
    //setName,
    //bio,
    //setBio,
    //image,
    //setImage,
    //handleChange,
    //clearInputs,
    submit,
  }=props;
  
  return (
    <FormWrapper>
      <h1>Edit your profile</h1>

      <Form onSubmit={submit}>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            // value={name}
            // onChange={(event) => handleChange(event, setName)}
            
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="bio">Bio</Label>
          <Input
            type="text"
            name="bio"
            id="bio"
            autoComplete="off"
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            type="text"
            name="imageUrl"
            id="imageUrl"
            autoComplete="off"
            // value={bio}
            // onChange={(event) => handleChange(event, setBio)}
            />
            </InputWrapper>
        <Button type={submit}>Save Changes</Button>
      </Form>
    </FormWrapper>
  );
};

export default ProfileForm;
