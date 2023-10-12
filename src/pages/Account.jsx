import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
// import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
function Account() {
  return (
    <>
      <Heading as="h1">Show your account</Heading>

      <Row>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h2" className="mt-10">Update password</Heading>
        <UpdatePasswordForm/>
      </Row>
    </>
  );
}

export default Account;
