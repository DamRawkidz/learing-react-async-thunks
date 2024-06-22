import { useFeatchAlbumsQuery } from "../store"
import { useAddAlbumMutation } from "../store/apis/albumsApi";
import Button from "./Button";
import ExpandablePanel from "./ExpandasblePanel";
import Skeleton from "./skeleton";

function AlbumsList({  user }: any){
    const { data, error, isLoading} = useFeatchAlbumsQuery(user)
    const [addAlbum, result] = useAddAlbumMutation()

    const heandleAddAlbum = () => {
        addAlbum(user)
    }

    let content;
    if(isLoading){
        content = <Skeleton times={3} />
    } else if(error) {
        content = <div>Error loading albums.</div>
    } else {
        content = data.map((album: any) => {
            const header = <div>{album.title}</div>
            return <ExpandablePanel key={album.id} header={header}>
                List of photo in the album
            </ExpandablePanel>
        })
    }

    return <div>
        <div>
            Albums for {user.name}
            <Button onClick={heandleAddAlbum} primary={undefined} secondary={undefined} success={undefined} warning={undefined} danger={undefined} outline={undefined} rounded={undefined} loading={undefined} >
                + Add Album
            </Button>
        </div>
        <div>
            {content}
        </div>
    </div>
}

export default AlbumsList