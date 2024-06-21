import { useFeatchAlbumsQuery } from "../store"

function AlbumsList({  user }: any){
    const { data, error, isLoading} = useFeatchAlbumsQuery(user)

    console.log(data, error ,isLoading)
    return <div>
        Albums for {user.name}
    </div>
}

export default AlbumsList