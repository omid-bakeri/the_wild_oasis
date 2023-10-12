import { useUser } from "./useUser";

function ShowInformation() {
  const { user } = useUser();

  return (
    <div
      className="px-4 py-1 rounded-lg 
    focus:border-purple-500 border-2 
    focus:outline-none"
    >
      <div className="px-4 py-2">{user.email}</div>
    </div>
  );
}

export default ShowInformation;
