"use strict";

const LikeButton = () => {
    const [likeState, setLike] = React.useState({
        liked: false,
    });

    if (likeState.liked) {
        return "You liked this!";
    } else {
        return <button onClick={() => setLike({ liked: true })}>Like</button>;
    }
};

export default LikeButton;
