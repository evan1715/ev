import { recipeOwnersAction } from '../actions/allRecipes.js';

/**
 * Redux thunk that processes an array of recipes to retrieve and cache their
 * owner usernames. Avoids redundant fetches by tracking already-fetched owners.
 *
 * @param {Array<{ owner: string }>} data - Array of recipe objects with owner ids.
 */
const processUsernames = (data) => async (dispatch) => {
    const list = [];
    const owners = [];

    for (const item of data) {
        /*  If we've already fetched a recipe's owner's username, let's not waste resources by checking our list
        we've already received from fetch. We'll filter an array of objects containing the user id and their
        username. Then we'll only call fetch if there isn't one. If there is, we'll just what we already
        have without calling fetch. */
        try {
            const owner_id = item.owner;
            const already = owners.find((id) => id.owner_id === owner_id);

            if (!already) {
                const fetched = await (await fetch(`/user/username/${owner_id}`)).json();
                const user = fetched.username;

                list.push(user);
                owners.push({ owner_id, user });
            } else {
                list.push(already.user);
            }
        } catch (_error) {
            list.push('Account Not Found');
        }
    }
    return dispatch(recipeOwnersAction(list));
};

export { processUsernames as default };
