import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * Right sidebar showing the user's profile icon and a link to their public profile.
 * @param {{ isPublic: boolean }} props
 */
const RightColumn = (props) => {
    const { user } = useSelector((state) => state.accountReducer);
    const userProfile = useSelector((state) => state.userProfileReducer.user);

    return (
        <div className="columns__right">
            <h2 className="columns__title">User Icon</h2>
            <img
                alt="my account icon"
                src={!props.isPublic ? `/user/${user._id}/icon` : `/user/${userProfile._id}/icon`}
            />
            {!props.isPublic && (
                <button className="button__link">
                    <Link className="button__link--Link" to={`/user?id=${user._id}`}>
                        View my profile
                    </Link>
                </button>
            )}
        </div>
    );
};

export { RightColumn as default };
