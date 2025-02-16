import { User } from "lucide-react";
import { useStore } from "../ContextAPi/store/ContextProvide"

export default function PlayersInRoom(){
  const { users } = useStore();
  console.log(users)
  return (
    <div>
       <h2 className="text-2xl font-bold text-white p-4">Players in Room</h2>
       <div className="space-y-4">
          {users.map((user, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 w-64 rounded-lg bg-yellow-400"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full text-black border-4 flex items-center justify-center">
                  <User size={20} />
                </div>
                <span className="font-medium text-black">{user}</span>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}