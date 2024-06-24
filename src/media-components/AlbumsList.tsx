import { useFeatchAlbumsQuery } from "../store"
import { useAddAlbumMutation } from "../store/apis/albumsApi";
import AlbumsListItem from "./AlbumsListItem";
import Button from "./Button";

import ExpandablePanel from "./ExpandasblePanel";
import Skeleton from "./skeleton";

function AlbumsList({  user }: any){
    const { data, error, isFetching} = useFeatchAlbumsQuery(user)
    const [addAlbum, result] = useAddAlbumMutation()

    const heandleAddAlbum = () => {
        addAlbum(user)
    }

    let content;
    if(isFetching){
        content = <Skeleton times={3} />
    } else if(error) {
        content = <div>Error loading albums.</div>
    } else {
        content = data.map((album: any) => {
            return <AlbumsListItem album={album} />
            
        })
    }

    return <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Albums for {user.name}</h3>
            <Button onClick={heandleAddAlbum} primary={undefined} secondary={undefined} success={undefined} warning={undefined} danger={undefined} outline={undefined} rounded={undefined} loading={result.isLoading} >
                + Add Album
            </Button>
        </div>
        <div>
            {content}
        </div>
    </div>
}

export default AlbumsList