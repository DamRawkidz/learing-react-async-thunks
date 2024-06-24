import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandasblePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotoList from "./PhotoList";

function AlbumsListItem({ album }: any){
    const [removeAlbum, result] = useRemoveAlbumMutation()

    const handleRemoveAlbum = () => {
        removeAlbum(album)
    }
    const header =(
        <>
            <Button onClick={handleRemoveAlbum} className="mr-2" primary={undefined} secondary={undefined} success={undefined} warning={undefined} danger={undefined} outline={undefined} rounded={undefined} loading={result.isLoading} >
                <GoTrashcan />
            </Button >
            {album.title}
        </>
    )

    return (
        <ExpandablePanel key={album.id} header={header}>
            <PhotoList  album={album} />
        </ExpandablePanel>
    )
}

export default AlbumsListItem;