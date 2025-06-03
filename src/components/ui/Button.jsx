import { onLogout } from "../../api/auth";
import { useStore } from "../../ContextAPi/store/ContextProvide";

export const Button = () => {
  const { setIsAuth } = useStore();

  const onClick = async (e) => {
    try {
      await onLogout();

      setIsAuth(false);
      localStorage.setItem("isAuth", "false");
      navigate("/");
    } catch (error) {
      console.log(error.response.data.Error);
    }
  };
  return (
    <div className="card-actions">
      <button
        onClick={onClick}
        className="btn bg-[#F2E741] w-full hover:bg-[#cef241] text-black btn-wide border-0 "
      >
        Logout
      </button>
    </div>
  );
};
