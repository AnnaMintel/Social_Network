
import { UserPageType } from "../../redux/types/types";
import { Pagination } from "../common/Pagination/Pagination";
import { User } from "./User";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    users: Array<UserPageType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    followingInProgress: Array<number>
}

export let Users: React.FC<UsersType> = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {

    return <div>
        <Pagination currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount} pageSize={pageSize} />
        <div>
            {
                users.map((u: UserPageType) =>
                    <User user={u}
                        key={u.id}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}
                    />
                )
            }
        </div>
    </div >
}

