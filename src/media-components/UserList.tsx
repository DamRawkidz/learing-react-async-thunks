import {  useEffect } from "react"
import { useSelector } from "react-redux"
import { addUser, fetchUsers } from "../store"

import Skeleton from "./skeleton"
import Button from "./Button"
import useThunk from "../hooks/use-hook"
import UserListItem from "./userListItem"





export function UserList(){
    const [doFetchUsers, isLoadingUsers, loadingUserError] = useThunk(fetchUsers)
    
    const [doCreatUser, isCreatingUser, creatingUserError] = useThunk(addUser)
    
    const { isloding, data, error} =  useSelector((state:any) => {
        return state.users
    })



    useEffect(() => {
        doFetchUsers()
    },[doFetchUsers])

    let content;
    if(isLoadingUsers){
        content = <Skeleton times={6} className="h-10 w-full" />;
    } else if (loadingUserError){
        content = <div>Error fetching data...</div>
    } else {
        content = data.map((user: any) => {
            return <UserListItem key={user.id} user={user} />
            
        })
    }

    // if(loadingUserError){
    //     return <div>Error fetching data...</div>
    // }

    

    // const renderUsers = data.map((user: any) => {
    //     return <div key={user?.id} className="mb-2 boder rounded">
    //         <div className="flex p-2 justify-between item-center cursor-pointer">
    //             {user?.name}
    //         </div>
    //     </div>
    // })

    const handleUserAdd = () => {
        doCreatUser()
    }

    return <div>
            <div className="flex flex-row justify-between item-center m-3">
                <h1 className="m-2 text-xl">Users</h1>
                {
                    isCreatingUser 
                    ?  'Creating User' 
                    : <Button loading={isCreatingUser}  primary rounded onClick={handleUserAdd}  secondary={undefined} success={undefined} warning={undefined} danger={undefined} outline={undefined} >
                        + Add User
                        </Button>
                }
                {creatingUserError && 'error creating user...'}  
            </div>
            {content}
        </div>
}

export default UserList