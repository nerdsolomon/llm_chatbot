
const Friends = ({friends, addFriend}) => {
  return (
    <div className="bg-white absolute mt-12 right-3 w-80 rounded-lg shadow-2xl">
            <div className="p-4 font-bold border-b border-gray-300">
              Service Providers
            </div>
            <div className="grid grid-cols-1 gap-2 p-4">
              {friends.map((friend, id) => (
                <label key={id} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={friend.following}
                    onChange={() => {
                      const updated = [...friends];
                      updated[id].following = !updated[id].following;
                      addFriend(updated);
                    }}
                  />
                  {sp.firstName} {sp.lastName}
                </label>
              ))}
            </div>
          </div>
  )
}

export default Friends