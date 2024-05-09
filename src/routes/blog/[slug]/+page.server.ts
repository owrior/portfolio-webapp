import {posts} from '../data.js';
import {error} from '@sveltejs/kit';

export function load( {params} ) {
    const post = posts.find((post) => post.slug === params.slug);

    if (!post) {
        return error(404, 'Post not found');
    }

    return {
        post
    }
}