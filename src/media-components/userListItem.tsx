import useThunk from "../hooks/use-hook";
import { removerUser } from "../store";
import Button from "./Button";
import { GoTrashcan } from 'react-icons/go'
import ExpandablePanel from "./ExpandasblePanel";
import AlbumsList from "./AlbumsList";

 function UserListItem({ user }: any){
    const [doremoveUser, isDeletingUser, error] = useThunk(removerUser)

    const handleClick = () => {
        doremoveUser(user)
    }
    const header = <>
            <Button className="mr-3" onClick={handleClick} primary rounded loading={isDeletingUser}  secondary={undefined} success={undefined} warning={undefined} danger={undefined} outline={undefined}>  
                            <GoTrashcan />
                        </Button>
                        {error && <div>Error deleteing user.</div>  }
                        {user?.name}
    </>    

    return (
       <ExpandablePanel header={header}>
        <AlbumsList user={user}/>
       </ExpandablePanel>
    )
}

export default UserListItem;