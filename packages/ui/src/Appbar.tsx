
import { Button } from "./button";

interface AppbarProps {
  user?: {
    name?: string | null;
  } | null;
  onSignin: () => void;
  onSignout: () => void;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white border-b border-gray-100">
      <div className="text-2xl font-semibold text-gray-800 tracking-tight">
        Creda
      </div>
      <Button
        onClick={user ? onSignout : onSignin}
        
      >
        {user ? "Logout" : "Login"}
      </Button>
    </div>
  );
};
