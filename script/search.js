import { getAllUsers } from "./userApi.js"
import { displayAllUsers } from "./uiMessages.js"

const all = await getAllUsers()


console.log(all)

const searchForm = document.querySelector('#searchForm')
const input = document.querySelector('#searchBar')
const searchResults = document.querySelector('#searchResults')
console.log(searchForm)

export const search = async () => {

    searchForm.addEventListener('submit', e => {
        e.preventDefault()



        const filteredUsers = {}
        searchResults.innerText = ''
        const searchValue = input.value.trim().toLowerCase()
        console.log(searchValue)

        for (const key in all) {
            const users = all[key]
            //console.log(users)

            if (users.name.toLowerCase().includes(searchValue)) {
                console.log('matches')
                filteredUsers[key] = users
                input.value = ''
            } else {
                console.log('no user')
            }
        }

        displayAllUsers(filteredUsers)
    })


}
search()

