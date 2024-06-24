import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import PhotoListItem from "./PhotoListItem";
import Skeleton from "./skeleton";

function PhotoList({ album }: any){
     const {data, isFetching, error } = useFetchPhotosQuery(album)

    const [addPhoto, addPhotoResults] = useAddPhotoMutation()

    const handleAddPhto = () => {
        addPhoto(album)
    }


    let content;

    if(isFetching) {
        content = <Skeleton className="h-8 w-8" times={8}/>
    } else if(error) {
        content = <div>Error fetching photos...</div>
    } else {
        content = data.map((photo: any) => {
            return <PhotoListItem key={photo.id} photo={photo}/>
        })
    }

    return <div>
        <div className="m-2 flex flex-row item-center justify-between">
            <h3 className="texrt-lg font-bold">Photo in { album.title }</h3>
            <Button onClick={handleAddPhto} loading={addPhotoResults.isLoading} primary={undefined} secondary={undefined} success={undefined} warning={undefined} danger={undefined} outline={undefined} rounded={undefined}>
                + Add Photo
            </Button>   
        </div>
        <div className="mx-8 flex flex-row flex-warp justify-center">
            {content}
        </div>

    </div>
}


export default PhotoList;
