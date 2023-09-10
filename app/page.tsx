import SearchCard from "@/components/SearchCard"


export default function Home() {
  // if !isAuthenticated {
  //   // redirect to the login page
  // }
  return (
    <div className="flex flex-row justify-center">
      <div className="border-2 p-2">
        <h1 className="text-4xl font-bold underline">Directory Search</h1>
        <SearchCard />
      </div>
    </div>
  )
}
