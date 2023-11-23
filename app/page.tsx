/*
  Home page for the LDAP lookup application. Contains the
  search form to lookup a user, group, or computer. Submission
  of this form will direct the user to correct page and start 
  the search.
*/

import SearchForm from "@/components/SearchForm";

export default function Home() {
  // if !isAuthenticated {
  //   // redirect to the login page
  // }
  return (
    <div className="flex flex-row justify-center">
      <div className="bg-neutral-900 rounded-md p-6 max-w-md">
        <div className="flex justify-center mb-2">
          <h1 className="text-4xl font-bold">Directory Search</h1>
        </div>
        <p className="text-xl">Use of this application is subject to the Acceptable Use Policy. Unauthorized access is prohibited.</p>
        <SearchForm />
      </div>
    </div>
  )
}
