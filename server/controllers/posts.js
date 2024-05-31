// handler functions for the post routes

const getPosts = async (req, res) => {
    res.send('This Works');
};

const createPost = (req, res) => {
    res.send('Post Creation');
};

export {
    getPosts,
    createPost
};



