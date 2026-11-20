
const API_BASE_URL = (
    import.meta.env.VITE_BACKEND_URL ||
    'http://localhost:3000/api/v1'
).replace(/\/$/, '');

export const getPosts = async (queryParams = {}) => {
    const res = await fetch(
        `${API_BASE_URL}/posts?${new URLSearchParams(queryParams)}`
    );

    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }

    return await res.json();
};

export const createPost = async (post) => {
    const res = await fetch(`${API_BASE_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });

    if (!res.ok) {
        throw new Error('Failed to create post');
    }

    return await res.json();
};
